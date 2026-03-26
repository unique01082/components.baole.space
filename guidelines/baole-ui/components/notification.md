# Notification

## Purpose

A richer, persistent notification displayed in the corner of the viewport. Supports title, description, type icon, and custom actions. Triggered imperatively via `NotificationManager`. Used when more context than a `Message` is needed.

## When to Use

### ✅ Use Notification when:

- Important events require a title + description (new message, background job complete)
- The user may need to act (view, dismiss, undo) before the notification disappears
- Asynchronous background events need to surface (file upload complete, deploy finished)

### ❌ Don't use Notification when:

- A one-line transient feedback is sufficient → Use `Message`
- The event requires blocking confirmation → Use `Dialog`
- Inline feedback on a specific field is needed → Use Form validation messages

## Installation

```typescript
import { NotificationManager } from "@baolq/ui";
```

## Props API

### NotificationManager Methods

| Method    | Signature                              | Description                  |
| --------- | -------------------------------------- | ---------------------------- |
| `success` | `(config: NotificationConfig) => void` | Show a success notification  |
| `error`   | `(config: NotificationConfig) => void` | Show an error notification   |
| `warning` | `(config: NotificationConfig) => void` | Show a warning notification  |
| `info`    | `(config: NotificationConfig) => void` | Show an info notification    |
| `open`    | `(config: NotificationConfig) => void` | Show a custom notification   |
| `close`   | `(id: string) => void`                 | Programmatically close by ID |

### NotificationConfig

| Prop          | Type                                                | Default      | Description                          |
| ------------- | --------------------------------------------------- | ------------ | ------------------------------------ |
| `id`          | `string`                                            | auto         | Unique ID to reference/close later   |
| `title`       | `string`                                            | **required** | Notification heading                 |
| `description` | `string`                                            | –            | Supporting text                      |
| `type`        | `"success"` \| `"error"` \| `"warning"` \| `"info"` | –            | Type icon and color                  |
| `duration`    | `number`                                            | `4500`       | Auto-dismiss in ms; `0` = persistent |
| `onClose`     | `() => void`                                        | –            | Callback when dismissed              |

## Examples

### Basic Notification

```tsx
NotificationManager.success({
  title: "Deployment complete",
  description: "Your app was deployed to production at 2:34 PM.",
});
```

### Error with Long Description

```tsx
NotificationManager.error({
  title: "Build failed",
  description:
    "Syntax error on line 42 of src/index.ts. Run `npm run build` locally for details.",
  duration: 0, // persistent — user must dismiss
});
```

### Triggered by Background Job

```tsx
async function runExport(id: string) {
  const notifId = "export-" + id;
  NotificationManager.info({
    id: notifId,
    title: "Exporting data...",
    description: "Your CSV export is being generated.",
    duration: 0,
  });

  try {
    const url = await exportData(id);
    NotificationManager.close(notifId);
    NotificationManager.success({
      title: "Export ready",
      description: "Your file is ready to download.",
    });
  } catch {
    NotificationManager.close(notifId);
    NotificationManager.error({
      title: "Export failed",
      description: "Could not generate export. Please try again.",
    });
  }
}
```

### All Types

```tsx
<div className="flex flex-col gap-2">
  <Button
    onClick={() =>
      NotificationManager.success({
        title: "Saved",
        description: "Your changes have been saved.",
      })
    }
  >
    Success
  </Button>
  <Button
    onClick={() =>
      NotificationManager.error({
        title: "Error",
        description: "Please check your network.",
      })
    }
  >
    Error
  </Button>
  <Button
    onClick={() =>
      NotificationManager.warning({
        title: "Warning",
        description: "Low disk space.",
      })
    }
  >
    Warning
  </Button>
  <Button
    onClick={() =>
      NotificationManager.info({
        title: "Info",
        description: "New version available.",
      })
    }
  >
    Info
  </Button>
</div>
```

## Do's and Don'ts

### ✅ Do

- Use persistent (`duration: 0`) for critical errors that need acknowledgement
- Provide a description when the title alone doesn't explain the context
- Close a "loading" notification and replace with success/error when the job completes

### ❌ Don't

- Don't show more than 3 notifications simultaneously — stack them politely
- Don't use Notification for short confirmations (< 1 line) → Use Message
- Don't auto-dismiss critical error notifications

## Accessibility

- Notifications are rendered in an `aria-live="assertive"` (error) or `aria-live="polite"` (info/success) region
- Close button is keyboard-accessible with `aria-label="Close notification"`
