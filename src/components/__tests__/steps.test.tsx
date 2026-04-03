import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Steps } from '../steps';

describe('Steps', () => {
  const mockItems = [
    { title: 'Step 1', description: 'First step' },
    { title: 'Step 2', description: 'Second step' },
    { title: 'Step 3', description: 'Third step' },
  ];

  it('renders steps component', () => {
    render(<Steps items={mockItems} />);
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<Steps items={mockItems} />);
    
    expect(screen.getByText('First step')).toBeInTheDocument();
    expect(screen.getByText('Second step')).toBeInTheDocument();
    expect(screen.getByText('Third step')).toBeInTheDocument();
  });

  it('renders with current step', () => {
    render(<Steps items={mockItems} current={1} />);
    
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('renders with horizontal direction', () => {
    const { container } = render(<Steps items={mockItems} direction="horizontal" />);
    
    expect(container.firstChild).toHaveClass('flex-row');
  });

  it('renders with vertical direction', () => {
    const { container } = render(<Steps items={mockItems} direction="vertical" />);
    
    expect(container.firstChild).toHaveClass('flex-col');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Steps items={mockItems} size="sm" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    
    rerender(<Steps items={mockItems} size="md" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    
    rerender(<Steps items={mockItems} size="lg" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders with custom icons', () => {
    const itemsWithIcons = [
      { title: 'Step 1', icon: <span data-testid="icon-1">✓</span> },
      { title: 'Step 2', icon: <span data-testid="icon-2">→</span> },
    ];
    
    render(<Steps items={itemsWithIcons} />);
    
    expect(screen.getByTestId('icon-1')).toBeInTheDocument();
    expect(screen.getByTestId('icon-2')).toBeInTheDocument();
  });

  it('renders with subtitle', () => {
    const itemsWithSubtitle = [
      { title: 'Step 1', subTitle: 'Optional' },
      { title: 'Step 2', subTitle: 'Required' },
    ];
    
    render(<Steps items={itemsWithSubtitle} />);
    
    expect(screen.getByText('Optional')).toBeInTheDocument();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('calls onStepChange when clickable', async () => {
    const handleStepChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Steps items={mockItems} type="navigation" onStepChange={handleStepChange} />);
    
    const step2 = screen.getByText('Step 2');
    await user.click(step2);
    
    expect(handleStepChange).toHaveBeenCalled();
  });

  it('renders with different types', () => {
    const { rerender } = render(<Steps items={mockItems} type="default" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    
    rerender(<Steps items={mockItems} type="navigation" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    
    rerender(<Steps items={mockItems} type="inline" />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<Steps items={mockItems} className="custom-steps" />);
    
    expect(container.firstChild).toHaveClass('custom-steps');
  });
});
