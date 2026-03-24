# Toast

## Purpose

Transient notification messages that appear in a corner of the screen and auto-dismiss. Powered by `sonner` via the `<Toaster>` component. Use for success confirmations, async feedback, and non-blocking errors.

## When to Use

### ✅ Use Toast when:

- Action completed successfully ("Project saved", "Link copied")
- Background operation finished (file uploaded, email sent)
- Non-critical error that user can ignore or retry
- Ephemeral status that doesn't need to persist

### ❌ Don't use Toast when:

- Message must stay visible until acknowledged → Use `Alert`
- Action requires user decision → Use `AlertDialog` or `Dialog`
- Error prevents the user from continuing → Use inline `Alert` + `error` props

## Installation

```typescript
// In your app root / layout — once only
import { Toaster } from "@baole/ui";

// In any component
import { toast } from "sonner";
```

## Setup

```tsx
// app/layout.tsx or App.tsx
import { Toaster } from "@baole/ui";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
```

## Usage

```typescript
// Success
toast.success("Project saved");

// Error
toast.error("Failed to save. Please try again.");

// Info
toast.info("New version available");

// Warning
toast.warning("Your session will expire in 5 minutes");

// With description
toast.success("File uploaded", {
  description: "report-q4-2024.pdf has been uploaded successfully.",
});

// With action
toast.error("Failed to delete", {
  action: { label: "Retry", onClick: () => retryDelete() },
});

// Promise (loading → success/error)
toast.promise(saveProject(), {
  loading: "Saving...",
  success: "Project saved",
  error: "Failed to save",
});
```

## Props API (Toaster component)

| Prop          | Type                                                                                                        | Default          | Description                 |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ---------------- | --------------------------- |
| `position`    | `"top-left"` \| `"top-center"` \| `"top-right"` \| `"bottom-left"` \| `"bottom-center"` \| `"bottom-right"` | `"bottom-right"` | Toast position              |
| `duration`    | `number`                                                                                                    | `4000`           | Auto-dismiss duration in ms |
| `richColors`  | `boolean`                                                                                                   | `true`           | Use colored variants        |
| `closeButton` | `boolean`                                                                                                   | `false`          | Show explicit close button  |

## Do's and Don'ts

### ✅ Do

- Use `toast.promise()` for any async operation — it handles loading + success/error states
- Keep messages under 1 line if possible; use `description` for extra detail
- Use `action` for retryable errors

### ❌ Don't

- Don't use toasts for errors that block the user from continuing — show them inline
- Don't stack more than 3 toasts at once — reduce information density
- Don't use toasts for anything that requires user input
