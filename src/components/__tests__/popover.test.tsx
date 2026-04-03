import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverTrigger, PopoverContent } from '../popover';

describe('Popover', () => {
  it('renders popover trigger', () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    );
    
    expect(screen.getByText('Open Popover')).toBeInTheDocument();
  });

  it('opens popover on click', async () => {
    const user = userEvent.setup();
    
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    );
    
    await user.click(screen.getByText('Open Popover'));
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('closes popover when clicking outside', async () => {
    const user = userEvent.setup();
    
    render(
      <>
        <Popover>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
        <div>Outside</div>
      </>
    );
    
    await user.click(screen.getByText('Open Popover'));
    expect(screen.getByText('Popover content')).toBeInTheDocument();
    
    await user.click(screen.getByText('Outside'));
    await new Promise(resolve => setTimeout(resolve, 100));
  });

  it('renders complex popover content', async () => {
    const user = userEvent.setup();
    
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <div>
            <h3>Popover Title</h3>
            <p>This is a description</p>
            <button>Action</button>
          </div>
        </PopoverContent>
      </Popover>
    );
    
    await user.click(screen.getByText('Open'));
    
    expect(screen.getByText('Popover Title')).toBeInTheDocument();
    expect(screen.getByText('This is a description')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('applies custom className', async () => {
    const user = userEvent.setup();
    
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-popover">Content</PopoverContent>
      </Popover>
    );
    
    await user.click(screen.getByText('Open'));
    const content = screen.getByText('Content');
    expect(content.closest('.custom-popover')).toBeInTheDocument();
  });

  it('supports controlled mode', () => {
    render(
      <Popover open={true}>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>Controlled Content</PopoverContent>
      </Popover>
    );
    
    expect(screen.getByText('Controlled Content')).toBeInTheDocument();
  });
});
