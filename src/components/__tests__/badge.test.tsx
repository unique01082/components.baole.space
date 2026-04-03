import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../badge';

describe('Badge', () => {
  it('renders badge with text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'outline', 'success', 'warning'] as const;
    
    variants.forEach((variant) => {
      const { container } = render(<Badge variant={variant}>{variant}</Badge>);
      expect(screen.getByText(variant)).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-badge');
  });

  it('renders with icon', () => {
    const Icon = () => <svg data-testid="badge-icon" />;
    render(
      <Badge>
        <Icon />
        Badge with Icon
      </Badge>
    );
    
    expect(screen.getByTestId('badge-icon')).toBeInTheDocument();
    expect(screen.getByText('Badge with Icon')).toBeInTheDocument();
  });

  it('renders with different content types', () => {
    render(
      <>
        <Badge>Text</Badge>
        <Badge>99+</Badge>
        <Badge>
          <span>Complex</span>
        </Badge>
      </>
    );
    
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('99+')).toBeInTheDocument();
    expect(screen.getByText('Complex')).toBeInTheDocument();
  });
});
