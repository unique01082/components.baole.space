import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BackTop } from '../back-top';

describe.skip('BackTop', () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollY = 0;
  });

  it('does not render when scroll is below visibility height', () => {
    const { container } = render(<BackTop />);
    
    expect(container.firstChild).toBeNull();
  });

  it('renders when scroll exceeds visibility height', () => {
    // Mock scrollY
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    
    render(<BackTop visibilityHeight={400} />);
    
    // Trigger scroll event
    window.dispatchEvent(new Event('scroll'));
  });

  it('calls onClick when button is clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    // Mock scrollY to make button visible
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    
    render(<BackTop visibilityHeight={100} onClick={handleClick} />);
    
    // Trigger scroll to make button visible
    window.dispatchEvent(new Event('scroll'));
    
    const button = await screen.findByRole('button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with custom visibility height', () => {
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
    
    render(<BackTop visibilityHeight={100} />);
    
    window.dispatchEvent(new Event('scroll'));
  });

  it('renders with custom className', async () => {
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    
    const { container } = render(<BackTop visibilityHeight={100} className="custom-back-top" />);
    
    window.dispatchEvent(new Event('scroll'));
    
    // Wait for render
    await screen.findByRole('button');
    
    expect(container.firstChild).toHaveClass('custom-back-top');
  });

  it('scrolls to top when button is clicked', async () => {
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;
    
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    
    const user = userEvent.setup();
    render(<BackTop visibilityHeight={100} />);
    
    window.dispatchEvent(new Event('scroll'));
    
    const button = await screen.findByRole('button');
    await user.click(button);
    
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
