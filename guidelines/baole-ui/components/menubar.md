# Menubar

## Purpose

Horizontal application menu bar with support for nested submenus, checkbox items, and radio groups. Built on Radix UI Menubar. Typically used as a desktop app-style top menu.

## When to Use

### ✅ Use Menubar when:

- Building desktop-style application interfaces (File, Edit, View, Help menus)
- Grouping complex hierarchical commands under top-level categories
- Providing keyboard-accessible global application actions

### ❌ Don't use Menubar when:

- Site navigation is needed → Use NavigationMenu
- Single action list → Use DropdownMenu
- Mobile-first experience → Use Drawer or Sheet with a nav list

## Installation

```typescript
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "@baolq/ui";
```

## Props API

| Component             | Key Props                    | Description                             |
| --------------------- | ---------------------------- | --------------------------------------- |
| `MenubarItem`         | `inset`, `disabled`          | Basic menu action                       |
| `MenubarCheckboxItem` | `checked`, `onCheckedChange` | Toggleable menu item                    |
| `MenubarRadioItem`    | `value`                      | Radio selection within a group          |
| `MenubarRadioGroup`   | `value`, `onValueChange`     | Groups radio items                      |
| `MenubarSubTrigger`   | `inset`                      | Opens a nested submenu                  |
| `MenubarShortcut`     | –                            | Keyboard shortcut label (right-aligned) |

## Examples

### Basic Application Menu

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New File <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Open... <MenubarShortcut>⌘O</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Save <MenubarShortcut>⌘S</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Exit</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Cut <MenubarShortcut>⌘X</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Copy <MenubarShortcut>⌘C</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Paste <MenubarShortcut>⌘V</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
      <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarLabel>Theme</MenubarLabel>
      <MenubarRadioGroup value="dark">
        <MenubarRadioItem value="light">Light</MenubarRadioItem>
        <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
        <MenubarRadioItem value="system">System</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### With Nested Submenu

```tsx
<MenubarMenu>
  <MenubarTrigger>Insert</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>Image</MenubarItem>
    <MenubarSub>
      <MenubarSubTrigger>Table</MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarItem>2×2</MenubarItem>
        <MenubarItem>3×3</MenubarItem>
        <MenubarItem>Custom...</MenubarItem>
      </MenubarSubContent>
    </MenubarSub>
    <MenubarItem>Code Block</MenubarItem>
  </MenubarContent>
</MenubarMenu>
```

## Do's and Don'ts

### ✅ Do

- Add `MenubarShortcut` to items that have keyboard shortcuts
- Group related items with `MenubarLabel` and `MenubarSeparator`
- Keep each top-level menu to ≤ 10 items

### ❌ Don't

- Don't use Menubar for site nav — it's for app-level actions
- Don't nest submenus more than 2 levels deep
- Don't add icons inside menubar items without consistent use

## Accessibility

- Full keyboard support: arrow keys navigate between menus and items
- Enter/Space opens menus; Escape closes
- `MenubarCheckboxItem` and `MenubarRadioItem` announce state to screen readers
