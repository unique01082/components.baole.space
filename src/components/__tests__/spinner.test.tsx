import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Spinner } from '../spinner';

describe('Spinner', () => {
  it('renders spinner component', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders different sizes', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    
    sizes.forEach((size) => {
      const { container } = render(<Spinner size={size} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const { container } = render(<Spinner className="custom-spinner" />);
    expect(container.querySelector('.custom-spinner')).toBeInTheDocument();
  });

  it('renders with aria-label for accessibility', () => {
    const { container } = render(<Spinner aria-label="Loading" />);
    const spinner = container.firstChild as HTMLElement;
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
  });

  it('renders with loading text', () => {
    const { container } = render(
      <div className="flex items-center gap-2">
        <Spinner size="sm" />
        <span>Loading...</span>
      </div>
    );
    expect(container.textContent).toContain('Loading...');
  });
});
