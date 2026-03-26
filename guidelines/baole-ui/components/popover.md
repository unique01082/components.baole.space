# Popover

## Purpose

A floating content panel anchored to a trigger element. Built on Radix UI Popover. Unlike Tooltip, Popover is interactive — it can contain forms, buttons, pickers, and links.

## When to Use

### ✅ Use Popover when:

- Interactive content needs to float near its trigger (date picker, color picker, filter panel)
- Secondary actions or details relevant to one element
- Compact menus or action panels attached to a specific UI element

### ❌ Don't use Popover when:

- Read-only description → Use `Tooltip` (hover-triggered, no interaction)
- Many items that need a list → Use `DropdownMenu`
- Full workflow → Use `Dialog`

## Installation

```typescript
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@baolq/ui";
```

## Props API

### PopoverContent

| Prop         | Type                                           | Default    | Description                |
| ------------ | ---------------------------------------------- | ---------- | -------------------------- |
| `side`       | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"bottom"` | Preferred side             |
| `align`      | `"start"` \| `"center"` \| `"end"`             | `"center"` | Alignment along the side   |
| `sideOffset` | `number`                                       | `4`        | Distance from trigger (px) |
| `className`  | `string`                                       | –          | Additional CSS classes     |

## Examples

```tsx
// Filter popover
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Filter size={16} /> Filters
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="flex flex-col gap-3">
      <h4 className="font-semibold text-sm">Filter options</h4>
      <Select label="Status" options={statusOptions} />
      <Select label="Category" options={categoryOptions} />
      <Button size="sm">Apply</Button>
    </div>
  </PopoverContent>
</Popover>
```

## Do's and Don'ts

### ✅ Do

- Keep Popover content focused — max one task or decision
- Use `sideOffset={8}` for a comfortable gap from the trigger
- Support Escape key close (Radix handles this automatically)

### ❌ Don't

- Don't nest a Popover inside a Popover
- Don't put long scrolling lists in a Popover — use a Dialog
- Don't use Popover for simple labels — Tooltip is lighter
