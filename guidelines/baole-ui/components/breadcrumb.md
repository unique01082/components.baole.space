# Breadcrumb

## Purpose

Navigation trail showing the user's current location within a hierarchy. Helps users understand structure and navigate back to parent pages.

## When to Use

### ✅ Use Breadcrumb when:

- Showing location inside a multi-level hierarchy (settings > account > security)
- Helping users retrace their path in deeply nested pages
- Providing quick access to parent pages without using the browser back button

### ❌ Don't use Breadcrumb when:

- The site is flat (only 1–2 levels) — redundant
- On the homepage / root level — start is implied
- Mobile space is too tight — hide or collapse to ellipsis

## Installation

```typescript
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@baolq/ui";
```

## Props API

All subcomponents inherit standard HTML attribute props plus `className`.

| Component             | Key Prop          | Description                        |
| --------------------- | ----------------- | ---------------------------------- |
| `BreadcrumbLink`      | `href`, `asChild` | Clickable ancestor link            |
| `BreadcrumbPage`      | –                 | Current (non-clickable) page label |
| `BreadcrumbSeparator` | `children`        | Separator icon (default `/`)       |
| `BreadcrumbEllipsis`  | –                 | Collapsed items indicator (`…`)    |

## Examples

### Basic Usage

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Profile</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### With Collapsed Middle Items

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/settings/account">Account</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Security</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Custom Separator

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>›</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Dashboard</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### With Router Link (asChild)

```tsx
import { Link } from "react-router-dom";

<BreadcrumbItem>
  <BreadcrumbLink asChild>
    <Link to="/products">Products</Link>
  </BreadcrumbLink>
</BreadcrumbItem>;
```

## Do's and Don'ts

### ✅ Do

- Always mark the current page as `BreadcrumbPage` (non-clickable)
- Keep labels short — use noun phrases, not full page titles
- Use `BreadcrumbEllipsis` to collapse long trails on mobile

### ❌ Don't

- Don't make the last item clickable — it's the current page
- Don't duplicate breadcrumb and sidebar navigation — choose one
- Don't use breadcrumbs as a substitute for good navigation architecture

## Accessibility

- Wrap in a `<nav aria-label="breadcrumb">` — the `Breadcrumb` component does this automatically
- `BreadcrumbPage` renders with `aria-current="page"`
- Ensure each `BreadcrumbLink` has meaningful text
