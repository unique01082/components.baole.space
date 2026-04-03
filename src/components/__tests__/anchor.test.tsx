import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Anchor, type AnchorLink } from '../anchor';

describe('Anchor', () => {
  const mockLinks: AnchorLink[] = [
    { key: 'link1', href: '#section1', title: 'Section 1' },
    { key: 'link2', href: '#section2', title: 'Section 2' },
    {
      key: 'link3',
      href: '#section3',
      title: 'Section 3',
      children: [
        { key: 'link3-1', href: '#section3-1', title: 'Section 3.1' },
        { key: 'link3-2', href: '#section3-2', title: 'Section 3.2' },
      ],
    },
  ];

  beforeEach(() => {
    // Mock scrollTo
    window.scrollTo = vi.fn();
    window.scrollY = 0;
  });

  it('renders anchor links', () => {
    render(<Anchor links={mockLinks} />);
    
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Section 3')).toBeInTheDocument();
  });

  it('renders nested links', () => {
    render(<Anchor links={mockLinks} />);
    
    expect(screen.getByText('Section 3.1')).toBeInTheDocument();
    expect(screen.getByText('Section 3.2')).toBeInTheDocument();
  });

  it('calls onChange when link is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    // Mock querySelector
    document.querySelector = vi.fn().mockReturnValue({
      getBoundingClientRect: () => ({ top: 100 }),
    });
    
    render(<Anchor links={mockLinks} onChange={handleChange} />);
    
    await user.click(screen.getByText('Section 1'));
    
    expect(handleChange).toHaveBeenCalledWith('#section1');
  });

  it('renders with active link', () => {
    render(<Anchor links={mockLinks} activeLink="#section2" />);
    
    const activeLink = screen.getByText('Section 2').closest('a');
    expect(activeLink).toHaveClass('text-primary');
  });

  it('renders with custom offsetTop', () => {
    render(<Anchor links={mockLinks} offsetTop={50} />);
    
    expect(screen.getByText('Section 1')).toBeInTheDocument();
  });

  it('renders with custom targetOffset', () => {
    render(<Anchor links={mockLinks} targetOffset={100} />);
    
    expect(screen.getByText('Section 1')).toBeInTheDocument();
  });

  it('scrolls to target when link is clicked', async () => {
    const user = userEvent.setup();
    
    // Mock querySelector
    document.querySelector = vi.fn().mockReturnValue({
      getBoundingClientRect: () => ({ top: 200 }),
    });
    
    render(<Anchor links={mockLinks} />);
    
    await user.click(screen.getByText('Section 1'));
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Anchor links={mockLinks} className="custom-anchor" />,
    );
    
    expect(container.querySelector('.custom-anchor')).toBeInTheDocument();
  });

  it('updates active link on scroll', () => {
    const handleChange = vi.fn();
    
    // Mock querySelector
    document.querySelector = vi.fn().mockReturnValue({
      getBoundingClientRect: () => ({ top: 0 }),
    });
    
    render(<Anchor links={mockLinks} onChange={handleChange} />);
    
    // Trigger scroll event
    window.dispatchEvent(new Event('scroll'));
  });
});
