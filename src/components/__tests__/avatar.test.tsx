import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(
      <Avatar>
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('BL')).toBeInTheDocument();
  });

  it('renders with image', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
    );
    // The Avatar component wraps the image, so we just check it renders
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('shows fallback when image fails to load', () => {
    render(
      <Avatar>
        <AvatarImage src="invalid-url" alt="User Avatar" />
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
    );
    // The fallback should be in the document
    expect(screen.getByText('BL')).toBeInTheDocument();
  });

  it('applies size variant correctly', () => {
    const { container } = render(
      <Avatar size="lg">
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
    );
    const avatar = container.querySelector('[class*="h-12 w-12"]');
    expect(avatar).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Avatar className="custom-class">
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
    );
    const avatar = container.querySelector('.custom-class');
    expect(avatar).toBeInTheDocument();
  });

  it('renders different size variants', () => {
    const sizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
    
    sizes.forEach((size) => {
      const { container } = render(
        <Avatar size={size}>
          <AvatarFallback>{size}</AvatarFallback>
        </Avatar>
      );
      expect(screen.getByText(size)).toBeInTheDocument();
    });
  });
});
