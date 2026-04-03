import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Calendar } from '../calendar';

describe('Calendar', () => {
  it('renders calendar', () => {
    const { container } = render(<Calendar />);
    
    const calendar = container.querySelector('[data-react-day-picker]');
    expect(calendar).toBeInTheDocument();
  });

  it('renders with default mode', () => {
    render(<Calendar mode="single" />);
    
    // Should render a calendar with dates
    const dates = screen.getAllByRole('gridcell');
    expect(dates.length).toBeGreaterThan(0);
  });

  it('renders with selected date', () => {
    const selected = new Date(2024, 0, 15);
    render(<Calendar mode="single" selected={selected} />);
    
    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('calls onSelect when date is clicked', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    
    render(<Calendar mode="single" onSelect={handleSelect} />);
    
    const dates = screen.getAllByRole('gridcell');
    const clickableDate = dates.find((date) => !date.querySelector('[disabled]'));
    
    if (clickableDate) {
      await user.click(clickableDate);
      expect(handleSelect).toHaveBeenCalled();
    }
  });

  it('renders with showOutsideDays enabled', () => {
    render(<Calendar showOutsideDays />);
    
    const dates = screen.getAllByRole('gridcell');
    expect(dates.length).toBeGreaterThan(0);
  });

  it('renders with showOutsideDays disabled', () => {
    render(<Calendar showOutsideDays={false} />);
    
    const dates = screen.getAllByRole('gridcell');
    expect(dates.length).toBeGreaterThan(0);
  });

  it('renders navigation buttons', () => {
    const { container } = render(<Calendar />);
    
    const navButtons = container.querySelectorAll('button[class*="nav_button"]');
    expect(navButtons.length).toBeGreaterThan(0);
  });

  it('renders with custom className', () => {
    const { container } = render(<Calendar className="custom-calendar" />);
    
    const calendar = container.querySelector('.custom-calendar');
    expect(calendar).toBeInTheDocument();
  });

  it('renders month view', () => {
    render(<Calendar />);
    
    // Should show days of the week
    expect(screen.getByText('Su')).toBeInTheDocument();
    expect(screen.getByText('Mo')).toBeInTheDocument();
  });

  it('renders with range mode', () => {
    render(<Calendar mode="range" />);
    
    const dates = screen.getAllByRole('gridcell');
    expect(dates.length).toBeGreaterThan(0);
  });

  it('renders with disabled dates', () => {
    const disabledDays = { before: new Date() };
    render(<Calendar disabled={disabledDays} />);
    
    const dates = screen.getAllByRole('gridcell');
    expect(dates.length).toBeGreaterThan(0);
  });
});
