# Alert

## Purpose

An inline feedback banner for status messages, warnings, errors, or informational notices. Not interactive — use `Toast` for transient dismissable notifications.

## When to Use

### ✅ Use Alert when:

- Persistent status message that should remain visible on the page
- Form-level validation summary (all errors at once)
- Service status, maintenance notice, or important warning banner
- Success confirmation after an action (before redirecting)

### ❌ Don't use Alert when:

- The message should auto-dismiss → Use `Toast`
- It's a blocking decision → Use `AlertDialog`
- Single field error → Use Input's `error` prop

## Installation

```typescript
import { Alert, AlertDescription, AlertTitle } from "@baole/ui";
```

## Props API

| Prop        | Type                                                                     | Default     | Description                       |
| ----------- | ------------------------------------------------------------------------ | ----------- | --------------------------------- |
| `variant`   | `"default"` \| `"info"` \| `"success"` \| `"warning"` \| `"destructive"` | `"default"` | Visual severity                   |
| `icon`      | `React.ReactNode`                                                        | auto        | Override the default variant icon |
| `className` | `string`                                                                 | –           | Additional CSS classes            |

## Examples

```tsx
// Informational
<Alert>
  <AlertTitle>New feature available</AlertTitle>
  <AlertDescription>
    Dark mode is now available. Enable it in your settings.
  </AlertDescription>
</Alert>

// Warning
<Alert variant="warning">
  <AlertTitle>Payment overdue</AlertTitle>
  <AlertDescription>
    Your account will be suspended in 3 days. Please update your payment method.
  </AlertDescription>
</Alert>

// Success
<Alert variant="success">
  <AlertTitle>Password updated</AlertTitle>
  <AlertDescription>Your password has been changed successfully.</AlertDescription>
</Alert>

// Error
<Alert variant="destructive">
  <AlertTitle>Save failed</AlertTitle>
  <AlertDescription>Unable to save changes. Please try again.</AlertDescription>
</Alert>
```

## Do's and Don'ts

### ✅ Do

- Always include an `AlertTitle` for context
- Use the correct variant — `warning` is yellow, `destructive` is red
- Place form-level error alerts above the form, not below a Submit button

### ❌ Don't

- Don't stack more than 2 alerts on one screen — dilutes attention
- Don't use `default` variant for anything that needs user action
- Don't use Alert for ephemeral feedback — Toast is better for "saved", "deleted", etc.
