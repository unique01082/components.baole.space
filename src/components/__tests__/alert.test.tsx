import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from '../alert';

describe('Alert', () => {
  it('renders alert component', () => {
    render(<Alert>Alert content</Alert>);
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('renders alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    );
    
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert Description')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const variants = ['default', 'info', 'success', 'warning', 'error'] as const;
    
    variants.forEach((variant) => {
      const { container } = render(<Alert variant={variant}>{variant}</Alert>);
      expect(screen.getByText(variant)).toBeInTheDocument();
    });
  });

  it('renders with icon', () => {
    const Icon = () => <svg data-testid="alert-icon" />;
    render(
      <Alert>
        <Icon />
        <AlertTitle>Title with icon</AlertTitle>
      </Alert>
    );
    
    expect(screen.getByTestId('alert-icon')).toBeInTheDocument();
    expect(screen.getByText('Title with icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Alert className="custom-alert">Content</Alert>);
    expect(container.querySelector('.custom-alert')).toBeInTheDocument();
  });

  it('renders complex content', () => {
    render(
      <Alert>
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
          </ul>
        </AlertDescription>
      </Alert>
    );
    
    expect(screen.getByText('Important Notice')).toBeInTheDocument();
    expect(screen.getByText('Point 1')).toBeInTheDocument();
    expect(screen.getByText('Point 2')).toBeInTheDocument();
  });
});
