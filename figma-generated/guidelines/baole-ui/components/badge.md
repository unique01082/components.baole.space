# Badge

## Purpose

The Badge component displays status labels, tags, and metadata with semantic color variants, removable functionality, and status dots.

## When to Use

### ✅ Use Badge when:
- Indicating status (online, offline, active, pending)
- Labeling categories or tags
- Showing counts or notifications
- Highlighting features or attributes
- Displaying version numbers
- Marking items as "new" or "featured"
- Creating tag systems for filtering

### ❌ Don't use Badge when:
- Primary call-to-action is needed → Use Button instead
- Full-width label → Use Alert or Banner
- Interactive selection → Use Toggle or Checkbox
- Standalone navigation → Use Link or Button with link variant

## Installation

```typescript
import { Badge } from '@baole/ui'
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default"` \| `"gradient"` \| `"outline"` \| `"success"` \| `"warning"` \| `"destructive"` \| `"info"` \| `"secondary"` | `"default"` | Visual style variant |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Badge size |
| `dot` | `boolean` | `false` | Shows colored status dot before text |
| `removable` | `boolean` | `false` | Shows × close icon after text |
| `onRemove` | `() => void` | - | Callback when × clicked (requires `removable`) |
| `asChild` | `boolean` | `false` | Renders as child element |
| `className` | `string` | - | Additional CSS classes |
| ...props | `HTMLSpanAttributes` | - | All standard span props |

## Examples

### Basic Usage

```tsx
<Badge>Default</Badge>
<Badge variant="gradient">Featured</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="destructive">Error</Badge>
```

### All Variants

```tsx
<div className="flex gap-2 flex-wrap">
  <Badge variant="default">Default</Badge>
  <Badge variant="gradient">Gradient</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="secondary">Secondary</Badge>
</div>
```

### Sizes

```tsx
<div className="flex gap-2 items-center">
  <Badge size="sm" variant="gradient">Small</Badge>
  <Badge size="md" variant="gradient">Medium</Badge>
  <Badge size="lg" variant="gradient">Large</Badge>
</div>
```

### With Status Dot

Perfect for online/offline indicators:

```tsx
<div className="flex gap-2 flex-wrap">
  <Badge variant="success" dot>Online</Badge>
  <Badge variant="warning" dot>Away</Badge>
  <Badge variant="destructive" dot>Busy</Badge>
  <Badge variant="default" dot>Offline</Badge>
</div>
```

### Removable Badges

Great for tag systems and filters:

```tsx
import { useState } from 'react'

function TagList() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind'])

  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <Badge
          key={tag}
          variant="outline"
          removable
          onRemove={() => {
            setTags(tags.filter((_, i) => i !== index))
          }}
        >
          {tag}
        </Badge>
      ))}
    </div>
  )
}
```

### As Link (with asChild)

```tsx
import Link from 'next/link'

<Badge asChild variant="gradient">
  <Link href="/premium">Premium</Link>
</Badge>
```

---

## Common Patterns

### User Status

```tsx
import { Avatar, AvatarImage, AvatarFallback, Badge } from '@baole/ui'

<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="/user.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-white">John Doe</p>
    <Badge variant="success" dot size="sm">Online</Badge>
  </div>
</div>
```

### Notification Count

```tsx
import { Bell } from 'lucide-react'
import { Button, Badge } from '@baole/ui'

<Button variant="ghost" size="icon" className="relative">
  <Bell size={20} />
  <Badge
    variant="destructive"
    size="sm"
    className="absolute -top-1 -right-1 px-1.5 min-w-[20px] h-5 flex items-center justify-center rounded-full"
  >
    3
  </Badge>
</Button>
```

### Feature Tags

```tsx
<Card>
  <CardHeader>
    <div className="flex items-start justify-between">
      <CardTitle>Premium Plan</CardTitle>
      <Badge variant="gradient">Most Popular</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2">
      <li className="flex items-center gap-2">
        <Badge size="sm" variant="success">New</Badge>
        <span>AI-powered analytics</span>
      </li>
    </ul>
  </CardContent>
</Card>
```

### Table Status Column

