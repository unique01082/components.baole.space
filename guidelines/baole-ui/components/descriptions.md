# Descriptions

## Purpose

Displays key-value pair data in a configurable grid. Used for showing entity details, metadata panels, invoice summaries, and profile information. Supports horizontal/vertical layout, multiple columns, bordered style, and a group title.

## When to Use

### ✅ Use Descriptions when:

- Showing read-only entity details (user profile, order details, server info)
- Displaying metadata in a structured two-column layout
- Building "info panels" inside drawers, popups, or cards

### ❌ Don't use Descriptions when:

- Data is editable → Use a Form
- Data has many rows with sorting → Use a Table
- Only one key-value pair → Use a styled `<p>` or `Statistic`

## Installation

```typescript
import { Descriptions, type DescriptionItem } from "@baolq/ui";
```

## Props API

| Prop        | Type                           | Default        | Description                        |
| ----------- | ------------------------------ | -------------- | ---------------------------------- |
| `title`     | `string`                       | –              | Section title shown above the grid |
| `items`     | `DescriptionItem[]`            | **required**   | Array of key-value pairs           |
| `columns`   | `1` \| `2` \| `3` \| `4`       | `2`            | Number of columns in the grid      |
| `bordered`  | `boolean`                      | `false`        | Adds borders between cells         |
| `layout`    | `"horizontal"` \| `"vertical"` | `"horizontal"` | Label and value arrangement        |
| `className` | `string`                       | –              | Additional CSS classes             |

### DescriptionItem

```typescript
interface DescriptionItem {
  label: string;
  value: React.ReactNode;
  span?: number; // How many columns this item spans (default 1)
}
```

## Examples

### User Profile Details

```tsx
const userItems = [
  { label: 'Name', value: 'Alice Johnson' },
  { label: 'Email', value: 'alice@example.com' },
  { label: 'Role', value: <Badge variant="gradient">Admin</Badge> },
  { label: 'Status', value: <Badge variant="success" dot>Active</Badge> },
  { label: 'Joined', value: 'January 15, 2025' },
  { label: 'Last Login', value: '2 hours ago' },
]

<Descriptions
  title="User Information"
  items={userItems}
  columns={2}
  bordered
/>
```

### Order Summary

```tsx
const orderItems = [
  { label: 'Order ID', value: '#ORD-2026-001' },
  { label: 'Date', value: 'March 26, 2026' },
  { label: 'Status', value: <Badge variant="warning">Processing</Badge> },
  { label: 'Payment', value: 'Visa •••• 4242' },
  { label: 'Shipping', value: '123 Main St, San Francisco, CA', span: 2 },
  { label: 'Total', value: '$149.99' },
]

<Descriptions items={orderItems} columns={2} />
```

### Vertical Layout

```tsx
<Descriptions items={serverMetrics} columns={3} layout="vertical" />
```

### Minimal Single Column

```tsx
<Descriptions
  items={[
    { label: "Version", value: "2.1.0" },
    { label: "Build", value: "a3f42bc" },
    { label: "Environment", value: "Production" },
  ]}
  columns={1}
/>
```

## Do's and Don'ts

### ✅ Do

- Use `bordered` for detail pages where structure is important
- Use `span` to make wide values (addresses, descriptions) span multiple columns
- Match `columns` to content — 2 columns for most cases, 3+ for dense data

### ❌ Don't

- Don't use Descriptions for editable data — use Form
- Don't mix very short and very long values in the same row without `span`
- Don't add too many items (> 12) — split into logical sections with multiple Descriptions

## Accessibility

- Rendered as a `<dl>` (definition list) with `<dt>` labels and `<dd>` values
- Screen readers read label and value pairs naturally
