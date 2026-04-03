import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rating } from '../rating';

describe('Rating', () => {
  it('renders rating component', () => {
    render(<Rating />);
    
    const stars = screen.getAllByRole('button');
    expect(stars).toHaveLength(5);
  });

  it('renders with custom max value', () => {
    render(<Rating max={10} />);
    
    const stars = screen.getAllByRole('button');
    expect(stars).toHaveLength(10);
  });

  it('renders with initial value', () => {
    render(<Rating value={3} />);
    
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('calls onChange when star is clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Rating onChange={handleChange} />);
    
    const stars = screen.getAllByRole('button');
    await user.click(stars[2]);
    
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('renders readonly rating', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Rating value={3} readonly onChange={handleChange} />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('pointer-events-none');
    
    const stars = screen.getAllByRole('button');
    await user.click(stars[4]);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders disabled rating', () => {
    render(<Rating disabled />);
    
    const container = screen.getByRole('group');
    expect(container).toHaveClass('opacity-50');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Rating size="sm" />);
    expect(screen.getByRole('group')).toBeInTheDocument();
    
    rerender(<Rating size="md" />);
    expect(screen.getByRole('group')).toBeInTheDocument();
    
    rerender(<Rating size="lg" />);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('supports half star rating', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Rating allowHalf onChange={handleChange} />);
    
    const stars = screen.getAllByRole('button');
    const firstStar = stars[0];
    
    // Click on the star
    await user.click(firstStar);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    render(<Rating className="custom-rating" />);
    
    expect(screen.getByRole('group')).toHaveClass('custom-rating');
  });
});
