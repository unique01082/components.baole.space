# Button

## Purpose

Buttons trigger actions, navigate users, and submit forms. They are the primary interactive element for user actions.

## When to Use

- **Submit forms** - Use `type="submit"` for form submissions
- **Trigger actions** - Open dialogs, save data, delete items
- **Navigate** - Link to other pages (wrap with Next.js Link or React Router Link)
- **Toggle states** - Use with `pressed` state or Switch to Toggle components instead

### What NOT to Use Button For

- **Text links in paragraphs** - Use `<a>` tags with link styling
- **Navigation menu items** - Use NavigationMenu or Menubar components
- **Toggle switches** - Use Switch component
- **Icon-only without context** - Ensure `aria-label` or Tooltip is provided

---

## Installation

```typescript
import { Button } from '@baole/ui'
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"solid" \| "outline" \| "ghost" \| "link" \| "gradient"` | `"solid"` | Visual style variant |
| `size` | `"sm" \| "md" \| "lg" \| "icon"` | `"md"` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `asChild` | `boolean` | `false` | Render as child component (for Link wrappers) |
| `className` | `string` | `""` | Additional CSS classes |
| All native `<button>` props | - | - | `onClick`, `type`, `aria-*`, etc. |

---

## Choosing the Right Variant

Use this decision tree:

```
What action is this?
│
├─ Primary CTA (main action on page)
│  → variant="gradient" (purple-pink gradient)
│
├─ Secondary action (important but not primary)
│  → variant="solid" (solid background)
│
├─ Tertiary action (less prominent)
│  → variant="outline" (border only)
│
├─ Subtle action (minimal visual weight)
│  → variant="ghost" (transparent until hover)
│
└─ Text link (inline or navigation)
   → variant="link" (underline on hover)
```

### Variant Examples

| Variant | Usage | Example |
|---------|-------|---------|
| `gradient` | Primary CTA, hero actions | "Sign Up", "Get Started", "Buy Now" |
| `solid` | Secondary actions | "Save", "Submit", "Confirm" |
| `outline` | Tertiary actions | "Cancel", "Learn More", "View Details" |
| `ghost` | Toolbar buttons, icon buttons | Close (X), Edit, Delete icons |
| `link` | Text links, navigation | "Read more", "View all", breadcrumbs |

---

## Examples

### Basic Usage

```tsx
<Button variant="gradient">
  Primary Action
</Button>

<Button variant="solid">
  Secondary Action
</Button>

<Button variant="outline">
  Tertiary Action
</Button>

<Button variant="ghost">
  Subtle Action
</Button>

<Button variant="link">
  Link Action
</Button>
```

### Sizes

```tsx
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>

{/* Icon-only button */}
<Button size="icon" variant="ghost">
  <Search size={20} />
</Button>
```

### With Icons

```tsx
import { Plus, Download, Trash2 } from 'lucide-react'

{/* Icon left */}
<Button variant="gradient">
  <Plus size={20} className="mr-2" />
  Add Item
</Button>

{/* Icon right */}
<Button variant="outline">
  Download
  <Download size={20} className="ml-2" />
</Button>

{/* Icon only */}
<Button size="icon" variant="ghost" aria-label="Delete">
  <Trash2 size={20} />
</Button>
```

### Loading State

```tsx
import { useState } from 'react'

function SaveButton() {
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    await saveData()
    setLoading(false)
  }

  return (
    <Button
      variant="gradient"
      loading={loading}
      onClick={handleSave}
      disabled={loading}
    >
      Save Changes
    </Button>
  )
}
```

### Disabled State

```tsx
<Button variant="gradient" disabled>
  Disabled Button
</Button>

<Button variant="outline" disabled>
  Cannot Perform Action
</Button>
```

### As Link (Next.js / React Router)

```tsx
import Link from 'next/link'
// or
import { Link } from 'react-router'

<Button asChild>
  <Link href="/dashboard">
    Go to Dashboard
  </Link>
</Button>
```

### Form Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <Input name="email" />
  
  <Button type="submit" variant="gradient">
    Submit Form
  </Button>
</form>
```

### Button Group

```tsx
<div className="flex gap-2">
  <Button variant="gradient">Confirm</Button>
  <Button variant="outline">Cancel</Button>
