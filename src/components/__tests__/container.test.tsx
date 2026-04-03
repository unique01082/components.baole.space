import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from '../container';

describe('Container', () => {
  it('renders children', () => {
    render(
      <Container>
        <div>Container content</div>
      </Container>,
    );
    
    expect(screen.getByText('Container content')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(
      <Container size="sm">
        <div>Content</div>
      </Container>,
    );
    expect(container.firstChild).toHaveClass('max-w-3xl');

    rerender(
      <Container size="md">
        <div>Content</div>
      </Container>,
    );
    expect(container.firstChild).toHaveClass('max-w-5xl');

    rerender(
      <Container size="lg">
        <div>Content</div>
      </Container>,
    );
    expect(container.firstChild).toHaveClass('max-w-7xl');

    rerender(
      <Container size="xl">
        <div>Content</div>
      </Container>,
    );
    expect(container.firstChild).toHaveClass('max-w-[1400px]');

    rerender(
      <Container size="full">
        <div>Content</div>
      </Container>,
    );
    expect(container.firstChild).toHaveClass('max-w-full');
  });

  it('renders with default size', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>,
    );
    
    expect(container.firstChild).toHaveClass('max-w-7xl');
  });

  it('renders with responsive padding', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>,
    );
    
    const element = container.firstChild as HTMLElement;
    expect(element.className).toContain('px-4');
  });

  it('renders with auto margins', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>,
    );
    
    expect(container.firstChild).toHaveClass('mx-auto');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Container className="custom-container">
        <div>Content</div>
      </Container>,
    );
    
    expect(container.firstChild).toHaveClass('custom-container');
  });

  it('renders with full width', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>,
    );
    
    expect(container.firstChild).toHaveClass('w-full');
  });
});
