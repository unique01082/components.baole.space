import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from '../timeline';

describe('Timeline', () => {
  const mockItems = [
    {
      title: 'Event 1',
      description: 'First event',
      timestamp: '2024-01-01',
    },
    {
      title: 'Event 2',
      description: 'Second event',
      timestamp: '2024-01-02',
    },
    {
      title: 'Event 3',
      description: 'Third event',
      timestamp: '2024-01-03',
    },
  ];

  it('renders timeline component', () => {
    render(<Timeline items={mockItems} />);
    
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.getByText('Event 3')).toBeInTheDocument();
  });

  it('renders item descriptions', () => {
    render(<Timeline items={mockItems} />);
    
    expect(screen.getByText('First event')).toBeInTheDocument();
    expect(screen.getByText('Second event')).toBeInTheDocument();
    expect(screen.getByText('Third event')).toBeInTheDocument();
  });

  it('renders timestamps', () => {
    render(<Timeline items={mockItems} />);
    
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(screen.getByText('2024-01-02')).toBeInTheDocument();
    expect(screen.getByText('2024-01-03')).toBeInTheDocument();
  });

  it('renders with custom icons', () => {
    const itemsWithIcons = [
      { title: 'Event 1', icon: <span data-testid="custom-icon">✓</span> },
      { title: 'Event 2' },
    ];
    
    render(<Timeline items={itemsWithIcons} />);
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('renders with different colors', () => {
    const coloredItems = [
      { title: 'Default', color: 'default' as const },
      { title: 'Primary', color: 'primary' as const },
      { title: 'Success', color: 'success' as const },
      { title: 'Warning', color: 'warning' as const },
      { title: 'Error', color: 'error' as const },
    ];
    
    render(<Timeline items={coloredItems} />);
    
    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('renders with gradient variant', () => {
    render(<Timeline items={mockItems} variant="gradient" />);
    
    expect(screen.getByText('Event 1')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    render(<Timeline items={mockItems} variant="default" />);
    
    expect(screen.getByText('Event 1')).toBeInTheDocument();
  });

  it('renders without timestamps', () => {
    const itemsWithoutTimestamp = [
      { title: 'Event 1', description: 'First event' },
      { title: 'Event 2', description: 'Second event' },
    ];
    
    render(<Timeline items={itemsWithoutTimestamp} />);
    
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.queryByText('2024-01-01')).not.toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Timeline items={mockItems} className="custom-timeline" />);
    
    expect(container.firstChild).toHaveClass('custom-timeline');
  });
});
