# Grid

## Purpose

A CSS grid wrapper with configurable column count and gap. Provides a simple declarative API for creating grid layouts without writing raw Tailwind grid classes. Supports responsive column counts via `GridItem` span control.

## When to Use

### ✅ Use Grid when:

- Creating multi-column card layouts
- Building responsive dashboard panels
- Aligning form fields in a structured grid

### ❌ Don't use Grid when:

- A simple one-dimensional row/column → Use `Stack` or `Space`
- Complex asymmetric layout → Use Tailwind `grid-cols` with custom spans directly
- The layout changes significantly per breakpoint → Use custom Tailwind responsive classes

## Installation

```typescript
import { Grid, GridItem } from "@baolq/ui";
```

## Props API

### Grid

| Prop        | Type                                           | Default | Description            |
| ----------- | ---------------------------------------------- | ------- | ---------------------- |
| `cols`      | `1` \| `2` \| `3` \| `4` \| `6` \| `12`        | `12`    | Number of grid columns |
| `gap`       | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"`  | Gap between grid items |
| `className` | `string`                                       | –       | Additional CSS classes |
| `children`  | `React.ReactNode`                              | –       | Grid content           |

### GridItem

| Prop        | Type                                                | Default | Description               |
| ----------- | --------------------------------------------------- | ------- | ------------------------- |
| `span`      | `1` \| `2` \| `3` \| `4` \| `6` \| `12` \| `"full"` | `1`     | Number of columns to span |
| `className` | `string`                                            | –       | Additional CSS classes    |
| `children`  | `React.ReactNode`                                   | –       | Item content              |

## Examples

### Feature Card Grid

```tsx
<Grid cols={3} gap="lg">
  {features.map((feature) => (
    <GridItem key={feature.id}>
      <Card>
        <CardHeader>
          <CardTitle>{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/60">{feature.description}</p>
        </CardContent>
      </Card>
    </GridItem>
  ))}
</Grid>
```

### Dashboard with Span Control

```tsx
<Grid cols={12} gap="md">
  <GridItem span={8}>
    <RevenueChart />
  </GridItem>
  <GridItem span={4}>
    <MetricsSummary />
  </GridItem>

  <GridItem span={4}>
    <UsersList />
  </GridItem>
  <GridItem span={4}>
    <RecentActivity />
  </GridItem>
  <GridItem span={4}>
    <TopProducts />
  </GridItem>

  <GridItem span="full">
    <DataTable />
  </GridItem>
</Grid>
```

### Two-Column Form Layout

```tsx
<Grid cols={2} gap="md">
  <GridItem>
    <FormField name="firstName" label="First Name" />
  </GridItem>
  <GridItem>
    <FormField name="lastName" label="Last Name" />
  </GridItem>
  <GridItem span={2}>
    <FormField name="email" label="Email" />
  </GridItem>
</Grid>
```

## Do's and Don'ts

### ✅ Do

- Use `cols={12}` with `GridItem span={N}` for precise layout control
- Use `cols={2}` or `cols={3}` for simpler equal-column layouts
- Set `gap` consistently across the page for visual rhythm

### ❌ Don't

- Don't manually mix Grid with inline `grid-cols-*` classes on the same element
- Don't use GridItem spans that don't add up to the Grid's column count

## Accessibility

- Grid is a semantic `<div>` — no accessibility properties needed
- Ensure reading order (DOM order) matches visual order for screen readers
