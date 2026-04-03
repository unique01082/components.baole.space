import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Watermark } from '../watermark';

describe('Watermark', () => {
  it('renders children with watermark', () => {
    render(
      <Watermark content="Test Watermark">
        <div>Content with watermark</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Content with watermark')).toBeInTheDocument();
  });

  it('renders with single string content', () => {
    render(
      <Watermark content="Confidential">
        <div>Protected content</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Protected content')).toBeInTheDocument();
  });

  it('renders with multiple string content', () => {
    render(
      <Watermark content={['Line 1', 'Line 2']}>
        <div>Multi-line watermark</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Multi-line watermark')).toBeInTheDocument();
  });

  it('renders with custom dimensions', () => {
    render(
      <Watermark content="Test" width={200} height={100}>
        <div>Custom dimensions</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Custom dimensions')).toBeInTheDocument();
  });

  it('renders with custom rotation', () => {
    render(
      <Watermark content="Test" rotate={45}>
        <div>Rotated watermark</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Rotated watermark')).toBeInTheDocument();
  });

  it('renders with custom font', () => {
    render(
      <Watermark
        content="Test"
        font={{
          color: 'rgba(255,0,0,0.2)',
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'Arial',
        }}
      >
        <div>Custom font</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Custom font')).toBeInTheDocument();
  });

  it('renders with custom gap', () => {
    render(
      <Watermark content="Test" gap={[50, 50]}>
        <div>Custom gap</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Custom gap')).toBeInTheDocument();
  });

  it('renders with custom offset', () => {
    render(
      <Watermark content="Test" offset={[10, 10]}>
        <div>Custom offset</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Custom offset')).toBeInTheDocument();
  });

  it('renders with image watermark', () => {
    render(
      <Watermark image="/logo.png">
        <div>Image watermark</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Image watermark')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Watermark content="Test" className="custom-watermark">
        <div>Custom class</div>
      </Watermark>,
    );
    
    expect(container.firstChild).toHaveClass('custom-watermark');
  });

  it('renders with custom zIndex', () => {
    render(
      <Watermark content="Test" zIndex={999}>
        <div>Custom z-index</div>
      </Watermark>,
    );
    
    expect(screen.getByText('Custom z-index')).toBeInTheDocument();
  });
});
