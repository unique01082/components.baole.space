import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Toaster, toast } from '../toaster';

describe('Toaster', () => {
  it('renders toaster component', () => {
    const { container } = render(<Toaster />);
    // The toaster renders in a portal, just check it doesn't crash
    expect(container).toBeInTheDocument();
  });

  it('displays toast message', async () => {
    render(<Toaster />);
    
    toast('Test message');
    
    await waitFor(() => {
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });
  });

  it('displays toast with description', async () => {
    render(<Toaster />);
    
    toast('Title', {
      description: 'This is a description',
    });
    
    await waitFor(() => {
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('This is a description')).toBeInTheDocument();
    });
  });

  it('displays success toast', async () => {
    render(<Toaster />);
    
    toast.success('Success message');
    
    await waitFor(() => {
      expect(screen.getByText('Success message')).toBeInTheDocument();
    });
  });

  it('displays error toast', async () => {
    render(<Toaster />);
    
    toast.error('Error message');
    
    await waitFor(() => {
      expect(screen.getByText('Error message')).toBeInTheDocument();
    });
  });

  it('displays warning toast', async () => {
    render(<Toaster />);
    
    toast.warning('Warning message');
    
    await waitFor(() => {
      expect(screen.getByText('Warning message')).toBeInTheDocument();
    });
  });

  it('displays info toast', async () => {
    render(<Toaster />);
    
    toast.info('Info message');
    
    await waitFor(() => {
      expect(screen.getByText('Info message')).toBeInTheDocument();
    });
  });

  it('displays toast with action button', async () => {
    render(<Toaster />);
    const action = vi.fn();
    
    toast('Message with action', {
      action: {
        label: 'Undo',
        onClick: action,
      },
    });
    
    await waitFor(() => {
      expect(screen.getByText('Message with action')).toBeInTheDocument();
      expect(screen.getByText('Undo')).toBeInTheDocument();
    });
  });
});
