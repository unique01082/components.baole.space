# @baolq/ui Design System Guidelines

## Introduction

Welcome to **@baolq/ui** — a rich, dark-gradient React component library built for the baole.space ecosystem. This design system combines Ant Design-level prop richness with shadcn/ui architecture (Radix primitives + CVA), wrapped in the distinctive baole.space visual style featuring dark gradients, glassmorphism, and vibrant accents.

## How to Use These Guidelines

**IMPORTANT**: Before writing any code, AI coding agents should follow this workflow:

### Step-by-Step Workflow

1. **Read Overview Files FIRST**
   - Start with `overview-components.md` to understand the full component library
   - Review `overview-icons.md` to learn icon usage patterns
   
2. **Understand Design Tokens**
   - Read `design-tokens/colors.md` for color system and hierarchy
   - Read `design-tokens/typography.md` for font scales and text patterns
   - Read `design-tokens/spacing.md` for layout and spacing conventions

3. **Plan Your Implementation**
   - Identify which components are needed from the lookup table below
   - Always prefer @baolq/ui components over plain HTML or raw Tailwind

4. **Read Component Guidelines**
   - Before using any component, read its dedicated `.md` file in `components/`
   - Review prop APIs, examples, and do's/don'ts

5. **Write Code**
   - Import components: `import { Button, Card, Input } from '@baolq/ui'`
   - Import styles in app root: `import '@baolq/ui/style.css'`
   - Use TypeScript for full type safety

## Component Lookup Table

### Inputs & Forms

| Component | Description | Guidelines File |
|-----------|-------------|-----------------|
| **Button** | Primary action trigger with 7 variants, sizes, loading states | `components/button.md` |
| **Input** | Text input with validation, icons, prefix/suffix | `components/input.md` |
| **Textarea** | Multi-line text input with auto-resize, character counter | Coming soon |
| **Select** | Dropdown selection with searchable options | `components/select.md` |
| **Checkbox** | Binary choice with indeterminate state | `components/checkbox.md` |
| **RadioGroup** | Mutually exclusive options | `components/radio-group.md` |
| **Switch** | Toggle control with icons, loading state | `components/switch.md` |
| **Slider** | Range input with tooltips and marks | `components/slider.md` |
| **Form** | Form composition with react-hook-form integration | `components/form.md` |
| **Label** | Accessible form field labels | Coming soon |
| **Toggle** | Binary toggle button | Coming soon |
| **ToggleGroup** | Multiple toggle buttons as group | Coming soon |
| **InputOTP** | One-time password input | Coming soon |

### Overlays

| Component | Description | Guidelines File |
|-----------|-------------|-----------------|
| **Dialog** | Modal overlay with customizable sizes | `components/dialog.md` |
| **AlertDialog** | Confirmation modal for destructive actions | `components/alert-dialog.md` |
| **Drawer** | Slide-in panel from bottom (mobile) | `components/drawer.md` |
| **Sheet** | Slide-in panel from any side | `components/sheet.md` |
| **Popover** | Floating content triggered by action | `components/popover.md` |
| **HoverCard** | Content revealed on hover | Coming soon |
| **Tooltip** | Contextual hint on hover | `components/tooltip.md` |
| **DropdownMenu** | Menu with actions, keyboard navigation | `components/dropdown-menu.md` |
| **ContextMenu** | Right-click contextual menu | Coming soon |

### Feedback

| Component | Description | Guidelines File |
|-----------|-------------|-----------------|
| **Alert** | Inline message with semantic colors | `components/alert.md` |
| **Sonner (Toast)** | Temporary notifications | `components/toast.md` |
| **Progress** | Linear progress indicator with variants | `components/progress.md` |
| **Skeleton** | Loading placeholders | Coming soon |

### Navigation

| Component | Description | Guidelines File |
|-----------|-------------|-----------------|
| **Tabs** | Tabbed interface with 4 style variants | `components/tabs.md` |
| **Breadcrumb** | Hierarchical navigation trail | Coming soon |
| **NavigationMenu** | Top-level site navigation | Coming soon |
| **Menubar** | Application menu bar | Coming soon |
| **Pagination** | Page navigation controls | Coming soon |
| **Sidebar** | Collapsible side navigation | `components/sidebar.md` |

### Data Display

