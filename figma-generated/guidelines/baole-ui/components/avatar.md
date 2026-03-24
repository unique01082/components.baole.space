# Avatar

## Purpose

A user or entity representation component. Displays a profile image with automatic fallback to initials or a generic icon. Supports size variants and stacked avatar groups.

## When to Use

### ✅ Use Avatar when:

- Showing user identity (profile, comment author, assigned user)
- Representing entities (teams, bots, apps)
- Building user lists, member stacks, chat UIs

## Installation

```typescript
import { Avatar, AvatarFallback, AvatarImage } from "@baole/ui";
```

## Props API

### Avatar (root)

| Prop        | Type                                                      | Default    | Description            |
| ----------- | --------------------------------------------------------- | ---------- | ---------------------- |
| `size`      | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"` | `"md"`     | Avatar diameter        |
| `shape`     | `"circle"` \| `"square"`                                  | `"circle"` | Border radius          |
| `className` | `string`                                                  | –          | Additional CSS classes |

### AvatarImage

| Prop  | Type     | Default | Description                           |
| ----- | -------- | ------- | ------------------------------------- |
| `src` | `string` | –       | Image URL                             |
| `alt` | `string` | –       | Alt text (required for accessibility) |

### AvatarFallback

| Prop        | Type     | Default | Description                                    |
| ----------- | -------- | ------- | ---------------------------------------------- |
| `delayMs`   | `number` | `600`   | Delay before showing fallback (prevents flash) |
| `className` | `string` | –       | Additional CSS classes                         |

## Size Reference

| Size  | Diameter | Typical Use               |
| ----- | -------- | ------------------------- |
| `xs`  | 20px     | Inline micro-avatar       |
| `sm`  | 32px     | Compact lists, table rows |
| `md`  | 40px     | Default (most components) |
| `lg`  | 48px     | Profile cards             |
| `xl`  | 64px     | User profile header       |
| `2xl` | 96px     | Settings / account page   |

## Examples

```tsx
// Basic with fallback
<Avatar>
  <AvatarImage src={user.avatarUrl} alt={user.name} />
  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
</Avatar>

// Sized
<Avatar size="lg">
  <AvatarImage src="/avatars/baole.jpg" alt="Bao Le" />
  <AvatarFallback>BL</AvatarFallback>
</Avatar>

// Stacked group
<div className="flex -space-x-2">
  {members.slice(0, 4).map((m) => (
    <Avatar key={m.id} size="sm" className="ring-2 ring-[var(--color-bg)]">
      <AvatarImage src={m.avatar} alt={m.name} />
      <AvatarFallback>{getInitials(m.name)}</AvatarFallback>
    </Avatar>
  ))}
  {members.length > 4 && (
    <Avatar size="sm" className="ring-2 ring-[var(--color-bg)]">
      <AvatarFallback>+{members.length - 4}</AvatarFallback>
    </Avatar>
  )}
</div>
```

## Do's and Don'ts

### ✅ Do

- Always provide `AvatarFallback` — images can fail to load
- Use 2-letter initials for fallback: `getInitials("Bao Le") → "BL"`
- Use `-space-x-2` with `ring-2` for stacked groups

### ❌ Don't

- Don't set `alt=""` unless the avatar is purely decorative (rare)
- Don't use `xs` size alone without a tooltip — too small to be identifiable
- Don't show more than 5 avatars in a stacked group — show "+N" remainder
