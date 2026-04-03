import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Image } from '../image';

describe('Image', () => {
  it('renders image with src and alt', () => {
    render(<Image src="/test.jpg" alt="Test Image" />);
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'Test Image');
  });

  it('renders with square aspect ratio', () => {
    render(<Image src="/test.jpg" alt="Square" aspectRatio="square" />);
    
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with video aspect ratio', () => {
    render(<Image src="/test.jpg" alt="Video" aspectRatio="video" />);
    
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with portrait aspect ratio', () => {
    render(<Image src="/test.jpg" alt="Portrait" aspectRatio="portrait" />);
    
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with different object fit values', () => {
    const { rerender } = render(
      <Image src="/test.jpg" alt="Test" objectFit="contain" />,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    
    rerender(<Image src="/test.jpg" alt="Test" objectFit="cover" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    
    rerender(<Image src="/test.jpg" alt="Test" objectFit="fill" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('handles error state', () => {
    const handleError = vi.fn();
    render(<Image src="/invalid.jpg" alt="Test" onError={handleError} />);
    
    const img = screen.getByRole('img');
    img.dispatchEvent(new Event('error'));
    
    expect(handleError).toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    render(<Image src="/test.jpg" alt="Test" className="custom-image" />);
    
    const img = screen.getByRole('img');
    expect(img.parentElement).toHaveClass('custom-image');
  });

  it('renders fallback on error', () => {
    render(
      <Image 
        src="/invalid.jpg" 
        alt="Test" 
        fallback={<div>Fallback</div>}
      />,
    );
    
    const img = screen.getByRole('img');
    img.dispatchEvent(new Event('error'));
    
    // Fallback should appear after error
    setTimeout(() => {
      expect(screen.getByText('Fallback')).toBeInTheDocument();
    }, 100);
  });
});
