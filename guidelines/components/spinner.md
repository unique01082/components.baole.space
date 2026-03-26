# Spinner

## Purpose

A loading indicator that communicates pending/in-progress state. Provides consistent animated visual feedback across buttons, full-page loading states, and inline content loading.

## When to Use

### ✅ Use Spinner when:

- An async operation is in progress (data fetching, form submission)
- A full-page or section is loading
- Inside a Button to indicate loading state

### ❌ Don't use Spinner when:

- Progress can be measured → Use `Progress`
- A skeleton of content is more appropriate → Use `Skeleton`
- The operation is instant (< 100ms) → Don't show a spinner at all

## Installation

```typescript
import { Spinner } from "@baolq/ui";
```

## Props API

| Prop        | Type                                        | Default     | Description            |
| ----------- | ------------------------------------------- | ----------- | ---------------------- |
| `size`      | `"sm"` \| `"md"` \| `"lg"` \| `"xl"`        | `"md"`      | Size of the spinner    |
| `variant`   | `"default"` \| `"primary"` \| `"secondary"` | `"default"` | Color/style variant    |
| `className` | `string`                                    | –           | Additional CSS classes |

## Examples

### Basic Spinner

```tsx
<Spinner />
```

### Sizes

```tsx
<div className="flex items-center gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner size="xl" />
</div>
```

### Variants

```tsx
<div className="flex items-center gap-4">
  <Spinner variant="default" />
  <Spinner variant="primary" />
  <Spinner variant="secondary" />
</div>
```

### Full-Page Loading State

```tsx
function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="xl" variant="primary" />
        <p className="text-white/50 text-sm">Loading...</p>
      </div>
    </div>
  );
}
```

### Inside a Button

```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Spinner size="sm" className="mr-2" />
      Saving...
    </>
  ) : (
    "Save Changes"
  )}
</Button>
```

### Section Loading Overlay

```tsx
function LoadingSection({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl z-10">
          <Spinner size="lg" variant="primary" />
        </div>
      )}
      <div className={isLoading ? "opacity-50 pointer-events-none" : ""}>
        {children}
      </div>
    </div>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Disable interactive elements while the spinner is showing
- Show a Spinner inside a Button when the button triggers an async action
- Use `size="xl"` for full-page loaders, `size="sm"` for inline/button loaders

### ❌ Don't

- Don't show a spinner for sub-100ms operations — it creates visual flicker
- Don't use Spinner when Skeleton would communicate the shape of incoming content
- Don't use multiple spinners on the same page simultaneously — show one loading state

## Accessibility

- Spinner has `role="status"` and `aria-label="Loading"` for screen readers
- Surrounding disabled content should have `aria-busy="true"` on the container
