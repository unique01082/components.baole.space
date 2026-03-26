# Image

## Purpose

An enhanced `<img>` wrapper with built-in error fallback, loading state, aspect ratio, and object-fit control. Prevents broken image icons by rendering a styled placeholder on load failure.

## When to Use

### ✅ Use Image when:

- Displaying user-uploaded or dynamic images that may fail to load
- Images need a specific aspect ratio and object-fit behavior
- Loading state feedback is needed for slow remote images

### ❌ Don't use Image when:

- Static bundled images with guaranteed availability → Use plain `<img>` or `<AspectRatio>` + `<img>`
- Decorative background images → Use Tailwind `bg-*` CSS

## Installation

```typescript
import { Image } from "@baolq/ui";
```

## Props API

| Prop           | Type                                             | Default      | Description                       |
| -------------- | ------------------------------------------------ | ------------ | --------------------------------- |
| `src`          | `string`                                         | **required** | Image URL                         |
| `alt`          | `string`                                         | **required** | Alternative text                  |
| `fallback`     | `React.ReactNode`                                | –            | Content shown on error            |
| `onError`      | `() => void`                                     | –            | Callback when image fails to load |
| `aspectRatio`  | `number`                                         | –            | Aspect ratio (e.g. `16/9`, `1`)   |
| `objectFit`    | `"cover"` \| `"contain"` \| `"fill"` \| `"none"` | `"cover"`    | CSS object-fit value              |
| `className`    | `string`                                         | –            | Applied to the container          |
| `imgClassName` | `string`                                         | –            | Applied to the `<img>` element    |

## Examples

### Basic Image with Fallback

```tsx
<Image
  src={user.avatarUrl}
  alt={`${user.name}'s avatar`}
  aspectRatio={1}
  fallback={
    <div className="flex items-center justify-center bg-white/10 text-white/50">
      <User size={24} />
    </div>
  }
/>
```

### 16:9 Thumbnail

```tsx
<Image
  src={post.thumbnailUrl}
  alt={post.title}
  aspectRatio={16 / 9}
  objectFit="cover"
  className="rounded-xl overflow-hidden"
/>
```

### Product Image with Contain

```tsx
<Image
  src={product.imageUrl}
  alt={product.name}
  aspectRatio={1}
  objectFit="contain"
  className="w-32 h-32 bg-white/5 rounded-lg"
/>
```

### Full-Width Banner

```tsx
<Image
  src={banner.url}
  alt={banner.title}
  aspectRatio={21 / 9}
  objectFit="cover"
  className="w-full rounded-2xl overflow-hidden"
  fallback={
    <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 w-full h-full" />
  }
/>
```

### With onError Handler

```tsx
<Image
  src={imageUrl}
  alt="Product photo"
  aspectRatio={4 / 3}
  onError={() => analytics.track("image_load_failed", { url: imageUrl })}
  fallback={<ImageOffIcon className="text-white/30" />}
/>
```

## Do's and Don'ts

### ✅ Do

- Always provide `alt` text for accessible images (empty string `""` for decorative)
- Always provide `fallback` for dynamic images (user content, external URLs)
- Use `aspectRatio` to prevent layout shifts during loading

### ❌ Don't

- Don't use Image for icons — use `lucide-react` icons
- Don't use Image for CSS background patterns — use Tailwind `bg-*`
- Don't omit `alt` — it's required for screen reader support

## Accessibility

- Renders as `<img>` with the provided `alt` attribute
- Fallback content has `aria-hidden={true}` when image is decorative
- When fallback displays meaningful content, ensure it has its own accessible text
