# Chip

## Purpose

A compact interactive label used for filtering, selection, and categorization. Similar to Badge but designed for user interaction — can be clicked, toggled, and removed. Commonly used in filter interfaces and tag inputs.

## When to Use

### ✅ Use Chip when:

- Building a filter bar where users can activate/deactivate filters
- Showing selected items in a multi-select field with remove buttons
- Displaying interactive categories or options

### ❌ Don't use Chip when:

- The label is purely decorative/read-only → Use `Badge` or `Tag`
- Representing a status → Use `Badge`
- A full button is needed → Use `Button`

## Installation

```typescript
import { Chip } from "@baolq/ui";
```

## Props API

| Prop        | Type                                     | Default      | Description                                      |
| ----------- | ---------------------------------------- | ------------ | ------------------------------------------------ |
| `variant`   | `"default"` \| `"gradient"` \| `"solid"` | `"default"`  | Visual style                                     |
| `clickable` | `boolean`                                | `false`      | Makes the chip interactive (hover/active states) |
| `leftIcon`  | `React.ReactNode`                        | –            | Icon shown before label                          |
| `rightIcon` | `React.ReactNode`                        | –            | Icon shown after label                           |
| `onRemove`  | `() => void`                             | –            | Shows × button and calls handler                 |
| `disabled`  | `boolean`                                | `false`      | Disables interaction                             |
| `className` | `string`                                 | –            | Additional CSS classes                           |
| `children`  | `React.ReactNode`                        | **required** | Chip label                                       |

## Examples

### Filter Bar

```tsx
const [activeFilters, setActiveFilters] = useState<string[]>([]);

const toggleFilter = (filter: string) => {
  setActiveFilters((prev) =>
    prev.includes(filter)
      ? prev.filter((f) => f !== filter)
      : [...prev, filter],
  );
};

<div className="flex flex-wrap gap-2">
  {["Design", "Development", "Marketing", "Product"].map((filter) => (
    <Chip
      key={filter}
      clickable
      variant={activeFilters.includes(filter) ? "gradient" : "default"}
      onClick={() => toggleFilter(filter)}
    >
      {filter}
    </Chip>
  ))}
</div>;
```

### Selected Tags with Remove

```tsx
<div className="flex flex-wrap gap-2">
  {selectedTags.map((tag) => (
    <Chip
      key={tag}
      variant="solid"
      leftIcon={<Tag size={12} />}
      onRemove={() => removeTag(tag)}
    >
      {tag}
    </Chip>
  ))}
</div>
```

### With Avatar Icon

```tsx
<Chip
  leftIcon={
    <Avatar size="xs">
      <AvatarFallback>AJ</AvatarFallback>
    </Avatar>
  }
  onRemove={() => removeAssignee("alice")}
>
  Alice Johnson
</Chip>
```

## Do's and Don'ts

### ✅ Do

- Use `clickable` with a visual variant change to communicate selected state
- Use `onRemove` for chips that can be dismissed (selected filters, tags)
- Group chips in a wrapping flex row

### ❌ Don't

- Don't use Chip for non-interactive labels → Use Badge or Tag
- Don't add too much text — chips should be concise (1–3 words)

## Accessibility

- Clickable chips have `role="button"` and `tabIndex={0}`
- Remove button has `aria-label="Remove {label}"`
- Keyboard: Enter/Space activates; Delete/Backspace triggers `onRemove`
