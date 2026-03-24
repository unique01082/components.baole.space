# @baole/ui Guidelines

Welcome to the **@baole/ui** design system — a production-ready React component library built for the **baole.space** ecosystem. This library provides 87+ glassmorphic, gradient-accented components with a dark-first aesthetic, strict TypeScript types, and comprehensive accessibility support.

## 🎯 How to Use These Guidelines

**IMPORTANT — AI Agents & Developers:**  
Before writing any code with `@baole/ui`, you must follow this workflow:

### Step 1: Read Overview Files FIRST

Start by reading these files to understand the library architecture:

- **[overview-components.md](./overview-components.md)** — Complete component inventory with categories and use cases
- **[overview-icons.md](./overview-icons.md)** — Lucide React icon system and usage patterns

### Step 2: Read Design Token Documentation

Understand the visual language before using components:

- **[design-tokens/colors.md](./design-tokens/colors.md)** — Color system, backgrounds, gradients, semantic colors
- **[design-tokens/typography.md](./design-tokens/typography.md)** — Font scales, weights, gradient text patterns
- **[design-tokens/spacing.md](./design-tokens/spacing.md)** — Layout rhythm, containers, responsive breakpoints

### Step 3: Plan Your Component Usage

Before coding, ask yourself:
- What user interaction am I building? (Look up the right component category)
- What variant/size fits my use case? (Check the component's Props API)
- Do I need controlled or uncontrolled behavior? (Read the component examples)

### Step 4: Read the Specific Component File

Each component has a dedicated guide in `guidelines/components/`:

- Purpose & when to use
- Full Props API table
- Multiple code examples (basic, controlled, advanced)
- Do's and Don'ts

### Step 5: Write Code

Now you can confidently implement with correct imports, props, and patterns.

---

## 📚 Component Lookup Table

**Quick reference — click component name to jump to its detailed guide.**

| Component | Category | Purpose | File |
|-----------|----------|---------|------|
| **Button** | Input & Forms | Primary actions, CTAs, navigation | [button.md](./components/button.md) |
| **Input** | Input & Forms | Text entry, email, password fields | [input.md](./components/input.md) |
| **InputNumber** | Input & Forms | Numeric input with step controls | [input-number.md](./components/input-number.md) |
| **Textarea** | Input & Forms | Multi-line text input | [textarea.md](./components/textarea.md) |
| **Select** | Input & Forms | Dropdown selection | [select.md](./components/select.md) |
| **Checkbox** | Input & Forms | Binary/multiple selection | [checkbox.md](./components/checkbox.md) |
| **RadioGroup** | Input & Forms | Single choice from options | [radio-group.md](./components/radio-group.md) |
| **Switch** | Input & Forms | Toggle on/off states | [switch.md](./components/switch.md) |
| **Slider** | Input & Forms | Range selection | [slider.md](./components/slider.md) |
| **Form** | Input & Forms | Form container with validation | [form.md](./components/form.md) |
| **Label** | Input & Forms | Form field labels | [label.md](./components/label.md) |
| **Toggle** | Input & Forms | Toggle button | [toggle.md](./components/toggle.md) |
| **ToggleGroup** | Input & Forms | Multiple toggle buttons | [toggle-group.md](./components/toggle-group.md) |
| **InputOTP** | Input & Forms | One-time password input | [input-otp.md](./components/input-otp.md) |
| **DatePicker** | Pickers | Date selection with calendar | [date-picker.md](./components/date-picker.md) |
| **TimePicker** | Pickers | Time selection | [time-picker.md](./components/time-picker.md) |
| **ColorPicker** | Pickers | Color selection | [color-picker.md](./components/color-picker.md) |
| **Dialog** | Overlays | Modal dialogs | [dialog.md](./components/dialog.md) |
| **AlertDialog** | Overlays | Confirmation dialogs | [alert-dialog.md](./components/alert-dialog.md) |
| **Drawer** | Overlays | Side panel | [drawer.md](./components/drawer.md) |
| **Sheet** | Overlays | Bottom/side sheets | [sheet.md](./components/sheet.md) |
| **Popover** | Overlays | Floating content panels | [popover.md](./components/popover.md) |
| **HoverCard** | Overlays | Hover-triggered cards | [hover-card.md](./components/hover-card.md) |
| **Tooltip** | Overlays | Context hints on hover | [tooltip.md](./components/tooltip.md) |
| **DropdownMenu** | Overlays | Action menus | [dropdown-menu.md](./components/dropdown-menu.md) |
| **ContextMenu** | Overlays | Right-click menus | [context-menu.md](./components/context-menu.md) |
| **Alert** | Feedback | Contextual messages | [alert.md](./components/alert.md) |
| **Toast** | Feedback | Temporary notifications (Sonner) | [toast.md](./components/toast.md) |
| **Message** | Feedback | Top-centered messages | [message.md](./components/message.md) |
| **Progress** | Feedback | Progress indicators | [progress.md](./components/progress.md) |
| **Skeleton** | Feedback | Loading placeholders | [skeleton.md](./components/skeleton.md) |
| **Spinner** | Feedback | Loading spinner | [spinner.md](./components/spinner.md) |
| **Tabs** | Navigation | Tabbed content | [tabs.md](./components/tabs.md) |
| **Breadcrumb** | Navigation | Page hierarchy | [breadcrumb.md](./components/breadcrumb.md) |
| **NavigationMenu** | Navigation | Mega menus | [navigation-menu.md](./components/navigation-menu.md) |
| **Menubar** | Navigation | Application menu bar | [menubar.md](./components/menubar.md) |
| **Pagination** | Navigation | Page navigation | [pagination.md](./components/pagination.md) |
| **Sidebar** | Navigation | App sidebar | [sidebar.md](./components/sidebar.md) |
| **Steps** | Navigation | Step indicators | [steps.md](./components/steps.md) |
| **Table** | Data Display | Data tables | [table.md](./components/table.md) |
| **Accordion** | Data Display | Collapsible sections | [accordion.md](./components/accordion.md) |
| **Collapsible** | Data Display | Toggle content visibility | [collapsible.md](./components/collapsible.md) |
| **Calendar** | Data Display | Date calendars | [calendar.md](./components/calendar.md) |
| **Carousel** | Data Display | Image/content sliders | [carousel.md](./components/carousel.md) |
| **Chart** | Data Display | Data visualizations (Recharts) | [chart.md](./components/chart.md) |
| **Command** | Data Display | Command palette (⌘K) | [command.md](./components/command.md) |
| **Tree** | Data Display | Hierarchical data | [tree.md](./components/tree.md) |
| **Card** | Layout | Content containers | [card.md](./components/card.md) |
| **Separator** | Layout | Visual dividers | [separator.md](./components/separator.md) |
| **AspectRatio** | Layout | Maintain aspect ratios | [aspect-ratio.md](./components/aspect-ratio.md) |
| **ScrollArea** | Layout | Custom scrollbars | [scroll-area.md](./components/scroll-area.md) |
| **Resizable** | Layout | Resizable panels | [resizable.md](./components/resizable.md) |
| **Avatar** | Utility | User avatars | [avatar.md](./components/avatar.md) |
| **Badge** | Utility | Status indicators | [badge.md](./components/badge.md) |

---

## ⚠️ CRITICAL — Component-First Development

**Always prefer @baole/ui components over plain HTML or Tailwind classes.**

### ✅ DO

```tsx
import { Button, Input, Card } from '@baole/ui'

<Card>
  <Card.Header>
    <Card.Title>Login</Card.Title>
  </Card.Header>
  <Card.Content>
    <Input placeholder="Email" />
    <Button variant="gradient">Sign In</Button>
  </Card.Content>
</Card>
```

### ❌ DON'T

```tsx
// Don't use plain HTML when a component exists
<div className="rounded-lg border p-4">
  <input className="..." />
  <button className="...">Sign In</button>
</div>
```

---

## 📦 Installation & Setup

### Import Components

```typescript
import { Button, Card, Input, Dialog } from '@baole/ui'
```

### Import Styles (App Root)

```typescript
import '@baole/ui/style.css'
```

### Wrap App with Theme Provider

```tsx
import { ThemeProvider } from '@baole/ui'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  )
}
```

---

## 🔄 Common Patterns

### Form with Validation

```tsx
import { Form, FormItem, Input, Button } from '@baole/ui'

<Form errors={errors} touched={touched} onSubmit={handleSubmit}>
  <FormItem label="Email" name="email" required>
    <Input type="email" placeholder="your@email.com" />
  </FormItem>
  <Button type="submit" variant="gradient">Submit</Button>
</Form>
```

### Dialog from Button

```tsx
import { Dialog, DialogTrigger, DialogContent, Button } from '@baole/ui'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <p>Dialog content here</p>
  </DialogContent>
</Dialog>
```

### Toast Notifications (Imperative)

```tsx
import { toast } from 'sonner'

// In event handlers
toast.success('Profile updated!')
toast.error('Failed to save')
toast.loading('Processing...')
```

### Command Palette (⌘K)

```tsx
import { Command, CommandInput, CommandList, CommandItem } from '@baole/ui'

<Command>
  <CommandInput placeholder="Search commands..." />
  <CommandList>
    <CommandItem onSelect={() => handleAction()}>
      Action 1
    </CommandItem>
  </CommandList>
</Command>
```

---

## 📖 Documentation Structure

```
guidelines/
├── Guidelines.md (this file)
├── overview-components.md
├── overview-icons.md
├── design-tokens/
│   ├── colors.md
│   ├── typography.md
│   └── spacing.md
└── components/
    ├── button.md
    ├── input.md
    ├── dialog.md
    └── ... (all 87 components)
```

---

**Next Steps:**  
→ Read [overview-components.md](./overview-components.md)  
→ Browse [design-tokens/colors.md](./design-tokens/colors.md)  
→ Jump to a specific [component guide](./components/)

Built with ❤️ for baole.space
