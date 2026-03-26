# Progress

## Purpose

A linear or circular progress indicator that communicates completion percentage or loading state to the user. Built on Radix UI Progress.

## When to Use

### ✅ Use Progress when:

- File upload, download, or processing with a known completion percentage
- Multi-step form / onboarding funnel completion
- Storage used / quota remaining visualization
- Step completion tracker (not a stepper — just the progress bar)

### ❌ Don't use Progress when:

- Percentage is unknown → Use `Spinner` or `Skeleton`
- Loading a page/component → Use `Skeleton`
- Step-by-step navigation → Use `Steps` or `Stepper`

## Installation

```typescript
import { Progress } from "@baolq/ui";
```

## Props API

| Prop        | Type                                                         | Default     | Description                         |
| ----------- | ------------------------------------------------------------ | ----------- | ----------------------------------- |
| `value`     | `number`                                                     | `0`         | Current value (0–100)               |
| `max`       | `number`                                                     | `100`       | Maximum value                       |
| `variant`   | `"default"` \| `"success"` \| `"warning"` \| `"destructive"` | `"default"` | Color variant                       |
| `size`      | `"sm"` \| `"md"` \| `"lg"`                                   | `"md"`      | Bar height                          |
| `showLabel` | `boolean`                                                    | `false`     | Show `value%` label above or inline |
| `label`     | `string`                                                     | –           | Descriptive label above the bar     |
| `animated`  | `boolean`                                                    | `true`      | Animated fill transition            |
| `className` | `string`                                                     | –           | Additional CSS classes              |

## Examples

```tsx
// Basic
<Progress value={42} />

// With label
<Progress value={75} label="Upload progress" showLabel />

// Color variants
<Progress value={90} variant="success" label="Storage used" showLabel />
<Progress value={85} variant="warning" label="CPU usage" showLabel />
<Progress value={100} variant="destructive" label="Disk full" showLabel />

// Small in a card
<div className="flex items-center gap-3">
  <span className="text-sm text-white/70 shrink-0">Profile</span>
  <Progress value={60} size="sm" className="flex-1" />
  <span className="text-sm text-white/70 shrink-0">60%</span>
</div>
```

## Do's and Don'ts

### ✅ Do

- Always use exact values — never estimate (unless the actual % is known)
- Use `variant="success"` when the bar reaches 100%
- Pair with a descriptive `label` in dashboards

### ❌ Don't

- Don't animate from 0 to current value on every render — animate only on value change
- Don't use more than 3 progress bars in one view without strong grouping
