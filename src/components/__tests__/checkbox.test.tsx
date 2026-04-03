import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../checkbox';

describe('Checkbox', () => {
  it('renders checkbox', () => {
    render(<Checkbox aria-label="checkbox" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('checks and unchecks checkbox', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Checkbox onCheckedChange={handleChange} aria-label="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
    
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('renders with default checked state', () => {
    render(<Checkbox defaultChecked aria-label="checkbox" />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders with controlled checked state', () => {
    const { rerender } = render(
      <Checkbox checked={false} onCheckedChange={() => {}} aria-label="checkbox" />
    );
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    
    rerender(<Checkbox checked={true} onCheckedChange={() => {}} aria-label="checkbox" />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('disables checkbox when disabled prop is true', () => {
    render(<Checkbox disabled aria-label="checkbox" />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Checkbox disabled onCheckedChange={handleChange} aria-label="checkbox" />);
    
    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('supports indeterminate state', () => {
    render(<Checkbox checked="indeterminate" aria-label="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-checkbox" aria-label="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('custom-checkbox');
  });

  it('handles keyboard interaction', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Checkbox onCheckedChange={handleChange} aria-label="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    
    checkbox.focus();
    await user.keyboard(' ');
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
