import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Notification } from '../notification';

describe('Notification', () => {
  const mockNotification = {
    id: 'notif-1',
    title: 'Test Notification',
    description: 'This is a test description',
  };

  it('renders notification', () => {
    render(<Notification {...mockNotification} />);
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('renders with success type', () => {
    const { container } = render(
      <Notification {...mockNotification} type="success" />,
    );
    
    expect(container.querySelector('.text-green-500')).toBeInTheDocument();
  });

  it('renders with error type', () => {
    const { container } = render(
      <Notification {...mockNotification} type="error" />,
    );
    
    expect(container.querySelector('.text-red-500')).toBeInTheDocument();
  });

  it('renders with warning type', () => {
    const { container } = render(
      <Notification {...mockNotification} type="warning" />,
    );
    
    expect(container.querySelector('.text-yellow-500')).toBeInTheDocument();
  });

  it('renders with info type', () => {
    render(<Notification {...mockNotification} type="info" />);
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('renders without description', () => {
    render(
      <Notification id="notif-2" title="Title Only" />,
    );
    
    expect(screen.getByText('Title Only')).toBeInTheDocument();
  });

  it('renders close button', () => {
    render(<Notification {...mockNotification} onClose={vi.fn()} />);
    
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    
    render(<Notification {...mockNotification} onClose={handleClose} />);
    
    const closeButton = screen.getByRole('button');
    await user.click(closeButton);
    
    expect(handleClose).toHaveBeenCalled();
  });

  it('renders with default info type', () => {
    render(<Notification {...mockNotification} />);
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });

  it('renders with id', () => {
    const { container } = render(<Notification {...mockNotification} />);
    
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with duration prop', () => {
    render(<Notification {...mockNotification} duration={5000} />);
    
    expect(screen.getByText('Test Notification')).toBeInTheDocument();
  });
});
