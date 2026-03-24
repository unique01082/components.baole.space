# Toast (Sonner)

## Purpose

Toast notifications provide temporary, non-intrusive feedback about operations. They appear briefly then disappear automatically, perfect for confirming actions without interrupting the user's workflow.

## When to Use

- **Action confirmation** - "Saved successfully", "Item deleted"
- **Process updates** - "Loading...", "Upload complete"
- **Non-critical errors** - "Network error, retrying..."
- **Background operations** - "Export started", "Email sent"

### What NOT to Use Toast For

- **Critical errors** - Use Dialog or Alert
- **Important decisions** - Use AlertDialog
- **Persistent info** - Use Alert component
- **Form validation errors** - Use inline validation

---

## Installation

```typescript
// Import Toaster component (add to app root)
import { Toaster } from '@baole/ui'

// Import toast function
import { toast } from 'sonner'
```

---

## Setup (App Root)

Add `<Toaster />` to your app root:

```tsx
// App.tsx or layout.tsx
import { Toaster } from '@baole/ui'

function App() {
  return (
    <>
      <YourApp />
      <Toaster />
    </>
  )
}
```

---

## API

### toast.success()

```typescript
toast.success(message: string, options?: ToastOptions)
```

### toast.error()

```typescript
toast.error(message: string, options?: ToastOptions)
```

### toast.info()

```typescript
toast.info(message: string, options?: ToastOptions)
```

### toast.warning()

```typescript
toast.warning(message: string, options?: ToastOptions)
```

### toast.loading()

```typescript
const toastId = toast.loading(message: string)
// Later: toast.dismiss(toastId)
```

### toast.promise()

```typescript
toast.promise(
  promise: Promise,
  {
    loading: 'Loading...',
    success: 'Success!',
    error: 'Error occurred'
  }
)
```

### ToastOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `duration` | `number` | `4000` | Duration in ms before auto-dismiss |
| `description` | `string` | - | Additional text below message |
| `action` | `{ label: string, onClick: () => void }` | - | Action button |
| `cancel` | `{ label: string, onClick: () => void }` | - | Cancel button |
| `id` | `string` | - | Custom toast ID |

---

## Examples

### Basic Success

```tsx
import { toast } from 'sonner'

function SaveButton() {
  const handleSave = async () => {
    await saveData()
    toast.success('Changes saved successfully')
  }

  return <Button onClick={handleSave}>Save</Button>
}
```

### Error Toast

```tsx
try {
  await deleteItem()
  toast.success('Item deleted')
} catch (error) {
  toast.error('Failed to delete item')
}
```

### Info Toast

```tsx
toast.info('New update available')
```

### Warning Toast

```tsx
toast.warning('Your session will expire in 5 minutes')
```

### Loading Toast

```tsx
const handleExport = async () => {
  const toastId = toast.loading('Exporting data...')
  
  try {
    await exportData()
    toast.success('Export complete', { id: toastId })
  } catch (error) {
    toast.error('Export failed', { id: toastId })
  }
}
```

### With Description

```tsx
toast.success('Profile updated', {
  description: 'Your changes have been saved successfully',
})
```

### With Action Button

```tsx
toast.success('Item archived', {
  action: {
    label: 'Undo',
    onClick: () => {
      restoreItem()
      toast.success('Item restored')
    },
  },
})
```

### With Custom Duration

```tsx
// Show for 10 seconds
toast.success('Important message', {
  duration: 10000,
})

// Show indefinitely (manual dismiss)
toast.error('Critical error', {
  duration: Infinity,
})
```

### Promise Toast

```tsx
const uploadFile = async (file: File) => {
  return new Promise((resolve, reject) => {
    // Upload logic
  })
}

const handleUpload = (file: File) => {
  toast.promise(uploadFile(file), {
    loading: 'Uploading file...',
    success: 'File uploaded successfully',
    error: 'Failed to upload file',
  })
}
```

### Dismiss Toast

```tsx
const toastId = toast.success('Saving...')

// Later, dismiss specific toast
toast.dismiss(toastId)

// Or dismiss all toasts
toast.dismiss()
```

---

## Do's and Don'ts

### ✅ Do

- Use success for confirmations
- Use error for failures
- Keep messages concise (1-2 lines)
- Use action buttons for undo operations
- Set appropriate duration based on message importance

```tsx
// ✅ Good - Concise and clear
toast.success('Settings saved')

// ✅ Good - With undo action
toast.success('Email deleted', {
  action: {
    label: 'Undo',
    onClick: () => restoreEmail(),
  },
})

// ✅ Good - Promise toast for async
toast.promise(saveSettings(), {
  loading: 'Saving...',
  success: 'Settings saved',
  error: 'Failed to save',
})
```

