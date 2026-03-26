# Tree

## Purpose

Hierarchical expandable tree view with checkboxes, multi-selection, and keyboard navigation. Used for file explorers, organization charts, category trees, and nested data displays.

## When to Use

### ✅ Use Tree when:

- Displaying hierarchical data with unlimited nesting depth (file system, org chart)
- Allowing users to expand/collapse nested nodes
- Multi-selection from a nested structure with checkbox support

### ❌ Don't use Tree when:

- The hierarchy is only 2–3 levels → Use Cascader or nested Selects
- A hierarchical dropdown selector is needed → Use TreeSelect
- The data is flat or tabular → Use Table or List

## Installation

```typescript
import { Tree } from "@baolq/ui";
```

## Props API

| Prop               | Type                       | Default      | Description                        |
| ------------------ | -------------------------- | ------------ | ---------------------------------- |
| `treeData`         | `TreeNode[]`               | **required** | Nested tree structure              |
| `checkable`        | `boolean`                  | `false`      | Show checkboxes on nodes           |
| `checkedKeys`      | `string[]`                 | –            | Controlled checked node keys       |
| `expandedKeys`     | `string[]`                 | –            | Controlled expanded node keys      |
| `selectedKeys`     | `string[]`                 | –            | Controlled selected node keys      |
| `onCheck`          | `(keys: string[]) => void` | –            | Called when checkbox changes       |
| `onExpand`         | `(keys: string[]) => void` | –            | Called when node expands/collapses |
| `onSelect`         | `(keys: string[]) => void` | –            | Called when node is clicked        |
| `defaultExpandAll` | `boolean`                  | `false`      | Expand all nodes initially         |
| `className`        | `string`                   | –            | Additional CSS classes             |

### TreeNode

```typescript
interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
  disabled?: boolean;
  isLeaf?: boolean;
}
```

## Examples

### Basic Tree

```tsx
const fileTree = [
  {
    key: 'src',
    title: 'src',
    children: [
      {
        key: 'components',
        title: 'components',
        children: [
          { key: 'button', title: 'button.tsx', isLeaf: true },
          { key: 'input', title: 'input.tsx', isLeaf: true },
        ],
      },
      { key: 'app', title: 'App.tsx', isLeaf: true },
    ],
  },
]

<Tree treeData={fileTree} defaultExpandAll />
```

### Controlled Expand/Select

```tsx
function ControlledTree() {
  const [expanded, setExpanded] = useState<string[]>(["src"]);
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Tree
      treeData={fileTree}
      expandedKeys={expanded}
      onExpand={setExpanded}
      selectedKeys={selected}
      onSelect={setSelected}
    />
  );
}
```

### With Checkboxes (Multi-Select)

```tsx
function CheckableTree() {
  const [checked, setChecked] = useState<string[]>([]);

  return (
    <div className="space-y-2">
      <Tree
        treeData={categoryTree}
        checkable
        checkedKeys={checked}
        onCheck={setChecked}
      />
      <p className="text-sm text-white/50">Selected: {checked.join(", ")}</p>
    </div>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Provide unique `key` values for every node
- Use `defaultExpandAll` for shallow trees (2–3 levels)
- Limit initial expansion depth for large trees

### ❌ Don't

- Don't use Tree for deep data (10+ levels) without virtualization
- Don't use Tree when a flat list or table is sufficient
- Don't use `checkable` for single-selection — use `selectedKeys` instead

## Accessibility

- Tree has `role="tree"` with `role="treeitem"` nodes
- Arrow keys expand/collapse and navigate nodes
- Checkboxes have accessible labels from node titles
