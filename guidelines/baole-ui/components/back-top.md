# BackTop

## Purpose

A floating button that appears after the user scrolls past a threshold and scrolls the page (or a container) back to the top. Reduces friction in long-content pages.

## When to Use

### ✅ Use BackTop when:

- The page has substantial scrollable content (articles, long lists, dashboards)
- Infinite scroll patterns where users may scroll very far down
- Long documentation pages or feeds

### ❌ Don't use BackTop when:

- The page is short or content fits within one viewport without scrolling
- A sticky header with a logo link already provides navigation back to top

## Installation

```typescript
import { BackTop } from "@baolq/ui";
```

## Props API

| Prop               | Type                | Default | Description                                |
| ------------------ | ------------------- | ------- | ------------------------------------------ |
| `visibilityHeight` | `number`            | `400`   | Scroll distance (px) before button appears |
| `target`           | `() => HTMLElement` | –       | Scroll container (defaults to `window`)    |
| `onClick`          | `() => void`        | –       | Callback when button is clicked            |
| `className`        | `string`            | –       | Additional CSS classes                     |

## Examples

### Basic Back to Top

```tsx
// Simply mount it — it handles visibility automatically
<BackTop />
```

### Custom Visibility Threshold

```tsx
<BackTop visibilityHeight={600} />
```

### Inside a Scroll Container

```tsx
const scrollRef = useRef<HTMLDivElement>(null)

<div ref={scrollRef} className="overflow-y-auto h-screen">
  {/* long content */}
  <BackTop target={() => scrollRef.current!} />
</div>
```

### With Click Callback (Analytics)

```tsx
<BackTop onClick={() => analytics.track("back_to_top_clicked")} />
```

### Page with Back Top

```tsx
export default function LongArticlePage() {
  return (
    <main>
      <Container size="md">
        <article>
          <h1>A Very Long Article</h1>
          {/* thousands of words... */}
        </article>
      </Container>

      <BackTop visibilityHeight={500} />
    </main>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Mount `BackTop` at the page root — no wrapper setup needed
- Use `target` when content is in a custom scroll container (not `window`)
- Use default placement (bottom-right) to match user expectation

### ❌ Don't

- Don't show BackTop on short pages where it will never become visible
- Don't override the scroll animation — smooth scrolling is built-in

## Accessibility

- Button has `aria-label="Back to top"` and `role="button"`
- Appears/disappears based on scroll position with `aria-hidden` toggled
- Keyboard-accessible and announces purpose to screen readers
