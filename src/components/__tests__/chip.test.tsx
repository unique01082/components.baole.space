import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from '../chip';

describe('Chip', () => {
  it('renders chip with text', () => {
    render(<Chip>Test Chip</Chip>);
    
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const { rerender } = render(<Chip variant="default">Default</Chip>);
    expect(screen.getByText('Default')).toBeInTheDocument();
    
    rerender(<Chip variant="solid">Solid</Chip>);
    expect(screen.getByText('Solid')).toBeInTheDocument();
    
    rerender(<Chip variant="gradient">Gradient</Chip>);
    expect(screen.getByText('Gradient')).toBeInTheDocument();
  });

  it('renders clickable chip', () => {
    render(<Chip clickable>Clickable</Chip>);
    
    expect(screen.getByText('Clickable')).toHaveClass('cursor-pointer');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Chip clickable onClick={handleClick}>
        Click Me
      </Chip>,
    );
    
    await user.click(screen.getByText('Click Me'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with left icon', () => {
    const leftIcon = <span data-testid="left-icon">←</span>;
    render(<Chip leftIcon={leftIcon}>With Left Icon</Chip>);
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByText('With Left Icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    const rightIcon = <span data-testid="right-icon">→</span>;
    render(<Chip rightIcon={rightIcon}>With Right Icon</Chip>);
    
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByText('With Right Icon')).toBeInTheDocument();
  });

  it('renders removable chip', () => {
    render(<Chip onRemove={() => {}}>Removable</Chip>);
    
    expect(screen.getByLabelText(/remove/i)).toBeInTheDocument();
  });

  it('calls onRemove when remove button is clicked', async () => {
    const handleRemove = vi.fn();
    const user = userEvent.setup();
    
    render(<Chip onRemove={handleRemove}>Remove Me</Chip>);
    
    await user.click(screen.getByLabelText(/remove/i));
    
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });

  it('renders with both icons and remove button', () => {
    const leftIcon = <span data-testid="left-icon">←</span>;
    const rightIcon = <span data-testid="right-icon">→</span>;
    
    render(
      <Chip 
        leftIcon={leftIcon} 
        rightIcon={rightIcon} 
        onRemove={() => {}}
      >
        Complete Chip
      </Chip>,
    );
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByLabelText(/remove/i)).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Chip className="custom-class">Custom Chip</Chip>);
    
    expect(screen.getByText('Custom Chip')).toHaveClass('custom-class');
  });
});
