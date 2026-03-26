# Slider

## Purpose

A range slider input built on Radix UI Slider. Supports single-thumb and range (two-thumb) modes.

## When to Use

### ✅ Use Slider when:

- User selects a value within a continuous numeric range
- Approximate values are acceptable (volume, brightness, price range)
- The range bounds are visible and the relationship between min/max matters

### ❌ Don't use Slider when:

- Exact numeric input is required → Use `InputNumber`
- Discrete small set of choices → Use `Select` or `RadioGroup`

## Installation

```typescript
import { Slider } from "@baolq/ui";
```

## Props API

| Prop            | Type                        | Default  | Description                                                  |
| --------------- | --------------------------- | -------- | ------------------------------------------------------------ |
| `value`         | `number[]`                  | –        | Controlled value(s). `[50]` for single, `[20, 80]` for range |
| `onValueChange` | `(value: number[]) => void` | –        | Called on change                                             |
| `onValueCommit` | `(value: number[]) => void` | –        | Called when thumb released                                   |
| `min`           | `number`                    | `0`      | Minimum value                                                |
| `max`           | `number`                    | `100`    | Maximum value                                                |
| `step`          | `number`                    | `1`      | Increment step                                               |
| `disabled`      | `boolean`                   | `false`  | Disables the slider                                          |
| `showTooltip`   | `boolean`                   | `true`   | Show value tooltip above thumb                               |
| `showTicks`     | `boolean`                   | `false`  | Show tick marks at step intervals                            |
| `label`         | `string`                    | –        | Label above the slider                                       |
| `formatValue`   | `(v: number) => string`     | `String` | Custom value formatter                                       |
| `className`     | `string`                    | –        | Additional CSS classes                                       |

## Examples

```tsx
// Single value
<Slider value={[volume]} onValueChange={([v]) => setVolume(v)} label="Volume" />

// Range
<Slider
  value={priceRange}
  onValueChange={setPriceRange}
  min={0}
  max={1000}
  step={10}
  formatValue={(v) => `$${v}`}
  label="Price range"
/>

// With tick marks
<Slider value={[rating]} onValueChange={([v]) => setRating(v)} min={1} max={5} step={1} showTicks />
```

## Do's and Don'ts

### ✅ Do

- Always show the current value (tooltip or adjacent display)
- Use `onValueCommit` for expensive operations (API calls) to avoid firing on every drag step

### ❌ Don't

- Don't use sliders for tiny ranges (1–3 values) — radio buttons are clearer
- Don't set `step` so small that moving the slider by 1px changes value imperceptibly
