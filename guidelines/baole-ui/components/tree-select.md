# TreeSelect

## Purpose

A dropdown selector that shows a tree structure inside a popover. Supports single and multi-selection, tree checkboxes, and search filtering. Combines the visual compactness of Select with the hierarchical navigation of Tree.

## When to Use

### ✅ Use TreeSelect when:

- Selecting a value from a hierarchical dataset in a form (department, category, location)
- Single or multi-selection from a nested structure in limited space
- Replacing a nested Cascader when the user doesn't need to navigate levels stepwise

### ❌ Don't use TreeSelect when:

- The tree is too deep or complex for a dropdown → Use Tree directly
- The hierarchy is only 2 levels → Use Cascader or nested Selects
- The user needs to see the full tree always → Use Tree

## Installation

```typescript
import { TreeSelect } from "@baolq/ui";
```

## Props API

| Prop            | Type                                  | Default       | Description                   |
| --------------- | ------------------------------------- | ------------- | ----------------------------- |
| `treeData`      | `TreeNode[]`                          | **required**  | Nested tree options           |
| `value`         | `string` \| `string[]`                | –             | Controlled selected value(s)  |
| `defaultValue`  | `string` \| `string[]`                | –             | Initial value (uncontrolled)  |
| `onChange`      | `(value: string \| string[]) => void` | –             | Called when selection changes |
| `multiple`      | `boolean`                             | `false`       | Allow multiple selections     |
| `treeCheckable` | `boolean`                             | `false`       | Show checkboxes on nodes      |
| `placeholder`   | `string`                              | `"Select..."` | Trigger placeholder           |
| `disabled`      | `boolean`                             | `false`       | Disables the component        |
| `className`     | `string`                              | –             | Additional CSS classes        |

### TreeNode

```typescript
interface TreeNode {
  key: string; // unique identifier
  title: string; // display label
  value: string; // value used in onChange
  children?: TreeNode[];
  disabled?: boolean;
}
```

## Examples

### Single Selection

```tsx
const departments = [
  {
    key: 'engineering', title: 'Engineering', value: 'engineering',
    children: [
      { key: 'frontend', title: 'Frontend', value: 'frontend' },
      { key: 'backend', title: 'Backend', value: 'backend' },
      { key: 'devops', title: 'DevOps', value: 'devops' },
    ],
  },
  {
    key: 'design', title: 'Design', value: 'design',
    children: [
      { key: 'ui', title: 'UI/UX', value: 'ui' },
      { key: 'brand', title: 'Brand', value: 'brand' },
    ],
  },
]

<TreeSelect
  treeData={departments}
  placeholder="Select department"
  onChange={(val) => console.log(val)}
/>
```

### Multi-Select with Checkboxes

```tsx
<TreeSelect
  treeData={categoryTree}
  multiple
  treeCheckable
  placeholder="Select categories"
  value={selectedCategories}
  onChange={(vals) => setSelectedCategories(vals as string[])}
/>
```

### Inside a Form

```tsx
<FormField
  control={form.control}
  name="department"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Department</FormLabel>
      <FormControl>
        <TreeSelect
          treeData={departments}
          value={field.value}
          onChange={field.onChange}
          placeholder="Select a department"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Do's and Don'ts

### ✅ Do

- Ensure every `TreeNode` has unique `key` and `value`
- Use `treeCheckable` with `multiple` for category multi-select
- Keep tree depth to 3–4 levels for usability inside a dropdown

### ❌ Don't

- Don't use TreeSelect for flat lists — use Select
- Don't use excessive nesting (5+ levels) inside a dropdown

## Accessibility

- Trigger button announces selected value
- Tree inside dropdown is keyboard-navigable (arrow keys, Enter, Escape)
- Checkboxes have accessible node title labels
