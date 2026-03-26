# Kbd

## Purpose

Renders a styled keyboard key representation. Used in documentation, tooltips, command palettes, and context menus to display keyboard shortcuts in a consistent, visually distinct format.

## When to Use

### ✅ Use Kbd when:

- Documenting keyboard shortcuts in UI or documentation
- Showing shortcut hints inside tooltips or help text
- Displaying keyboard combinations in a Cmd+K command palette

### ❌ Don't use Kbd when:

- Regular text or code output is needed → Use `Code` or `<code>`
- A button that triggers a keyboard event is needed → Use `Button`

## Installation

```typescript
import { Kbd } from "@baolq/ui";
```

## Props API

| Prop        | Type                       | Default      | Description                       |
| ----------- | -------------------------- | ------------ | --------------------------------- |
| `size`      | `"sm"` \| `"md"` \| `"lg"` | `"md"`       | Key size                          |
| `className` | `string`                   | –            | Additional CSS classes            |
| `children`  | `React.ReactNode`          | **required** | Key label (e.g. `⌘`, `K`, `Ctrl`) |

## Examples

### Single Key

```tsx
<Kbd>⌘</Kbd>
<Kbd>K</Kbd>
<Kbd>Esc</Kbd>
<Kbd>Enter</Kbd>
<Kbd>Tab</Kbd>
```

### Key Combination

```tsx
<div className="flex items-center gap-1">
  <Kbd>⌘</Kbd>
  <span className="text-white/40 text-xs">+</span>
  <Kbd>K</Kbd>
</div>
```

### In a Tooltip

```tsx
<Tooltip
  content={
    <div className="flex items-center gap-1">
      Open command palette
      <div className="flex items-center gap-0.5 ml-2">
        <Kbd size="sm">⌘</Kbd>
        <Kbd size="sm">K</Kbd>
      </div>
    </div>
  }
>
  <Button variant="ghost" size="icon">
    <Search size={16} />
  </Button>
</Tooltip>
```

### In a ContextMenu Shortcut

```tsx
<ContextMenuItem>
  Save
  <div className="ml-auto flex items-center gap-0.5">
    <Kbd size="sm">⌘</Kbd>
    <Kbd size="sm">S</Kbd>
  </div>
</ContextMenuItem>
```

### Keyboard Shortcut Documentation

```tsx
<div className="space-y-3">
  {[
    { keys: ["⌘", "K"], description: "Open command palette" },
    { keys: ["⌘", "S"], description: "Save document" },
    { keys: ["⌘", "Z"], description: "Undo last action" },
    { keys: ["⌘", "Shift", "Z"], description: "Redo last action" },
  ].map(({ keys, description }) => (
    <div key={description} className="flex items-center justify-between">
      <span className="text-white/60 text-sm">{description}</span>
      <div className="flex items-center gap-1">
        {keys.map((k) => (
          <Kbd key={k} size="sm">
            {k}
          </Kbd>
        ))}
      </div>
    </div>
  ))}
</div>
```

## Do's and Don'ts

### ✅ Do

- Use `size="sm"` in tooltips and menus where space is limited
- Use platform-appropriate symbols (⌘ for Mac, Ctrl for Windows)
- Separate keys with a `+` or `-` character, not spaces

### ❌ Don't

- Don't write "Cmd+K" as plain text when `Kbd` is available — it's less scannable
- Don't make Kbd interactive — it's a display component only

## Accessibility

- Renders as `<kbd>` HTML element, which conveys its semantic meaning to screen readers
- Screen readers announce keyboard keys naturally from the `<kbd>` element
