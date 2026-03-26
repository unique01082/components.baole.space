# ColorPicker

## Purpose

Interactive color selection with preset color swatches and an optional hex input field. Returns hex color strings. Suitable for theme customization, avatar color selection, and any UI that lets users pick colors.

## When to Use

### ✅ Use ColorPicker when:

- Users need to select or customize brand/accent colors
- Tagging or labeling items with a color (project color, calendar event color)
- Building a theme or personalization panel

### ❌ Don't use ColorPicker when:

- Only predefined color options exist → Use a styled RadioGroup or Select
- A full spectrum picker is needed without presets → Use a native `<input type="color">`
- Color is decorative only and users shouldn't change it

## Installation

```typescript
import { ColorPicker } from "@baolq/ui";
```

## Props API

| Prop           | Type                      | Default | Description                                   |
| -------------- | ------------------------- | ------- | --------------------------------------------- |
| `value`        | `string`                  | –       | Controlled hex color value (e.g. `"#6366f1"`) |
| `onChange`     | `(color: string) => void` | –       | Called when color changes                     |
| `presetColors` | `string[]`                | `[]`    | Array of hex colors shown as swatches         |
| `showInput`    | `boolean`                 | `true`  | Show hex input field                          |
| `disabled`     | `boolean`                 | `false` | Disables all interaction                      |
| `className`    | `string`                  | –       | Additional CSS classes                        |

## Examples

### Basic Usage

```tsx
import { useState } from "react";

function ThemeColor() {
  const [color, setColor] = useState("#6366f1");

  return <ColorPicker value={color} onChange={setColor} />;
}
```

### With Preset Swatches

```tsx
const BRAND_COLORS = [
  '#6366f1', '#8b5cf6', '#ec4899',
  '#f43f5e', '#f97316', '#eab308',
  '#22c55e', '#06b6d4', '#3b82f6',
]

<ColorPicker
  value={selectedColor}
  onChange={setSelectedColor}
  presetColors={BRAND_COLORS}
/>
```

### Without Hex Input (swatches only)

```tsx
<ColorPicker
  value={color}
  onChange={setColor}
  presetColors={BRAND_COLORS}
  showInput={false}
/>
```

### Label Color for Tags

```tsx
<div className="space-y-2">
  <Label>Tag Color</Label>
  <div className="flex items-center gap-3">
    <ColorPicker
      value={tagColor}
      onChange={setTagColor}
      presetColors={TAG_COLORS}
    />
    <div
      className="px-3 py-1 rounded-full text-sm font-medium"
      style={{ backgroundColor: tagColor }}
    >
      Preview Tag
    </div>
  </div>
</div>
```

## Do's and Don'ts

### ✅ Do

- Provide `presetColors` for consistent branded options
- Show a preview swatch of the selected color alongside the picker
- Validate hex values before using them in styles

### ❌ Don't

- Don't use ColorPicker for functional data (status, severity) → Use Select with color-coded options
- Don't expose a full-spectrum picker without presets — it creates inconsistent UX
- Don't use color alone to convey meaning (WCAG accessibility)

## Accessibility

- Color swatches should have `aria-label` with the color name or hex value
- Hex input allows direct entry for users who know their values
- Color selection alone is never the only way to distinguish UI states
