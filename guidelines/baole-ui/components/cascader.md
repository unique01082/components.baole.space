# Cascader

## Purpose

Hierarchical dropdown selector that reveals nested options in expanding columns as the user makes selections. Ideal for multi-level category selection (country > province > city, category > subcategory > item).

## When to Use

### ✅ Use Cascader when:

- Options have a clear parent-child hierarchy (2–4 levels)
- Users need to drill down through nested categories
- Showing all options in a flat Select would be overwhelming

### ❌ Don't use Cascader when:

- The hierarchy is only 2 levels → Use a two-step Select pair
- Users need multi-select across all levels → Use a TreeSelect
- The option tree is very deep (5+ levels) → Use a Tree or breadcrumb navigation

## Installation

```typescript
import { Cascader } from "@baolq/ui";
```

## Props API

| Prop             | Type                                                   | Default       | Description                               |
| ---------------- | ------------------------------------------------------ | ------------- | ----------------------------------------- |
| `options`        | `CascaderOption[]`                                     | **required**  | Hierarchical options tree                 |
| `value`          | `string[]`                                             | –             | Controlled value (path from root to leaf) |
| `defaultValue`   | `string[]`                                             | –             | Initial value (uncontrolled)              |
| `onChange`       | `(value: string[], options: CascaderOption[]) => void` | –             | Called when selection changes             |
| `placeholder`    | `string`                                               | `"Select..."` | Trigger placeholder                       |
| `disabled`       | `boolean`                                              | `false`       | Disables the picker                       |
| `changeOnSelect` | `boolean`                                              | `false`       | Allow selecting non-leaf nodes            |
| `className`      | `string`                                               | –             | Additional CSS classes                    |

### CascaderOption

```typescript
interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
  disabled?: boolean;
}
```

## Examples

### Basic Usage

```tsx
const locationOptions = [
  {
    value: 'us',
    label: 'United States',
    children: [
      {
        value: 'ca',
        label: 'California',
        children: [
          { value: 'la', label: 'Los Angeles' },
          { value: 'sf', label: 'San Francisco' },
        ],
      },
      {
        value: 'ny',
        label: 'New York',
        children: [
          { value: 'nyc', label: 'New York City' },
        ],
      },
    ],
  },
]

<Cascader options={locationOptions} placeholder="Select location" onChange={(val) => console.log(val)} />
```

### Controlled with Value

```tsx
const [path, setPath] = useState<string[]>(['us', 'ca', 'sf'])

<Cascader
  options={locationOptions}
  value={path}
  onChange={(val) => setPath(val)}
/>
```

### Allow Selecting Intermediate Levels

```tsx
<Cascader
  options={categoryOptions}
  changeOnSelect
  placeholder="Select category"
  onChange={(val, opts) => {
    console.log("Path:", val);
    console.log("Selected options:", opts);
  }}
/>
```

## Do's and Don'ts

### ✅ Do

- Keep the hierarchy to 2–4 levels for usability
- Provide meaningful labels at each level
- Use `changeOnSelect={true}` when intermediate nodes are valid selections

### ❌ Don't

- Don't use for flat lists — use Select instead
- Don't create hierarchies deeper than 4 levels — use search/filtering instead
- Don't load children lazily without a loading indicator

## Accessibility

- Keyboard navigable: arrow keys move between columns and options
- Selected path is announced as a composite label
- Each pane is a listbox with proper ARIA roles
