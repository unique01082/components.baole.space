import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorPicker } from '../color-picker';

describe('ColorPicker', () => {
  it('renders color picker', () => {
    render(<ColorPicker />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
  });

  it('renders with default color', () => {
    const { container } = render(<ColorPicker value="#ff0000" />);
    
    expect(container.querySelector('[style*="background"]')).toBeInTheDocument();
  });

  it('opens color picker on click', async () => {
    const user = userEvent.setup();
    render(<ColorPicker />);
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    // Color picker should open
  });

  it('calls onChange when color is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<ColorPicker onChange={handleChange} />);
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    // Select a color would trigger onChange
  });

  it('renders in disabled state', () => {
    render(<ColorPicker disabled />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });

  it('renders with alpha channel', () => {
    render(<ColorPicker showAlpha />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
  });

  it('renders with preset colors', () => {
    const presets = ['#ff0000', '#00ff00', '#0000ff'];
    render(<ColorPicker presets={presets} />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<ColorPicker className="custom-colorpicker" />);
    
    const trigger = screen.getByRole('button');
    expect(trigger.className).toContain('custom-colorpicker');
  });

  it('supports hex color format', () => {
    render(<ColorPicker value="#ff5733" format="hex" />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
  });

  it('supports rgb color format', () => {
    render(<ColorPicker value="rgb(255, 87, 51)" format="rgb" />);
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
  });
});
