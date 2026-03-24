# Dialog

## Purpose

A modal dialog built on Radix UI Dialog. Blocks the page, requires user interaction before continuing, and manages focus trap and Escape key automatically.

## When to Use

### ✅ Use Dialog when:

- User must confirm or dismiss before continuing
- A focused task needs all attention (create, edit, confirm delete)
- Content is too complex for a Tooltip but doesn't need a separate page

### ❌ Don't use Dialog when:

- Simple yes/no confirmation → Use `AlertDialog` for destructive actions
- Non-blocking information → Use `Toast` or `Alert`
- Large amount of scrollable content → Use `Sheet` (side drawer)

## Installation

```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@baole/ui";
```

## Props API

### Dialog (root)

| Prop           | Type                      | Default | Description                |
| -------------- | ------------------------- | ------- | -------------------------- |
| `open`         | `boolean`                 | –       | Controlled open state      |
| `onOpenChange` | `(open: boolean) => void` | –       | Called on open/close       |
| `defaultOpen`  | `boolean`                 | `false` | Uncontrolled initial state |

### DialogContent

| Prop        | Type                                             | Default | Description                         |
| ----------- | ------------------------------------------------ | ------- | ----------------------------------- |
| `size`      | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"full"` | `"md"`  | Max width of the dialog             |
| `className` | `string`                                         | –       | Additional CSS on the content panel |

## Examples

```tsx
// Trigger-based (uncontrolled)
<Dialog>
  <DialogTrigger asChild>
    <Button>Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create project</DialogTitle>
      <DialogDescription>
        Add a new project to your workspace.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <Input label="Project name" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button>Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Controlled
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>...</DialogContent>
</Dialog>
```

## Do's and Don'ts

### ✅ Do

- Always include `DialogTitle` (screen readers need it)
- Put primary action button last in `DialogFooter` (right side)
- Close the dialog after a successful action

### ❌ Don't

- Don't open a dialog from another dialog — stack drawers/sheets instead
- Don't put scrollable content inside `md` or smaller dialogs — use `lg` or `Sheet`
- Don't use Dialog for destructive confirmation — use `AlertDialog`
