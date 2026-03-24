# Skeleton

## Purpose

Placeholder shapes that represent loading content. Prevents layout shift and reduces perceived load time by showing the approximate shape of content before it arrives.

## When to Use

### ✅ Use Skeleton when:

- Content is loading and you know the approximate shape/size
- Page sections, cards, or list items are being fetched
- Replacing any component that fetches async data

### ❌ Don't use Skeleton when:

- Loading duration is < 300ms — too fast to notice; show nothing or spinner
- You don't know the shape — use `Spinner` instead
- The page has a global loading state — use a top progress bar

## Installation

```typescript
import { Skeleton } from "@baole/ui";
```

## Props API

| Prop        | Type     | Default | Description                                  |
| ----------- | -------- | ------- | -------------------------------------------- |
| `className` | `string` | –       | Controls size and shape via Tailwind classes |

> The Skeleton renders a single animated `<div>`. Use `className` to control `w-*`, `h-*`, `rounded-*`.

## Examples

```tsx
// Text line
<Skeleton className="h-4 w-48" />

// Multiple lines
<div className="flex flex-col gap-2">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>

// Avatar / circle
<Skeleton className="h-10 w-10 rounded-full" />

// Card skeleton
<div className="rounded-lg border border-white/10 p-6 flex flex-col gap-4">
  <Skeleton className="h-6 w-40" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
  <Skeleton className="h-4 w-3/4" />
</div>

// Table row skeleton
<div className="flex gap-4 items-center py-3">
  <Skeleton className="h-8 w-8 rounded-full" />
  <Skeleton className="h-4 w-32" />
  <Skeleton className="h-4 w-24 ml-auto" />
</div>
```

## Do's and Don'ts

### ✅ Do

- Match the skeleton shape closely to the real content shape
- Use skeletons for list items — show 3–5 skeleton rows while fetching
- Compose multiple Skeletons to approximate the full layout

### ❌ Don't

- Don't make skeleton widths perfectly exact — slight variety looks more natural
- Don't use Skeleton for buttons or interactive elements — show the button as `disabled` instead
- Don't skip the animation — it signals "loading" clearly
