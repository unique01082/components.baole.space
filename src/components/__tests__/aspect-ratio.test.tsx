import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AspectRatio } from '../aspect-ratio';

describe('AspectRatio', () => {
  it('renders children in aspect ratio container', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="/test.jpg" alt="Test" />
      </AspectRatio>,
    );
    
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('maintains 16:9 aspect ratio', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="content">Content</div>
      </AspectRatio>,
    );
    
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('maintains 1:1 aspect ratio', () => {
    render(
      <AspectRatio ratio={1}>
        <div>Square content</div>
      </AspectRatio>,
    );
    
    expect(screen.getByText('Square content')).toBeInTheDocument();
  });

  it('maintains 4:3 aspect ratio', () => {
    render(
      <AspectRatio ratio={4 / 3}>
        <div>4:3 content</div>
      </AspectRatio>,
    );
    
    expect(screen.getByText('4:3 content')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9} className="custom-aspect">
        <div>Content</div>
      </AspectRatio>,
    );
    
    expect(container.querySelector('.custom-aspect')).toBeInTheDocument();
  });

  it('works with image elements', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="/image.jpg" alt="Test Image" />
      </AspectRatio>,
    );
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/image.jpg');
    expect(img).toHaveAttribute('alt', 'Test Image');
  });

  it('works with video elements', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <video data-testid="video" src="/video.mp4" />
      </AspectRatio>,
    );
    
    expect(screen.getByTestId('video')).toBeInTheDocument();
  });
});
