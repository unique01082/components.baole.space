# InputNumber

## Purpose

Numeric input with increment/decrement step buttons, min/max constraints, precision formatting, and custom value formatters. Prevents non-numeric input.

## When to Use

### ✅ Use InputNumber when:

- Quantity selectors (items in cart, seat count)
- Settings with numeric constraints (retry limit, timeout, pagination size)
- Financial inputs requiring precision (price, percentage)

### ❌ Don't use InputNumber when:

- A range slider is more intuitive → Use `Slider`
- Free-form numeric text is fine with no constraints → Use plain `Input type="number"`
- Only a few options exist → Use `Select`

## Installation

```typescript
import { InputNumber } from "@baolq/ui";
```

## Props API

| Prop           | Type                                   | Default | Description                  |
| -------------- | -------------------------------------- | ------- | ---------------------------- |
| `value`        | `number`                               | –       | Controlled value             |
| `defaultValue` | `number`                               | –       | Initial value (uncontrolled) |
| `onChange`     | `(value: number \| undefined) => void` | –       | Called when value changes    |
| `min`          | `number`                               | –       | Minimum allowed value        |
| `max`          | `number`                               | –       | Maximum allowed value        |
| `step`         | `number`                               | `1`     | Increment/decrement amount   |
| `precision`    | `number`                               | –       | Decimal places to display    |
| `formatter`    | `(value: number) => string`            | –       | Custom display formatter     |
| `parser`       | `(value: string) => number`            | –       | Custom input parser          |
| `controls`     | `boolean`                              | `true`  | Show +/- buttons             |
| `disabled`     | `boolean`                              | `false` | Disables the input           |
| `placeholder`  | `string`                               | –       | Placeholder text             |
| `className`    | `string`                               | –       | Additional CSS classes       |

## Examples

### Basic Quantity

```tsx
<InputNumber min={1} max={99} defaultValue={1} />
```

### Price Input (formatter)

```tsx
<InputNumber
  min={0}
  precision={2}
  formatter={(val) => `$ ${val}`}
  parser={(val) => parseFloat(val.replace("$ ", ""))}
  placeholder="0.00"
/>
```

### Percentage

```tsx
<InputNumber
  min={0}
  max={100}
  formatter={(val) => `${val}%`}
  parser={(val) => parseFloat(val.replace("%", ""))}
/>
```

### With Step

```tsx
<InputNumber min={0} max={1} step={0.1} precision={1} defaultValue={0.5} />
```

### No Controls (keyboard only)

```tsx
<InputNumber controls={false} min={1} max={100} placeholder="Enter number" />
```

### In a Form

```tsx
<div className="space-y-1.5">
  <Label htmlFor="qty" required>
    Quantity
  </Label>
  <InputNumber
    id="qty"
    min={1}
    max={100}
    value={qty}
    onChange={(v) => setQty(v ?? 1)}
  />
</div>
```

## Do's and Don'ts

### ✅ Do

- Always set `min`/`max` when values have natural boundaries
- Use `precision` with `formatter`/`parser` for currency or percentage
- Set `step={5}` or `step={10}` for coarse numeric settings

### ❌ Don't

- Don't use InputNumber for text with numeric patterns (phone, ZIP) → Use `Input`
- Don't hide the controls when precision typing is not obvious to users

## Accessibility

- Increment/decrement buttons have `aria-label="Increase"` / `"Decrease"`
- Min/max constraints are enforced without silently clamping visible input
- Disabled state prevents all interaction
