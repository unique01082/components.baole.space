# Table

## Purpose

A full-featured data table with sorting, pagination, row selection, and row actions. Built on Radix UI + `@tanstack/react-table`-compatible structure.

## When to Use

### ✅ Use Table when:

- Displaying tabular data with multiple columns (users, orders, files, logs)
- Data needs sorting, filtering, or pagination
- Row-level actions are needed (edit, delete, view)

### ❌ Don't use Table when:

- Only 1–2 columns — use a `List` component
- Comparison between 2–4 items — use a comparison `Card` layout
- Data has strong hierarchy — use `Tree`

## Installation

```typescript
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@baolq/ui";
```

## Examples

```tsx
// Basic static table
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.id}>
        <TableCell className="font-medium">{invoice.name}</TableCell>
        <TableCell>
          <Badge variant={invoice.status === "paid" ? "success" : "warning"}>
            {invoice.status}
          </Badge>
        </TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">{totalAmount}</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

## Sortable Column Pattern

```tsx
<TableHead
  className="cursor-pointer select-none"
  onClick={() => toggleSort("name")}
>
  <div className="flex items-center gap-1">
    Name
    {sortField === "name" ? (
      sortDir === "asc" ? (
        <ChevronUp size={14} />
      ) : (
        <ChevronDown size={14} />
      )
    ) : (
      <ChevronsUpDown size={14} className="text-white/30" />
    )}
  </div>
</TableHead>
```

## Do's and Don'ts

### ✅ Do

- Right-align numeric columns (`text-right`)
- Use `font-medium` on the primary identifier column
- Keep row actions in the last column with `align="end"` dropdown
- Add `TableCaption` for accessibility when the table purpose isn't obvious from context

### ❌ Don't

- Don't show more than 8 columns without a horizontal scroll container (`overflow-x-auto`)
- Don't add borders to every cell — use row dividers only (`divide-y`)
- Don't break table into many small tables — paginate one table instead
