# Toggle

## Purpose

A single binary toggle button built on Radix UI Toggle. Switches between pressed and unpressed states. Useful for formatting controls, view switches, or any on/off binary action.

## When to Use

### ✅ Use Toggle when:

- Activating a single formatting option (Bold, Italic, Underline)
- Switching a single feature on/off within a toolbar
- Representing a binary state that doesn't need a label beside it

### ❌ Don't use Toggle when:

- Multiple mutually exclusive options → Use ToggleGroup or Segmented
- The toggle controls a system preference → Use Switch (designed for on/off settings)
- The action is a one-time trigger → Use Button

## Installation

```typescript
import { Toggle } from "@baolq/ui";
```

## Props API

| Prop              | Type                         | Default     | Description                          |
| ----------------- | ---------------------------- | ----------- | ------------------------------------ |
| `pressed`         | `boolean`                    | –           | Controlled pressed state             |
| `defaultPressed`  | `boolean`                    | `false`     | Initial pressed state (uncontrolled) |
| `onPressedChange` | `(pressed: boolean) => void` | –           | Called on state change               |
| `variant`         | `"default"` \| `"outline"`   | `"default"` | Visual style                         |
| `size`            | `"sm"` \| `"md"` \| `"lg"`   | `"md"`      | Size                                 |
| `disabled`        | `boolean`                    | `false`     | Disables the toggle                  |
| `className`       | `string`                     | –           | Additional CSS classes               |
| `asChild`         | `boolean`                    | `false`     | Renders as child element             |

## Examples

### Basic Usage

```tsx
<Toggle>Bold</Toggle>
```

### With Icon

```tsx
import { Bold, Italic, Underline } from "lucide-react";

<Toggle aria-label="Toggle bold">
  <Bold size={16} />
</Toggle>;
```

### Controlled State

```tsx
import { useState } from "react";

function BoldToggle() {
  const [pressed, setPressed] = useState(false);

  return (
    <Toggle
      pressed={pressed}
      onPressedChange={setPressed}
      aria-label="Toggle bold"
    >
      <Bold size={16} />
    </Toggle>
  );
}
```

### Text Formatting Toolbar

```tsx
import { Bold, Italic, Underline } from "lucide-react";

function FormattingToolbar() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div className="flex gap-1 p-1 border border-white/10 rounded-lg">
      <Toggle
        pressed={bold}
        onPressedChange={setBold}
        size="sm"
        aria-label="Toggle bold"
      >
        <Bold size={14} />
      </Toggle>
      <Toggle
        pressed={italic}
        onPressedChange={setItalic}
        size="sm"
        aria-label="Toggle italic"
      >
        <Italic size={14} />
      </Toggle>
      <Toggle
        pressed={underline}
        onPressedChange={setUnderline}
        size="sm"
        aria-label="Toggle underline"
      >
        <Underline size={14} />
      </Toggle>
    </div>
  );
}
```

### Outline Variant

```tsx
<Toggle variant="outline" aria-label="Toggle grid view">
  <Grid size={16} />
</Toggle>
```

## Do's and Don'ts

### ✅ Do

- Always provide `aria-label` on icon-only Toggles
- Use `size="sm"` inside toolbars to keep them compact
- Group related Toggles visually with consistent spacing

### ❌ Don't

- Don't use Toggle for navigation — use Button with active state styling
- Don't use more than 5 independent Toggles in a row — use ToggleGroup

## Accessibility

- Has `aria-pressed` managed by Radix UI
- Keyboard: Space/Enter toggles the state
- Include meaningful `aria-label` for icon-only toggles