</div>

{/* Attached buttons (no gap) */}
<div className="flex">
  <Button className="rounded-r-none">Option 1</Button>
  <Button className="rounded-none border-l-0">Option 2</Button>
  <Button className="rounded-l-none border-l-0">Option 3</Button>
</div>
```

### Full Width

```tsx
<Button variant="gradient" className="w-full">
  Full Width Button
</Button>
```

### With Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@baole/ui'

<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon" variant="ghost">
      <Settings size={20} />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Settings</TooltipContent>
</Tooltip>
```

---

## Do's and Don'ts

### ✅ Do

- Use `variant="gradient"` for the primary action on a page
- Include `aria-label` for icon-only buttons
- Use `loading` state during async operations
- Keep button text concise (2-3 words max)
- Use appropriate size for context (sm for toolbars, lg for hero CTAs)
- Disable buttons during processing to prevent double-clicks

```tsx
// ✅ Good
<Button size="icon" variant="ghost" aria-label="Close dialog">
  <X size={20} />
</Button>

// ✅ Good - Loading state
<Button loading={isSubmitting} disabled={isSubmitting}>
  Save
</Button>
```

### ❌ Don't

- Don't use multiple `variant="gradient"` buttons on the same page
- Don't use icon-only buttons without labels or tooltips
- Don't use buttons for navigation without proper semantics (use `asChild` with Link)
- Don't use very long text in buttons (use link or create a card instead)
- Don't use `variant="solid"` for destructive actions (use outline with red color)

```tsx
// ❌ Bad - Multiple gradient buttons
<div>
  <Button variant="gradient">Action 1</Button>
  <Button variant="gradient">Action 2</Button>  {/* Should be solid or outline */}
</div>

// ❌ Bad - Icon only without label
<Button size="icon">
  <Settings size={20} />
</Button>

// ✅ Better
<Button size="icon" aria-label="Open settings">
  <Settings size={20} />
  <span className="sr-only">Open settings</span>
</Button>

// ❌ Bad - Too much text
<Button>
  Click here to navigate to the user dashboard page
</Button>

// ✅ Better
<Button asChild>
  <Link href="/dashboard">View Dashboard</Link>
</Button>
```

---

## Accessibility

- Always provide `aria-label` for icon-only buttons
- Use `disabled` to prevent interaction during loading
- Ensure focus states are visible (built-in with component)
- Use semantic `type` attribute (`submit`, `button`, `reset`)
- For destructive actions, consider adding confirmation dialogs

```tsx
// Destructive action with confirmation
import { AlertDialog, AlertDialogTrigger, AlertDialogContent } from '@baole/ui'

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline" className="text-red-500 border-red-500">
      <Trash2 size={20} className="mr-2" />
      Delete
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <p>Are you sure you want to delete this item?</p>
    <Button variant="outline" className="text-red-500">Confirm Delete</Button>
  </AlertDialogContent>
</AlertDialog>
```

---

## Common Patterns

### Hero CTA

```tsx
<div className="text-center">
  <h1 className="text-5xl font-bold mb-6">Welcome to Baole</h1>
  <div className="flex gap-4 justify-center">
    <Button variant="gradient" size="lg">
      Get Started
    </Button>
    <Button variant="outline" size="lg">
      Learn More
    </Button>
  </div>
</div>
```

### Dialog Actions

```tsx
<DialogFooter>
  <Button variant="outline" onClick={onClose}>
    Cancel
  </Button>
  <Button variant="gradient" onClick={onConfirm}>
    Confirm
  </Button>
</DialogFooter>
```

### Toolbar Actions

```tsx
<div className="flex gap-1 border-b border-[var(--color-border)] p-2">
  <Button size="sm" variant="ghost">
    <Bold size={16} />
  </Button>
  <Button size="sm" variant="ghost">
    <Italic size={16} />
  </Button>
  <Button size="sm" variant="ghost">
    <Underline size={16} />
  </Button>
</div>
```

---

**Related Components:**
- [Toggle](./toggle.md) - For on/off states
- [ToggleGroup](./toggle-group.md) - For mutually exclusive options
- [Link (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) - For text links
