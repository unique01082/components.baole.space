# Chart

## Purpose

Data visualization components wrapping Recharts with consistent dark-theme styling. Provides `LineChart`, `BarChart`, `AreaChart`, and `PieChart` with custom tooltips and gradient fills.

## When to Use

### ✅ Use Chart when:

- Visualizing time-series data (line/area charts)
- Comparing categorical values (bar charts)
- Showing proportional composition (pie/donut charts)
- Displaying analytics dashboards

### ❌ Don't use Chart when:

- Only a single metric with trend → Use `Statistic` with a trend indicator
- Displaying tabular data → Use `Table`
- The chart would be too complex for the available space → Show simplified numbers

## Installation

```typescript
import { LineChart, BarChart, AreaChart, PieChart } from "@baolq/ui";
```

## Props API

### Common Props (LineChart, BarChart, AreaChart)

| Prop         | Type       | Default      | Description                     |
| ------------ | ---------- | ------------ | ------------------------------- |
| `data`       | `object[]` | **required** | Array of data records           |
| `xKey`       | `string`   | **required** | Key of the x-axis field in data |
| `height`     | `number`   | `300`        | Chart height in pixels          |
| `showGrid`   | `boolean`  | `true`       | Show background grid lines      |
| `showLegend` | `boolean`  | `false`      | Show series legend              |
| `className`  | `string`   | –            | Outer container classes         |

### LineChart / AreaChart

| Prop              | Type                                               | Description         |
| ----------------- | -------------------------------------------------- | ------------------- |
| `lines` / `areas` | `{ key: string; color?: string; name?: string }[]` | Data series to plot |

### BarChart

| Prop   | Type                                               | Description        |
| ------ | -------------------------------------------------- | ------------------ |
| `bars` | `{ key: string; color?: string; name?: string }[]` | Bar series to plot |

### PieChart

| Prop     | Type                                | Description                                      |
| -------- | ----------------------------------- | ------------------------------------------------ |
| `data`   | `object[]`                          | Array with `name`, `value`, and optional `color` |
| `slices` | `{ key: string; color?: string }[]` | Slice configurations                             |
| `donut`  | `boolean`                           | Renders as a donut chart                         |

## Examples

### Line Chart

```tsx
const data = [
  { month: 'Jan', revenue: 4200, users: 350 },
  { month: 'Feb', revenue: 5800, users: 480 },
  { month: 'Mar', revenue: 4900, users: 420 },
  { month: 'Apr', revenue: 7200, users: 610 },
  { month: 'May', revenue: 8100, users: 720 },
]

<LineChart
  data={data}
  xKey="month"
  lines={[
    { key: 'revenue', color: '#6366f1', name: 'Revenue' },
    { key: 'users', color: '#ec4899', name: 'Users' },
  ]}
  showLegend
  height={300}
/>
```

### Bar Chart

```tsx
<BarChart
  data={data}
  xKey="month"
  bars={[{ key: "revenue", color: "#6366f1", name: "Revenue" }]}
  height={250}
/>
```

### Area Chart

```tsx
<AreaChart
  data={data}
  xKey="month"
  areas={[{ key: "users", color: "#8b5cf6", name: "Active Users" }]}
  showGrid
  height={300}
/>
```

### Pie Chart

```tsx
const pieData = [
  { name: 'React', value: 45, color: '#6366f1' },
  { name: 'Vue', value: 25, color: '#ec4899' },
  { name: 'Angular', value: 20, color: '#f97316' },
  { name: 'Other', value: 10, color: '#64748b' },
]

<PieChart data={pieData} height={300} />
```

### Donut Chart

```tsx
<PieChart data={pieData} donut height={300} />
```

## Do's and Don'ts

### ✅ Do

- Define explicit `color` values per series for consistency with your design system
- Use `showLegend` when displaying multiple series
- Limit to 3–5 series per chart — more is hard to read

### ❌ Don't

- Don't use a PieChart with more than 6 slices — use a BarChart instead
- Don't use LineChart for categorical comparisons — use BarChart
- Don't display raw API data without formatting values in tooltips

## Accessibility

- Charts are visual; provide a data table alternative or `aria-label` describing the chart
- Use `title` and `description` attributes on the chart container
- Ensure color palettes have sufficient contrast for color-blind users
