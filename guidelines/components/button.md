# Button

## Purpose

The Button component is the primary action trigger in the @baolq/ui system, supporting 7 visual variants, 6 sizes, loading states, and icon placement with full accessibility.

## When to Use

### ✅ Use Button when:
- User needs to trigger an action (submit, create, delete, etc.)
- You need a prominent call-to-action (CTA)
- Navigation requires an action-like appearance
- Form submission or cancellation
- Modal/dialog actions

### ❌ Don't use Button when:
- Simple navigation is needed → Use Next.js `Link` or React Router `Link` with `asChild`
- Text-only link without action → Use `variant="link"` or plain anchor tag
- Too many buttons create visual noise → Consider using `DropdownMenu` or `Command` palette

## Installation

```typescript
import { Button } from '@baolq/ui'
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"gradient"` \| `"outline"` \| `"ghost"` \| `"destructive"` \| `"success"` \| `"secondary"` \| `"link"` | `"gradient"` | Visual style variant |
| `size` | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"icon"` | `"md"` | Button size |
| `loading` | `boolean` | `false` | Shows spinner, disables interaction |
| `leftIcon` | `React.ReactNode` | - | Icon placed before text |
| `rightIcon` | `React.ReactNode` | - | Icon placed after text |
| `fullWidth` | `boolean` | `false` | Expands to 100% width |
| `asChild` | `boolean` | `false` | Renders as child element (for Link) |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |
| ...props | `HTMLButtonAttributes` | - | All standard button props |

## Choosing the Right Variant

```
Need a button?
├─ Primary action (most important) → variant="gradient"
├─ Secondary action (less emphasis) → variant="outline" or "secondary"
├─ Tertiary/subtle action → variant="ghost"
├─ Destructive action (delete, remove) → variant="destructive"
├─ Success/confirmation → variant="success"
└─ Text-only navigation → variant="link"
```

## Examples

### Basic Usage

```tsx
<Button>Click me</Button>

// Explicit variant
<Button variant="gradient">Primary Action</Button>
<Button variant="outline">Secondary Action</Button>
<Button variant="ghost">Subtle Action</Button>
```

### With Icons

```tsx
import { Plus, Download, ArrowRight } from 'lucide-react'

// Left icon
<Button variant="gradient" leftIcon={<Plus size={16} />}>
  Create New
</Button>

// Right icon
<Button variant="outline" rightIcon={<ArrowRight size={16} />}>
  Continue
</Button>

// Icon-only button
<Button size="icon" variant="gradient">
  <Plus size={16} />
  <span className="sr-only">Add item</span>
</Button>
```

### Loading State

```tsx
const [loading, setLoading] = useState(false)

<Button
  variant="gradient"
  loading={loading}
  onClick={async () => {
    setLoading(true)
    await saveData()
    setLoading(false)
  }}
>
  Save Changes
</Button>
```

### Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Icon-only buttons
<Button size="icon">
  <Heart size={16} />
</Button>
```

### Full Width

```tsx
<Button variant="gradient" fullWidth>
  Sign Up Now
</Button>
```

### As Link (with Next.js or React Router)

```tsx
import Link from 'next/link'

<Button asChild variant="gradient">
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>

// With React Router
import { Link } from 'react-router'

<Button asChild variant="outline">
  <Link to="/settings">Settings</Link>
</Button>
```

### Destructive Actions

```tsx
import { Trash2 } from 'lucide-react'

<Button
  variant="destructive"
  leftIcon={<Trash2 size={16} />}
  onClick={handleDelete}
>
  Delete Account
</Button>
```

### Disabled State

```tsx
<Button disabled>Cannot Click</Button>
<Button variant="gradient" disabled>Disabled Gradient</Button>
```

## Do's and Don'ts

### ✅ Do

- Use `variant="gradient"` for the primary action on a page (limit to 1-2 per screen)
- Use `loading` state during async operations to prevent double-submission
- Include accessible labels for icon-only buttons: `<span className="sr-only">Label</span>`
- Use `size="icon"` for icon-only buttons to ensure square aspect ratio
- Pair destructive actions with confirmation dialogs
- Use semantic HTML: `<Button type="submit">` for form submissions
- Group related actions using flex/grid layouts

### ❌ Don't

- Don't use multiple `variant="gradient"` buttons in the same view (creates hierarchy confusion)
- Don't use Button for simple navigation without action — use Link instead
- Don't forget to disable buttons during loading states
- Don't use overly long button text — keep it concise (1-3 words)
- Don't stack buttons vertically unless in a modal footer
- Don't use `variant="destructive"` without confirmation for irreversible actions
- Don't mix icon sizes — stick to 16px for most buttons, 20px for large

## Visual Specifications

### Gradient Variant
- Background: `bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500`
- Hover: `hover:shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02]`
- Active: `active:scale-[0.98]`

### Outline Variant
- Border: `border border-white/20`
- Background: `bg-white/5` with `backdrop-blur-sm`
- Hover: `hover:border-purple-400/50 hover:bg-white/10`

### Ghost Variant
- Background: `bg-transparent`
- Text: `text-white/80`
- Hover: `hover:bg-white/10 hover:text-white`

## Accessibility

- ✅ Keyboard navigable (Tab to focus, Enter/Space to activate)
- ✅ Focus ring: `focus-visible:ring-2 focus-visible:ring-purple-400/20`
- ✅ Disabled state prevents interaction: `disabled:pointer-events-none disabled:opacity-50`
- ✅ Loading state shows spinner with ARIA attributes
- ✅ Icon-only buttons require accessible labels via `sr-only` span

## Common Patterns

### Primary + Secondary Actions

```tsx
<div className="flex gap-2">
  <Button variant="gradient" onClick={handleSave}>Save</Button>
  <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
</div>
```

### Button Group

```tsx
<div className="inline-flex rounded-lg border border-white/10 overflow-hidden">
  <Button variant="ghost" className="rounded-none">Left</Button>
  <Button variant="ghost" className="rounded-none border-l border-white/10">Center</Button>
  <Button variant="ghost" className="rounded-none border-l border-white/10">Right</Button>
</div>
```

### Confirmation Pattern

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction, Button } from '@baolq/ui'

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel asChild>
        <Button variant="ghost">Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

**Next**: Explore `card.md`, `input.md`, and `dialog.md` for complementary components.
