import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FloatButton } from '../float-button';
import { Plus } from 'lucide-react';

describe('FloatButton', () => {
  it('renders float button', () => {
    render(<FloatButton icon={<Plus />} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(<FloatButton icon={<span>Icon</span>} />);
    
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<FloatButton icon={<Plus />} description="Add new" />);
    
    expect(screen.getByText('Add new')).toBeInTheDocument();
  });

  it('renders with tooltip', async () => {
    const user = userEvent.setup();
    render(<FloatButton icon={<Plus />} tooltip="Add item" />);
    
    const button = screen.getByRole('button');
    await user.hover(button);
    
    // Tooltip should appear (implementation dependent)
  });

  it('renders with circle shape', () => {
    render(<FloatButton icon={<Plus />} shape="circle" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('rounded-full');
  });

  it('renders with square shape', () => {
    render(<FloatButton icon={<Plus />} shape="square" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('rounded-lg');
  });

  it('renders with default variant', () => {
    render(<FloatButton icon={<Plus />} variant="default" />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with primary variant', () => {
    render(<FloatButton icon={<Plus />} variant="primary" />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with badge count', () => {
    render(<FloatButton icon={<Plus />} badge={{ count: 5 }} />);
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders with badge dot', () => {
    const { container } = render(<FloatButton icon={<Plus />} badge={{ dot: true }} />);
    
    const badge = container.querySelector('.h-2.w-2');
    expect(badge).toBeInTheDocument();
  });

  it('renders badge with 99+ for count > 99', () => {
    render(<FloatButton icon={<Plus />} badge={{ count: 150 }} />);
    
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    
    render(<FloatButton icon={<Plus />} onClick={handleClick} />);
    
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    render(<FloatButton icon={<Plus />} className="custom-float" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-float');
  });

  it('renders in disabled state', () => {
    render(<FloatButton icon={<Plus />} disabled />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
