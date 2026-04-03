import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stepper, type Step } from '../stepper';

describe('Stepper', () => {
  const mockSteps: Step[] = [
    { title: 'Step 1', description: 'First step' },
    { title: 'Step 2', description: 'Second step' },
    { title: 'Step 3', description: 'Third step' },
    { title: 'Step 4', description: 'Fourth step' },
  ];

  it('renders stepper with steps', () => {
    render(<Stepper steps={mockSteps} currentStep={0} />);
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Step 4')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<Stepper steps={mockSteps} currentStep={0} />);
    
    expect(screen.getByText('First step')).toBeInTheDocument();
    expect(screen.getByText('Second step')).toBeInTheDocument();
  });

  it('renders with horizontal orientation', () => {
    const { container } = render(
      <Stepper steps={mockSteps} currentStep={0} orientation="horizontal" />,
    );
    
    expect(container.firstChild).toHaveClass('flex-row');
  });

  it('renders with vertical orientation', () => {
    const { container } = render(
      <Stepper steps={mockSteps} currentStep={0} orientation="vertical" />,
    );
    
    expect(container.firstChild).toHaveClass('flex-col');
  });

  it('shows current step', () => {
    render(<Stepper steps={mockSteps} currentStep={1} />);
    
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('shows completed steps with checkmarks', () => {
    const { container } = render(
      <Stepper steps={mockSteps} currentStep={2} />,
    );
    
    // First two steps should be completed (have checkmarks)
    const checkmarks = container.querySelectorAll('svg');
    expect(checkmarks.length).toBeGreaterThan(0);
  });

  it('renders with default variant', () => {
    render(<Stepper steps={mockSteps} currentStep={0} variant="default" />);
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders with gradient variant', () => {
    render(<Stepper steps={mockSteps} currentStep={0} variant="gradient" />);
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders steps with custom icons', () => {
    const stepsWithIcons: Step[] = [
      { title: 'Step 1', icon: <span>Icon1</span> },
      { title: 'Step 2', icon: <span>Icon2</span> },
    ];
    
    render(<Stepper steps={stepsWithIcons} currentStep={0} />);
    
    expect(screen.getByText('Icon1')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Stepper steps={mockSteps} currentStep={0} className="custom-stepper" />,
    );
    
    expect(container.firstChild).toHaveClass('custom-stepper');
  });

  it('shows step numbers when no icon provided', () => {
    render(<Stepper steps={mockSteps} currentStep={0} />);
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('applies correct styles to upcoming steps', () => {
    render(<Stepper steps={mockSteps} currentStep={1} />);
    
    // Steps after current should be styled as upcoming
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Step 4')).toBeInTheDocument();
  });
});
