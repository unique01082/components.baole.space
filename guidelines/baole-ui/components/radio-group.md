# RadioGroup

## Purpose

A group of mutually exclusive radio options built on Radix UI RadioGroup. Only one option in the group can be selected at a time.

## When to Use

### ✅ Use RadioGroup when:

- Exactly one option must be chosen from a small set (2–6 items)
- All options should be visible at once (unlike Select dropdown)
- The choice is permanent within the form (not a real-time toggle)

### ❌ Don't use RadioGroup when:

- More than 6 options → Use `Select` to save space
- Multiple items can be selected → Use `Checkbox` group
- Real-time effect → Use `Switch` or `SegmentedControl`

## Installation

```typescript
import { RadioGroup, RadioGroupItem } from "@baolq/ui";
```

## Props API

### RadioGroup

| Prop            | Type                           | Default      | Description                |
| --------------- | ------------------------------ | ------------ | -------------------------- |
| `value`         | `string`                       | –            | Controlled selected value  |
| `onValueChange` | `(value: string) => void`      | –            | Called on selection change |
| `orientation`   | `"horizontal"` \| `"vertical"` | `"vertical"` | Layout direction           |
| `disabled`      | `boolean`                      | `false`      | Disables all items         |
| `className`     | `string`                       | –            | Additional CSS classes     |

### RadioGroupItem

| Prop          | Type      | Default | Description                    |
| ------------- | --------- | ------- | ------------------------------ |
| `value`       | `string`  | –       | **Required.** The item's value |
| `label`       | `string`  | –       | Label text                     |
| `description` | `string`  | –       | Sub-label description          |
| `disabled`    | `boolean` | `false` | Disables this item only        |
| `id`          | `string`  | –       | Explicit id                    |

## Examples

```tsx
// Vertical (default)
<RadioGroup value={plan} onValueChange={setPlan}>
  <RadioGroupItem value="free" label="Free" description="Up to 3 projects" />
  <RadioGroupItem value="pro" label="Pro" description="Unlimited projects, $9/mo" />
  <RadioGroupItem value="team" label="Team" description="Collaboration, $29/mo" />
</RadioGroup>

// Horizontal
<RadioGroup orientation="horizontal" value={size} onValueChange={setSize}>
  <RadioGroupItem value="sm" label="Small" />
  <RadioGroupItem value="md" label="Medium" />
  <RadioGroupItem value="lg" label="Large" />
</RadioGroup>
```

## Do's and Don'ts

### ✅ Do

- Use `description` to help users understand the difference between options
- Default-select the recommended or most common option

### ❌ Don't

- Don't use horizontal layout with more than 3 items — they wrap poorly on mobile
- Don't leave all options unselected when one option is required
