# Anchor

## Purpose

A floating list of jump-links that tracks the currently visible section as the user scrolls, highlighting the active anchor. Used for in-page navigation in documentation, long-form articles, and settings pages.

## When to Use

### ✅ Use Anchor when:

- A page has multiple named sections that users benefit from jumping to
- Long documentation or blog posts need a table of contents with active state
- Settings pages have categorized sections with on-page navigation

### ❌ Don't use Anchor when:

- Navigation links go to different pages → Use NavigationMenu or Breadcrumb
- The page has fewer than 3 sections → Use a simple list of links
- The page is too short to benefit from scroll tracking

## Installation

```typescript
import { Anchor, AnchorLink } from "@baolq/ui";
```

## Props API

### Anchor

| Prop           | Type                     | Default | Description                                         |
| -------------- | ------------------------ | ------- | --------------------------------------------------- |
| `links`        | `AnchorLinkItem[]`       | –       | Links array (alternative to children)               |
| `activeLink`   | `string`                 | –       | Controlled active anchor href                       |
| `onChange`     | `(href: string) => void` | –       | Called when active link changes                     |
| `offsetTop`    | `number`                 | `0`     | Scroll offset in pixels (e.g. sticky header height) |
| `targetOffset` | `number`                 | –       | Offset at which an anchor is considered "active"    |
| `className`    | `string`                 | –       | Additional CSS classes                              |
| `children`     | `React.ReactNode`        | –       | `AnchorLink` children (alternative to `links`)      |

### AnchorLink

| Prop       | Type              | Default      | Description                       |
| ---------- | ----------------- | ------------ | --------------------------------- |
| `href`     | `string`          | **required** | Target anchor (e.g. `#section-1`) |
| `title`    | `string`          | **required** | Link label                        |
| `children` | `React.ReactNode` | –            | Nested AnchorLink items           |

### AnchorLinkItem

```typescript
interface AnchorLinkItem {
  href: string;
  title: string;
  children?: AnchorLinkItem[];
}
```

## Examples

### Documentation Table of Contents

```tsx
// In page content, use id attributes:
// <h2 id="installation">Installation</h2>
// <h2 id="api">API</h2>

<div className="flex gap-12">
  <article className="flex-1">
    <h2 id="installation">Installation</h2>
    <p>{/* ... */}</p>
    <h2 id="api">API Reference</h2>
    <p>{/* ... */}</p>
    <h2 id="examples">Examples</h2>
    <p>{/* ... */}</p>
    <h2 id="accessibility">Accessibility</h2>
    <p>{/* ... */}</p>
  </article>

  <aside className="w-48 shrink-0">
    <Anchor offsetTop={64}>
      <AnchorLink href="#installation" title="Installation" />
      <AnchorLink href="#api" title="API Reference">
        <AnchorLink href="#api-props" title="Props" />
        <AnchorLink href="#api-methods" title="Methods" />
      </AnchorLink>
      <AnchorLink href="#examples" title="Examples" />
      <AnchorLink href="#accessibility" title="Accessibility" />
    </Anchor>
  </aside>
</div>
```

### Using Links Array

```tsx
const tocLinks = [
  { href: '#overview', title: 'Overview' },
  { href: '#features', title: 'Features', children: [
    { href: '#features-search', title: 'Search' },
    { href: '#features-filter', title: 'Filter' },
  ]},
  { href: '#pricing', title: 'Pricing' },
  { href: '#faq', title: 'FAQ' },
]

<Anchor links={tocLinks} offsetTop={80} />
```

### Controlled Active Link

```tsx
function PageWithAnchor() {
  const [active, setActive] = useState("#introduction");

  return (
    <Anchor activeLink={active} onChange={setActive} offsetTop={64}>
      <AnchorLink href="#introduction" title="Introduction" />
      <AnchorLink href="#usage" title="Usage" />
      <AnchorLink href="#config" title="Configuration" />
    </Anchor>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Set `offsetTop` to match your sticky header height so sections activate correctly
- Use nested `AnchorLink` for sub-sections (h3 under h2)
- Place Anchor in a sticky sidebar (`position: sticky; top: 80px`) for best UX

### ❌ Don't

- Don't add more than 8–10 top-level links — use collapsible sections if needed
- Don't use Anchor for external navigation — it's for in-page anchors only
- Don't skip anchor IDs on the target headings

## Accessibility

- Rendered as `<nav>` with `aria-label="On this page"` or similar
- Active link has `aria-current="location"`
- Links are keyboard-navigable
