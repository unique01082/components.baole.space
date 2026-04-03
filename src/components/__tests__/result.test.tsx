import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Result } from '../result';

describe('Result', () => {
  it('renders success result', () => {
    render(<Result status="success" title="Success" />);
    
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('renders error result', () => {
    render(<Result status="error" title="Error Occurred" />);
    
    expect(screen.getByText('Error Occurred')).toBeInTheDocument();
  });

  it('renders warning result', () => {
    render(<Result status="warning" title="Warning" />);
    
    expect(screen.getByText('Warning')).toBeInTheDocument();
  });

  it('renders info result', () => {
    render(<Result status="info" title="Information" />);
    
    expect(screen.getByText('Information')).toBeInTheDocument();
  });

  it('renders with subtitle', () => {
    render(
      <Result 
        status="success" 
        title="Payment Successful" 
        subtitle="Your payment has been processed successfully."
      />,
    );
    
    expect(screen.getByText('Payment Successful')).toBeInTheDocument();
    expect(screen.getByText('Your payment has been processed successfully.')).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    const customIcon = <div data-testid="custom-icon">★</div>;
    render(
      <Result 
        status="success" 
        title="Custom Icon" 
        icon={customIcon}
      />,
    );
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('renders with extra actions', () => {
    render(
      <Result 
        status="error" 
        title="Failed" 
        extra={
          <>
            <button>Retry</button>
            <button>Go Back</button>
          </>
        }
      />,
    );
    
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go Back' })).toBeInTheDocument();
  });

  it('renders complete result with all props', () => {
    render(
      <Result
        status="success"
        title="Order Confirmed"
        subtitle="Your order has been placed successfully"
        extra={<button>View Orders</button>}
      />,
    );
    
    expect(screen.getByText('Order Confirmed')).toBeInTheDocument();
    expect(screen.getByText('Your order has been placed successfully')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'View Orders' })).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Result 
        status="info" 
        title="Info" 
        className="custom-result"
      />,
    );
    
    expect(container.querySelector('.custom-result')).toBeInTheDocument();
  });

  it('uses default info status when not specified', () => {
    render(<Result title="Default Status" />);
    
    expect(screen.getByText('Default Status')).toBeInTheDocument();
  });

  it('renders default icon for each status', () => {
    const { rerender } = render(<Result status="success" title="Success" />);
    expect(screen.getByText('Success')).toBeInTheDocument();
    
    rerender(<Result status="error" title="Error" />);
    expect(screen.getByText('Error')).toBeInTheDocument();
    
    rerender(<Result status="warning" title="Warning" />);
    expect(screen.getByText('Warning')).toBeInTheDocument();
    
    rerender(<Result status="info" title="Info" />);
    expect(screen.getByText('Info')).toBeInTheDocument();
  });
});
