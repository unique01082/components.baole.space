# @baole/ui Guidelines Documentation

## 8. Guidelines Documentation

### 8.1 Component Development Standards

#### TypeScript Requirements
- **Zero `any` types** - All props must be strictly typed
- Use `React.forwardRef` for ref forwarding
- Export prop interfaces with `export interface ComponentProps`
- Use discriminated unions for variant props
- Leverage `VariantProps` from `class-variance-authority`

```typescript
// ✅ Good
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

// ❌ Bad
export interface ButtonProps {
  variant?: any;
  onClick?: any;
}
```

#### Component Structure
```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const componentVariants = cva(
  "base-classes",
  {
    variants: { /* ... */ },
    defaultVariants: { /* ... */ },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(componentVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Component.displayName = "Component";

export { Component, componentVariants };
```

### 8.2 Styling Guidelines

#### Design Tokens Usage
Always use CSS custom properties from the theme:

```tsx
// ✅ Use theme tokens
className="bg-[var(--color-bg-glass)] text-[var(--color-text)]"

// ❌ Don't hardcode colors
className="bg-gray-900 text-white"
```

#### Available Design Tokens

**Colors:**
```css
/* Backgrounds */
--color-bg: #0a0a0a
--color-bg-secondary: #111111
--color-bg-elevated: #1a1a1a
--color-bg-glass: rgba(255,255,255,0.05)
--color-bg-glass-hover: rgba(255,255,255,0.08)
--color-bg-overlay: rgba(0,0,0,0.7)

/* Text */
--color-text: #ffffff
--color-text-secondary: rgba(255,255,255,0.85)
--color-text-muted: rgba(255,255,255,0.6)
--color-text-placeholder: rgba(255,255,255,0.4)

/* Borders */
--color-border: rgba(255,255,255,0.1)
--color-border-strong: rgba(255,255,255,0.2)

/* Primary */
--color-primary: #a855f7
```

**Glassmorphism:**
```css
--blur-glass: 8px
--blur-heavy: 16px
--blur-light: 4px
```

**Shadows & Glows:**
```css
--shadow-glass: 0 8px 32px rgba(0,0,0,0.3)
--shadow-elevated: 0 12px 48px rgba(0,0,0,0.5)
--glow-primary: 0 0 20px rgba(168,85,247,0.3)
--glow-secondary: 0 0 20px rgba(236,72,153,0.3)
```

**Gradients:**
```css
--gradient-primary: linear-gradient(135deg, #a855f7 0%, #ec4899 100%)
--gradient-secondary: linear-gradient(135deg, #ec4899 0%, #f472b6 100%)
--gradient-success: linear-gradient(135deg, #10b981 0%, #34d399 100%)
--gradient-warning: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)
--gradient-error: linear-gradient(135deg, #ef4444 0%, #f87171 100%)
--gradient-info: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)
```

#### Tailwind CSS v4 Guidelines

1. **Prefer utility classes over custom CSS**
2. **Use responsive modifiers**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
3. **Use state modifiers**: `hover:`, `focus:`, `active:`, `disabled:`
4. **Use group modifiers**: `group-hover:`, `peer-focus:`

```tsx
<div className="
  flex items-center gap-2
  bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)]
  border border-[var(--color-border)]
  hover:border-[var(--color-primary)]
  transition-all duration-200
  sm:flex-col md:flex-row
">
```

### 8.3 Accessibility Standards

#### ARIA Attributes
All interactive components must include proper ARIA:

```tsx
// ✅ Accessible button
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
  aria-disabled={isDisabled}
>

// ✅ Accessible form input
<input
  aria-label="Email address"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby="email-error"
/>
```

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Use `Tab` for focus navigation
- Use `Enter` or `Space` for activation
- Use arrow keys for list/menu navigation
- Support `Escape` to close overlays

```tsx
const handleKeyDown = (e: React.KeyboardEvent) => {
  switch (e.key) {
    case "Enter":
    case " ":
      handleActivate();
      break;
    case "Escape":
      handleClose();
      break;
    case "ArrowDown":
      handleNext();
      break;
  }
};
```

#### Focus Management
```tsx
// Visible focus indicators
className="focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"

// Focus trap for modals
import { FocusTrap } from "@radix-ui/react-focus-trap";
```

### 8.4 Component API Design

#### Controlled vs Uncontrolled
Support both patterns:

```tsx
export interface ComponentProps {
  // Controlled
  value?: string;
  onChange?: (value: string) => void;
  
  // Uncontrolled
  defaultValue?: string;
}

const Component = ({ value: controlledValue, defaultValue, onChange }) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue ?? internalValue;
  
  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };
};
```

#### Compound Components
Use dot notation for related components:

