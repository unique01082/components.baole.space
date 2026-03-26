# FloatButton

## Purpose

A fixed-position floating action button anchored to a corner of the viewport. Used for primary single-action shortcuts or grouped secondary actions. Supports individual buttons and a `FloatButtonGroup` for expandable menus.

## When to Use

### ✅ Use FloatButton when:

- Providing a persistent primary action (new post, scroll to top, help)
- Grouping related secondary actions in a collapsible floating menu
- A "Back to Top" scroll shortcut (though `BackTop` is preferred for that)

### ❌ Don't use FloatButton when:

- The action is context-dependent and belongs near the content → Use a Button
- The page has multiple competing primary actions → Use a header/toolbar CTA
- The button would overlap critical content on small screens

## Installation

```typescript
import { FloatButton, FloatButtonGroup } from "@baolq/ui";
```

## Props API

### FloatButton

| Prop          | Type                        | Default     | Description                             |
| ------------- | --------------------------- | ----------- | --------------------------------------- |
| `icon`        | `React.ReactNode`           | –           | Icon inside the button                  |
| `description` | `string`                    | –           | Text shown below icon                   |
| `tooltip`     | `string`                    | –           | Tooltip shown on hover                  |
| `shape`       | `"circle"` \| `"square"`    | `"circle"`  | Button shape                            |
| `variant`     | `"default"` \| `"gradient"` | `"default"` | Visual style                            |
| `badge`       | `BadgeProps`                | –           | Badge overlay (e.g. notification count) |
| `onClick`     | `() => void`                | –           | Click handler                           |
| `className`   | `string`                    | –           | Additional CSS classes                  |

### FloatButtonGroup

| Prop        | Type                     | Default    | Description             |
| ----------- | ------------------------ | ---------- | ----------------------- |
| `trigger`   | `"click"` \| `"hover"`   | `"click"`  | How to expand the group |
| `icon`      | `React.ReactNode`        | –          | Main trigger icon       |
| `shape`     | `"circle"` \| `"square"` | `"circle"` | Button shape            |
| `className` | `string`                 | –          | Additional CSS classes  |
| `children`  | `React.ReactNode`        | –          | `FloatButton` children  |

## Examples

### Single FAB

```tsx
<FloatButton
  icon={<Plus />}
  tooltip="Create new post"
  variant="gradient"
  onClick={openCreateModal}
  className="fixed bottom-6 right-6"
/>
```

### FAB Group (Click to Expand)

```tsx
<FloatButtonGroup
  trigger="click"
  icon={<Menu />}
  className="fixed bottom-6 right-6"
>
  <FloatButton
    icon={<MessageCircle />}
    tooltip="Chat support"
    onClick={openChat}
  />
  <FloatButton icon={<Mail />} tooltip="Send feedback" onClick={openFeedback} />
  <FloatButton
    icon={<HelpCircle />}
    tooltip="Documentation"
    onClick={openDocs}
  />
</FloatButtonGroup>
```

### FAB Group (Hover to Expand)

```tsx
<FloatButtonGroup
  trigger="hover"
  icon={<Share2 />}
  className="fixed bottom-24 right-6"
>
  <FloatButton icon={<Twitter />} tooltip="Share on Twitter" />
  <FloatButton icon={<Linkedin />} tooltip="Share on LinkedIn" />
  <FloatButton icon={<Link />} tooltip="Copy link" />
</FloatButtonGroup>
```

### With Badge Counter

```tsx
<FloatButton
  icon={<MessageCircle />}
  badge={{ count: unreadCount, max: 99 }}
  tooltip="Messages"
  className="fixed bottom-6 right-6"
/>
```

## Do's and Don'ts

### ✅ Do

- Always add `tooltip` for icon-only buttons
- Position with `fixed bottom-6 right-6` (bottom-right is convention)
- Use `FloatButtonGroup` when there are 2+ related actions

### ❌ Don't

- Don't show FloatButton on mobile if it covers content — position carefully
- Don't use more than one standalone FAB per page (causes confusion)
- Don't make the FAB the only path to a critical action

## Accessibility

- FloatButton has `role="button"` and `aria-label` from `tooltip`
- Focus is keyboard-reachable; Escape collapses an open group
- Badge counts are announced via `aria-label`
