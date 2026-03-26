# Tooltip

## Purpose

A brief, non-interactive floating label that appears on hover or focus. Built on Radix UI Tooltip. Used to clarify icon buttons, truncated text, or supplementary context.

## When to Use

### ✅ Use Tooltip when:

- An icon button needs a text label (icon-only buttons must have tooltips)
- Text is truncated and the full value is useful
- Short supplementary context (keyboard shortcut, field description)

### ❌ Don't use Tooltip when:

- Content is interactive (links, buttons, forms) → Use `Popover`
- Content is important enough to always show → Use `FormDescription` or inline text
- Mobile-only users (hover doesn't exist on touch)

## Installation

```typescript
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@baolq/ui";
```

> **Note:** Wrap your app (or the section using tooltips) in `<TooltipProvider>` once.

## Props API

### TooltipContent

| Prop            | Type                                           | Default        | Description            |
| --------------- | ---------------------------------------------- | -------------- | ---------------------- |
| `side`          | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"top"`        | Preferred side         |
| `align`         | `"start"` \| `"center"` \| `"end"`             | `"center"`     | Alignment              |
| `sideOffset`    | `number`                                       | `4`            | Gap from trigger (px)  |
| `delayDuration` | `number`                                       | `0` (provider) | ms before showing      |
| `className`     | `string`                                       | –              | Additional CSS classes |

## Examples

```tsx
// App root setup
<TooltipProvider delayDuration={300}>
  <App />
</TooltipProvider>

// Icon button tooltip
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon" variant="ghost" aria-label="Copy">
      <Copy size={16} />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Copy to clipboard</TooltipContent>
</Tooltip>

// With keyboard shortcut
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon" variant="ghost"><Bold size={16} /></Button>
  </TooltipTrigger>
  <TooltipContent>
    Bold <kbd className="ml-1">⌘B</kbd>
  </TooltipContent>
</Tooltip>
```

## Do's and Don'ts

### ✅ Do

- Always add a Tooltip to icon-only buttons (`aria-label` alone is not enough visually)
- Keep tooltip text under 60 characters — one brief phrase
- Include keyboard shortcuts in the tooltip when applicable

### ❌ Don't

- Don't put clickable elements (links, buttons) inside `TooltipContent`
- Don't use tooltips as the only label for critical UI elements — they're invisible on mobile
- Don't set `delayDuration={0}` globally — it causes tooltips to flash on accidental hover
