import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Divider } from '../divider';

describe('Divider', () => {
  it('renders horizontal divider', () => {
    render(<Divider />);
    
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });

  it('renders vertical divider', () => {
    render(<Divider orientation="vertical" />);
    
    const divider = screen.getByRole('separator');
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders divider with label', () => {
    render(<Divider label="OR" />);
    
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  it('renders gradient variant', () => {
    render(<Divider variant="gradient" />);
    
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });

  it('renders default variant', () => {
    render(<Divider variant="default" />);
    
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Divider className="my-custom-class" />);
    
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('my-custom-class');
  });

  it('renders labeled gradient divider', () => {
    render(<Divider label="Continue" variant="gradient" />);
    
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('renders with horizontal orientation by default', () => {
    render(<Divider />);
    
    const divider = screen.getByRole('separator');
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  });
});