| Component | Description | Guidelines File |
|-----------|-------------|-----------------|
| **Table** | Data table with sorting, sticky headers | `components/table.md` |
| **Accordion** | Expandable content sections | `components/accordion.md` |
| **Collapsible** | Simple show/hide content | Coming soon |
| **Calendar** | Date picker and calendar | `components/calendar.md` |
| **Carousel** | Image/content carousel | `components/carousel.md` |
| **Chart** | Charts via recharts integration | Coming soon |
| **Command** | Command palette (Cmd+K pattern) | `components/command.md` |

### Layout

| Component | Description | Guidelines File |
|-----------|-------------|-----------------|
| **Card** | Container with 4 variants, hoverable option | `components/card.md` |
| **Separator** | Divider line with optional label | Coming soon |
| **AspectRatio** | Maintains aspect ratio for media | Coming soon |
| **ScrollArea** | Styled scrollable container | Coming soon |
| **Resizable** | Resizable panels | Coming soon |

### Utility

| Component | Description | Guidelines File |
|-----------|-------------|-----------------|
| **Avatar** | User avatar with fallback, status indicators | `components/avatar.md` |
| **Badge** | Status labels and tags | `components/badge.md` |

## Design Principles

### IMPORTANT — Always Prefer @baolq/ui Components

- ❌ **DON'T** use plain HTML `<button>` — use `<Button>`
- ❌ **DON'T** use raw `<input>` — use `<Input>`
- ❌ **DON'T** create custom cards with Tailwind — use `<Card>`
- ❌ **DON'T** manually style overlays — use `<Dialog>`, `<Sheet>`, `<Popover>`
- ✅ **DO** use @baolq/ui components for all UI elements
- ✅ **DO** extend components via `className` prop when needed
- ✅ **DO** compose components (e.g., `<Card>` + `<Button>`)

### Visual Language

- **Dark-first**: All components designed for dark backgrounds
- **Glassmorphism**: Frosted glass surfaces with backdrop blur
- **Gradient accents**: Purple → Fuchsia → Pink spectrum
- **Subtle glows**: Box shadows with color-matched glows
- **White text**: High contrast on dark backgrounds
- **Minimal borders**: `rgba(255,255,255,0.1)` barely-visible borders

### Accessibility

- All interactive components are keyboard navigable
- Focus states use visible `ring-2 ring-purple-400/20`
- ARIA attributes included via Radix UI primitives
- Color contrast meets WCAG AA standards

## Import Patterns

```typescript
// In your app entry point (e.g., main.tsx or App.tsx)
import '@baolq/ui/style.css'

// Import components
import { Button, Card, Input, Dialog, Badge } from '@baolq/ui'

// Use components with full TypeScript support
<Button
  variant="gradient"
  size="lg"
  loading={isLoading}
  leftIcon={<PlusIcon />}
  onClick={handleClick}
>
  Create Project
</Button>
```

## Common Usage Patterns

### Form with Validation

```tsx
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, Input, Button } from '@baolq/ui'

function LoginForm() {
  const form = useForm()
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="gradient">Submit</Button>
      </form>
    </Form>
  )
}
```

### Dialog Triggered by Button

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, Button } from '@baolq/ui'

function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="gradient">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <p>Dialog content goes here</p>
      </DialogContent>
    </Dialog>
  )
}
```

### Toast Notifications

```tsx
import { toast } from '@baolq/ui'

// Success
toast.success('Changes saved successfully')

// Error
toast.error('Failed to save changes')

// Promise-based
toast.promise(
  saveData(),
  {
    loading: 'Saving...',
    success: 'Saved!',
    error: 'Failed to save'
  }
)
```

### Command Palette

```tsx
import { Command, CommandDialog, CommandInput, CommandList, CommandItem } from '@baolq/ui'

function CommandPalette() {
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])
  
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandItem>Create new project</CommandItem>
        <CommandItem>Open settings</CommandItem>
      </CommandList>
    </CommandDialog>
  )
}
```

## Tech Stack

- **React** 19+
- **TypeScript** 5+ (strict mode)
- **Tailwind CSS** v4
- **Radix UI** primitives
- **CVA** for variants
- **Lucide React** for icons
- **Motion/React** for animations
- **react-hook-form** for forms
- **sonner** for toasts

## Resources

- GitHub: `https://github.com/unique01082/baole-ui`
- License: MIT
- Author: Bao LE
- Version: 0.1.0

---

*"In code we trust, in games we clutch, in photos we overexpose (+0.3 EV)"* — Built with passion for the baole.space ecosystem.