```tsx
import { Table, TableBody, TableRow, TableCell, Badge } from '@baole/ui'

<Table>
  <TableBody>
    <TableRow>
      <TableCell>Order #1234</TableCell>
      <TableCell>
        <Badge variant="success" dot>Completed</Badge>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Order #1235</TableCell>
      <TableCell>
        <Badge variant="warning" dot>Pending</Badge>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Order #1236</TableCell>
      <TableCell>
        <Badge variant="destructive" dot>Failed</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Filter Tags

```tsx
function FilterBadges({ filters, onRemove }) {
  return (
    <div className="flex gap-2 flex-wrap">
      <span className="text-sm text-white/60">Active filters:</span>
      {filters.map((filter) => (
        <Badge
          key={filter.id}
          variant="outline"
          removable
          onRemove={() => onRemove(filter.id)}
        >
          {filter.label}
        </Badge>
      ))}
    </div>
  )
}
```

### Version Badge

```tsx
<div className="flex items-center gap-2">
  <h1 className="text-2xl font-bold">@baole/ui</h1>
  <Badge variant="gradient" size="sm">v0.1.0</Badge>
  <Badge variant="success" size="sm">Stable</Badge>
</div>
```

---

## Do's and Don'ts

### ✅ Do

- Use semantic variants for status (`success`, `warning`, `destructive`, `info`)
- Use `dot` prop for online/offline/status indicators
- Keep badge text short (1-3 words maximum)
- Use `size="sm"` for compact layouts and tables
- Use `variant="gradient"` sparingly for featured/premium items
- Combine with icons for visual clarity
- Use `removable` for dynamic tags that users can remove

### ❌ Don't

- Don't use badges for primary actions → Use Button
- Don't create overly long badge text → Truncate or use tooltips
- Don't stack badges vertically → Use horizontal flex layout
- Don't make non-removable badges look clickable
- Don't use too many gradient badges on one screen (visual noise)
- Don't forget `onRemove` callback when using `removable`

---

## Visual Specifications

### Variant Styles

#### Default
- Background: `bg-white/5`
- Border: `border-white/10`
- Text: `text-white/90`

#### Gradient
- Background: `bg-gradient-to-r from-purple-500 to-fuchsia-500`
- Border: `border-purple-400/30`
- Text: `text-white`

#### Success
- Background: `bg-emerald-500/10`
- Border: `border-emerald-400/30`
- Text: `text-emerald-100`

#### Warning
- Background: `bg-amber-500/10`
- Border: `border-amber-400/30`
- Text: `text-amber-100`

#### Destructive
- Background: `bg-rose-500/10`
- Border: `border-rose-400/30`
- Text: `text-rose-100`

### Size Specifications

- **sm**: `text-xs px-1.5 py-0.5 gap-0.5 rounded-md`
- **md** (default): `text-xs px-2 py-1 gap-1 rounded-md`
- **lg**: `text-sm px-2.5 py-1 gap-1 rounded-lg`

---

## Accessibility

- ✅ Text contrast meets WCAG AA standards
- ✅ Removable badges have proper button semantics
- ✅ Click area for × button is at least 24x24px (touch-friendly)
- ✅ Color is not the only indicator (text labels provided)

### Screen Reader Considerations

```tsx
// For removable badges, the × is visible
// Ensure meaningful labels:
<Badge removable onRemove={handleRemove}>
  <span className="sr-only">Remove tag: </span>
  React
</Badge>
```

---

## Choosing the Right Variant

```
Need a badge?
├─ Status indicator (online, active, etc.)
│  └─ Use semantic variant with dot:
│     • Online → variant="success" dot
│     • Away → variant="warning" dot
│     • Offline → variant="default" dot
│
├─ Featured/premium item
│  └─ variant="gradient"
│
├─ General label/tag
│  └─ variant="default" or "outline"
│
├─ Success state (completed, verified)
│  └─ variant="success"
│
├─ Warning (pending, review needed)
│  └─ variant="warning"
│
├─ Error/critical (failed, error)
│  └─ variant="destructive"
│
└─ Informational
   └─ variant="info"
```

---

## Animation (Optional)

Add entrance animations with motion:

```tsx
import { motion } from 'motion/react'
import { Badge } from '@baole/ui'

<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0, opacity: 0 }}
>
  <Badge variant="gradient">New</Badge>
</motion.div>
```

---

**Next**: Explore `button.md`, `card.md`, and `alert.md` for related components.
