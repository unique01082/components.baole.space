import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../sheet';

describe('Sheet', () => {
  it('renders sheet trigger', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    
    expect(screen.getByText('Open Sheet')).toBeInTheDocument();
  });

  it('opens sheet when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    
    await user.click(screen.getByText('Open Sheet'));
    
    expect(screen.getByText('Sheet Title')).toBeInTheDocument();
    expect(screen.getByText('Sheet description')).toBeInTheDocument();
  });

  // NOTE: Skipping due to Vaul library limitation in jsdom
  // Error: Cannot read properties of undefined (reading 'match') in getTranslate
  it.skip('closes sheet when close button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
          </SheetHeader>
          <SheetClose>Close</SheetClose>
        </SheetContent>
      </Sheet>,
    );
    
    await user.click(screen.getByText('Open Sheet'));
    expect(screen.getByText('Sheet Title')).toBeInTheDocument();
    
    await user.click(screen.getByText('Close'));
    
    await waitFor(() => {
      expect(screen.queryByText('Sheet Title')).not.toBeInTheDocument();
    });
  });

  it('supports controlled state', async () => {
    const user = userEvent.setup();
    const TestComponent = () => {
      const [open, setOpen] = React.useState(false);
      
      return (
        <>
          <button onClick={() => setOpen(true)}>External Open</button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Controlled Sheet</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </>
      );
    };

    render(<TestComponent />);
    
    await user.click(screen.getByText('External Open'));
    expect(screen.getByText('Controlled Sheet')).toBeInTheDocument();
  });

  it('renders sheet with custom content', async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Custom Sheet</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <p>Custom content here</p>
          </div>
        </SheetContent>
      </Sheet>,
    );
    
    await user.click(screen.getByText('Open'));
    
    expect(screen.getByText('Custom content here')).toBeInTheDocument();
  });
});
