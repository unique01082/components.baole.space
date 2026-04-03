import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputNumber } from '../input-number';

describe('InputNumber', () => {
  it('renders input number field', () => {
    render(<InputNumber />);
    
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('renders with default value', () => {
    render(<InputNumber defaultValue={50} />);
    
    expect(screen.getByRole('spinbutton')).toHaveValue('50');
  });

  it('renders with controlled value', () => {
    render(<InputNumber value={75} />);
    
    expect(screen.getByRole('spinbutton')).toHaveValue('75');
  });

  it('increments value when plus button is clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<InputNumber defaultValue={10} step={5} onChange={handleChange} />);
    
    const plusButton = screen.getByRole('button', { name: /increment/i });
    await user.click(plusButton);
    
    expect(handleChange).toHaveBeenCalledWith(15);
  });

  it('decrements value when minus button is clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<InputNumber defaultValue={10} step={5} onChange={handleChange} />);
    
    const minusButton = screen.getByRole('button', { name: /decrement/i });
    await user.click(minusButton);
    
    expect(handleChange).toHaveBeenCalledWith(5);
  });

  it('respects min value', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<InputNumber defaultValue={5} min={0} onChange={handleChange} />);
    
    const minusButton = screen.getByRole('button', { name: /decrement/i });
    await user.click(minusButton);
    await user.click(minusButton);
    await user.click(minusButton);
    await user.click(minusButton);
    await user.click(minusButton);
    await user.click(minusButton);
    
    // Should not go below 0
    const input = screen.getByRole('spinbutton');
    expect(Number(input.getAttribute('value'))).toBeGreaterThanOrEqual(0);
  });

  it('respects max value', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<InputNumber defaultValue={95} max={100} onChange={handleChange} />);
    
    const plusButton = screen.getByRole('button', { name: /increment/i });
    await user.click(plusButton);
    await user.click(plusButton);
    await user.click(plusButton);
    
    // Should not go above 100
    const input = screen.getByRole('spinbutton');
    expect(Number(input.getAttribute('value'))).toBeLessThanOrEqual(100);
  });

  it('renders without controls', () => {
    render(<InputNumber controls={false} />);
    
    expect(screen.queryByRole('button', { name: /increment/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /decrement/i })).not.toBeInTheDocument();
  });

  it('renders disabled input number', () => {
    render(<InputNumber disabled />);
    
    expect(screen.getByRole('spinbutton')).toBeDisabled();
  });

  it('allows typing numeric value', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<InputNumber onChange={handleChange} />);
    
    const input = screen.getByRole('spinbutton');
    await user.clear(input);
    await user.type(input, '42');
    
    expect(input).toHaveValue('42');
  });
});
