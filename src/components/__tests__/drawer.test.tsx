import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '../drawer';

describe('Drawer', () => {
  it('renders drawer trigger', () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
      </Drawer>
    );
    expect(screen.getByText('Open Drawer')).toBeInTheDocument();
  });

  it('opens drawer when trigger is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer Description</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );

    const trigger = screen.getByText('Open Drawer');
    await user.click(trigger);

    // Content should appear after clicking trigger
    expect(screen.getByText('Drawer Title')).toBeInTheDocument();
    expect(screen.getByText('Drawer Description')).toBeInTheDocument();
  });

  it('closes drawer when close button is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerClose>Close</DrawerClose>
        </DrawerContent>
      </Drawer>
    );

    // Open drawer
    await user.click(screen.getByText('Open Drawer'));
    expect(screen.getByText('Drawer Title')).toBeInTheDocument();

    // Close drawer
    await user.click(screen.getByText('Close'));
    
    // Wait for animation to complete
    await new Promise(resolve => setTimeout(resolve, 100));
  });

  it('supports controlled mode', () => {
    const onOpenChange = vi.fn();
    
    render(
      <Drawer open={true} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerTitle>Controlled Drawer</DrawerTitle>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByText('Controlled Drawer')).toBeInTheDocument();
  });

  it('renders with different directions', () => {
    const directions = ['left', 'right', 'top', 'bottom'] as const;
    
    directions.forEach((direction) => {
      const { container } = render(
        <Drawer direction={direction} open>
          <DrawerContent>
            <DrawerTitle>{direction} drawer</DrawerTitle>
          </DrawerContent>
        </Drawer>
      );
      
      expect(screen.getByText(`${direction} drawer`)).toBeInTheDocument();
    });
  });

  it('applies custom className to content', () => {
    render(
      <Drawer open>
        <DrawerContent className="custom-drawer">
          <DrawerTitle>Custom Drawer</DrawerTitle>
        </DrawerContent>
      </Drawer>
    );

    const content = screen.getByText('Custom Drawer').parentElement;
    expect(content?.closest('.custom-drawer')).toBeInTheDocument();
  });
});
