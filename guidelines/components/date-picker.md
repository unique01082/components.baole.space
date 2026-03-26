# DatePicker

## Purpose

Single-date selection input with a calendar popover trigger. Uses `date-fns` for date formatting. Built on top of Calendar and Popover components.

## When to Use

### ✅ Use DatePicker when:

- Collecting a single date from users (birth date, start date, deadline)
- The date must be selected from a visual calendar rather than typed
- You want consistent formatting across form inputs

### ❌ Don't use DatePicker when:

- Selecting a date range → Use DateRangePicker
- Selecting time in addition to date → Use DatePicker + TimePicker combination
- Free text date entry is preferred — use a plain Input with type="date"

## Installation

```typescript
import { DatePicker } from "@baolq/ui";
```

## Props API

| Prop           | Type                                | Default         | Description                        |
| -------------- | ----------------------------------- | --------------- | ---------------------------------- |
| `date`         | `Date \| undefined`                 | –               | Controlled selected date           |
| `onDateChange` | `(date: Date \| undefined) => void` | –               | Called when date selection changes |
| `placeholder`  | `string`                            | `"Pick a date"` | Trigger button placeholder text    |
| `disabled`     | `boolean`                           | `false`         | Disables the picker                |
| `className`    | `string`                            | –               | Additional CSS classes             |

## Examples

### Basic Usage

```tsx
import { useState } from "react";

function DeadlinePicker() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      placeholder="Select deadline"
    />
  );
}
```

### Inside a Form

```tsx
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="startDate"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Start Date</FormLabel>
          <FormControl>
            <DatePicker date={field.value} onDateChange={field.onChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Save</Button>
  </form>
</Form>
```

### Displaying Selected Date

```tsx
function EventForm() {
  const [eventDate, setEventDate] = useState<Date | undefined>();

  return (
    <div className="space-y-4">
      <DatePicker
        date={eventDate}
        onDateChange={setEventDate}
        placeholder="Select event date"
      />
      {eventDate && (
        <p className="text-sm text-white/60">
          Event scheduled for: {format(eventDate, "MMMM do, yyyy")}
        </p>
      )}
    </div>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Handle `undefined` in `onDateChange` — users can clear selection
- Pair with `FormField` when inside react-hook-form
- Show a formatted date summary below the picker if the value drives other logic

### ❌ Don't

- Don't use DatePicker for quick relative dates ("tomorrow", "next week") — use a Select for those presets plus a DatePicker for custom
- Don't disable future/past dates without explanation

## Accessibility

- Trigger button shows selected date as text
- Calendar is navigated by keyboard (arrow keys, Enter, Escape)
- Dates that are disabled are announced as such to screen readers
