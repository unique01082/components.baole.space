# AutoComplete

## Purpose

Text input that filters and suggests matching options from a list as the user types. Combines an `Input` trigger with a dropdown list of results. Suitable for tag entry, search suggestions, and quick lookups.

## When to Use

### ✅ Use AutoComplete when:

- Users need to choose from a known list but prefer typing over scrolling
- Implementing search-as-you-type suggestions
- Entering multiple tags or items from a fixed dataset

### ❌ Don't use AutoComplete when:

- Dataset is large (1k+ items) and server-side search is needed → Fetch options in `onChange`
- Users must select from the list only → Use `Select` (clearer constraint)
- Freeform text is acceptable without a list → Use plain `Input`

## Installation

```typescript
import { AutoComplete, type AutoCompleteOption } from "@baolq/ui";
```

## Props API

| Prop          | Type                                   | Default      | Description                                        |
| ------------- | -------------------------------------- | ------------ | -------------------------------------------------- |
| `options`     | `AutoCompleteOption[]`                 | **required** | List of `{ value: string; label: string }` options |
| `value`       | `string`                               | –            | Controlled input value                             |
| `onChange`    | `(value: string) => void`              | –            | Called on every keystroke                          |
| `onSelect`    | `(option: AutoCompleteOption) => void` | –            | Called when an option is selected                  |
| `placeholder` | `string`                               | –            | Input placeholder text                             |
| `disabled`    | `boolean`                              | `false`      | Disables the component                             |
| `className`   | `string`                               | –            | Additional CSS classes                             |

### AutoCompleteOption

```typescript
interface AutoCompleteOption {
  value: string;
  label: string;
}
```

## Examples

### Basic Usage

```tsx
import { useState } from "react";

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
];

function FrameworkSearch() {
  const [value, setValue] = useState("");

  return (
    <AutoComplete
      options={frameworks}
      value={value}
      onChange={setValue}
      onSelect={(opt) => setValue(opt.label)}
      placeholder="Search framework..."
    />
  );
}
```

### Async Search

```tsx
function AsyncSearch() {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<AutoCompleteOption[]>([]);

  const handleChange = async (value: string) => {
    setQuery(value);
    if (value.length < 2) return setOptions([]);
    const results = await searchAPI(value);
    setOptions(results.map((r) => ({ value: r.id, label: r.name })));
  };

  return (
    <AutoComplete
      options={options}
      value={query}
      onChange={handleChange}
      onSelect={(opt) => setQuery(opt.label)}
      placeholder="Search users..."
    />
  );
}
```

## Do's and Don'ts

### ✅ Do

- Filter `options` client-side when the list is small (< 500 items)
- Debounce async searches to reduce API calls
- Handle `onSelect` to set the display value after selection

### ❌ Don't

- Don't pass thousands of options without virtual scrolling or server-side filtering
- Don't use AutoComplete when the user must select from the list (not enter freeform text)

## Accessibility

- Dropdown list has `role="listbox"` with `role="option"` items
- Arrow keys navigate options; Enter selects; Escape closes
- Active option announced to screen readers
