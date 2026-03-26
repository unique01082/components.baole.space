# Collapsible

## Purpose

Simple show/hide container. A low-level primitive for toggling visibility of content. Built on Radix UI Collapsible. Use when you need a single expandable area without the full Accordion treatment.

## When to Use

### ✅ Use Collapsible when:

- Toggling a single section independently (e.g., "Advanced options")
- Building custom expandable UI without accordion constraints
- Showing supplementary content that's hidden by default

### ❌ Don't use Collapsible when:

- Multiple sections that open/close together → Use Accordion
- You need animation and variant styling → Use Accordion
- The toggle is inside a list item → Use Accordion

## Installation

```typescript
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@baolq/ui";
```

## Props API

### Collapsible

| Prop           | Type                      | Default | Description                       |
| -------------- | ------------------------- | ------- | --------------------------------- |
| `open`         | `boolean`                 | –       | Controlled open state             |
| `defaultOpen`  | `boolean`                 | `false` | Initial open state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | –       | Called when state changes         |
| `disabled`     | `boolean`                 | `false` | Prevents toggling                 |
| `className`    | `string`                  | –       | Additional CSS classes            |

### CollapsibleTrigger

Renders as a `<button>` by default. Use `asChild` to render as another element.

### CollapsibleContent

Animates height from 0 to auto when opened.

## Examples

### Basic Toggle

```tsx
import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";

function AdvancedOptions() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          Advanced Options
          <ChevronsUpDown size={16} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 pt-2">
        <Input label="API Key" placeholder="sk-..." />
        <Input label="Timeout (ms)" placeholder="5000" />
      </CollapsibleContent>
    </Collapsible>
  );
}
```

### Uncontrolled with Default Open

```tsx
<Collapsible defaultOpen>
  <CollapsibleTrigger>
    <Button variant="ghost">Toggle Details</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p className="text-white/70 text-sm pt-2">
      This content is visible by default.
    </p>
  </CollapsibleContent>
</Collapsible>
```

### In a Settings Panel

```tsx
<Card>
  <CardContent className="p-4 space-y-2">
    <Collapsible>
      <div className="flex items-center justify-between">
        <h4 className="text-white font-medium">Notifications</h4>
        <CollapsibleTrigger asChild>
          <Button size="icon" variant="ghost">
            <Settings size={16} />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-3 space-y-2">
        <Switch label="Email notifications" />
        <Switch label="Push notifications" />
      </CollapsibleContent>
    </Collapsible>
  </CardContent>
</Card>
```

## Do's and Don'ts

### ✅ Do

- Use `asChild` on `CollapsibleTrigger` when the trigger is a custom button
- Prefer `Collapsible` over `{isOpen && ...}` for smooth animation
- Use for single toggle sections; use `Accordion` for multiple

### ❌ Don't

- Don't put the trigger inside the content
- Don't forget to handle `open`/`onOpenChange` when using controlled mode

## Accessibility

- Trigger has `aria-expanded` managed by Radix
- Content region has `aria-hidden` when collapsed
- Keyboard: Enter/Space on the trigger toggles the content
