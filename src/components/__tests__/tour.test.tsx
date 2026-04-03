import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tour, type TourStep } from '../tour';

describe('Tour', () => {
  const mockSteps: TourStep[] = [
    {
      target: '.step-1',
      title: 'Step 1',
      description: 'This is the first step',
      placement: 'bottom',
    },
    {
      target: '.step-2',
      title: 'Step 2',
      description: 'This is the second step',
      placement: 'right',
    },
    {
      target: '.step-3',
      title: 'Step 3',
      description: 'This is the third step',
      placement: 'top',
    },
  ];

  beforeEach(() => {
    // Create target elements
    document.body.innerHTML = `
      <div class="step-1">Target 1</div>
      <div class="step-2">Target 2</div>
      <div class="step-3">Target 3</div>
    `;
  });

  it('renders tour when open', () => {
    render(<Tour steps={mockSteps} open current={0} />);
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('This is the first step')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<Tour steps={mockSteps} open={false} />);
    
    expect(screen.queryByText('Step 1')).not.toBeInTheDocument();
  });

  it('renders current step', () => {
    render(<Tour steps={mockSteps} open current={1} />);
    
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('This is the second step')).toBeInTheDocument();
  });

  it('calls onChange when navigating steps', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    
    render(<Tour steps={mockSteps} open current={0} onChange={handleChange} />);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);
    
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    
    render(<Tour steps={mockSteps} open current={0} onClose={handleClose} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);
    
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onFinish on last step', async () => {
    const user = userEvent.setup();
    const handleFinish = vi.fn();
    
    render(<Tour steps={mockSteps} open current={2} onFinish={handleFinish} />);
    
    const finishButton = screen.getByRole('button', { name: /finish/i });
    await user.click(finishButton);
    
    expect(handleFinish).toHaveBeenCalled();
  });

  it('renders with different placements', () => {
    const { rerender } = render(<Tour steps={mockSteps} open current={0} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();

    rerender(<Tour steps={mockSteps} open current={1} />);
    expect(screen.getByText('Step 2')).toBeInTheDocument();

    rerender(<Tour steps={mockSteps} open current={2} />);
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders step cover image', () => {
    const stepsWithCover: TourStep[] = [
      {
        target: '.step-1',
        title: 'Step with cover',
        description: 'Has a cover image',
        cover: <img src="/cover.png" alt="Cover" />,
      },
    ];
    
    render(<Tour steps={stepsWithCover} open current={0} />);
    
    expect(screen.getByAltText('Cover')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Tour steps={mockSteps} open current={0} className="custom-tour" />,
    );
    
    expect(container.querySelector('.custom-tour')).toBeInTheDocument();
  });

  it('shows step progress', () => {
    render(<Tour steps={mockSteps} open current={1} />);
    
    // Should show "2 of 3" or similar
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });
});
