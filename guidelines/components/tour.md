# Tour

## Purpose

A guided multi-step walkthrough that highlights specific UI elements with a popover explaining each feature. Used for onboarding new users, introducing new features, and contextual help flows.

## When to Use

### ✅ Use Tour when:

- Onboarding new users by walking them through core features
- Highlighting a newly released feature in context
- Providing a guided tutorial flow through the application

### ❌ Don't use Tour when:

- Users are already familiar and just need quick reference → Use a Help Tooltip
- The walkthrough isn't tied to specific UI elements → Use a Modal-based tutorial
- There are more than 8–10 steps → Break into multiple focused tours

## Installation

```typescript
import { Tour } from "@baolq/ui";
```

## Props API

| Prop        | Type                        | Default      | Description                        |
| ----------- | --------------------------- | ------------ | ---------------------------------- |
| `steps`     | `TourStep[]`                | **required** | Array of tour steps                |
| `open`      | `boolean`                   | **required** | Controls tour visibility           |
| `current`   | `number`                    | `0`          | Active step index (controlled)     |
| `onClose`   | `() => void`                | –            | Called when tour is dismissed      |
| `onChange`  | `(current: number) => void` | –            | Called when step changes           |
| `onFinish`  | `() => void`                | –            | Called when last step is completed |
| `className` | `string`                    | –            | Additional CSS classes             |

### TourStep

```typescript
interface TourStep {
  target: React.RefObject<HTMLElement>; // The element to highlight
  title: string; // Step heading
  description?: string; // Step body text
  placement?: "top" | "bottom" | "left" | "right" | "center";
  cover?: React.ReactNode; // Optional image/graphic above title
}
```

## Examples

### Basic Onboarding Tour

```tsx
import { useRef, useState } from "react";

function AppWithTour() {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(0);

  const dashboardRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLElement>(null);
  const settingsRef = useRef<HTMLElement>(null);

  const steps = [
    {
      target: dashboardRef,
      title: "Your Dashboard",
      description: "This is your overview. All key metrics are displayed here.",
      placement: "bottom" as const,
    },
    {
      target: searchRef,
      title: "Global Search",
      description: "Press ⌘K anytime to search across all your data.",
      placement: "bottom" as const,
    },
    {
      target: settingsRef,
      title: "Settings",
      description:
        "Customize your workspace, notifications, and preferences here.",
      placement: "left" as const,
    },
  ];

  return (
    <>
      <Tour
        open={open}
        steps={steps}
        current={current}
        onChange={setCurrent}
        onClose={() => setOpen(false)}
        onFinish={() => {
          setOpen(false);
          markOnboardingComplete();
        }}
      />

      <nav>
        <span ref={dashboardRef}>Dashboard</span>
        <input ref={searchRef} placeholder="Search..." />
        <span ref={settingsRef}>Settings</span>
      </nav>
    </>
  );
}
```

### Trigger Tour from Button

```tsx
function FeatureHighlight() {
  const [tourOpen, setTourOpen] = useState(false);
  const newFeatureRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Button variant="outline" size="sm" onClick={() => setTourOpen(true)}>
        Take the Tour
      </Button>

      <div ref={newFeatureRef}>
        <h2>New Analytics Panel</h2>
        {/* ... */}
      </div>

      <Tour
        open={tourOpen}
        steps={[
          {
            target: newFeatureRef,
            title: "✨ New: Analytics Panel",
            description:
              "Track performance metrics and export reports directly from here.",
            placement: "bottom",
          },
        ]}
        current={0}
        onChange={() => {}}
        onClose={() => setTourOpen(false)}
        onFinish={() => setTourOpen(false)}
      />
    </div>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Limit tours to 5–7 steps for the best completion rate
- Use `placement` to avoid the popover covering the highlighted element
- Respect user preference — store `tourCompleted` and don't auto-start on revisits

### ❌ Don't

- Don't launch a tour automatically on every page load
- Don't use Tour as a permanent help system — use Tooltips for that
- Don't describe every element — focus on non-obvious features

## Accessibility

- Overlay masks non-highlighted content with `aria-hidden`
- Popover has `role="dialog"` with `aria-label`
- Navigation buttons are keyboard-accessible; Escape dismisses the tour
