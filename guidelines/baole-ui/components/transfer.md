# Transfer

## Purpose

A dual-panel list for moving items between a source set and a target set. Each panel has search filtering, select-all, and individual item selection. Used for permission assignment, feature toggling, and dataset segmentation.

## When to Use

### ✅ Use Transfer when:

- Assigning users to roles or groups (select N from M)
- Enabling/disabling a set of features or columns
- Moving items between two logically distinct sets

### ❌ Don't use Transfer when:

- The list is very small (< 5 items) → Use a multi-select Checkbox group
- The two sides don't have a symmetrical "move items" relationship → Use a Table with toggle actions
- Mobile is primary → The dual-panel layout is cramped on small screens

## Installation

```typescript
import { Transfer } from "@baolq/ui";
```

## Props API

| Prop             | Type                                                                               | Default                | Description                                    |
| ---------------- | ---------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------- |
| `dataSource`     | `TransferItem[]`                                                                   | **required**           | All available items                            |
| `targetKeys`     | `string[]`                                                                         | `[]`                   | Keys of items in the right (target) panel      |
| `selectedKeys`   | `string[]`                                                                         | `[]`                   | Keys of currently selected (highlighted) items |
| `onChange`       | `(targetKeys: string[], direction: 'left' \| 'right', moveKeys: string[]) => void` | –                      | Called when items are moved                    |
| `onSelectChange` | `(sourceSelected: string[], targetSelected: string[]) => void`                     | –                      | Called when selection highlights change        |
| `titles`         | `[string, string]`                                                                 | `['Source', 'Target']` | Panel header labels                            |
| `showSearch`     | `boolean`                                                                          | `false`                | Enable search filter in each panel             |
| `className`      | `string`                                                                           | –                      | Additional CSS classes                         |

### TransferItem

```typescript
interface TransferItem {
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
}
```

## Examples

### Basic Transfer

```tsx
import { useState } from "react";

const allUsers = [
  { key: "alice", title: "Alice Johnson" },
  { key: "bob", title: "Bob Smith" },
  { key: "carol", title: "Carol White" },
  { key: "dave", title: "Dave Brown" },
];

function UserAssignment() {
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  return (
    <Transfer
      dataSource={allUsers}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={(keys) => setTargetKeys(keys)}
      onSelectChange={(src, tgt) => setSelectedKeys([...src, ...tgt])}
      titles={["Available Users", "Assigned Users"]}
      showSearch
    />
  );
}
```

### With Descriptions

```tsx
const features = [
  { key: 'analytics', title: 'Analytics', description: 'Track user behavior' },
  { key: 'export', title: 'Data Export', description: 'Export reports as CSV/PDF' },
  { key: 'api', title: 'API Access', description: 'Programmatic access via REST API' },
]

<Transfer
  dataSource={features}
  targetKeys={enabledFeatures}
  onChange={(keys) => setEnabledFeatures(keys)}
  titles={['Available', 'Enabled']}
/>
```

## Do's and Don'ts

### ✅ Do

- Always show item counts in panel headers ("3 / 10 selected")
- Use `showSearch` when the list exceeds 10 items
- Provide descriptive `titles` for the panels

### ❌ Don't

- Don't use Transfer for very large datasets (1000+ items) without virtual scrolling
- Don't use Transfer if items can belong to both groups simultaneously

## Accessibility

- Each panel has a `role="list"` with `role="listitem"` items
- Checkboxes have accessible item title labels
- Transfer buttons have `aria-label` describing the action ("Move to target", "Move to source")
