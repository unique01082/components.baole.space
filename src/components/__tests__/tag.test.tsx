import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from '../tag';

describe('Tag', () => {
  it('renders tag with text', () => {
    render(<Tag>Test Tag</Tag>);
    
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('renders different variants', () => {
    const { rerender } = render(<Tag variant="default">Default</Tag>);
    expect(screen.getByText('Default')).toBeInTheDocument();
    
    rerender(<Tag variant="solid">Solid</Tag>);
    expect(screen.getByText('Solid')).toBeInTheDocument();
    
    rerender(<Tag variant="gradient">Gradient</Tag>);
    expect(screen.getByText('Gradient')).toBeInTheDocument();
    
    rerender(<Tag variant="success">Success</Tag>);
    expect(screen.getByText('Success')).toBeInTheDocument();
    
    rerender(<Tag variant="warning">Warning</Tag>);
    expect(screen.getByText('Warning')).toBeInTheDocument();
    
    rerender(<Tag variant="error">Error</Tag>);
    expect(screen.getByText('Error')).toBeInTheDocument();
    
    rerender(<Tag variant="info">Info</Tag>);
    expect(screen.getByText('Info')).toBeInTheDocument();
  });

  it('renders closable tag with close button', () => {
    render(<Tag closable>Closable Tag</Tag>);
    
    expect(screen.getByLabelText(/close/i)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Tag closable onClose={handleClose}>
        Closable Tag
      </Tag>,
    );
    
    await user.click(screen.getByLabelText(/close/i));
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders tag with icon', () => {
    const icon = <span data-testid="icon">★</span>;
    render(<Tag icon={icon}>Tag with Icon</Tag>);
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('Tag with Icon')).toBeInTheDocument();
  });

  it('renders tag with both icon and close button', () => {
    const icon = <span data-testid="icon">★</span>;
    render(
      <Tag icon={icon} closable>
        Complete Tag
      </Tag>,
    );
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByLabelText(/close/i)).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Tag className="custom-class">Custom Tag</Tag>);
    
    expect(screen.getByText('Custom Tag')).toHaveClass('custom-class');
  });
});
