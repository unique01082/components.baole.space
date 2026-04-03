import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../switch';

describe('Switch', () => {
  it('renders switch', () => {
    render(<Switch aria-label="switch" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('toggles switch on click', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Switch onCheckedChange={handleChange} aria-label="switch" />);
    const switchEl = screen.getByRole('switch');
    
    await user.click(switchEl);
    expect(handleChange).toHaveBeenCalledWith(true);
    
    await user.click(switchEl);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('renders with default checked state', () => {
    render(<Switch defaultChecked aria-label="switch" />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('renders with controlled checked state', () => {
    const { rerender } = render(
      <Switch checked={false} onCheckedChange={() => {}} aria-label="switch" />
    );
    expect(screen.getByRole('switch')).not.toBeChecked();
    
    rerender(<Switch checked={true} onCheckedChange={() => {}} aria-label="switch" />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('disables switch when disabled prop is true', () => {
    render(<Switch disabled aria-label="switch" />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Switch disabled onCheckedChange={handleChange} aria-label="switch" />);
    
    await user.click(screen.getByRole('switch'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Switch className="custom-switch" aria-label="switch" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveClass('custom-switch');
  });

  it('handles keyboard interaction', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Switch onCheckedChange={handleChange} aria-label="switch" />);
    const switchEl = screen.getByRole('switch');
    
    switchEl.focus();
    await user.keyboard(' ');
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
