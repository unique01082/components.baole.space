import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../input';

describe('Input', () => {
  it('renders input field', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles text input', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'test');
    expect(input).toHaveValue('test');
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with default value', () => {
    render(<Input defaultValue="default text" />);
    expect(screen.getByDisplayValue('default text')).toBeInTheDocument();
  });

  it('renders with controlled value', () => {
    const { rerender } = render(<Input value="controlled" onChange={() => {}} />);
    expect(screen.getByDisplayValue('controlled')).toBeInTheDocument();
    
    rerender(<Input value="updated" onChange={() => {}} />);
    expect(screen.getByDisplayValue('updated')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders different input types', () => {
    const types = ['text', 'email', 'password', 'number'] as const;
    
    types.forEach((type) => {
      const { container } = render(<Input type={type} />);
      const input = container.querySelector(`input[type="${type}"]`);
      expect(input).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const { container } = render(<Input className="custom-input" />);
    expect(container.querySelector('.custom-input')).toBeInTheDocument();
  });

  it('renders read-only input', () => {
    render(<Input readOnly value="read-only text" />);
    const input = screen.getByDisplayValue('read-only text');
    expect(input).toHaveAttribute('readOnly');
  });

  it('renders required input', () => {
    render(<Input required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('handles focus and blur events', async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    
    render(<Input onFocus={handleFocus} onBlur={handleBlur} />);
    const input = screen.getByRole('textbox');
    
    await user.click(input);
    expect(handleFocus).toHaveBeenCalled();
    
    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });
});
