import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleGroup, ToggleGroupItem } from '../toggle-group';

describe('ToggleGroup', () => {
  it('renders toggle group with items', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      </ToggleGroup>,
    );
    
    expect(screen.getByRole('radio', { name: 'Option 1' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Option 2' })).toBeInTheDocument();
  });

  it('allows selecting single item', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      </ToggleGroup>,
    );
    
    const button1 = screen.getByRole('radio', { name: 'Option 1' });
    const button2 = screen.getByRole('radio', { name: 'Option 2' });
    
    await user.click(button1);
    expect(button1).toHaveAttribute('data-state', 'on');
    expect(button2).toHaveAttribute('data-state', 'off');
    
    await user.click(button2);
    expect(button1).toHaveAttribute('data-state', 'off');
    expect(button2).toHaveAttribute('data-state', 'on');
  });

  it('allows selecting multiple items', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
        <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
      </ToggleGroup>,
    );
    
    const button1 = screen.getByRole('button', { name: 'Option 1' });
    const button2 = screen.getByRole('button', { name: 'Option 2' });
    
    await user.click(button1);
    await user.click(button2);
    
    expect(button1).toHaveAttribute('data-state', 'on');
    expect(button2).toHaveAttribute('data-state', 'on');
  });

  it('renders with default value', () => {
    render(
      <ToggleGroup type="single" defaultValue="option2">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      </ToggleGroup>,
    );
    
    expect(screen.getByRole('radio', { name: 'Option 2' })).toHaveAttribute(
      'data-state',
      'on',
    );
  });

  it('renders disabled toggle group', () => {
    render(
      <ToggleGroup type="single" disabled>
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      </ToggleGroup>,
    );
    
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('renders with different variants', () => {
    render(
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      </ToggleGroup>,
    );
    
    expect(screen.getByRole('radio')).toHaveClass('border');
  });

  it('renders with different sizes', () => {
    render(
      <ToggleGroup type="single" size="lg">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      </ToggleGroup>,
    );
    
    expect(screen.getByRole('radio')).toHaveClass('h-10');
  });
});
