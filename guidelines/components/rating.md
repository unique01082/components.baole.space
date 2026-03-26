# Rating

## Purpose

Star rating component for collecting or displaying numeric ratings. Supports hover preview, half-star precision, read-only display mode, and configurable max stars.

## When to Use

### ✅ Use Rating when:

- Collecting user feedback or reviews (1–5 stars)
- Displaying average scores for products, courses, or services
- Building a preference or satisfaction survey

### ❌ Don't use Rating when:

- Precision beyond 0.5 increments is needed → Use a Slider
- Rating is derived from data and always read-only → Show stars as static icons with text
- The scale has more than 10 points → Use a Slider

## Installation

```typescript
import { Rating } from "@baolq/ui";
```

## Props API

| Prop           | Type                       | Default | Description                  |
| -------------- | -------------------------- | ------- | ---------------------------- |
| `value`        | `number`                   | –       | Controlled rating value      |
| `defaultValue` | `number`                   | `0`     | Initial value (uncontrolled) |
| `onChange`     | `(value: number) => void`  | –       | Called when rating changes   |
| `max`          | `number`                   | `5`     | Maximum number of stars      |
| `readonly`     | `boolean`                  | `false` | Display only, no interaction |
| `disabled`     | `boolean`                  | `false` | Prevents interaction         |
| `allowHalf`    | `boolean`                  | `false` | Enables half-star selection  |
| `size`         | `"sm"` \| `"md"` \| `"lg"` | `"md"`  | Star size                    |
| `className`    | `string`                   | –       | Additional CSS classes       |

## Examples

### Basic Input

```tsx
import { useState } from "react";

function ReviewForm() {
  const [rating, setRating] = useState(0);

  return (
    <div className="space-y-2">
      <Label>Your Rating</Label>
      <Rating value={rating} onChange={setRating} />
      <p className="text-sm text-white/50">{rating}/5</p>
    </div>
  );
}
```

### Read-Only Display

```tsx
<div className="flex items-center gap-2">
  <Rating value={4.5} readonly allowHalf />
  <span className="text-white/70 text-sm">4.5 (128 reviews)</span>
</div>
```

### Half Stars

```tsx
<Rating value={rating} onChange={setRating} allowHalf max={5} />
```

### Different Sizes

```tsx
<div className="space-y-2">
  <Rating value={4} size="sm" readonly />
  <Rating value={4} size="md" readonly />
  <Rating value={4} size="lg" readonly />
</div>
```

### 10-Point Scale

```tsx
<Rating max={10} value={rating} onChange={setRating} />
```

## Do's and Don'ts

### ✅ Do

- Show the numeric value alongside stars for precision
- Use `readonly` when displaying aggregated ratings
- Use `allowHalf` for more precise ratings in display mode

### ❌ Don't

- Don't use Rating as the only satisfaction input — combine with written feedback
- Don't use `max > 10` — too many stars is visually confusing
- Don't show Rating as interactive when the value is read-only data

## Accessibility

- Stars have `aria-label` indicating their value (e.g. "Rate 3 out of 5")
- `readonly` and `disabled` states prevent keyboard/mouse interaction
- Selected rating is announced to screen readers
