# DateRangePicker

## Purpose

Date range selection input showing start and end dates. Opens a dual-month calendar for visual range selection. Built on react-day-picker and date-fns.

## When to Use

### ✅ Use DateRangePicker when:

- Booking stays, trips, or reservations (check-in / check-out)
- Filtering records by date range (reports, analytics)
- Setting validity periods (promotion start/end)

### ❌ Don't use DateRangePicker when:

- Only a single date is needed → Use `DatePicker`
- The range can be any arbitrary unit (weeks, months) → Use a custom Select
- Mobile UX is primary (dual-month calendars are cramped on mobile)

## Installation

```typescript
import { DateRangePicker } from "@baolq/ui";
```

## Props API

| Prop                | Type                                                  | Default               | Description                   |
| ------------------- | ----------------------------------------------------- | --------------------- | ----------------------------- |
| `dateRange`         | `{ from: Date \| undefined; to?: Date \| undefined }` | –                     | Controlled range value        |
| `onDateRangeChange` | `(range: DateRange \| undefined) => void`             | –                     | Callback on range selection   |
| `placeholder`       | `string`                                              | `"Pick a date range"` | Trigger placeholder text      |
| `disabled`          | `boolean`                                             | `false`               | Disables the picker           |
| `className`         | `string`                                              | –                     | Applied to the trigger button |

## Examples

### Basic Usage

```tsx
import { useState } from "react";
import type { DateRange } from "react-day-picker";

function RangePicker() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <DateRangePicker
      dateRange={range}
      onDateRangeChange={setRange}
      placeholder="Select date range"
    />
  );
}
```

### Analytics Filter

```tsx
import { subDays } from 'date-fns'

const [range, setRange] = useState<DateRange>({
  from: subDays(new Date(), 30),
  to: new Date(),
})

<div className="space-y-2">
  <Label>Report Period</Label>
  <DateRangePicker dateRange={range} onDateRangeChange={r => r && setRange(r)} />
</div>
```

### With react-hook-form

```tsx
import { Controller } from "react-hook-form";

<Controller
  control={control}
  name="dateRange"
  render={({ field }) => (
    <DateRangePicker
      dateRange={field.value}
      onDateRangeChange={field.onChange}
    />
  )}
/>;
```

## Do's and Don'ts

### ✅ Do

- Show a summary of the selected range (e.g., "Mar 1 – Mar 31") in the UI
- Validate that `from` is before `to` before submission
- Provide quick presets ("Last 7 days", "This month") adjacent to the picker

### ❌ Don't

- Don't use DateRangePicker for time ranges
- Don't require both `from` and `to` immediately — allow partial selection
- Don't block the user from selecting ranges spanning multiple months

## Accessibility

- Trigger button is keyboard-accessible
- Calendar popover traps focus; Escape closes it
- Selected range start and end are announced separately
