# ScrollArea

## Purpose

Custom-styled scrollable container with overlay scrollbars that appear on hover. Built on Radix UI ScrollArea. Replaces native browser scrollbars for a consistent cross-browser look.

## When to Use

### ✅ Use ScrollArea when:

- A panel/container needs scrolling with a styled scrollbar
- Building a fixed-height sidebar, modal content, or code viewer
- Ensuring consistent scrollbar appearance across Windows/macOS/Linux

### ❌ Don't use ScrollArea when:

- The entire page scrolls — use native `overflow-y: auto` on `<body>`
- Virtual/windowed lists are needed for performance (10k+ rows) → Use a virtualization library
- The scroll container has no defined height — ScrollArea requires a bounded height

## Installation

```typescript
import { ScrollArea, ScrollBar } from "@baolq/ui";
```

## Props API

### ScrollArea

| Prop        | Type                                              | Default   | Description                                    |
| ----------- | ------------------------------------------------- | --------- | ---------------------------------------------- |
| `className` | `string`                                          | –         | Applied to the outer container. Set `h-*` here |
| `type`      | `"auto"` \| `"always"` \| `"scroll"` \| `"hover"` | `"hover"` | When scrollbar is visible                      |

### ScrollBar

| Prop          | Type                           | Default      | Description            |
| ------------- | ------------------------------ | ------------ | ---------------------- |
| `orientation` | `"vertical"` \| `"horizontal"` | `"vertical"` | Scrollbar direction    |
| `className`   | `string`                       | –            | Additional CSS classes |

## Examples

### Fixed Height Vertical Scroll

```tsx
<ScrollArea className="h-72 w-full rounded-md border border-white/10 p-4">
  {Array.from({ length: 30 }, (_, i) => (
    <div key={i} className="py-2 text-white/70 border-b border-white/5">
      Item {i + 1}
    </div>
  ))}
</ScrollArea>
```

### Sidebar with ScrollArea

```tsx
<aside className="w-64 h-screen border-r border-white/10">
  <div className="p-4 border-b border-white/10">
    <h2 className="text-white font-semibold">Navigation</h2>
  </div>
  <ScrollArea className="flex-1 h-[calc(100vh-57px)]">
    <nav className="p-4 space-y-1">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </ScrollArea>
</aside>
```

### Horizontal Scroll

```tsx
<ScrollArea className="w-full whitespace-nowrap">
  <div className="flex gap-4 p-4">
    {cards.map((card) => (
      <div
        key={card.id}
        className="w-48 shrink-0 rounded-lg border border-white/10 p-4"
      >
        {card.title}
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

## Do's and Don'ts

### ✅ Do

- Always define a fixed height on `ScrollArea` (e.g. `h-72`, `h-[400px]`, `max-h-screen`)
- Include `<ScrollBar orientation="horizontal" />` when horizontal scrolling is needed
- Use inside modals and panels for consistent styling

### ❌ Don't

- Don't forget to set a bounded height — the component won't scroll without it
- Don't nest ScrollAreas — the inner scrollbar will conflict with the outer
- Don't use for paginated content — use Pagination instead

## Accessibility

- Scrollable region is keyboard navigable
- Radix manages ARIA roles and scroll announcements
- Ensure focused elements inside the scroll area are visible (scroll into view)
