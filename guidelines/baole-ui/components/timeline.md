# Timeline

## Purpose

Vertical timeline displaying a sequence of events with timestamps, descriptions, and optional icons. Used for activity histories, changelogs, onboarding steps, and process milestones.

## When to Use

### ✅ Use Timeline when:

- Showing a chronological sequence of events (activity log, order history)
- Displaying a product changelog or version history
- Visualizing a multi-step process with past/current/future states

### ❌ Don't use Timeline when:

- A step-by-step workflow with completion states → Use `Stepper` or `Steps`
- A flat list of events without chronology → Use `List`
- Dense tabular event data → Use `Table`

## Installation

```typescript
import { Timeline } from "@baolq/ui";
```

## Props API

| Prop        | Type                        | Default      | Description                   |
| ----------- | --------------------------- | ------------ | ----------------------------- |
| `items`     | `TimelineItem[]`            | **required** | Array of timeline events      |
| `variant`   | `"default"` \| `"gradient"` | `"default"`  | Visual style of the line/dots |
| `className` | `string`                    | –            | Additional CSS classes        |

### TimelineItem

```typescript
interface TimelineItem {
  title: string;
  description?: string;
  timestamp?: string;
  icon?: React.ReactNode;
  color?: string; // Custom dot color (CSS color string)
}
```

## Examples

### Basic Activity Log

```tsx
<Timeline
  items={[
    {
      title: "Project created",
      description: "Initial project setup completed.",
      timestamp: "March 20, 2026",
    },
    {
      title: "First commit",
      description: "Added project structure and dependencies.",
      timestamp: "March 21, 2026",
    },
    {
      title: "Deployed to staging",
      description: "Pipeline passed. Staging URL is live.",
      timestamp: "March 25, 2026",
    },
    {
      title: "Production release",
      description: "v1.0.0 shipped to production.",
      timestamp: "March 26, 2026",
    },
  ]}
/>
```

### With Icons

```tsx
import { GitCommit, Rocket, CheckCircle, AlertCircle } from "lucide-react";

<Timeline
  items={[
    {
      title: "Build started",
      icon: <GitCommit size={14} />,
      timestamp: "10:00 AM",
    },
    {
      title: "Tests passed",
      icon: <CheckCircle size={14} />,
      color: "#22c55e",
      timestamp: "10:03 AM",
    },
    {
      title: "Deploy failed",
      icon: <AlertCircle size={14} />,
      color: "#ef4444",
      description: "Out of memory error on container startup.",
      timestamp: "10:05 AM",
    },
    {
      title: "Deployed to production",
      icon: <Rocket size={14} />,
      color: "#6366f1",
      timestamp: "10:12 AM",
    },
  ]}
/>;
```

### Gradient Variant

```tsx
<Timeline
  variant="gradient"
  items={[
    { title: "Step 1", description: "Foundation", timestamp: "Day 1" },
    { title: "Step 2", description: "Development", timestamp: "Day 7" },
    { title: "Step 3", description: "Testing", timestamp: "Day 14" },
    { title: "Step 4", description: "Launch", timestamp: "Day 21" },
  ]}
/>
```

## Do's and Don'ts

### ✅ Do

- Use `icon` to visually distinguish event types (success, error, info)
- Use `color` to reinforce semantic meaning (green = success, red = error)
- Show most recent events at the top for activity logs

### ❌ Don't

- Don't add more than 15–20 items without pagination or "load more"
- Don't use Timeline for navigation — use `Steps` or `Stepper` for workflows
- Don't skip `timestamp` — temporal context is the key value of a timeline

## Accessibility

- Timeline items are rendered as a list for semantic structure
- Icons should have `aria-hidden={true}` since the title provides meaning
- Color should not be the only differentiator between events
