# Statistic

## Purpose

Displays a single key metric with a title, formatted value, prefix/suffix, and optional trend indicator. Used in dashboards, KPI cards, and summary panels.

## When to Use

### ✅ Use Statistic when:

- Highlighting a key metric in a dashboard (revenue, users, conversions)
- Showing a KPI with a trend arrow (up/down vs. previous period)
- Displaying counters, scores, or summary values with context

### ❌ Don't use Statistic when:

- Multiple metrics need comparison → Use a Chart
- Progress toward a goal → Use `Progress`
- A simple inline number — use a styled `<span>` directly

## Installation

```typescript
import { Statistic } from "@baolq/ui";
```

## Props API

| Prop         | Type                 | Default      | Description                                     |
| ------------ | -------------------- | ------------ | ----------------------------------------------- |
| `title`      | `string`             | **required** | Label describing the metric                     |
| `value`      | `string` \| `number` | **required** | The metric value                                |
| `prefix`     | `React.ReactNode`    | –            | Content before the value (e.g. currency symbol) |
| `suffix`     | `React.ReactNode`    | –            | Content after the value (e.g. unit)             |
| `trend`      | `"up"` \| `"down"`   | –            | Trend direction                                 |
| `trendValue` | `string` \| `number` | –            | Trend amount shown next to the arrow            |
| `className`  | `string`             | –            | Additional CSS classes                          |

## Examples

### Basic Metric

```tsx
<Statistic title="Total Users" value={12_482} />
```

### Revenue with Prefix

```tsx
<Statistic title="Monthly Revenue" value="48,290" prefix="$" />
```

### With Trend

```tsx
<Statistic title="Active Users" value={8_341} trend="up" trendValue="+12.4%" />
```

### Negative Trend

```tsx
<Statistic title="Churn Rate" value="3.2%" trend="down" trendValue="-0.8%" />
```

### Dashboard Card Grid

```tsx
<Grid cols={4} gap="md">
  <GridItem>
    <Card>
      <CardContent className="pt-6">
        <Statistic
          title="Total Users"
          value={12_482}
          trend="up"
          trendValue="+5.2%"
        />
      </CardContent>
    </Card>
  </GridItem>
  <GridItem>
    <Card>
      <CardContent className="pt-6">
        <Statistic
          title="Revenue"
          value="$48,290"
          prefix=""
          trend="up"
          trendValue="+18.1%"
        />
      </CardContent>
    </Card>
  </GridItem>
  <GridItem>
    <Card>
      <CardContent className="pt-6">
        <Statistic
          title="Conversion Rate"
          value="4.7%"
          trend="down"
          trendValue="-0.3%"
        />
      </CardContent>
    </Card>
  </GridItem>
  <GridItem>
    <Card>
      <CardContent className="pt-6">
        <Statistic title="Avg. Session" value="3m 42s" suffix="" />
      </CardContent>
    </Card>
  </GridItem>
</Grid>
```

### Compact Inline Stats

```tsx
<div className="flex gap-8">
  <Statistic title="Repos" value={124} />
  <Statistic title="Stars" value="8.2k" />
  <Statistic title="Forks" value={341} />
</div>
```

## Do's and Don'ts

### ✅ Do

- Format large numbers with commas or abbreviations (12,482 or 12.5k)
- Use `trend` consistently — always show trend relative to the same prior period
- Group related statistics inside a Card grid

### ❌ Don't

- Don't use up/down trend without a reference point — explain what it compares to
- Don't show too many decimal places — round to 1–2 significant digits
- Don't display 10+ statistics without visual grouping

## Accessibility

- Title and value are wrapped in semantic markup
- Trend icon has `aria-label` (e.g. "Trend: up 12.4%") for screen readers
