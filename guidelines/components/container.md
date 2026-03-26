# Container

## Purpose

A responsive, centered content wrapper with configurable max-width. Ensures consistent horizontal padding and maximum widths across different screen sizes. The foundation for all page-level layouts.

## When to Use

### ✅ Use Container when:

- Wrapping page or section content that shouldn't stretch full-width on large screens
- Creating consistent horizontal margins on all breakpoints
- Building page layouts inside a full-width header/hero/footer

### ❌ Don't use Container when:

- Full-bleed content is intentional (background images, edge-to-edge sections)
- The content is inside an already-constrained parent
- Fine-grained layout control is needed → Use Grid or Stack

## Installation

```typescript
import { Container } from "@baolq/ui";
```

## Props API

| Prop        | Type                                             | Default | Description                    |
| ----------- | ------------------------------------------------ | ------- | ------------------------------ |
| `size`      | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"full"` | `"lg"`  | Maximum width of the container |
| `className` | `string`                                         | –       | Additional CSS classes         |
| `children`  | `React.ReactNode`                                | –       | Container contents             |

### Size Breakpoints

| Size   | Max Width                 |
| ------ | ------------------------- |
| `sm`   | 640px                     |
| `md`   | 768px                     |
| `lg`   | 1024px                    |
| `xl`   | 1280px                    |
| `full` | 100% (no max-width limit) |

## Examples

### Standard Page Layout

```tsx
<Container>
  <h1 className="text-white text-3xl font-bold">Page Title</h1>
  <p className="text-white/60">Content here stays centered and readable.</p>
</Container>
```

### Narrow Article Layout

```tsx
<Container size="md">
  <article>
    <h1>Blog Post Title</h1>
    <p>Article content with comfortable reading width...</p>
  </article>
</Container>
```

### Full-Width Dashboard

```tsx
<Container size="full">
  <div className="grid grid-cols-12 gap-6">
    <Sidebar className="col-span-2" />
    <main className="col-span-10">{children}</main>
  </div>
</Container>
```

### Nested Containers (Section-Level Constraint)

```tsx
<section className="py-24 bg-gradient-to-b from-black to-white/5">
  <Container size="xl">
    <h2 className="text-white text-4xl font-bold text-center mb-12">
      Our Features
    </h2>
    <Container size="lg">
      <div className="grid grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.id} {...f} />
        ))}
      </div>
    </Container>
  </Container>
</section>
```

## Do's and Don'ts

### ✅ Do

- Use `size="md"` for text-heavy content (articles, forms, prose) for readability
- Use `size="xl"` or `full` for dashboards and data-dense pages
- Combine with padding utilities for vertical spacing

### ❌ Don't

- Don't use Container for every div — only at the layout / section level
- Don't manually set `max-w-*` when Container provides it — keep it consistent

## Accessibility

- Container is a semantic `<div>` — no accessibility properties needed
- Wrap inside `<main>` for proper page landmark structure
