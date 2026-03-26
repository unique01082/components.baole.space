# Affix

## Purpose

Fixes a wrapped element to the viewport as the user scrolls past a certain offset. Used for sticky headers, floating action toolbars, or persistent navigation bars within a page section.

## When to Use

### ✅ Use Affix when:

- Making a navigation bar or toolbar sticky after the user scrolls past the hero
- Keeping a sidebar or filter panel visible while scrolling the main content
- Pinning a CTA button visible at a fixed position during scroll

### ❌ Don't use Affix when:

- Sticky behavior can be achieved with CSS `position: sticky` — prefer that approach
- The element should be fixed at all times → Use `position: fixed` with Tailwind
- Inside a short page where scrolling doesn't reach the threshold

## Installation

```typescript
import { Affix } from "@baolq/ui";
```

## Props API

| Prop           | Type                         | Default      | Description                                      |
| -------------- | ---------------------------- | ------------ | ------------------------------------------------ |
| `offsetTop`    | `number`                     | –            | Pixels from top of viewport to trigger sticky    |
| `offsetBottom` | `number`                     | –            | Pixels from bottom of viewport to trigger sticky |
| `target`       | `() => HTMLElement`          | –            | Scroll container (defaults to `window`)          |
| `onChange`     | `(affixed: boolean) => void` | –            | Called when affixed state changes                |
| `className`    | `string`                     | –            | Applied to the wrapper                           |
| `children`     | `React.ReactNode`            | **required** | Content to affix                                 |

## Examples

### Sticky Top Navigation

```tsx
<Affix offsetTop={0}>
  <nav className="bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-3">
    <Logo />
    <NavLinks />
  </nav>
</Affix>
```

### Sticky Toolbar (After Hero)

```tsx
<HeroSection />

<Affix offsetTop={64} onChange={(affixed) => setToolbarShadow(affixed)}>
  <div className={`flex items-center gap-3 py-3 px-6 ${toolbarShadow ? 'shadow-lg' : ''}`}>
    <FilterDropdown />
    <SearchInput />
    <SortSelector />
  </div>
</Affix>
```

### Bottom-Pinned CTA

```tsx
<Affix offsetBottom={20}>
  <div className="max-w-sm mx-auto">
    <Button size="lg" className="w-full shadow-2xl">
      Get Started Free
    </Button>
  </div>
</Affix>
```

### Inside a Scroll Container

```tsx
const containerRef = useRef<HTMLDivElement>(null)

<div ref={containerRef} className="overflow-y-auto h-[600px]">
  <ArticleContent />

  <Affix
    offsetTop={0}
    target={() => containerRef.current!}
    onChange={(affixed) => console.log('Affixed:', affixed)}
  >
    <TableOfContents />
  </Affix>
</div>
```

## Do's and Don'ts

### ✅ Do

- Use `onChange` to add/remove `backdrop-blur` or `shadow` when affixed for visual depth
- Set `offsetTop={64}` (or your header height) to affix below the header
- Use `target` when the scroll container isn't `window`

### ❌ Don't

- Don't use Affix for elements that should always be fixed — use CSS `fixed` instead
- Don't affix large elements that leave no visible space for content
- Don't use Affix and `position: sticky` on the same element

## Accessibility

- Affix is a transparent wrapper — no accessibility changes to inner content
- Ensure affixed navigations have proper `role="navigation"` and `aria-label`
