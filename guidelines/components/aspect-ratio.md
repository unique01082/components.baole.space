# AspectRatio

## Purpose

Maintains a fixed aspect ratio for its child content (images, videos, embeds). Prevents layout shift during media load and ensures consistent proportions across screen sizes. Built on Radix UI AspectRatio.

## When to Use

### ✅ Use AspectRatio when:

- Displaying images that must maintain a fixed ratio (16:9 thumbnails, 1:1 avatars, etc.)
- Embedding iframes or videos responsively
- Creating uniform card layouts where image height must be consistent

### ❌ Don't use AspectRatio when:

- Content has a known intrinsic size that already fits correctly
- You can use Tailwind's `aspect-*` utilities directly — simpler for one-off cases
- Container height is fixed in pixels — aspect ratio is irrelevant

## Installation

```typescript
import { AspectRatio } from "@baolq/ui";
```

## Props API

| Prop        | Type     | Default | Description                                                    |
| ----------- | -------- | ------- | -------------------------------------------------------------- |
| `ratio`     | `number` | `1`     | Width : Height ratio. `16/9` = 1.777, `4/3` = 1.333, `1/1` = 1 |
| `className` | `string` | –       | Additional CSS classes on the container                        |

## Examples

### 16:9 Image

```tsx
<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl">
  <img
    src="/thumbnail.jpg"
    alt="Video thumbnail"
    className="w-full h-full object-cover"
  />
</AspectRatio>
```

### Square Avatar

```tsx
<AspectRatio ratio={1} className="w-24 overflow-hidden rounded-full">
  <img src="/avatar.jpg" alt="User" className="w-full h-full object-cover" />
</AspectRatio>
```

### Responsive Video Embed

```tsx
<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video"
    className="w-full h-full rounded-xl"
    allowFullScreen
  />
</AspectRatio>
```

### Card Image Thumbnail

```tsx
<Card>
  <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-t-xl">
    <img
      src="/card-image.jpg"
      alt="Post"
      className="w-full h-full object-cover"
    />
  </AspectRatio>
  <CardContent className="p-4">
    <CardTitle>Post Title</CardTitle>
  </CardContent>
</Card>
```

## Do's and Don'ts

### ✅ Do

- Always set `object-cover` or `object-contain` on child images
- Add `overflow-hidden` to the AspectRatio when using `rounded-*`
- Use standard ratios: `16/9` (video), `4/3` (photo), `1/1` (square), `2/3` (portrait)

### ❌ Don't

- Don't forget `className="w-full h-full"` on the child — it must fill the container
- Don't set explicit height on the AspectRatio wrapper — it calculates height from `ratio`
- Don't nest multiple AspectRatios

## Accessibility

- Has no inherent ARIA role — the child media element should carry appropriate `alt`, `title`, or `aria-label`
