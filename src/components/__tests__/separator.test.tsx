import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator', () => {
  it('renders separator', () => {
    const { container } = render(<Separator />);
    const separator = container.querySelector('[data-orientation]');
    expect(separator).toBeInTheDocument();
  });

  it('renders horizontal separator by default', () => {
    const { container } = render(<Separator />);
    const separator = container.querySelector('[data-orientation="horizontal"]');
    expect(separator).toBeInTheDocument();
  });

  it('renders vertical separator', () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.querySelector('[data-orientation="vertical"]');
    expect(separator).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Separator className="custom-separator" />);
    expect(container.querySelector('.custom-separator')).toBeInTheDocument();
  });

  it('renders decorative separator', () => {
    const { container } = render(<Separator decorative />);
    const separator = container.querySelector('[data-orientation]');
    expect(separator).toBeInTheDocument();
  });
});
