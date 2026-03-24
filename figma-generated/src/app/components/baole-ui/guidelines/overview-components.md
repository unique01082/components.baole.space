# Component Overview — @baole/ui

This document provides a comprehensive table of all components in the library, organized by category with their purposes and key props.

---

## Component Table

### 📝 Inputs & Forms

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Button** | Primary actions, CTAs, navigation triggers | [button.md](./components/button.md) | `variant`, `size`, `disabled`, `loading` |
| **Input** | Single-line text entry for emails, passwords, search | [input.md](./components/input.md) | `type`, `placeholder`, `value`, `onChange` |
| **InputNumber** | Numeric input with increment/decrement controls | [input-number.md](./components/input-number.md) | `min`, `max`, `step`, `precision` |
| **Textarea** | Multi-line text input for longer content | [textarea.md](./components/textarea.md) | `rows`, `maxLength`, `resize` |
| **Select** | Dropdown selection from predefined options | [select.md](./components/select.md) | `options`, `value`, `onValueChange` |
| **Checkbox** | Binary or multiple selection | [checkbox.md](./components/checkbox.md) | `checked`, `onCheckedChange`, `indeterminate` |
| **RadioGroup** | Single choice from mutually exclusive options | [radio-group.md](./components/radio-group.md) | `value`, `onValueChange`, `orientation` |
| **Switch** | Toggle between on/off states | [switch.md](./components/switch.md) | `checked`, `onCheckedChange`, `disabled` |
| **Slider** | Select value(s) from a range | [slider.md](./components/slider.md) | `min`, `max`, `step`, `value` |
| **Form** | Container with validation and error display | [form.md](./components/form.md) | `errors`, `touched`, `onSubmit` |
| **Label** | Accessible labels for form fields | [label.md](./components/label.md) | `htmlFor`, `required` |
| **Toggle** | Toggle button with active state | [toggle.md](./components/toggle.md) | `pressed`, `onPressedChange`, `variant` |
| **ToggleGroup** | Group of mutually exclusive toggles | [toggle-group.md](./components/toggle-group.md) | `type`, `value`, `onValueChange` |
| **InputOTP** | One-time password/code input | [input-otp.md](./components/input-otp.md) | `maxLength`, `pattern`, `value` |

### 📅 Pickers

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **DatePicker** | Select single date with calendar UI | [date-picker.md](./components/date-picker.md) | `selected`, `onSelect`, `disabled` |
| **DateRangePicker** | Select start and end dates | [date-range-picker.md](./components/date-range-picker.md) | `from`, `to`, `onSelect` |
| **TimePicker** | Select time (hours, minutes, seconds) | [time-picker.md](./components/time-picker.md) | `value`, `onChange`, `format` |
| **ColorPicker** | Pick colors with RGB/HSL/Hex support | [color-picker.md](./components/color-picker.md) | `value`, `onChange`, `presets` |
| **Rating** | Star rating input | [rating.md](./components/rating.md) | `value`, `onChange`, `max` |
| **Upload** | File upload with drag-drop | [upload.md](./components/upload.md) | `accept`, `multiple`, `maxSize` |

### 🎭 Overlays

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Dialog** | Modal dialogs for critical actions | [dialog.md](./components/dialog.md) | `open`, `onOpenChange` |
| **AlertDialog** | Confirmation dialogs requiring user decision | [alert-dialog.md](./components/alert-dialog.md) | `open`, `onOpenChange` |
| **Drawer** | Slide-in side panel (Vaul-based) | [drawer.md](./components/drawer.md) | `open`, `onOpenChange` |
| **Sheet** | Bottom/side sheets (Radix-based) | [sheet.md](./components/sheet.md) | `side`, `open`, `onOpenChange` |
| **Popover** | Floating content panels anchored to triggers | [popover.md](./components/popover.md) | `open`, `onOpenChange`, `side` |
| **HoverCard** | Content revealed on hover | [hover-card.md](./components/hover-card.md) | `openDelay`, `closeDelay` |
| **Tooltip** | Context hints on hover | [tooltip.md](./components/tooltip.md) | `content`, `side`, `delayDuration` |
| **DropdownMenu** | Action menus with keyboard navigation | [dropdown-menu.md](./components/dropdown-menu.md) | `open`, `onOpenChange` |
| **ContextMenu** | Right-click context menus | [context-menu.md](./components/context-menu.md) | Trigger with right-click |

