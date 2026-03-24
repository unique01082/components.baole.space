# HoverCard

## Purpose

A card that appears when hovering over a trigger element, typically a link or user avatar. Built on Radix UI HoverCard. Used for rich preview content — unlike Tooltip, it supports images, multiple lines, and complex layouts.

## When to Use

### ✅ Use HoverCard when:

- Rich preview of a user profile, link, or entity on hover
- Showing a preview card for a @mention, hashtag, or link
- Additional context for a truncated item (project preview, file preview)

### ❌ Don't use HoverCard when:

- Short plain text hint → Use `Tooltip`
- User needs to interact with the content → Use `Popover` (HoverCard closes on mouse leave)
- You need the content on touch devices → HoverCard doesn't work on mobile

## Installation

```typescript
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@baole/ui";
```

## Examples

```tsx
// User profile preview
<HoverCard>
  <HoverCardTrigger asChild>
    <a
      href="/users/baole"
      className="font-medium text-purple-400 hover:underline"
    >
      @baole
    </a>
  </HoverCardTrigger>
  <HoverCardContent className="w-72">
    <div className="flex gap-3">
      <Avatar src="/avatars/baole.jpg" fallback="BL" size="md" />
      <div>
        <p className="text-sm font-semibold">Bao Le</p>
        <p className="text-xs text-white/50">baole.space</p>
        <p className="text-sm text-white/70 mt-1">
          Building creative tools and experiences.
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

## Props API

### HoverCardContent

| Prop         | Type                                           | Default    | Description            |
| ------------ | ---------------------------------------------- | ---------- | ---------------------- |
| `side`       | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | `"bottom"` | Preferred side         |
| `align`      | `"start"` \| `"center"` \| `"end"`             | `"center"` | Alignment              |
| `sideOffset` | `number`                                       | `4`        | Gap from trigger       |
| `openDelay`  | `number`                                       | `700`      | Delay before show (ms) |
| `closeDelay` | `number`                                       | `300`      | Delay before hide (ms) |

## Do's and Don'ts

### ✅ Do

- Use a generous `openDelay` (500–700ms) to avoid flickering on accidental hover
- Keep HoverCard width bounded (`w-64` to `w-80`)
- Make the trigger visually indicate it has a preview (underline, color change)

### ❌ Don't

- Don't put forms or action buttons inside — they're impossible to reach before close
- Don't use on mobile — hover doesn't exist; render an alternative (tap to expand)
