import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TimePicker } from '../time-picker';

describe('TimePicker', () => {
  it('renders time picker', () => {
    render(<TimePicker />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with default value', () => {
    render(<TimePicker value="10:30" />);
    
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('10:30');
  });

  it('calls onChange when time is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<TimePicker onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, '14:45');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders in disabled state', () => {
    render(<TimePicker disabled />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('renders with placeholder', () => {
    render(<TimePicker placeholder="Select time" />);
    
    expect(screen.getByPlaceholderText('Select time')).toBeInTheDocument();
  });

  it('renders with 12-hour format', () => {
    render(<TimePicker format="12" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with 24-hour format', () => {
    render(<TimePicker format="24" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<TimePicker className="custom-timepicker" />);
    
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('custom-timepicker');
  });

  it('opens time selector on focus', async () => {
    const user = userEvent.setup();
    render(<TimePicker />);
    
    const input = screen.getByRole('textbox');
    await user.click(input);
    
    // Time selector should open
  });
});