### 💬 Feedback

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Alert** | Contextual inline messages (info, success, warning, error) | [alert.md](./components/alert.md) | `variant`, `title`, `description` |
| **Toast** | Temporary notifications (Sonner wrapper) | [toast.md](./components/toast.md) | `toast.success()`, `toast.error()` |
| **Message** | Top-centered messages (Ant Design style) | [message.md](./components/message.md) | `type`, `content`, `duration` |
| **Progress** | Progress bars and indicators | [progress.md](./components/progress.md) | `value`, `max`, `variant` |
| **Skeleton** | Loading placeholders | [skeleton.md](./components/skeleton.md) | Shape and size via className |
| **Spinner** | Loading spinner | [spinner.md](./components/spinner.md) | `size`, `variant` |
| **EmptyState** | Empty state illustrations | `empty-state.md` | `icon`, `title`, `description` |
| **Result** | Result pages (success/error) | `result.md` | `status`, `title`, `subtitle` |

### 🧭 Navigation

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Tabs** | Organize content into tabbed sections | [tabs.md](./components/tabs.md) | `value`, `onValueChange` |
| **Breadcrumb** | Show page hierarchy | [breadcrumb.md](./components/breadcrumb.md) | Compose with BreadcrumbItem |
| **NavigationMenu** | Mega menus with dropdowns | [navigation-menu.md](./components/navigation-menu.md) | Multi-level navigation |
| **Menubar** | Application menu bar (File, Edit, View) | [menubar.md](./components/menubar.md) | Horizontal menu system |
| **Pagination** | Navigate through pages | [pagination.md](./components/pagination.md) | `currentPage`, `totalPages` |
| **Sidebar** | Collapsible app sidebar | [sidebar.md](./components/sidebar.md) | `collapsible`, `collapsed` |
| **Accordion** | Collapsible content sections | [accordion.md](./components/accordion.md) | `type`, `value`, `onValueChange` |
| **Steps** | Step-by-step progress indicator | [steps.md](./components/steps.md) | `current`, `items` |
| **Anchor** | Table of contents with scroll spy | [anchor.md](./components/anchor.md) | `links`, `activeLink` |
| **Segmented** | Segmented control buttons | [segmented.md](./components/segmented.md) | `options`, `value` |

### 📊 Data Display

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Table** | Display structured data in rows/columns | [table.md](./components/table.md) | Compose with TableHeader, TableBody |
| **Collapsible** | Show/hide content sections | [collapsible.md](./components/collapsible.md) | `open`, `onOpenChange` |
| **Calendar** | Full calendar view | [calendar.md](./components/calendar.md) | `mode`, `selected`, `onSelect` |
| **Carousel** | Image/content slider (Embla) | [carousel.md](./components/carousel.md) | `opts`, `orientation` |
| **Chart** | Data visualization (Recharts wrapper) | [chart.md](./components/chart.md) | `data`, `xKey`, `lines/bars` |
| **Command** | Command palette (⌘K) | [command.md](./components/command.md) | `open`, `onOpenChange` |
| **Tree** | Hierarchical tree view | [tree.md](./components/tree.md) | `treeData`, `checkable` |
| **TreeSelect** | Tree-based dropdown selection | [tree-select.md](./components/tree-select.md) | `treeData`, `value` |
| **Timeline** | Event timeline | [timeline.md](./components/timeline.md) | `items` |
| **Statistic** | Display statistics | [statistic.md](./components/statistic.md) | `title`, `value`, `prefix` |
| **Descriptions** | Key-value pairs | [descriptions.md](./components/descriptions.md) | `items` |
| **List** | Generic list display | [list.md](./components/list.md) | `items`, `renderItem` |
| **Tag** | Labeled badges | [tag.md](./components/tag.md) | `closable`, `onClose` |
| **QRCode** | QR code generator | [qrcode.md](./components/qrcode.md) | `value`, `size` |

