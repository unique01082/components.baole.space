import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../modal';

describe('Modal', () => {
  it('renders when open is true', () => {
    render(
      <Modal open={true} title="Modal Title">
        <p>Modal content</p>
      </Modal>,
    );
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    render(
      <Modal open={false} title="Modal Title">
        <p>Modal content</p>
      </Modal>,
    );
    
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
  });

  it('calls onOpenChange when close button is clicked', async () => {
    const handleOpenChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Modal open={true} onOpenChange={handleOpenChange} title="Modal Title">
        <p>Modal content</p>
      </Modal>,
    );
    
    const closeButton = screen.getByLabelText(/close/i);
    await user.click(closeButton);
    
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('calls onOpenChange when mask is clicked and maskClosable is true', async () => {
    const handleOpenChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Modal 
        open={true} 
        onOpenChange={handleOpenChange} 
        title="Modal Title"
        maskClosable={true}
      >
        <p>Modal content</p>
      </Modal>,
    );
    
    const mask = screen.getByRole('presentation');
    await user.click(mask);
    
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('does not close when mask is clicked and maskClosable is false', async () => {
    const handleOpenChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Modal 
        open={true} 
        onOpenChange={handleOpenChange} 
        title="Modal Title"
        maskClosable={false}
      >
        <p>Modal content</p>
      </Modal>,
    );
    
    const mask = screen.getByRole('presentation');
    await user.click(mask);
    
    expect(handleOpenChange).not.toHaveBeenCalled();
  });

  it('renders without close button when closable is false', () => {
    render(
      <Modal open={true} title="Modal Title" closable={false}>
        <p>Modal content</p>
      </Modal>,
    );
    
    expect(screen.queryByLabelText(/close/i)).not.toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    render(
      <Modal 
        open={true} 
        title="Modal Title" 
        footer={<button>Custom Footer Button</button>}
      >
        <p>Modal content</p>
      </Modal>,
    );
    
    expect(screen.getByText('Custom Footer Button')).toBeInTheDocument();
  });

  it('renders with custom width', () => {
    render(
      <Modal open={true} title="Modal Title" width={800}>
        <p>Modal content</p>
      </Modal>,
    );
    
    const modalContent = screen.getByText('Modal Title').closest('[style]');
    expect(modalContent).toHaveStyle({ width: '800px' });
  });

  it('centers modal when centered is true', () => {
    render(
      <Modal open={true} title="Modal Title" centered={true}>
        <p>Modal content</p>
      </Modal>,
    );
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });
});
