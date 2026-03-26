# Calendar

## Purpose

A styled date/range calendar grid built on `react-day-picker`. Used directly for inline date display or as the popup content inside `DatePicker` and `DateRangePicker`. Supports single selection, multiple selection, and range selection modes.

## When to Use

### ✅ Use Calendar when:

- Building an inline always-visible date picker (event planner, booking calendar)
- Implementing month navigation with custom day rendering
- As the underlying component inside DatePicker / DateRangePicker

### ❌ Don't use Calendar when:

- A compact trigger + popover is preferred → Use `DatePicker`
- Range selection is needed in a trigger → Use `DateRangePicker`

## Installation

```typescript
import { Calendar } from "@baolq/ui";
```

## Props API

Calendar extends all `react-day-picker` `DayPicker` props.

| Prop              | Type                                    | Default      | Description                    |
| ----------------- | --------------------------------------- | ------------ | ------------------------------ |
| `mode`            | `"single"` \| `"multiple"` \| `"range"` | `"single"`   | Selection mode                 |
| `selected`        | `Date` \| `Date[]` \| `DateRange`       | –            | Controlled selection           |
| `onSelect`        | `(date) => void`                        | –            | Called when selection changes  |
| `defaultMonth`    | `Date`                                  | `new Date()` | Initially displayed month      |
| `disabled`        | `Matcher \| Matcher[]`                  | –            | Disable specific dates         |
| `fromDate`        | `Date`                                  | –            | Minimum selectable date        |
| `toDate`          | `Date`                                  | –            | Maximum selectable date        |
| `showOutsideDays` | `boolean`                               | `true`       | Show days from adjacent months |
| `className`       | `string`                                | –            | Additional CSS classes         |

## Examples

### Single Date Selection

```tsx
import { useState } from "react";

function InlinePicker() {
  const [date, setDate] = useState<Date | undefined>();

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}
```

### Range Selection

```tsx
import type { DateRange } from "react-day-picker";

function RangeCalendar() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
    />
  );
}
```

### Disable Past Dates

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={{ before: new Date() }}
/>
```

### Disable Specific Dates (Weekends)

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={[{ dayOfWeek: [0, 6] }]}
/>
```

### Multiple Selection

```tsx
const [dates, setDates] = useState<Date[]>([])

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={(d) => setDates(d ?? [])}
/>
```

## Do's and Don'ts

### ✅ Do

- Use `disabled` prop to enforce business rules (no past dates, no holidays)
- Use `numberOfMonths={2}` for range selection to show start and end month side-by-side
- Wrap in a Popover for compact date pickers

### ❌ Don't

- Don't use Calendar inline when screen space is limited — use DatePicker instead
- Don't forget to handle `undefined` in `onSelect` (user can click to deselect)

## Accessibility

- Full keyboard navigation: arrow keys move between days, Enter/Space selects
- Month navigation buttons labeled "Go to previous/next month"
- Screen readers announce date and selection state for each day
