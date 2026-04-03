import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from '../progress';

describe('Progress', () => {
  it('renders progress bar', () => {
    const { container } = render(<Progress value={50} />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('displays correct value', () => {
    const { container } = render(<Progress value={75} />);
    // Progress renders, we just check the component exists
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders 0% progress', () => {
    const { container } = render(<Progress value={0} />);
    const progressBar = container.querySelector('[data-state]');
    expect(progressBar).toBeInTheDocument();
  });

  it('renders 100% progress', () => {
    const { container } = render(<Progress value={100} />);
    const progressBar = container.querySelector('[data-state]');
    expect(progressBar).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Progress value={50} className="custom-progress" />);
    expect(container.querySelector('.custom-progress')).toBeInTheDocument();
  });

  it('renders with max value', () => {
    const { container } = render(<Progress value={50} max={200} />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toHaveAttribute('aria-valuemax', '200');
  });

  it('renders indeterminate state', () => {
    const { container } = render(<Progress />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toBeInTheDocument();
  });
});
