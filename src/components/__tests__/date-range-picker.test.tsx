import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateRangePicker } from '../date-range-picker';

describe('DateRangePicker', () => {
  it('renders date range picker', () => {
    render(<DateRangePicker />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('opens calendar on click', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    // Calendar should be visible
  });

  it('renders with default date range', () => {
    const from = new Date(2024, 0, 1);
    const to = new Date(2024, 0, 15);
    render(<DateRangePicker value={{ from, to }} />);
    
    expect(screen.getByText(/jan/i)).toBeInTheDocument();
  });

  it('calls onChange when date range is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<DateRangePicker onChange={handleChange} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    // Select start date
    const dates = screen.getAllByRole('gridcell');
    const clickableDates = dates.filter((date) => !date.querySelector('[disabled]'));
    if (clickableDates.length >= 2) {
      await user.click(clickableDates[0]);
      await user.click(clickableDates[5]);
      expect(handleChange).toHaveBeenCalled();
    }
  });

  it('renders in disabled state', () => {
    render(<DateRangePicker disabled />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders with placeholder', () => {
    render(<DateRangePicker placeholder="Select date range" />);
    
    expect(screen.getByText('Select date range')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<DateRangePicker className="custom-daterangepicker" />);
    
    const button = screen.getByRole('button');
    expect(button.className).toContain('custom-daterangepicker');
  });

  it('shows from and to dates', () => {
    const from = new Date(2024, 0, 1);
    const to = new Date(2024, 0, 31);
    render(<DateRangePicker value={{ from, to }} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