### 📐 Layout

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Card** | Content container with header/footer | [card.md](./components/card.md) | Compose with CardHeader, CardContent |
| **Separator** | Visual divider line | [separator.md](./components/separator.md) | `orientation`, `decorative` |
| **Divider** | Divider with text | [divider.md](./components/divider.md) | `orientation`, text content |
| **AspectRatio** | Maintain aspect ratio containers | [aspect-ratio.md](./components/aspect-ratio.md) | `ratio` |
| **ScrollArea** | Custom styled scrollbars | [scroll-area.md](./components/scroll-area.md) | `orientation` |
| **Resizable** | Resizable panel layouts | [resizable.md](./components/resizable.md) | `direction`, `onLayout` |
| **Layout** | App layout structure (Header/Sider/Content/Footer) | [layout.md](./components/layout.md) | Compose with subcomponents |
| **Container** | Responsive centered container | [container.md](./components/container.md) | `maxWidth`, `padding` |
| **Stack** | Vertical/horizontal flex stack | [stack.md](./components/stack.md) | `direction`, `spacing` |
| **Grid** | CSS Grid layout | [grid.md](./components/grid.md) | `cols`, `gap` |
| **Space** | Add spacing between children | [space.md](./components/space.md) | `size`, `direction` |
| **Affix** | Fixed positioning on scroll | [affix.md](./components/affix.md) | `offsetTop`, `target` |
| **BackTop** | Scroll to top button | [back-top.md](./components/back-top.md) | `visibilityHeight` |
| **FloatButton** | Floating action button | [float-button.md](./components/float-button.md) | `icon`, `tooltip` |
| **Watermark** | Add watermark overlay | [watermark.md](./components/watermark.md) | `content`, `rotate` |

### 🔤 Typography

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Heading** | Semantic headings (h1-h6) | [heading.md](./components/heading.md) | `level`, `gradient` |
| **Text** | Paragraph text with variants | [text.md](./components/text.md) | `variant`, `size` |
| **Code** | Inline/block code display | [code.md](./components/code.md) | `block`, `language` |
| **Kbd** | Keyboard shortcut display | [kbd.md](./components/kbd.md) | Text content |

### 🔧 Utility

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Avatar** | User profile images with fallback | [avatar.md](./components/avatar.md) | `src`, `alt`, `fallback` |
| **Badge** | Status indicators and counters | [badge.md](./components/badge.md) | `variant`, `size` |
| **Chip** | Interactive tags/chips | [chip.md](./components/chip.md) | `closable`, `onClose` |
| **Tour** | Product tour overlay | [tour.md](./components/tour.md) | `steps`, `current` |

### ⚙️ System

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **ThemeProvider** | Manage dark/light theme | [theme-provider.md](./components/theme-provider.md) | `defaultTheme`, `storageKey` |

---

## Common Usage Patterns

### 1. Form with Validation

```tsx
import { Form, FormItem, Input, Button } from '@baole/ui'

function LoginForm() {
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validation logic
    if (!email) setErrors({ email: 'Required' })
  }

  return (
    <Form errors={errors} touched={touched} onSubmit={handleSubmit}>
      <FormItem label="Email" name="email" required>
        <Input
          type="email"
          placeholder="your@email.com"
          onBlur={() => setTouched({ ...touched, email: true })}
        />
      </FormItem>
      
      <FormItem label="Password" name="password" required>
        <Input type="password" />
      </FormItem>

      <Button type="submit" variant="gradient">
        Sign In
      </Button>
    </Form>
  )
}
```

### 2. Dialog from Button

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, Button } from '@baole/ui'

function DeleteAction() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <p>This action cannot be undone.</p>
        <Button variant="gradient" onClick={handleDelete}>
          Confirm Delete
        </Button>
      </DialogContent>
    </Dialog>
  )
}
```

### 3. Toast Notifications (Imperative API)

```tsx
import { toast } from 'sonner'
import { Button } from '@baole/ui'

function SaveButton() {
  const handleSave = async () => {
    toast.loading('Saving...')
    
    try {
      await saveData()
      toast.success('Saved successfully!')
    } catch (error) {
      toast.error('Failed to save')
    }
  }

  return <Button onClick={handleSave}>Save</Button>
}

// In your app root:
import { Toaster } from '@baole/ui'

function App() {
  return (
    <>
      <Toaster />
      <YourApp />
    </>
  )
}
```

### 4. Command Palette (⌘K)

```tsx
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from '@baole/ui'
import { Search } from 'lucide-react'

function AppCommandPalette() {
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
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => { /* action */ }}>
            <Search className="mr-2 h-4 w-4" />
            Search
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
```

---

**Next:** Read [overview-icons.md](./overview-icons.md) to understand the icon system.
