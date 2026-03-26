# Space

## Purpose

Adds consistent spacing between inline or block children without affecting their layout. A lightweight alternative to Stack for cases where items are inline and flex wrapping behavior is not needed.

## When to Use

### ✅ Use Space when:

- Separating inline elements like badges, icons, or tags
- Adding a `split` separator (pipe, dot) between items
- Consistent horizontal gaps between children in a row

### ❌ Don't use Space when:

- A full flex layout with alignment control is needed → Use `Stack`
- Two-dimensional layout is needed → Use `Grid`
- Applying a fixed margin to a single element → Use Tailwind `m-*` directly

## Installation

```typescript
import { Space } from "@baolq/ui";
```

## Props API

| Prop        | Type                                               | Default        | Description                         |
| ----------- | -------------------------------------------------- | -------------- | ----------------------------------- |
| `direction` | `"horizontal"` \| `"vertical"`                     | `"horizontal"` | Spacing direction                   |
| `size`      | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"`     | `"sm"`         | Gap between children                |
| `align`     | `"start"` \| `"center"` \| `"end"` \| `"baseline"` | `"center"`     | Cross-axis alignment                |
| `wrap`      | `boolean`                                          | `false`        | Allow children to wrap              |
| `split`     | `React.ReactNode`                                  | –              | Separator element between each pair |
| `className` | `string`                                           | –              | Additional CSS classes              |
| `children`  | `React.ReactNode`                                  | –              | Items to space                      |

## Examples

### Icon + Text

```tsx
<Space>
  <CheckCircle size={16} className="text-green-400" />
  <span className="text-white text-sm">Verified</span>
</Space>
```

### Badge Group

```tsx
<Space size="xs" wrap>
  <Badge variant="gradient">React</Badge>
  <Badge variant="outline">TypeScript</Badge>
  <Badge variant="secondary">TailwindCSS</Badge>
  <Badge variant="outline">Vite</Badge>
</Space>
```

### Pipe-Separated Links

```tsx
<Space split={<span className="text-white/30">|</span>} size="md">
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
  <a href="/contact">Contact</a>
</Space>
```

### Dot-Separated Metadata

```tsx
<Space split={<span className="text-white/30">·</span>} size="sm">
  <span className="text-white/50 text-sm">March 26, 2026</span>
  <span className="text-white/50 text-sm">5 min read</span>
  <span className="text-white/50 text-sm">12 comments</span>
</Space>
```

### Vertical Spacing

```tsx
<Space direction="vertical" size="lg">
  <Alert variant="info">Read this first.</Alert>
  <Alert variant="warning">Then check this.</Alert>
</Space>
```

## Do's and Don'ts

### ✅ Do

- Use `split` for visual separators between nav items or metadata
- Set `wrap={true}` for tags/badges that may overflow
- Use consistent `size` values to match the design system spacing scale

### ❌ Don't

- Don't use Space when you need alignment control → Use Stack
- Don't put layout-heavy components (charts, tables) inside Space

## Accessibility

- Space renders as a `<div>` or `<span>` depending on inline/block context
- Split separators should be `aria-hidden={true}` if purely decorative
