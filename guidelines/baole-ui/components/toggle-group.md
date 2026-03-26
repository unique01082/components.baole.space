# ToggleGroup

## Purpose

Groups multiple Toggle buttons with shared variant/size styling and coordinated selection. Supports single and multiple selection modes. Built on Radix UI ToggleGroup.

## When to Use

### ✅ Use ToggleGroup when:

- Selecting from a small set of related options where multiple can be active (text formatting)
- Choosing a single option from a visual set (view type: grid/list/table)
- Building toolbars with grouped toggle controls

### ❌ Don't use ToggleGroup when:

- Mutually exclusive selection from many options → Use Select or RadioGroup
- A compact button-group switcher → Use Segmented
- Options need labels and checkboxes → Use CheckboxGroup or RadioGroup

## Installation

```typescript
import { ToggleGroup, ToggleGroupItem } from "@baolq/ui";
```

## Props API

### ToggleGroup

| Prop            | Type                                  | Default     | Description                 |
| --------------- | ------------------------------------- | ----------- | --------------------------- |
| `type`          | `"single"` \| `"multiple"`            | `"single"`  | Single or multi-select mode |
| `value`         | `string` \| `string[]`                | –           | Controlled value            |
| `defaultValue`  | `string` \| `string[]`                | –           | Uncontrolled initial value  |
| `onValueChange` | `(value: string \| string[]) => void` | –           | Change callback             |
| `variant`       | `"default"` \| `"outline"`            | `"default"` | Visual style                |
| `size`          | `"sm"` \| `"md"` \| `"lg"`            | `"md"`      | Size applied to all items   |
| `disabled`      | `boolean`                             | `false`     | Disables the whole group    |

### ToggleGroupItem

| Prop         | Type      | Default      | Description                  |
| ------------ | --------- | ------------ | ---------------------------- |
| `value`      | `string`  | **required** | Unique value for this item   |
| `disabled`   | `boolean` | `false`      | Disables just this item      |
| `aria-label` | `string`  | –            | Required for icon-only items |

## Examples

### Single Selection (View Switcher)

```tsx
import { LayoutGrid, List, Table } from "lucide-react";
import { useState } from "react";

function ViewSwitcher() {
  const [view, setView] = useState("grid");

  return (
    <ToggleGroup
      type="single"
      value={view}
      onValueChange={(v) => v && setView(v)}
    >
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <LayoutGrid size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List view">
        <List size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="table" aria-label="Table view">
        <Table size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
```

### Multiple Selection (Text Formatting)

```tsx
import { Bold, Italic, Underline, Strikethrough } from "lucide-react";

function TextFormatting() {
  const [formats, setFormats] = useState<string[]>([]);

  return (
    <ToggleGroup
      type="multiple"
      value={formats}
      onValueChange={setFormats}
      size="sm"
    >
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold size={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic size={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline size={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
        <Strikethrough size={14} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
```

### With Text Labels

```tsx
<ToggleGroup type="single" variant="outline" defaultValue="month">
  <ToggleGroupItem value="day">Day</ToggleGroupItem>
  <ToggleGroupItem value="week">Week</ToggleGroupItem>
  <ToggleGroupItem value="month">Month</ToggleGroupItem>
  <ToggleGroupItem value="year">Year</ToggleGroupItem>
</ToggleGroup>
```

## Do's and Don'ts

### ✅ Do

- Guard `onValueChange` in `type="single"` — Radix can pass empty string when deselecting: `v => v && setV(v)`
- Set `aria-label` on icon-only ToggleGroupItems
- Use `variant="outline"` when group is on a light/glass background

### ❌ Don't

- Don't use `type="multiple"` if only one item should be active — use `type="single"`
- Don't use ToggleGroup for more than 6 options — becomes unwieldy

## Accessibility

- Group has `role="group"`; items have `aria-pressed`
- Arrow keys navigate between items
- Enter/Space toggles the focused item
