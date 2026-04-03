import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from '../label';

describe('Label', () => {
  it('renders label with text', () => {
    render(<Label>Label Text</Label>);
    expect(screen.getByText('Label Text')).toBeInTheDocument();
  });

  it('associates with input using htmlFor', () => {
    render(
      <>
        <Label htmlFor="test-input">Username</Label>
        <input id="test-input" />
      </>
    );
    
    const label = screen.getByText('Username');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('applies custom className', () => {
    render(<Label className="custom-label">Custom</Label>);
    const label = screen.getByText('Custom');
    expect(label).toHaveClass('custom-label');
  });

  it('renders with required indicator', () => {
    render(<Label required>Required Field</Label>);
    expect(screen.getByText('Required Field')).toBeInTheDocument();
  });

  it('renders complex content', () => {
    render(
      <Label>
        Username
        <span className="text-red-500">*</span>
      </Label>
    );
    
    expect(screen.getByText('Username')).toBeInTheDocument();
  });
});
