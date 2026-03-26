# Message

## Purpose

Global toast-style notification displayed at the top center of the viewport. Triggered imperatively via `MessageManager`. Ideal for short, transient feedback (success/error/info) after user actions.

## When to Use

### ✅ Use Message when:

- Providing brief, auto-dismissing feedback after an action (saved, deleted, copied)
- Reporting the outcome of an API call (success or error)
- Showing non-blocking informational messages

### ❌ Don't use Message when:

- The notification requires user interaction (confirm, undo) → Use a Dialog or Notification
- The content is long or contains structured data → Use `Notification`
- The feedback is persistent → Use an `Alert` in the UI
- The action is critical and must not be missed → Use `Dialog`

## Installation

```typescript
import { MessageManager } from "@baolq/ui";
```

## Props API

### MessageManager Methods

| Method    | Signature                                      | Description            |
| --------- | ---------------------------------------------- | ---------------------- |
| `success` | `(content: string, duration?: number) => void` | Show a success message |
| `error`   | `(content: string, duration?: number) => void` | Show an error message  |
| `warning` | `(content: string, duration?: number) => void` | Show a warning message |
| `info`    | `(content: string, duration?: number) => void` | Show an info message   |
| `loading` | `(content: string, duration?: number) => void` | Show a loading message |

### Message Config

| Prop       | Type                                                               | Default      | Description                                         |
| ---------- | ------------------------------------------------------------------ | ------------ | --------------------------------------------------- |
| `type`     | `"success"` \| `"error"` \| `"warning"` \| `"info"` \| `"loading"` | –            | Message type                                        |
| `content`  | `string`                                                           | **required** | Message text                                        |
| `duration` | `number`                                                           | `3000`       | Auto-dismiss delay in milliseconds (0 = persistent) |
| `onClose`  | `() => void`                                                       | –            | Callback when dismissed                             |
| `icon`     | `React.ReactNode`                                                  | –            | Override default icon                               |

## Examples

### Basic Usage

```tsx
// On form submission
async function handleSubmit(data: FormData) {
  try {
    await saveData(data);
    MessageManager.success("Changes saved successfully.");
  } catch {
    MessageManager.error("Failed to save. Please try again.");
  }
}
```

### Loading → Success Flow

```tsx
async function handleDelete(id: string) {
  MessageManager.loading("Deleting...", 0); // persistent while in-progress

  try {
    await deleteItem(id);
    MessageManager.success("Item deleted.");
  } catch {
    MessageManager.error("Could not delete item.");
  }
}
```

### Custom Duration

```tsx
// Show for 6 seconds
MessageManager.info("Your session will expire in 5 minutes.", 6000);

// Persistent (must be dismissed manually)
MessageManager.warning("Connection unstable.", 0);
```

### All Types

```tsx
<div className="flex flex-col gap-2">
  <Button onClick={() => MessageManager.success("Operation completed!")}>
    Success
  </Button>
  <Button onClick={() => MessageManager.error("Something went wrong.")}>
    Error
  </Button>
  <Button onClick={() => MessageManager.warning("Disk space is low.")}>
    Warning
  </Button>
  <Button onClick={() => MessageManager.info("Update available.")}>Info</Button>
  <Button onClick={() => MessageManager.loading("Processing...")}>
    Loading
  </Button>
</div>
```

## Do's and Don'ts

### ✅ Do

- Keep message text concise (< 80 characters)
- Use `loading` type for async operations, then replace with `success` or `error`
- Use `success` after all mutating actions (save, create, delete, copy)

### ❌ Don't

- Don't show persistent messages (`duration: 0`) unless the user needs to act
- Don't use Message for errors that need explanation — use a Dialog or form error
- Don't trigger multiple messages simultaneously — queue them or debounce

## Accessibility

- Messages are rendered in an `aria-live="polite"` region
- Screen readers announce messages without interrupting current focus
- Loading indicator has `role="status"`
