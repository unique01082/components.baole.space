import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../textarea';

describe('Textarea', () => {
  it('renders textarea', () => {
    render(<Textarea placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles text input', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Textarea onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    
    await user.type(textarea, 'test content');
    expect(textarea).toHaveValue('test content');
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with default value', () => {
    render(<Textarea defaultValue="default content" />);
    expect(screen.getByDisplayValue('default content')).toBeInTheDocument();
  });

  it('renders with controlled value', () => {
    const { rerender } = render(<Textarea value="controlled" onChange={() => {}} />);
    expect(screen.getByDisplayValue('controlled')).toBeInTheDocument();
    
    rerender(<Textarea value="updated" onChange={() => {}} />);
    expect(screen.getByDisplayValue('updated')).toBeInTheDocument();
  });

  it('disables textarea when disabled prop is true', () => {
    render(<Textarea disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders read-only textarea', () => {
    render(<Textarea readOnly value="read-only text" />);
    const textarea = screen.getByDisplayValue('read-only text');
    expect(textarea).toHaveAttribute('readOnly');
  });

  it('renders required textarea', () => {
    render(<Textarea required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('applies custom className', () => {
    const { container } = render(<Textarea className="custom-textarea" />);
    expect(container.querySelector('.custom-textarea')).toBeInTheDocument();
  });

  it('respects rows attribute', () => {
    render(<Textarea rows={10} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '10');
  });

  it('handles focus and blur events', async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    
    render(<Textarea onFocus={handleFocus} onBlur={handleBlur} />);
    const textarea = screen.getByRole('textbox');
    
    await user.click(textarea);
    expect(handleFocus).toHaveBeenCalled();
    
    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });
});