### ❌ Don't

- Don't use for critical errors (use Dialog)
- Don't use for form validation (use inline)
- Don't show too many toasts at once
- Don't use very long messages
- Don't rely on toast for important info

```tsx
// ❌ Bad - Too verbose
toast.success('Your settings have been successfully saved to the database and will take effect immediately')

// ✅ Better
toast.success('Settings saved')

// ❌ Bad - Critical action needs confirmation
toast.error('Account deleted')  // User might miss this!

// ✅ Better - Use dialog for critical actions
<AlertDialog>
  <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
  <AlertDialogContent>
    {/* Confirmation dialog */}
  </AlertDialogContent>
</AlertDialog>

// ❌ Bad - Form validation in toast
toast.error('Email is required')

// ✅ Better - Inline validation
<Input error={!!errors.email} />
{errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
```

---

## Common Patterns

### Save Operation

```tsx
const handleSave = async () => {
  try {
    await saveData()
    toast.success('Changes saved')
  } catch (error) {
    toast.error('Failed to save changes')
  }
}
```

### Delete with Undo

```tsx
const handleDelete = async (item: Item) => {
  // Optimistically remove from UI
  removeItemFromList(item.id)
  
  toast.success('Item deleted', {
    action: {
      label: 'Undo',
      onClick: async () => {
        // Restore item
        addItemToList(item)
        await restoreItem(item.id)
        toast.success('Item restored')
      },
    },
  })
  
  // Actually delete after toast duration
  setTimeout(() => {
    deleteItemPermanently(item.id)
  }, 4000)
}
```

### Form Submission

```tsx
const handleSubmit = async (data: FormData) => {
  const toastId = toast.loading('Submitting form...')
  
  try {
    await submitForm(data)
    toast.success('Form submitted successfully', { id: toastId })
    router.push('/success')
  } catch (error) {
    toast.error('Submission failed. Please try again.', { id: toastId })
  }
}
```

### File Upload

```tsx
const handleUpload = (files: FileList) => {
  const promises = Array.from(files).map(file => uploadFile(file))
  
  toast.promise(Promise.all(promises), {
    loading: `Uploading ${files.length} file(s)...`,
    success: `${files.length} file(s) uploaded successfully`,
    error: 'Failed to upload some files',
  })
}
```

### Copy to Clipboard

```tsx
const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text)
  toast.success('Copied to clipboard')
}

<Button
  variant="ghost"
  size="icon"
  onClick={() => handleCopy('some text')}
>
  <Copy size={16} />
</Button>
```

### Network Error Handling

```tsx
const fetchData = async () => {
  try {
    const response = await fetch('/api/data')
    if (!response.ok) throw new Error('Network error')
    const data = await response.json()
    return data
  } catch (error) {
    toast.error('Network error. Retrying...', {
      action: {
        label: 'Retry',
        onClick: () => fetchData(),
      },
    })
    throw error
  }
}
```

### Multiple Sequential Actions

```tsx
const handleBulkDelete = async (items: Item[]) => {
  const toastId = toast.loading(`Deleting ${items.length} items...`)
  
  let deleted = 0
  for (const item of items) {
    await deleteItem(item.id)
    deleted++
    toast.loading(`Deleting items... ${deleted}/${items.length}`, { id: toastId })
  }
  
  toast.success(`${deleted} items deleted`, { id: toastId })
}
```

---

## Accessibility

- Toasts use `role="status"` or `role="alert"` for screen readers
- Auto-dismiss toasts should have sufficient duration (4s minimum)
- Don't rely solely on toasts for critical information
- Ensure toast messages are clear and actionable

---

## Comparison: Toast vs Other Components

| Use Case | Component |
|----------|-----------|
| Action confirmation | ✅ Toast |
| Critical error | ❌ Use Dialog or Alert |
| Form validation | ❌ Use inline errors |
| Important announcement | ❌ Use Alert or Dialog |
| Loading state (inline) | ❌ Use Spinner or Progress |
| Destructive action confirm | ❌ Use AlertDialog |

---

**Related Components:**
- [Alert](./alert.md) - Persistent inline messages
- [Dialog](./dialog.md) - Modal dialogs for critical actions
- [AlertDialog](./alert-dialog.md) - Confirmation dialogs
- [Message](./message.md) - Top-centered messages (Ant Design style)
