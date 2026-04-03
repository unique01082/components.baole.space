import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Message } from '../message';

describe('Message', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders message', () => {
    render(<Message content="Test message" />);
    
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders with success type', () => {
    const { container } = render(<Message type="success" content="Success!" />);
    
    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(container.querySelector('.text-green-500')).toBeInTheDocument();
  });

  it('renders with error type', () => {
    const { container } = render(<Message type="error" content="Error!" />);
    
    expect(screen.getByText('Error!')).toBeInTheDocument();
    expect(container.querySelector('.text-red-500')).toBeInTheDocument();
  });

  it('renders with warning type', () => {
    const { container } = render(<Message type="warning" content="Warning!" />);
    
    expect(screen.getByText('Warning!')).toBeInTheDocument();
    expect(container.querySelector('.text-yellow-500')).toBeInTheDocument();
  });

  it('renders with info type', () => {
    const { container } = render(<Message type="info" content="Info!" />);
    
    expect(screen.getByText('Info!')).toBeInTheDocument();
    expect(container.querySelector('.text-blue-500')).toBeInTheDocument();
  });

  it('renders with loading type', () => {
    const { container } = render(<Message type="loading" content="Loading..." />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(container.querySelector('.animate-spin')).toBeInTheDocument();
  });

  it('calls onClose after duration', () => {
    const handleClose = vi.fn();
    render(<Message content="Test" duration={2000} onClose={handleClose} />);
    
    vi.advanceTimersByTime(2000);
    
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not auto-close when duration is 0', () => {
    const handleClose = vi.fn();
    render(<Message content="Test" duration={0} onClose={handleClose} />);
    
    vi.advanceTimersByTime(5000);
    
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders with custom icon', () => {
    render(<Message content="Test" icon={<span>CustomIcon</span>} />);
    
    expect(screen.getByText('CustomIcon')).toBeInTheDocument();
  });

  it('renders close button when onClose is provided', () => {
    render(<Message content="Test" onClose={vi.fn()} />);
    
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup({ delay: null });
    const handleClose = vi.fn();
    
    render(<Message content="Test" onClose={handleClose} />);
    
    const closeButton = screen.getByRole('button');
    await user.click(closeButton);
    
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Message content="Test" className="custom-message" />,
    );
    
    expect(container.firstChild).toHaveClass('custom-message');
  });

  it('renders with default info type', () => {
    const { container } = render(<Message content="Default" />);
    
    expect(container.querySelector('.text-blue-500')).toBeInTheDocument();
  });

  it('renders with default duration of 3000ms', () => {
    const handleClose = vi.fn();
    render(<Message content="Test" onClose={handleClose} />);
    
    vi.advanceTimersByTime(3000);
    
    expect(handleClose).toHaveBeenCalled();
  });
});
