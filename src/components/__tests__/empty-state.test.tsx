import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmptyState } from '../empty-state';
import { Inbox } from 'lucide-react';

describe('EmptyState', () => {
  it('renders empty state with title', () => {
    render(<EmptyState title="No Data" />);
    
    expect(screen.getByText('No Data')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <EmptyState 
        title="No Items Found" 
        description="There are no items to display at this time."
      />,
    );
    
    expect(screen.getByText('No Items Found')).toBeInTheDocument();
    expect(screen.getByText('There are no items to display at this time.')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(
      <EmptyState 
        title="Empty Inbox" 
        icon={<Inbox data-testid="inbox-icon" />}
      />,
    );
    
    expect(screen.getByTestId('inbox-icon')).toBeInTheDocument();
  });

  it('renders with action button', () => {
    render(
      <EmptyState 
        title="No Results" 
        action={<button>Try Again</button>}
      />,
    );
    
    expect(screen.getByRole('button', { name: 'Try Again' })).toBeInTheDocument();
  });

  it('renders complete empty state with all props', () => {
    render(
      <EmptyState
        title="No Messages"
        description="You don't have any messages yet"
        icon={<Inbox data-testid="icon" />}
        action={<button>Send Message</button>}
      />,
    );
    
    expect(screen.getByText('No Messages')).toBeInTheDocument();
    expect(screen.getByText("You don't have any messages yet")).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<EmptyState title="Empty" className="custom-empty-state" />);
    
    const container = screen.getByText('Empty').closest('div');
    expect(container).toHaveClass('custom-empty-state');
  });

  it('renders without description when not provided', () => {
    render(<EmptyState title="No Data" />);
    
    expect(screen.getByText('No Data')).toBeInTheDocument();
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });
});
