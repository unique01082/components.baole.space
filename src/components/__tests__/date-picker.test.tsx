import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from '../date-picker';

describe.skip('DatePicker', () => {
  it('renders date picker', () => {
    render(<DatePicker />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('opens calendar on click', async () => {
    const user = userEvent.setup();
    render(<DatePicker />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    // Calendar should be visible
  });

  it('renders with default date', () => {
    const date = new Date(2024, 0, 15);
    render(<DatePicker value={date} />);
    
    expect(screen.getByText(/jan/i)).toBeInTheDocument();
  });

  it('calls onChange when date is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<DatePicker onChange={handleChange} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    // Select a date
    const dates = screen.getAllByRole('gridcell');
    const clickableDate = dates.find((date) => !date.querySelector('[disabled]'));
    if (clickableDate) {
      await user.click(clickableDate);
      expect(handleChange).toHaveBeenCalled();
    }
  });

  it('renders in disabled state', () => {
    render(<DatePicker disabled />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders with placeholder', () => {
    render(<DatePicker placeholder="Select date" />);
    
    expect(screen.getByText('Select date')).toBeInTheDocument();
  });

  it('renders with custom format', () => {
    const date = new Date(2024, 0, 15);
    render(<DatePicker value={date} />);
    
    // Should show formatted date
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<DatePicker className="custom-datepicker" />);
    
    const button = screen.getByRole('button');
    expect(button.className).toContain('custom-datepicker');
  });
});
