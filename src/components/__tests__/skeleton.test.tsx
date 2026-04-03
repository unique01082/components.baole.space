import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skeleton } from '../skeleton';

describe('Skeleton', () => {
  it('renders skeleton component', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="custom-skeleton" />);
    expect(container.querySelector('.custom-skeleton')).toBeInTheDocument();
  });

  it('renders with custom dimensions', () => {
    const { container } = render(<Skeleton className="h-4 w-full" />);
    expect(container.querySelector('.h-4.w-full')).toBeInTheDocument();
  });

  it('renders multiple skeleton items', () => {
    const { container } = render(
      <div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    );
    
    const skeletons = container.querySelectorAll('[class*="h-4"]');
    expect(skeletons.length).toBe(3);
  });

  it('renders circle skeleton', () => {
    const { container } = render(<Skeleton className="h-12 w-12 rounded-full" />);
    expect(container.querySelector('.rounded-full')).toBeInTheDocument();
  });

  it('renders with custom styles', () => {
    const { container } = render(<Skeleton style={{ width: '200px', height: '100px' }} />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.style.width).toBe('200px');
    expect(skeleton.style.height).toBe('100px');
  });
});
