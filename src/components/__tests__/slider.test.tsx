import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from '../slider';

describe('Slider', () => {
  it('renders slider', () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />);
    
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Slider label="Volume" defaultValue={[50]} max={100} step={1} />);
    
    expect(screen.getByText('Volume')).toBeInTheDocument();
  });

  it('renders with value display', () => {
    render(<Slider showValue defaultValue={[75]} max={100} step={1} />);
    
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('renders with both label and value', () => {
    render(
      <Slider 
        label="Brightness" 
        showValue 
        defaultValue={[60]} 
        max={100} 
        step={1} 
      />,
    );
    
    expect(screen.getByText('Brightness')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
  });

  it('renders with proper default value', () => {
    render(<Slider defaultValue={[25]} max={100} step={1} />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '25');
  });

  it('renders with min and max', () => {
    render(<Slider defaultValue={[50]} min={0} max={200} step={10} />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '200');
  });

  it('renders disabled slider', () => {
    render(<Slider disabled defaultValue={[50]} max={100} step={1} />);
    
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('data-disabled');
  });
});
