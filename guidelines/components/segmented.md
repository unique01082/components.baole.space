# Segmented

## Purpose

A mutually exclusive button group where exactly one option is selected at a time, shown with a gradient sliding indicator. Similar to RadioGroup but looks like a segmented tab bar. Ideal for view mode or filter toggles.

## When to Use

### ✅ Use Segmented when:

- Switching between 2–5 mutually exclusive modes (Day / Week / Month)
- Filter toggles with a visual "pill" selection indicator
- View switchers where all options are always visible

### ❌ Don't use Segmented when:

- More than 6 options → Use Select or Tabs
- Options need icons + text descriptions → Use RadioGroup
- Multi-select is needed → Use ToggleGroup with `type="multiple"`
- Inside a form (needs `name`/`value`) → Use RadioGroup

## Installation

```typescript
import { Segmented, type SegmentedOption } from "@baolq/ui";
```

## Props API

| Prop           | Type                       | Default      | Description                           |
| -------------- | -------------------------- | ------------ | ------------------------------------- |
| `options`      | `SegmentedOption[]`        | **required** | List of `{ value, label, disabled? }` |
| `value`        | `string`                   | –            | Controlled selected value             |
| `defaultValue` | `string`                   | –            | Initial value (uncontrolled)          |
| `onChange`     | `(value: string) => void`  | –            | Called when selection changes         |
| `size`         | `"sm"` \| `"md"` \| `"lg"` | `"md"`       | Size variant                          |
| `block`        | `boolean`                  | `false`      | Expands to full width                 |
| `disabled`     | `boolean`                  | `false`      | Disables all options                  |
| `className`    | `string`                   | –            | Additional CSS classes                |

### SegmentedOption

```typescript
interface SegmentedOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}
```

## Examples

### Basic Usage

```tsx
<Segmented
  options={[
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ]}
  defaultValue="week"
/>
```

### Controlled

```tsx
const [period, setPeriod] = useState('week')

<Segmented
  options={[
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
  ]}
  value={period}
  onChange={setPeriod}
/>
```

### Full Width

```tsx
<Segmented
  block
  options={[
    { value: "list", label: "List" },
    { value: "grid", label: "Grid" },
  ]}
  defaultValue="list"
/>
```

### With Icons

```tsx
import { LayoutList, LayoutGrid } from "lucide-react";

<Segmented
  options={[
    {
      value: "list",
      label: (
        <span className="flex items-center gap-1.5">
          <LayoutList size={14} /> List
        </span>
      ),
    },
    {
      value: "grid",
      label: (
        <span className="flex items-center gap-1.5">
          <LayoutGrid size={14} /> Grid
        </span>
      ),
    },
  ]}
  defaultValue="list"
/>;
```

### Disabled Option

```tsx
<Segmented
  options={[
    { value: "free", label: "Free" },
    { value: "pro", label: "Pro" },
    { value: "enterprise", label: "Enterprise", disabled: true },
  ]}
  defaultValue="free"
/>
```

## Do's and Don'ts

### ✅ Do

- Keep options to 2–5 items — more gets cramped
- Use `size="sm"` inside toolbars and compact panels
- Use `block` to fill available width in constrained containers

### ❌ Don't

- Don't use as a substitute for Tabs (Tabs has associated content panels)
- Don't use when options have very different label lengths — wrap with `block`

## Accessibility

- Uses `role="group"` with individual `role="radio"` buttons
- Arrow keys navigate between options
- Selected option has `aria-checked="true"`
