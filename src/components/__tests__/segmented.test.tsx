import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Segmented } from '../segmented';

describe('Segmented', () => {
  const mockOptions = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  it('renders segmented control', () => {
    render(<Segmented options={mockOptions} />);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('selects first option by default', () => {
    render(<Segmented options={mockOptions} />);
    
    const firstButton = screen.getByText('Option 1').closest('button');
    expect(firstButton).toBeInTheDocument();
  });

  it('renders with default value', () => {
    render(<Segmented options={mockOptions} defaultValue="opt2" />);
    
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('calls onChange when option is clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Segmented options={mockOptions} onChange={handleChange} />);
    
    await user.click(screen.getByText('Option 2'));
    
    expect(handleChange).toHaveBeenCalledWith('opt2');
  });

  it('renders with icons', () => {
    const optionsWithIcons = [
      { label: 'Option 1', value: 'opt1', icon: <span data-testid="icon-1">🏠</span> },
      { label: 'Option 2', value: 'opt2', icon: <span data-testid="icon-2">📧</span> },
    ];
    
    render(<Segmented options={optionsWithIcons} />);
    
    expect(screen.getByTestId('icon-1')).toBeInTheDocument();
    expect(screen.getByTestId('icon-2')).toBeInTheDocument();
  });

  it('renders disabled option', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    const optionsWithDisabled = [
      { label: 'Option 1', value: 'opt1' },
      { label: 'Option 2', value: 'opt2', disabled: true },
    ];
    
    render(<Segmented options={optionsWithDisabled} onChange={handleChange} />);
    
    const disabledButton = screen.getByText('Option 2');
    await user.click(disabledButton);
    
    // Should not call onChange for disabled option
    expect(handleChange).not.toHaveBeenCalledWith('opt2');
  });

  it('renders fully disabled segmented', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Segmented options={mockOptions} disabled onChange={handleChange} />);
    
    const container = screen.getByText('Option 1').closest('div');
    expect(container).toHaveClass('opacity-50');
    
    await user.click(screen.getByText('Option 2'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Segmented options={mockOptions} size="sm" />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    rerender(<Segmented options={mockOptions} size="md" />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    rerender(<Segmented options={mockOptions} size="lg" />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders as block', () => {
    const { container } = render(<Segmented options={mockOptions} block />);
    
    const segmentedContainer = container.firstChild;
    expect(segmentedContainer).toHaveClass('w-full');
  });

  it('renders with custom className', () => {
    const { container } = render(<Segmented options={mockOptions} className="custom-segmented" />);
    
    expect(container.firstChild).toHaveClass('custom-segmented');
  });

  it('supports controlled value', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    const { rerender } = render(
      <Segmented options={mockOptions} value="opt1" onChange={handleChange} />,
    );
    
    await user.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('opt2');
    
    rerender(<Segmented options={mockOptions} value="opt2" onChange={handleChange} />);
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
