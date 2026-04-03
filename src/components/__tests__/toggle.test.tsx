import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Toggle } from '../toggle';

describe('Toggle', () => {
  it('renders toggle button', () => {
    render(<Toggle>Toggle Me</Toggle>);
    
    expect(screen.getByRole('button', { name: 'Toggle Me' })).toBeInTheDocument();
  });

  it('toggles state on click', async () => {
    const user = userEvent.setup();
    render(<Toggle>Toggle</Toggle>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-state', 'off');
    
    await user.click(button);
    expect(button).toHaveAttribute('data-state', 'on');
    
    await user.click(button);
    expect(button).toHaveAttribute('data-state', 'off');
  });

  it('renders with default pressed state', () => {
    render(<Toggle defaultPressed>Toggle</Toggle>);
    
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'on');
  });

  it('renders in disabled state', () => {
    render(<Toggle disabled>Toggle</Toggle>);
    
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Toggle size="sm">Small</Toggle>);
    expect(screen.getByRole('button')).toHaveClass('h-8');
    
    rerender(<Toggle size="md">Medium</Toggle>);
    expect(screen.getByRole('button')).toHaveClass('h-9');
    
    rerender(<Toggle size="lg">Large</Toggle>);
    expect(screen.getByRole('button')).toHaveClass('h-10');
  });

  it('renders different variants', () => {
    const { rerender } = render(<Toggle variant="default">Default</Toggle>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    
    rerender(<Toggle variant="outline">Outline</Toggle>);
    expect(screen.getByRole('button')).toHaveClass('border');
  });

  it('supports controlled state', async () => {
    const user = userEvent.setup();
    const TestComponent = () => {
      const [pressed, setPressed] = React.useState(false);
      
      return (
        <>
          <button onClick={() => setPressed(!pressed)}>External Toggle</button>
          <Toggle pressed={pressed} onPressedChange={setPressed}>
            Controlled
          </Toggle>
        </>
      );
    };

    render(<TestComponent />);
    
    const toggle = screen.getByRole('button', { name: 'Controlled' });
    expect(toggle).toHaveAttribute('data-state', 'off');
    
    await user.click(screen.getByText('External Toggle'));
    expect(toggle).toHaveAttribute('data-state', 'on');
  });
});
