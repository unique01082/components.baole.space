# Badge

## Purpose

Display status indicators, labels, counts, or categories with color-coded backgrounds. Badges provide at-a-glance information about content state or classification.

## When to Use

- **Status indicators** - Active, pending, completed states
- **Notification counts** - Unread messages, pending items
- **Category tags** - Content classification, tags
- **Version labels** - Beta, new, deprecated
- **Inline labels** - Role badges, priority indicators

### What NOT to Use Badge For

- **Long text** - Use Tag or Chip instead
- **Clickable actions** - Use Button or Chip
- **Form labels** - Use Label component

---

## Installation

```typescript
import { Badge } from '@baole/ui'
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "solid" \| "outline" \| "gradient" \| "success" \| "warning" \| "error" \| "info"` | `"default"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Badge size |
| `className` | `string` | `""` | Additional CSS classes |

---

## Examples

### Basic Badge

```tsx
<Badge>Default</Badge>
```

### Variants

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="solid">Solid</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="gradient">Gradient</Badge>
```

### Semantic Colors

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
```

### Sizes

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### With Icons

```tsx
import { Check, Clock, AlertCircle } from 'lucide-react'

<Badge variant="success">
  <Check size={12} className="mr-1" />
  Completed
</Badge>

<Badge variant="warning">
  <Clock size={12} className="mr-1" />
  Pending
</Badge>

<Badge variant="error">
  <AlertCircle size={12} className="mr-1" />
  Failed
</Badge>
```

### Notification Badge

```tsx
<div className="relative">
  <Button variant="ghost" size="icon">
    <Bell size={20} />
  </Button>
  <Badge
    variant="error"
    size="sm"
    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
  >
    3
  </Badge>
</div>
```

### In Table

```tsx
<Table>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>
        <Badge variant="success">Active</Badge>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>
        <Badge variant="warning">Pending</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Multiple Badges

```tsx
<div className="flex gap-2">
  <Badge variant="info">React</Badge>
  <Badge variant="info">TypeScript</Badge>
  <Badge variant="info">Tailwind</Badge>
</div>
```

---

## Do's and Don'ts

### ✅ Do

- Use appropriate semantic colors
- Keep badge text short (1-2 words)
- Use for status and categorization
- Ensure sufficient color contrast

```tsx
// ✅ Good - Clear status
<Badge variant="success">Approved</Badge>
<Badge variant="error">Rejected</Badge>
```

### ❌ Don't

- Don't use for long text
- Don't use as clickable buttons
- Don't overuse on single page

```tsx
// ❌ Bad - Too long
<Badge>This is a very long badge text that should be avoided</Badge>

// ✅ Better
<Badge>Long Text</Badge>
<Tooltip>
  <TooltipTrigger>
    <Badge>Long Text</Badge>
  </TooltipTrigger>
  <TooltipContent>Full description here</TooltipContent>
</Tooltip>
```

---

## Common Patterns

### Status Badge

```tsx
function StatusBadge({ status }: { status: string }) {
  const variants = {
    active: 'success',
    pending: 'warning',
    inactive: 'error',
  }

  return (
    <Badge variant={variants[status] || 'default'}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}
```

### Count Badge

```tsx
function NotificationBell({ count }: { count: number }) {
  return (
    <div className="relative">
      <Button variant="ghost" size="icon">
        <Bell size={20} />
      </Button>
      {count > 0 && (
        <Badge
          variant="error"
          size="sm"
          className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1"
        >
          {count > 99 ? '99+' : count}
        </Badge>
      )}
    </div>
  )
}
```

---

**Related Components:**
- [Tag](./tag.md) - For removable tags
- [Chip](./chip.md) - For interactive chips
- [Button](./button.md) - For clickable actions
