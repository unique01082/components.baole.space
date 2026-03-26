# Stepper

## Purpose

An interactive step-by-step flow component with inline content rendering per step. Unlike `Steps` (which is a status indicator), `Stepper` manages the full step lifecycle including content, navigation buttons, and completion. Supports horizontal and vertical orientations with gradient variant.

## When to Use

### ✅ Use Stepper when:

- Building a guided multi-step form or wizard with step content shown inline
- An onboarding flow where each step has its own form or content area
- A setup wizard where navigation is managed by the component

### ❌ Don't use Stepper when:

- Only a visual progress indicator is needed → Use `Steps`
- An interactive guided walkthrough with UI highlights → Use `Tour`
- The step count is dynamic or unknown → Use a wizard with custom state management

## Installation

```typescript
import { Stepper } from "@baolq/ui";
```

## Props API

| Prop           | Type                           | Default        | Description                           |
| -------------- | ------------------------------ | -------------- | ------------------------------------- |
| `steps`        | `StepperStep[]`                | **required**   | Step definitions with content         |
| `currentStep`  | `number`                       | `0`            | Controlled current step index         |
| `orientation`  | `"horizontal"` \| `"vertical"` | `"horizontal"` | Layout direction                      |
| `variant`      | `"default"` \| `"gradient"`    | `"default"`    | Visual style of step connectors/icons |
| `onStepChange` | `(step: number) => void`       | –              | Called when step changes              |
| `className`    | `string`                       | –              | Additional CSS classes                |

### StepperStep

```typescript
interface StepperStep {
  title: string;
  description?: string;
  content: React.ReactNode; // Rendered below the step header when active
  icon?: React.ReactNode;
  optional?: boolean; // Shows "(optional)" label
}
```

## Examples

### Basic Stepper

```tsx
function OnboardingWizard() {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Create Account",
      description: "Set up your login credentials",
      content: (
        <div className="space-y-4 mt-4">
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button onClick={() => setCurrent(1)}>Continue</Button>
        </div>
      ),
    },
    {
      title: "Profile Setup",
      description: "Tell us about yourself",
      content: (
        <div className="space-y-4 mt-4">
          <Input placeholder="Your name" />
          <Textarea placeholder="Bio (optional)" />
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => setCurrent(0)}>
              Back
            </Button>
            <Button onClick={() => setCurrent(2)}>Next</Button>
          </div>
        </div>
      ),
    },
    {
      title: "Done!",
      description: "Your account is ready",
      content: (
        <div className="mt-4">
          <Result
            status="success"
            title="Setup Complete"
            subtitle="Welcome aboard! You can now explore the dashboard."
            extra={<Button onClick={goToDashboard}>Go to Dashboard</Button>}
          />
        </div>
      ),
    },
  ];

  return (
    <Stepper steps={steps} currentStep={current} onStepChange={setCurrent} />
  );
}
```

### Vertical Orientation

```tsx
<Stepper
  orientation="vertical"
  steps={setupSteps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
/>
```

### Gradient Variant

```tsx
<Stepper
  variant="gradient"
  steps={checkoutSteps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
/>
```

### Optional Steps

```tsx
const steps = [
  { title: "Basic Info", content: <BasicInfoForm /> },
  {
    title: "Profile Photo",
    optional: true, // shows "(optional)" label
    content: <PhotoUpload />,
  },
  { title: "Preferences", content: <PreferencesForm /> },
];
```

## Do's and Don'ts

### ✅ Do

- Provide a Back button inside step `content` for linear navigation
- Mark truly optional steps with `optional: true`
- Use `variant="gradient"` for marketing/onboarding flows, `"default"` for functional wizards

### ❌ Don't

- Don't use Stepper when content is shared across steps — use a tabbed layout
- Don't put too much content in a single step — break complex forms across multiple steps
- Don't allow skipping steps without validation

## Accessibility

- Active step content is positioned in reading order
- Step headers have `aria-selected` and `aria-current` states
- Navigation buttons within content are keyboard-accessible
