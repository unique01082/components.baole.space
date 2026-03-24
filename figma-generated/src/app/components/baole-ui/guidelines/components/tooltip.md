# Tooltip

## Purpose

Display contextual hints and additional information on hover. Tooltips provide non-essential information to help users understand UI elements without cluttering the interface.

## When to Use

- **Icon-only buttons** - Explain button purpose
- **Truncated text** - Show full text on hover
- **Help text** - Provide additional context
- **Keyboard shortcuts** - Display shortcut keys
- **Disabled elements** - Explain why element is disabled

### What NOT to Use Tooltip For

- **Essential information** - Use visible labels or Alert
- **Complex content** - Use Popover or HoverCard
- **Interactive elements** - Use Popover
- **Mobile interfaces** - No hover on touch devices

---

## Installation

```typescript
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@baole/ui'
```

---

## Setup

Wrap your app or component tree with `TooltipProvider`:

```tsx
<TooltipProvider>
  <YourApp />
</TooltipProvider>
```

---

## Props API

### Tooltip

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Uncontrolled default state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when state changes |
| `delayDuration` | `number` | `200` | Delay before showing (ms) |

### TooltipContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Tooltip position |
| `sideOffset` | `number` | `4` | Distance from trigger |

---

## Examples

### Basic Tooltip

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <Settings size={20} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Settings</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Icon Button with Tooltip

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Trash2 size={20} />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Delete item</p>
  </TooltipContent>
</Tooltip>
```

### With Keyboard Shortcut

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Search size={20} />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p className="flex items-center gap-2">
      Search
      <kbd className="px-2 py-1 text-xs bg-[var(--color-bg-elevated)] rounded border border-[var(--color-border)]">
        ⌘K
      </kbd>
    </p>
  </TooltipContent>
</Tooltip>
```

### Position

```tsx
<div className="flex gap-2">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Top tooltip</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Right</Button>
    </TooltipTrigger>
    <TooltipContent side="right">
      <p>Right tooltip</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <p>Bottom tooltip</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Left</Button>
    </TooltipTrigger>
    <TooltipContent side="left">
      <p>Left tooltip</p>
    </TooltipContent>
  </Tooltip>
</div>
```

### Disabled Element

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    {/* Wrap disabled element in span */}
    <span>
      <Button disabled>
        Save
      </Button>
    </span>
  </TooltipTrigger>
  <TooltipContent>
    <p>Please fill all required fields</p>
  </TooltipContent>
</Tooltip>
```

### With Delay

```tsx
<Tooltip delayDuration={500}>
  <TooltipTrigger asChild>
    <Button>Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Appears after 500ms</p>
  </TooltipContent>
</Tooltip>
```

---

## Do's and Don'ts

### ✅ Do

- Use for non-essential information
- Keep tooltip content concise (1-2 lines)
- Use for icon-only buttons
- Show keyboard shortcuts
- Position appropriately to avoid covering content

```tsx
// ✅ Good - Icon button with clear tooltip
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon" aria-label="Delete">
      <Trash2 size={20} />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Delete item</p>
  </TooltipContent>
</Tooltip>
```

### ❌ Don't

- Don't use for essential information
- Don't use on mobile (no hover)
- Don't make tooltips too long
- Don't use for interactive content
- Don't forget `aria-label` on tooltip trigger

```tsx
// ❌ Bad - Essential information in tooltip
<Tooltip>
  <TooltipTrigger>
    <Button>Submit</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This will permanently delete all your data and cannot be undone.</p>
  </TooltipContent>
</Tooltip>

// ✅ Better - Use Dialog for important info
<Dialog>
  <DialogTrigger asChild>
    <Button>Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This will permanently delete all your data.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

---

## Common Patterns

### Toolbar Buttons

```tsx
<div className="flex gap-1 border-b border-[var(--color-border)] p-2">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="sm" variant="ghost">
        <Bold size={16} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Bold (⌘B)</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="sm" variant="ghost">
        <Italic size={16} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Italic (⌘I)</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="sm" variant="ghost">
        <Underline size={16} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Underline (⌘U)</TooltipContent>
  </Tooltip>
</div>
```

### Truncated Text

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <div className="max-w-[200px]">
      <p className="truncate">
        This is a very long text that will be truncated
      </p>
    </div>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a very long text that will be truncated</p>
  </TooltipContent>
</Tooltip>
```

### Help Icon

```tsx
<div className="flex items-center gap-2">
  <Label>API Key</Label>
  <Tooltip>
    <TooltipTrigger asChild>
      <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
        <Info size={16} />
      </button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs">
      <p>Your API key is used to authenticate requests. Keep it secure.</p>
    </TooltipContent>
  </Tooltip>
</div>
```

---

**Related Components:**
- [Popover](./popover.md) - For interactive content
- [HoverCard](./hover-card.md) - For richer hover content
- [Button](./button.md) - Often used with tooltips
