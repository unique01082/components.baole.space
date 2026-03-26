# Tag

## Purpose

A small static label for categorization, metadata, and status display. Similar to Badge but with semantic color variants for domain states (success, warning, error, info) and optional close button.

## When to Use

### ✅ Use Tag when:

- Labeling categories, technologies, or topics in a list
- Displaying a domain status (active, archived, deprecated) with semantic color
- Showing closable tags in a tag-input interface

### ❌ Don't use Tag when:

- The user needs to interact with it as a filter → Use `Chip`
- Content is a numeric count → Use `Badge` with `count` variant
- A larger status indicator is required → Use `Alert`

## Installation

```typescript
import { Tag } from "@baolq/ui";
```

## Props API

| Prop        | Type                                                                                            | Default      | Description              |
| ----------- | ----------------------------------------------------------------------------------------------- | ------------ | ------------------------ |
| `variant`   | `"default"` \| `"solid"` \| `"gradient"` \| `"success"` \| `"warning"` \| `"error"` \| `"info"` | `"default"`  | Color/style variant      |
| `closable`  | `boolean`                                                                                       | `false`      | Show a × close button    |
| `onClose`   | `() => void`                                                                                    | –            | Called when × is clicked |
| `icon`      | `React.ReactNode`                                                                               | –            | Icon shown before label  |
| `className` | `string`                                                                                        | –            | Additional CSS classes   |
| `children`  | `React.ReactNode`                                                                               | **required** | Tag label                |

## Examples

### Technology Tags

```tsx
<div className="flex flex-wrap gap-2">
  <Tag>React</Tag>
  <Tag variant="solid">TypeScript</Tag>
  <Tag variant="gradient">TailwindCSS</Tag>
</div>
```

### Status Tags

```tsx
<div className="flex flex-wrap gap-2">
  <Tag variant="success">Active</Tag>
  <Tag variant="warning">Pending</Tag>
  <Tag variant="error">Deprecated</Tag>
  <Tag variant="info">Beta</Tag>
</div>
```

### With Icon

```tsx
<Tag variant="success" icon={<CheckCircle size={12} />}>Verified</Tag>
<Tag variant="warning" icon={<AlertTriangle size={12} />}>Review needed</Tag>
<Tag variant="info" icon={<Info size={12} />}>New feature</Tag>
```

### Closable Tags (Tag Input)

```tsx
function TagInput() {
  const [tags, setTags] = useState(["react", "typescript", "design"]);

  return (
    <div className="flex flex-wrap gap-2 p-2 border border-white/10 rounded-lg">
      {tags.map((tag) => (
        <Tag
          key={tag}
          closable
          onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Use semantic variants (`success`, `warning`, `error`) consistently for status labels
- Use `icon` to reinforce meaning visually
- Limit tag text to 1–3 words for scannability

### ❌ Don't

- Don't use Tag when click/selection behavior is needed → Use Chip
- Don't combine multiple semantic variants randomly — establish a convention

## Accessibility

- Close button has `aria-label="Remove {tag label}"`
- Tags are rendered as `<span>` elements — not keyboard-interactive by default
- If tags are part of interactive selection, wrap in a keyboard-accessible container
