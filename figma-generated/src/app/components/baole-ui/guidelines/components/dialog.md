# Dialog

## Purpose

Modals for displaying critical information or capturing user input that requires full attention. Dialogs interrupt the user's workflow and should be used sparingly.

## When to Use

- **Critical decisions** - Confirm destructive actions (delete, logout)
- **Required input** - Collect information before proceeding
- **Important information** - Terms, privacy policy, announcements
- **Focus on single task** - Create/edit forms that need full attention

### What NOT to Use Dialog For

- **Contextual info** - Use Popover or Tooltip
- **Side panels** - Use Drawer or Sheet
- **Non-critical messages** - Use Toast or Alert
- **Multi-step flows** - Use separate pages or Stepper

---

## Installation

```typescript
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@baole/ui'
```

---

## Props API

### Dialog

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Uncontrolled default state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when state changes |

### DialogContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | - | Dialog content |

---

## Examples

### Basic Usage

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description of what the dialog is for.
      </DialogDescription>
    </DialogHeader>
    
    <div className="py-4">
      Dialog content goes here
    </div>
    
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="gradient">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Controlled Dialog

```tsx
import { useState } from 'react'

function ControlledDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
          </DialogHeader>
          
          <p>This dialog is controlled by state.</p>
          
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

### Confirmation Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="text-red-500 border-red-500">
      Delete Account
    </Button>
  </DialogTrigger>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button
        variant="outline"
        className="bg-red-500 text-white border-red-500"
        onClick={handleDelete}
      >
        Delete Account
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Form Dialog

```tsx
import { useState } from 'react'
import { Input, Label } from '@baole/ui'

function CreateUserDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient">Create User</Button>
      </DialogTrigger>
      
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
            <DialogDescription>
              Add a new user to your organization.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient">
              Create User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
```

### Custom Width Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Large Dialog</Button>
  </DialogTrigger>
  
  <DialogContent className="max-w-3xl">
    <DialogHeader>
      <DialogTitle>Wide Dialog</DialogTitle>
    </DialogHeader>
    <div className="py-4">
      This dialog has custom width using className
    </div>
  </DialogContent>
</Dialog>
```

### Dialog with Scrollable Content

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Terms of Service</Button>
  </DialogTrigger>
  
  <DialogContent className="max-h-[80vh]">
    <DialogHeader>
      <DialogTitle>Terms of Service</DialogTitle>
    </DialogHeader>
    
    <div className="overflow-y-auto py-4 pr-2">
      {/* Long content */}
      <p className="mb-4">Long terms content...</p>
      <p className="mb-4">More content...</p>
      {/* ... */}
    </div>
    
    <DialogFooter>
      <Button variant="gradient">I Accept</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Alert-Style Dialog (Use AlertDialog instead)

```tsx
// Don't use Dialog for simple confirmations
// Use AlertDialog component instead

import { AlertDialog, AlertDialogTrigger, AlertDialogContent } from '@baole/ui'

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    {/* AlertDialog content */}
  </AlertDialogContent>
</AlertDialog>
```

---

## Do's and Don'ts

### ✅ Do

- Always include DialogTitle for accessibility
- Use DialogDescription for additional context
- Provide clear action buttons in DialogFooter
- Use controlled state for complex workflows
- Keep dialog content focused on single task
- Close dialog after successful action

```tsx
// ✅ Good - Complete dialog structure
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Clear Title</DialogTitle>
      <DialogDescription>Helpful description</DialogDescription>
    </DialogHeader>
    
    <div className="py-4">
      {/* Content */}
    </div>
    
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="gradient" onClick={handleConfirm}>
        Confirm
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### ❌ Don't

- Don't use Dialog for non-critical information
- Don't nest dialogs inside dialogs
- Don't forget DialogTitle (accessibility)
- Don't use Dialog for side panels (use Drawer/Sheet)
- Don't make dialogs too wide or too tall

```tsx
// ❌ Bad - No title
<DialogContent>
  <div>Content without title</div>
</DialogContent>

// ✅ Better
<DialogContent>
  <DialogHeader>
    <DialogTitle>Title Here</DialogTitle>
  </DialogHeader>
  <div>Content</div>
</DialogContent>

// ❌ Bad - Nested dialogs
<Dialog>
  <DialogContent>
    <Dialog>  {/* Don't nest */}
      <DialogContent>...</DialogContent>
    </Dialog>
  </DialogContent>
</Dialog>
```

---

## Accessibility

- DialogTitle is required (screen readers announce it)
- Escape key closes the dialog
- Focus is trapped inside the dialog
- Background is inert (cannot interact)
- Returns focus to trigger element on close

```tsx
// Fully accessible dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Accessible Dialog</DialogTitle>
      <DialogDescription>
        This dialog follows accessibility best practices
      </DialogDescription>
    </DialogHeader>
    
    <div className="py-4">
      <Label htmlFor="input">Input field</Label>
      <Input id="input" />
    </div>
    
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Close</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Common Patterns

### Delete Confirmation

```tsx
function DeleteButton({ onDelete }: { onDelete: () => void }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await onDelete()
    setLoading(false)
    setOpen(false)
    toast.success('Item deleted successfully')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-red-500">
          <Trash2 size={16} className="mr-2" />
          Delete
        </Button>
      </DialogTrigger>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure?
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="outline"
            className="bg-red-500 text-white"
            onClick={handleDelete}
            loading={loading}
            disabled={loading}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Create/Edit Form

```tsx
function EditProfileDialog({ user }: { user: User }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(user)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit2 size={16} className="mr-2" />
          Edit Profile
        </Button>
      </DialogTrigger>
      
      <DialogContent>
        <form onSubmit={(e) => { e.preventDefault(); handleSave() }}>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <FormItem label="Name">
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </FormItem>
            
            <FormItem label="Bio">
              <Textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />
            </FormItem>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
```

---

**Related Components:**
- [AlertDialog](./alert-dialog.md) - Confirmation dialogs
- [Drawer](./drawer.md) - Side panel modal
- [Sheet](./sheet.md) - Bottom/side sheets
- [Popover](./popover.md) - Contextual popovers
