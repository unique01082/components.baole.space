import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../collapsible';

describe('Collapsible', () => {
  it('renders collapsible with trigger and content', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content to collapse</CollapsibleContent>
      </Collapsible>,
    );
    
    expect(screen.getByText('Toggle')).toBeInTheDocument();
  });

  it('toggles content visibility', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Collapsible content</CollapsibleContent>
      </Collapsible>,
    );
    
    const trigger = screen.getByText('Toggle');
    
    // Initially closed
    expect(trigger).toHaveAttribute('data-state', 'closed');
    
    // Click to open
    await user.click(trigger);
    expect(trigger).toHaveAttribute('data-state', 'open');
    
    // Click to close
    await user.click(trigger);
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('renders with default open state', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Collapsible content</CollapsibleContent>
      </Collapsible>,
    );
    
    expect(screen.getByText('Toggle')).toHaveAttribute('data-state', 'open');
  });

  it('supports controlled state', async () => {
    const user = userEvent.setup();
    const TestComponent = () => {
      const [open, setOpen] = React.useState(false);
      
      return (
        <>
          <button onClick={() => setOpen(!open)}>External Toggle</button>
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger>Toggle</CollapsibleTrigger>
            <CollapsibleContent>Controlled content</CollapsibleContent>
          </Collapsible>
        </>
      );
    };

    render(<TestComponent />);
    
    const trigger = screen.getByText('Toggle');
    expect(trigger).toHaveAttribute('data-state', 'closed');
    
    await user.click(screen.getByText('External Toggle'));
    expect(trigger).toHaveAttribute('data-state', 'open');
  });

  it('renders disabled collapsible', () => {
    render(
      <Collapsible disabled>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>,
    );
    
    expect(screen.getByText('Toggle')).toHaveAttribute('data-disabled');
  });

  it('shows content when open', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible>
        <CollapsibleTrigger>Show More</CollapsibleTrigger>
        <CollapsibleContent>
          <div>Hidden content revealed!</div>
        </CollapsibleContent>
      </Collapsible>,
    );
    
    await user.click(screen.getByText('Show More'));
    
    expect(screen.getByText('Hidden content revealed!')).toBeInTheDocument();
  });
});
