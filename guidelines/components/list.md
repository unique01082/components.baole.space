# List

## Purpose

Renders a structured list of items with support for avatar, title, description, metadata, and action slots. Supports hover highlighting, dividers, bordered style, and click handlers.

## When to Use

### ✅ Use List when:

- Displaying a set of similar entities (users, repos, notifications, search results)
- Showing items with avatar + title + description layout
- Providing simple item-level actions (edit, delete, view)

### ❌ Don't use List when:

- Tabular data with columns → Use `Table`
- Complex hierarchical data → Use `Tree`
- Content is prose/freeform → Use a simple `<ul>` or `Card`s

## Installation

```typescript
import { List, ListItem } from "@baolq/ui";
```

## Props API

### List

| Prop          | Type                           | Default      | Description                      |
| ------------- | ------------------------------ | ------------ | -------------------------------- |
| `items`       | `ListItemData[]`               | **required** | Array of item data objects       |
| `bordered`    | `boolean`                      | `false`      | Adds outer border to the list    |
| `hoverable`   | `boolean`                      | `false`      | Highlights row on hover          |
| `divided`     | `boolean`                      | `true`       | Shows dividers between items     |
| `onItemClick` | `(item: ListItemData) => void` | –            | Callback when an item is clicked |
| `className`   | `string`                       | –            | Additional CSS classes           |

### ListItem (Direct Usage)

You can also use `ListItem` directly inside a `List` for custom rendering.

### ListItemData

```typescript
interface ListItemData {
  key: string;
  avatar?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode; // content on the right side
  actions?: React.ReactNode[]; // action buttons
}
```

## Examples

### User List

```tsx
const users = [
  {
    key: '1',
    avatar: <Avatar><AvatarFallback>AJ</AvatarFallback></Avatar>,
    title: 'Alice Johnson',
    description: 'alice@example.com',
    extra: <Badge variant="success" dot>Online</Badge>,
    actions: [<Button size="sm" variant="ghost">Message</Button>],
  },
  {
    key: '2',
    avatar: <Avatar><AvatarFallback>BS</AvatarFallback></Avatar>,
    title: 'Bob Smith',
    description: 'bob@example.com',
    extra: <Badge variant="default" dot>Offline</Badge>,
    actions: [<Button size="sm" variant="ghost">Message</Button>],
  },
]

<List
  items={users}
  bordered
  hoverable
/>
```

### Notification List

```tsx
const notifications = [
  {
    key: '1',
    title: 'New comment on your post',
    description: '5 minutes ago',
    extra: <Badge variant="gradient" size="sm">New</Badge>,
  },
  {
    key: '2',
    title: 'Your subscription was renewed',
    description: '2 hours ago',
  },
]

<List
  items={notifications}
  hoverable
  onItemClick={(item) => markAsRead(item.key)}
/>
```

### Simple Text List (No Avatar)

```tsx
<List
  items={[
    { key: "1", title: "Feature A released" },
    { key: "2", title: "Performance improvements" },
    { key: "3", title: "Bug fixes in v2.1.1" },
  ]}
  divided
/>
```

## Do's and Don'ts

### ✅ Do

- Use `hoverable` when items are clickable
- Use `bordered` to separate the list visually from surrounding content
- Limit `actions` to 2–3 items per row

### ❌ Don't

- Don't use List for dense tabular data with many columns → Use Table
- Don't add deeply nested content inside list items — keep them scannable

## Accessibility

- List renders as `<ul>` with `<li>` items
- Clickable items have `role="button"` and `tabIndex={0}`
- Action buttons have descriptive `aria-label`
