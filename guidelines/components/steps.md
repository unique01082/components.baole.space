# Steps

## Purpose

Displays a multi-step process as a horizontal or vertical step indicator with status-aware styling. Used for multi-step forms, checkout flows, onboarding sequences, and process trackers.

## When to Use

### ✅ Use Steps when:

- Showing the overall progress through a multi-step form or wizard
- Visual progress indicator with named step labels
- Process flows where steps have discrete completion states

### ❌ Don't use Steps when:

- An interactive guided walkthrough with popovers → Use `Tour`
- A timeline of past events → Use `Timeline`
- Minimal step count indication → Use a `Progress` bar

## Installation

```typescript
import { Steps } from "@baolq/ui";
```

## Props API

| Prop           | Type                                               | Default        | Description                                     |
| -------------- | -------------------------------------------------- | -------------- | ----------------------------------------------- |
| `items`        | `StepItem[]`                                       | **required**   | Array of step definitions                       |
| `current`      | `number`                                           | `0`            | Index of the current (active) step              |
| `status`       | `"wait"` \| `"process"` \| `"finish"` \| `"error"` | `"process"`    | Status of the current step                      |
| `type`         | `"default"` \| `"navigation"` \| `"inline"`        | `"default"`    | Visual type                                     |
| `direction`    | `"horizontal"` \| `"vertical"`                     | `"horizontal"` | Step layout direction                           |
| `size`         | `"default"` \| `"small"`                           | `"default"`    | Step size                                       |
| `onStepChange` | `(step: number) => void`                           | –              | Called when a step is clicked (navigation type) |
| `className`    | `string`                                           | –              | Additional CSS classes                          |

### StepItem

```typescript
interface StepItem {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  status?: "wait" | "process" | "finish" | "error"; // Override individual step status
}
```

## Examples

### Basic Multi-Step Form

```tsx
const steps = [
  { title: "Account", description: "Create your credentials" },
  { title: "Profile", description: "Add personal info" },
  { title: "Preferences", description: "Customize your experience" },
  { title: "Review", description: "Confirm and submit" },
];

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="space-y-8">
      <Steps items={steps} current={currentStep} />

      <div>{/* Step content */}</div>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={() => setCurrentStep((s) => s - 1)}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
            else handleSubmit();
          }}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}
```

### With Error State

```tsx
<Steps
  items={[
    { title: "Personal Info" },
    { title: "Payment", status: "error" },
    { title: "Confirmation" },
  ]}
  current={1}
  status="error"
/>
```

### Vertical Steps

```tsx
<Steps
  direction="vertical"
  current={2}
  items={[
    { title: "Order Placed", description: "March 26, 2026" },
    { title: "Processing", description: "Preparing your order" },
    { title: "Shipped", description: "Estimated March 28" },
    { title: "Delivered" },
  ]}
/>
```

### Clickable Navigation Steps

```tsx
<Steps
  type="navigation"
  current={activeStep}
  onStepChange={setActiveStep}
  items={[{ title: "Overview" }, { title: "Settings" }, { title: "Advanced" }]}
/>
```

### Small Size

```tsx
<Steps
  size="small"
  current={1}
  items={[
    { title: "Cart" },
    { title: "Shipping" },
    { title: "Payment" },
    { title: "Confirm" },
  ]}
/>
```

## Do's and Don'ts

### ✅ Do

- Keep step count between 3–7 for usability
- Use `description` to provide context for what each step entails
- Set `status="error"` when a step fails validation

### ❌ Don't

- Don't use Steps for a simple 2-step flow — a Back/Next button pair is enough
- Don't allow skipping steps in a linear process (unless `type="navigation"`)
- Don't hide the progress indicator — users need to know where they are

## Accessibility

- Steps have `role="list"` with `role="listitem"` items
- Current step announces `aria-current="step"`
- Clickable navigation steps have `role="button"` and `tabIndex={0}`
