# Modal

## Purpose

A prominent overlay dialog for important interactions that require user focus and action. Built on the same primitives as Dialog but with more flexible width, centered positioning, and configurable footer. Used for confirmations, forms, and detailed content previews.

## When to Use

### ✅ Use Modal when:

- Displaying a form that requires focused input (create, edit)
- Confirming a destructive action before executing
- Showing detailed content that doesn't warrant a full page (preview, settings)

### ❌ Don't use Modal when:

- A simple yes/no confirmation → Use `AlertDialog`
- Quick, non-blocking feedback → Use `Message` or `Notification`
- A panel sliding from the side is more appropriate → Use `Drawer` or `Sheet`
- The content always needs to be visible → Keep it on the page

## Installation

```typescript
import { Modal } from "@baolq/ui";
```

## Props API

| Prop           | Type                        | Default      | Description                             |
| -------------- | --------------------------- | ------------ | --------------------------------------- |
| `open`         | `boolean`                   | **required** | Controls modal visibility               |
| `onOpenChange` | `(open: boolean) => void`   | **required** | Called when open state should change    |
| `title`        | `string`                    | –            | Modal heading                           |
| `footer`       | `React.ReactNode` \| `null` | –            | Footer content (usually action buttons) |
| `width`        | `number` \| `string`        | `520`        | Modal width (px or CSS value)           |
| `centered`     | `boolean`                   | `false`      | Vertically center the modal             |
| `closable`     | `boolean`                   | `true`       | Show the × close button                 |
| `maskClosable` | `boolean`                   | `true`       | Close when clicking the backdrop        |
| `className`    | `string`                    | –            | Additional CSS classes                  |
| `children`     | `React.ReactNode`           | –            | Modal body content                      |

## Examples

### Basic Modal with Footer

```tsx
function EditProfileModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit Profile</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Edit Profile"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input defaultValue="Alice Johnson" />
          </div>
          <div>
            <Label>Bio</Label>
            <Textarea defaultValue="Frontend developer..." />
          </div>
        </div>
      </Modal>
    </>
  );
}
```

### Destructive Confirmation

```tsx
<Modal
  open={deleteOpen}
  onOpenChange={setDeleteOpen}
  title="Delete Project"
  centered
  footer={
    <div className="flex justify-end gap-3">
      <Button variant="ghost" onClick={() => setDeleteOpen(false)}>
        Cancel
      </Button>
      <Button variant="destructive" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  }
>
  <p className="text-white/70">
    Are you sure you want to delete <strong>{project.name}</strong>? This action
    cannot be undone.
  </p>
</Modal>
```

### Wide Modal (Table Preview)

```tsx
<Modal
  open={open}
  onOpenChange={setOpen}
  title="Preview Data"
  width={900}
  footer={null}
>
  <Table data={previewData} columns={tableColumns} />
</Modal>
```

### Non-closable (Force User Action)

```tsx
<Modal
  open={open}
  onOpenChange={setOpen}
  title="Required Setup"
  closable={false}
  maskClosable={false}
  footer={<Button onClick={handleComplete}>Complete Setup</Button>}
>
  <p>Please complete your profile before continuing.</p>
</Modal>
```

## Do's and Don'ts

### ✅ Do

- Always provide a way to dismiss (`footer` Cancel button or `closable`)
- Use `centered` for confirmations, default top-aligned for forms
- Set `width` based on content: 400 for confirmations, 520–700 for forms, 800+ for previews

### ❌ Don't

- Don't nest Modals — use a multi-step form or wizard instead
- Don't set `maskClosable={false}` unless the user must complete an action
- Don't put navigation inside a Modal — use a dedicated page

## Accessibility

- Focus is trapped inside the open modal
- Escape key closes the modal (unless `closable={false}`)
- Screen readers announce the modal title as the dialog label
- Backdrop has `aria-hidden={true}`
