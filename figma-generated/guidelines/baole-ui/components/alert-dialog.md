# AlertDialog

## Purpose

An accessible confirmation dialog for irreversible or destructive actions. Built on Radix UI AlertDialog. Unlike `Dialog`, it cannot be dismissed by clicking the backdrop — user must explicitly confirm or cancel.

## When to Use

### ✅ Use AlertDialog when:

- Confirming a destructive action (delete, remove, revoke)
- The action is irreversible or has significant consequences
- User should be forced to read and choose (no accidental dismiss)

### ❌ Don't use AlertDialog when:

- Non-destructive forms → Use `Dialog`
- Simple info message → Use `Toast` or `Alert`
- Action is easily reversible → confirm inline without modal

## Installation

```typescript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@baole/ui";
```

## Examples

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete account?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. All your data will be permanently deleted.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={deleteAccount} className="bg-destructive">
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Do's and Don'ts

### ✅ Do

- Make the consequence explicit in `AlertDialogDescription`
- Label the confirm button with the action, not just "OK" or "Yes" → "Delete", "Remove", "Revoke"
- Make the cancel button clearly the safe option (left/less prominent)

### ❌ Don't

- Don't use red styling on Cancel — only on the confirm/destructive action
- Don't add a close (×) button — destructive dialogs must be explicit
- Don't make AlertDialog the default for all confirmations — only for irreversible actions
