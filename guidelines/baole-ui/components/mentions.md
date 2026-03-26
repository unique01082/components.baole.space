# Mentions

## Purpose

Textarea with real-time @mention autocomplete. As the user types the `@` prefix (configurable), a dropdown appears with matching options from the provided list. Used in comment boxes, chat inputs, and collaborative editors.

## When to Use

### ✅ Use Mentions when:

- Comment fields that support @user mentions
- Task descriptions where users can tag team members
- Chat inputs or rich text areas with user/entity tagging

### ❌ Don't use Mentions when:

- Simple freeform textarea is sufficient → Use `Textarea`
- Search-as-you-type without the @ trigger → Use `AutoComplete`
- User list is very large (1000+) → Implement server-side filtering in `onChange`

## Installation

```typescript
import { Mentions, type MentionOption } from "@baolq/ui";
```

## Props API

| Prop          | Type                                              | Default      | Description                                                  |
| ------------- | ------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| `options`     | `MentionOption[]`                                 | **required** | List of `{ value: string; label: string }` mentionable items |
| `value`       | `string`                                          | –            | Controlled textarea value                                    |
| `onChange`    | `(value: string) => void`                         | –            | Called on every change                                       |
| `onSelect`    | `(option: MentionOption, prefix: string) => void` | –            | Called when a mention is selected                            |
| `prefix`      | `string`                                          | `"@"`        | Trigger character(s)                                         |
| `placeholder` | `string`                                          | –            | Textarea placeholder                                         |
| `disabled`    | `boolean`                                         | `false`      | Disables the textarea                                        |
| `rows`        | `number`                                          | `3`          | Initial row count                                            |
| `className`   | `string`                                          | –            | Additional CSS classes                                       |

### MentionOption

```typescript
interface MentionOption {
  value: string;
  label: string;
}
```

## Examples

### Basic Comment Box

```tsx
const users = [
  { value: "alice", label: "Alice Johnson" },
  { value: "bob", label: "Bob Smith" },
  { value: "carol", label: "Carol White" },
];

function CommentBox() {
  const [text, setText] = useState("");

  return (
    <Mentions
      options={users}
      value={text}
      onChange={setText}
      placeholder="Write a comment… Type @ to mention someone"
      rows={4}
    />
  );
}
```

### Custom Prefix (#hashtag)

```tsx
const tags = [
  { value: 'bug', label: '#bug' },
  { value: 'feature', label: '#feature' },
  { value: 'docs', label: '#docs' },
]

<Mentions
  options={tags}
  prefix="#"
  placeholder="Add tags using #"
  onChange={(v) => console.log(v)}
/>
```

### Async Options

```tsx
function AsyncMentions() {
  const [options, setOptions] = useState<MentionOption[]>([]);
  const [text, setText] = useState("");

  const handleChange = async (value: string) => {
    setText(value);
    const match = value.match(/@(\w+)$/);
    if (match) {
      const results = await searchUsers(match[1]);
      setOptions(results.map((u) => ({ value: u.id, label: u.name })));
    }
  };

  return (
    <Mentions
      options={options}
      value={text}
      onChange={handleChange}
      placeholder="Type @ to mention..."
    />
  );
}
```

## Do's and Don'ts

### ✅ Do

- Filter `options` before passing — show only relevant matches
- Persist the full `@mention` string in `value` so it can be parsed server-side
- Use `rows={4}` or more for multi-line comment boxes

### ❌ Don't

- Don't pass thousands of options without filtering — it degrades performance
- Don't use `Mentions` when users don't need to @ someone — use `Textarea`

## Accessibility

- Dropdown has `role="listbox"` with `role="option"` items
- Arrow keys navigate options; Enter selects; Escape closes
- Announcement on option selection via live region
