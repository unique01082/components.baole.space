# Command

## Purpose

A searchable command palette with Cmd+K keyboard shortcut support. Built on `cmdk`. Provides filtered lists of commands, actions, or navigation items. Can be shown inline or inside a `CommandDialog` overlay.

## When to Use

### ✅ Use Command when:

- Building a Cmd+K / Ctrl+K search palette
- Providing quick access to navigation, actions, or recent items
- Implementing searchable settings or feature discovery

### ❌ Don't use Command when:

- A simple dropdown is sufficient → Use Select or DropdownMenu
- The list doesn't need search/filtering → Use NavigationMenu or DropdownMenu
- Freeform text input is needed → Use AutoComplete

## Installation

```typescript
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@baolq/ui";
```

## Props API

### CommandItem

| Prop        | Type                      | Default | Description                                      |
| ----------- | ------------------------- | ------- | ------------------------------------------------ |
| `onSelect`  | `(value: string) => void` | –       | Called when item is selected                     |
| `value`     | `string`                  | –       | Searchable value (uses children text if omitted) |
| `disabled`  | `boolean`                 | `false` | Disables this item                               |
| `className` | `string`                  | –       | Additional CSS classes                           |

### CommandDialog

Wraps `Command` in a Dialog overlay, triggered programmatically.

| Prop           | Type                      | Description                |
| -------------- | ------------------------- | -------------------------- |
| `open`         | `boolean`                 | Controls dialog visibility |
| `onOpenChange` | `(open: boolean) => void` | Called on open/close       |

## Examples

### Cmd+K Palette

```tsx
import { useEffect, useState } from "react";
import { Search, FileText, Settings, User, LogOut } from "lucide-react";

function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => {
              navigate("/dashboard");
              setOpen(false);
            }}
          >
            <FileText size={16} className="mr-2" />
            Dashboard
          </CommandItem>
          <CommandItem
            onSelect={() => {
              navigate("/settings");
              setOpen(false);
            }}
          >
            <Settings size={16} className="mr-2" />
            Settings
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Account">
          <CommandItem
            onSelect={() => {
              navigate("/profile");
              setOpen(false);
            }}
          >
            <User size={16} className="mr-2" />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={handleLogout}>
            <LogOut size={16} className="mr-2" />
            Log Out
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
```

### Inline Command (No Dialog)

```tsx
<Command className="rounded-lg border border-white/10 w-[400px]">
  <CommandInput placeholder="Search components..." />
  <CommandList>
    <CommandEmpty>No components found.</CommandEmpty>
    <CommandGroup heading="Components">
      {components.map((c) => (
        <CommandItem key={c.id} value={c.name} onSelect={() => console.log(c)}>
          {c.name}
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>
```

### Keyboard Shortcut Hint

```tsx
<div className="flex items-center gap-2">
  <button onClick={() => setOpen(true)} className="...">
    <Search size={16} />
    <span>Search</span>
    <kbd className="ml-auto text-xs bg-white/10 px-1.5 py-0.5 rounded border border-white/20">
      ⌘K
    </kbd>
  </button>
</div>
```

## Do's and Don'ts

### ✅ Do

- Register the `keydown` listener at the document level to catch Cmd+K everywhere
- Always include `CommandEmpty` for the "no results" state
- Use `CommandShortcut` to display keyboard hints within items
- Group related commands under named `CommandGroup` sections

### ❌ Don't

- Don't populate the command list with more than ~50 items — search becomes meaningless
- Don't use CommandDialog for settings forms — use Dialog instead
- Don't close CommandDialog on `onSelect` without navigating or performing the action

## Accessibility

- Dialog traps focus when open; Escape closes it
- `CommandInput` is auto-focused when opened
- Arrow keys navigate items; Enter selects; screen readers announce active item