```tsx
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>Content</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

#### Render Props & Slots
```tsx
export interface ComponentProps {
  renderItem?: (item: Item) => React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

### 8.5 State Management

#### Local State
```tsx
const [isOpen, setIsOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<Item | null>(null);
```

#### Context for Shared State
```tsx
const ComponentContext = React.createContext<ContextValue | undefined>(undefined);

export const useComponent = () => {
  const context = React.useContext(ComponentContext);
  if (!context) {
    throw new Error("useComponent must be used within ComponentProvider");
  }
  return context;
};
```

### 8.6 Performance Optimization

#### Memoization
```tsx
// Memoize expensive computations
const expensiveValue = React.useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Memoize callbacks
const handleClick = React.useCallback(() => {
  doSomething(value);
}, [value]);

// Memoize components
const MemoizedChild = React.memo(ChildComponent);
```

#### Code Splitting
```tsx
// Lazy load heavy components
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

<React.Suspense fallback={<Spinner />}>
  <HeavyComponent />
</React.Suspense>
```

### 8.7 Testing Guidelines

#### Component Testing
```tsx
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports disabled state", () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByText("Click")).toBeDisabled();
  });
});
```

### 8.8 Documentation Requirements

Each component must include:

1. **JSDoc comments**
```tsx
/**
 * A button component with multiple variants and sizes.
 * 
 * @example
 * ```tsx
 * <Button variant="gradient" size="lg">
 *   Click me
 * </Button>
 * ```
 */
```

2. **Prop descriptions**
```tsx
export interface ButtonProps {
  /** The visual style variant */
  variant?: "solid" | "outline" | "ghost" | "gradient";
  
  /** The size of the button */
  size?: "sm" | "md" | "lg";
  
  /** Whether the button is in loading state */
  isLoading?: boolean;
}
```

3. **Usage examples in Storybook**

### 8.9 Error Handling

#### Graceful Degradation
```tsx
const Component = ({ data }) => {
  if (!data) {
    return <EmptyState message="No data available" />;
  }
  
  return <div>{/* render data */}</div>;
};
```

#### Error Boundaries
```tsx
<ErrorBoundary fallback={<ErrorMessage />}>
  <ComponentThatMightError />
</ErrorBoundary>
```

### 8.10 Animation Guidelines

#### Use Motion Library
```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.2 }}
>
```

#### CSS Transitions
```tsx
className="transition-all duration-200 ease-in-out"
```

#### Animation Tokens
- Fast: 150ms
- Normal: 200ms
- Slow: 300ms

### 8.11 Responsive Design

#### Breakpoints
```tsx
// Tailwind v4 breakpoints
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
2xl: 1536px // 2X extra large devices
```

#### Mobile-First Approach
```tsx
<div className="
  flex-col           /* Mobile: vertical */
  md:flex-row        /* Tablet+: horizontal */
  lg:gap-6           /* Desktop: larger gap */
">
```

### 8.12 Version Control & Release

#### Semantic Versioning
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

#### Commit Messages
```
feat: add new ColorPicker component
fix: resolve DatePicker timezone issue
docs: update Button component examples
style: format code with prettier
refactor: simplify Dialog component logic
test: add tests for Input validation
chore: update dependencies
```

### 8.13 Bundle Size Optimization

- Tree-shakeable exports
- No default exports (use named exports)
- Lazy load heavy dependencies
- Use dynamic imports for optional features

```tsx
// ✅ Tree-shakeable
export { Button } from "./button";
export { Card } from "./card";

// ❌ Not tree-shakeable
export default { Button, Card };
```

### 8.14 Browser Support

#### Target Browsers
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)

#### Polyfills
Include polyfills for:
- ResizeObserver
- IntersectionObserver
- Intl APIs (if needed)

### 8.15 Security Guidelines

- Sanitize user input
- Avoid dangerouslySetInnerHTML
- Use Content Security Policy
- Validate props with PropTypes or TypeScript

```tsx
// ✅ Safe
<div>{sanitize(userInput)}</div>

// ❌ Dangerous
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

---

## Quick Reference

### Component Checklist
- [ ] TypeScript types (no `any`)
- [ ] forwardRef support
- [ ] Accessibility (ARIA, keyboard)
- [ ] Responsive design
- [ ] Theme tokens used
- [ ] Documentation (JSDoc)
- [ ] Tests written
- [ ] Storybook story
- [ ] Performance optimized
- [ ] Error handling

### Design Token Reference
```tsx
// Most common patterns
bg-[var(--color-bg-glass)]
backdrop-blur-[var(--blur-glass)]
border border-[var(--color-border)]
text-[var(--color-text)]
shadow-[var(--shadow-glass)]
```

### Common Patterns
```tsx
// Glass effect
"bg-[var(--color-bg-glass)] backdrop-blur-[var(--blur-glass)] border border-[var(--color-border)]"

// Gradient button
"bg-gradient-to-r from-[var(--color-primary)] to-[#ec4899]"

// Interactive element
"hover:bg-[var(--color-bg-glass-hover)] focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
```
