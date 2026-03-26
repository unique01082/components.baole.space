# TimePicker

## Purpose

Scrollable time selection input with 12-hour and 24-hour format support. Allows selecting hours, minutes, and optionally seconds with configurable step increments.

## When to Use

### ✅ Use TimePicker when:

- Scheduling events by time (meeting at 2:30 PM)
- Setting alarms, reminders, or recurring times
- Any form that requires time-of-day input

### ❌ Don't use TimePicker when:

- Duration (hours elapsed) is needed → Use a numeric input with unit labels
- Both date and time are needed → Combine with DatePicker (two separate fields)
- Resolution is only hours → Use a Select with hour options

## Installation

```typescript
import { TimePicker } from "@baolq/ui";
```

## Props API

| Prop           | Type                      | Default         | Description                               |
| -------------- | ------------------------- | --------------- | ----------------------------------------- |
| `value`        | `string`                  | –               | Controlled time value (HH:mm or HH:mm:ss) |
| `defaultValue` | `string`                  | –               | Initial value (uncontrolled)              |
| `onChange`     | `(value: string) => void` | –               | Callback when time changes                |
| `format`       | `"12"` \| `"24"`          | `"24"`          | 12-hour (AM/PM) or 24-hour format         |
| `minuteStep`   | `number`                  | `1`             | Increment between minute options          |
| `secondStep`   | `number`                  | `1`             | Increment between second options          |
| `showSecond`   | `boolean`                 | `false`         | Show seconds column                       |
| `disabled`     | `boolean`                 | `false`         | Disables the picker                       |
| `placeholder`  | `string`                  | `"Select time"` | Placeholder text                          |
| `className`    | `string`                  | –               | Additional CSS classes                    |

## Examples

### Basic 24-Hour

```tsx
import { useState } from "react";

function MeetingTime() {
  const [time, setTime] = useState<string>();

  return <TimePicker value={time} onChange={setTime} />;
}
```

### 12-Hour Format with AM/PM

```tsx
<TimePicker
  format="12"
  placeholder="Pick a time"
  onChange={(t) => console.log(t)}
/>
```

### 15-Minute Increments

```tsx
<TimePicker
  minuteStep={15}
  placeholder="On the quarter hour"
  onChange={(t) => console.log(t)}
/>
```

### With Seconds

```tsx
<TimePicker showSecond format="24" onChange={(t) => console.log(t)} />
```

### In a Form

```tsx
<div className="space-y-1.5">
  <Label htmlFor="meeting-time" required>
    Meeting Time
  </Label>
  <TimePicker
    format="12"
    minuteStep={15}
    onChange={(t) => form.setValue("meetingTime", t)}
  />
</div>
```

## Do's and Don'ts

### ✅ Do

- Use `minuteStep={15}` or `minuteStep={30}` for appointment scheduling
- Match `format` to the user's locale preference
- Always pair with a `Label` in forms

### ❌ Don't

- Don't use TimePicker for time durations (elapsed time)
- Don't use step values that don't divide evenly into 60

## Accessibility

- Scrollable columns are keyboard navigable (arrow keys)
- Selected time is announced to screen readers
- Disabled state prevents any interaction
