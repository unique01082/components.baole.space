# ContextMenu

## Purpose

A right-click context menu with rich submenu, checkbox, and radio group support. Triggered by right-clicking (or long-press on touch) the wrapped element. Built on Radix UI ContextMenu primitives.

## When to Use

### ✅ Use ContextMenu when:

- Right-click actions on table rows, files, canvas items, or cards
- Providing secondary actions that would clutter the primary UI
- Power-user workflows where right-click is a natural pattern (file managers, editors)

### ❌ Don't use ContextMenu when:

- Primary actions should be visible at all times → Use Buttons or DropdownMenu
- Mobile is the primary target (right-click doesn't work well on touch)
- The user population isn't expected to discover right-click patterns

## Installation

```typescript
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuShortcut,
} from "@baolq/ui";
```

## Props API

### ContextMenuItem

| Prop       | Type                 | Default | Description                          |
| ---------- | -------------------- | ------- | ------------------------------------ |
| `onSelect` | `(e: Event) => void` | –       | Called when item is selected         |
| `disabled` | `boolean`            | `false` | Grays out and disables the item      |
| `inset`    | `boolean`            | `false` | Adds left padding for icon alignment |

### ContextMenuCheckboxItem

| Prop              | Type                         | Description            |
| ----------------- | ---------------------------- | ---------------------- |
| `checked`         | `boolean`                    | Controlled check state |
| `onCheckedChange` | `(checked: boolean) => void` | Called on change       |

### ContextMenuRadioGroup / ContextMenuRadioItem

| Prop            | Type                      | Description                      |
| --------------- | ------------------------- | -------------------------------- |
| `value`         | `string`                  | Controlled value (on RadioGroup) |
| `onValueChange` | `(value: string) => void` | Called on change                 |

## Examples

### File Manager Context Menu

```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <FileCard file={file} />
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem onSelect={() => openFile(file)}>
      Open
      <ContextMenuShortcut>⌘O</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem onSelect={() => renameFile(file)}>
      Rename
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem onSelect={() => copyLink(file)}>
          Copy Link
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => shareViaEmail(file)}>
          Email
        </ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem
      onSelect={() => deleteFile(file)}
      className="text-red-400 focus:text-red-400"
    >
      Delete
      <ContextMenuShortcut>⌫</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### With Checkbox Items

```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div className="p-6 border border-white/10 rounded-xl">Right click me</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>View Options</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
      Show Grid
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem checked={showRuler} onCheckedChange={setShowRuler}>
      Show Ruler
    </ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>
```

### With Radio Group

```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <TableRow>{/* ... */}</TableRow>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Status</ContextMenuLabel>
    <ContextMenuRadioGroup value={status} onValueChange={setStatus}>
      <ContextMenuRadioItem value="active">Active</ContextMenuRadioItem>
      <ContextMenuRadioItem value="inactive">Inactive</ContextMenuRadioItem>
      <ContextMenuRadioItem value="pending">Pending</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>
```

## Do's and Don'ts

### ✅ Do

- Use `ContextMenuShortcut` to remind users of keyboard shortcuts
- Group related actions with `ContextMenuSeparator` and `ContextMenuLabel`
- Use submenus (`ContextMenuSub`) for secondary or less-used actions

### ❌ Don't

- Don't put primary actions only in a context menu — they won't be discovered
- Don't have more than 8–10 items before grouping into submenus
- Don't use destructive actions (delete, archive) at the top of the menu

## Accessibility

- Menu has `role="menu"` with `role="menuitem"` children
- Keyboard: Enter opens, arrow keys navigate, Escape closes
- Screen readers announce item labels and keyboard shortcut hints
