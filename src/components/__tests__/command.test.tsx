import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '../command';

describe('Command', () => {
  it('renders command palette', () => {
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    
    expect(screen.getByPlaceholderText('Type a command...')).toBeInTheDocument();
  });

  it('renders command items', () => {
    render(
      <Command>
        <CommandInput />
        <CommandList>
          <CommandGroup>
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Settings</CommandItem>
            <CommandItem>Profile</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('filters items based on search input', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Settings</CommandItem>
            <CommandItem>Profile</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    
    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'cal');
    
    // Calendar should still be visible
    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });

  it('shows empty state when no results', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>Calendar</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    
    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'zzzzzzz');
    
    expect(screen.getByText('No results found.')).toBeInTheDocument();
  });

  it('triggers callback when item is selected', async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();
    
    render(
      <Command>
        <CommandInput />
        <CommandList>
          <CommandGroup>
            <CommandItem onSelect={handleSelect}>Calendar</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    
    await user.click(screen.getByText('Calendar'));
    
    expect(handleSelect).toHaveBeenCalled();
  });

  it('renders multiple groups', () => {
    render(
      <Command>
        <CommandInput />
        <CommandList>
          <CommandGroup heading="Navigation">
            <CommandItem>Home</CommandItem>
            <CommandItem>About</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Actions">
            <CommandItem>Save</CommandItem>
            <CommandItem>Delete</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(
      <Command>
        <CommandInput placeholder="Search commands or press ⌘K" />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    
    expect(screen.getByPlaceholderText('Search commands or press ⌘K')).toBeInTheDocument();
  });
});
