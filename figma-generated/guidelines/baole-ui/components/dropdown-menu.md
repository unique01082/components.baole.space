# DropdownMenu

## Purpose

A context menu attached to a trigger button showing a list of actions. Built on Radix UI DropdownMenu. Supports labels, separators, sub-menus, checkboxes, and radio groups inside the menu.

## When to Use

### ✅ Use DropdownMenu when:

- A button has 3+ related actions (Edit, Duplicate, Delete)
- Context actions for a table row, list item, or card (⋯ more button)
- Switching between profile, settings, logout options

### ❌ Don't use DropdownMenu when:

- Only 1–2 actions — show them as direct buttons
- User selects a value from options → Use `Select`
- Complex form → Use `Dialog` or `Popover`

## Installation

```typescript
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@baole/ui";
```

## Examples

```tsx
// Basic action menu
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button size="icon" variant="ghost">
      <MoreHorizontal size={16} />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-40">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => editItem(id)}>
      <Pencil size={14} className="mr-2" /> Edit
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => duplicateItem(id)}>
      <Copy size={14} className="mr-2" /> Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem
      onClick={() => deleteItem(id)}
      className="text-destructive focus:text-destructive"
    >
      <Trash size={14} className="mr-2" /> Delete
      <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Do's and Don'ts

### ✅ Do

- Place destructive actions (Delete) last, separated by a `DropdownMenuSeparator`
- Style destructive items with `text-destructive` class
- Use `align="end"` for menus triggered from the right side of a row/card
- Add keyboard shortcuts via `DropdownMenuShortcut` for power users

### ❌ Don't

- Don't put more than 10 items without sub-menus — users can't scan that many
- Don't use a DropdownMenu for a single action — it adds unnecessary friction
- Don't open modals directly from sub-menus — it's confusing UX
