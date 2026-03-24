# @baole/ui Component Overview

Complete reference table for all 45+ components in the @baole/ui design system.

## Component Categorization

### Inputs & Forms

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Button** | Primary action trigger with 7 variants | `components/button.md` | `variant`, `size`, `loading`, `leftIcon`, `rightIcon` |
| **Input** | Text input with validation states | `components/input.md` | `status`, `label`, `error`, `leftIcon`, `clearable` |
| **Textarea** | Multi-line text input | Coming soon | `autoResize`, `maxLength`, `showCount` |
| **Select** | Dropdown selection with search | `components/select.md` | Compound API (Trigger, Content, Item) |
| **Checkbox** | Binary choice with indeterminate | `components/checkbox.md` | `checked`, `indeterminate`, `label` |
| **RadioGroup** | Mutually exclusive options | `components/radio-group.md` | `value`, `onValueChange`, `direction` |
| **Switch** | Toggle control | `components/switch.md` | `checked`, `onCheckedChange`, `loading` |
| **Slider** | Range input | `components/slider.md` | `min`, `max`, `step`, `showTooltip` |
| **Form** | Form wrapper with validation | `components/form.md` | Uses `react-hook-form` |
| **Label** | Accessible field labels | Coming soon | `htmlFor`, `required` |
| **Toggle** | Binary toggle button | Coming soon | `pressed`, `variant` |
| **ToggleGroup** | Multiple toggles as group | Coming soon | `type`, `value`, `onValueChange` |
| **InputOTP** | One-time password entry | Coming soon | `maxLength`, slots |

### Overlays

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Dialog** | Modal overlay | `components/dialog.md` | `open`, `onOpenChange`, `size` |
| **AlertDialog** | Confirmation modal | `components/alert-dialog.md` | Compound API (Action, Cancel) |
| **Drawer** | Mobile bottom sheet | `components/drawer.md` | `direction`, glass styling |
| **Sheet** | Slide-in side panel | `components/sheet.md` | `side`, `size` |
| **Popover** | Floating content | `components/popover.md` | `open`, `onOpenChange` |
| **HoverCard** | Hover-triggered content | Coming soon | `openDelay`, `closeDelay` |
| **Tooltip** | Contextual hints | `components/tooltip.md` | `side`, `delayDuration` |
| **DropdownMenu** | Action menu | `components/dropdown-menu.md` | Compound API (Item, Separator) |
| **ContextMenu** | Right-click menu | Coming soon | Same API as DropdownMenu |

### Feedback

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Alert** | Inline messages | `components/alert.md` | `variant`, `title`, `closable` |
| **Sonner** | Toast notifications | `components/toast.md` | Imperative API via `toast()` |
| **Progress** | Loading indicators | `components/progress.md` | `value`, `variant`, `animated` |
| **Skeleton** | Loading placeholders | Coming soon | `variant`, `lines`, `animated` |

### Navigation

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Tabs** | Tabbed interface | `components/tabs.md` | `variant`, `value`, `onValueChange` |
| **Breadcrumb** | Navigation trail | Coming soon | Compound API (Item, Link, Separator) |
| **NavigationMenu** | Site navigation | Coming soon | Radix NavigationMenu |
| **Menubar** | App menu bar | Coming soon | Compound API |
| **Pagination** | Page controls | Coming soon | `total`, `page`, `pageSize` |
| **Sidebar** | Collapsible nav | `components/sidebar.md` | `collapsible`, `defaultOpen` |

### Data Display

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Table** | Data tables | `components/table.md` | `striped`, `hoverable`, `stickyHeader` |
| **Accordion** | Expandable sections | `components/accordion.md` | `type`, `variant`, `collapsible` |
| **Collapsible** | Show/hide content | Coming soon | `open`, `onOpenChange` |
| **Calendar** | Date picker | `components/calendar.md` | Uses `react-day-picker` |
| **Carousel** | Image carousel | `components/carousel.md` | Uses `embla-carousel-react` |
| **Chart** | Data visualization | Coming soon | Uses `recharts` |
| **Command** | Command palette | `components/command.md` | Cmd+K pattern |

### Layout

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Card** | Content container | `components/card.md` | `variant`, `hoverable`, `padding` |
| **Separator** | Divider line | Coming soon | `variant`, `orientation`, `label` |
| **AspectRatio** | Maintains aspect ratio | Coming soon | `ratio` |
| **ScrollArea** | Custom scrollbar | Coming soon | Radix ScrollArea |
| **Resizable** | Resizable panels | Coming soon | `react-resizable-panels` |

### Utility

| Component | Purpose | File | Key Props |
|-----------|---------|------|-----------|
| **Avatar** | User avatar | `components/avatar.md` | `size`, `ring`, `status`, `shape` |
| **Badge** | Status labels | `components/badge.md` | `variant`, `size`, `dot`, `removable` |

---

## Common Usage Patterns

### 1. Form with Validation

The most common pattern combines `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`, and `Input`:

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  Input,
  Button
} from '@baole/ui'

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle submission
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This will be your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" variant="gradient" fullWidth>
          Create Account
        </Button>
      </form>
    </Form>
  )
}
```

### 2. Dialog Triggered by Button

Standard modal pattern using `Dialog`, `DialogTrigger`, `DialogContent`:

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input,
  Label
} from '@baole/ui'
import { Plus } from 'lucide-react'
import { useState } from 'react'

function CreateProjectDialog() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  const handleCreate = () => {
    // Create logic
    console.log('Creating project:', name)
    setOpen(false)
    setName('')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient" leftIcon={<Plus size={16} />}>
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Give your project a name to get started.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Label htmlFor="project-name">Project Name</Label>
          <Input
            id="project-name"
            placeholder="My Awesome Project"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2"
          />
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="gradient" onClick={handleCreate}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### 3. Toast Notifications (Imperative API)

Use `toast` from `@baole/ui` for temporary feedback:

```tsx
import { Button, toast } from '@baole/ui'

function NotificationExamples() {
  return (
    <div className="flex gap-2">
      {/* Success */}
      <Button
        variant="success"
        onClick={() => toast.success('Changes saved successfully!')}
      >
        Save
      </Button>

      {/* Error */}
      <Button
        variant="destructive"
        onClick={() => toast.error('Failed to delete item')}
      >
        Delete
      </Button>

      {/* Info */}
      <Button
        variant="outline"
        onClick={() => toast.info('New update available')}
      >
        Info
      </Button>

      {/* Warning */}
      <Button
        variant="secondary"
        onClick={() => toast.warning('Your session will expire soon')}
      >
        Warning
      </Button>

      {/* Promise-based (loading → success/error) */}
      <Button
        variant="gradient"
        onClick={() => {
          toast.promise(
            fetch('/api/data').then(res => res.json()),
            {
              loading: 'Loading data...',
              success: (data) => `Loaded ${data.count} items`,
              error: 'Failed to load data',
            }
          )
        }}
      >
        Load Data
      </Button>

      {/* Custom duration */}
      <Button
        onClick={() => {
          toast('This will disappear in 10 seconds', {
            duration: 10000,
          })
        }}
      >
        Long Toast
      </Button>

      {/* With action button */}
      <Button
        onClick={() => {
          toast('File deleted', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }}
      >
        Delete with Undo
      </Button>
    </div>
  )
}

// Don't forget to include Toaster in your root layout
import { Toaster } from '@baole/ui'

function RootLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
```

### 4. Command Palette Pattern

Implement Cmd+K search using `Command`:

```tsx
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@baole/ui'
import { useEffect, useState } from 'react'
import { Search, FileText, Settings, User } from 'lucide-react'

function CommandPaletteExample() {
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
    <>
      <p className="text-sm text-white/50">
        Press{' '}
        <kbd className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded">
          ⌘K
        </kbd>{' '}
        to open command palette
      </p>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => console.log('Search')}>
              <Search className="mr-2 h-4 w-4" />
              <span>Search files</span>
            </CommandItem>
            <CommandItem onSelect={() => console.log('New Document')}>
              <FileText className="mr-2 h-4 w-4" />
              <span>New document</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => console.log('Profile')}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => console.log('Settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
```

---

## Component Composition Examples

### Card + Badge + Button

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Button } from '@baole/ui'
import { ArrowRight } from 'lucide-react'

<Card variant="glass" hoverable>
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Premium Plan</CardTitle>
      <Badge variant="gradient">Popular</Badge>
    </div>
    <CardDescription>
      All features included for professional teams
    </CardDescription>
  </CardHeader>
  <CardContent className="pt-4">
    <div className="text-4xl font-bold">
      $29<span className="text-lg text-white/60">/month</span>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="gradient" fullWidth rightIcon={<ArrowRight size={16} />}>
      Get Started
    </Button>
  </CardFooter>
</Card>
```

### Table + Badge + Button

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge, Button } from '@baole/ui'

<Table striped hoverable>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Project Alpha</TableCell>
      <TableCell>
        <Badge variant="success" dot>Active</Badge>
      </TableCell>
      <TableCell>
        <Button size="sm" variant="ghost">Edit</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Next Steps

1. Read `design-tokens/colors.md` for color system
2. Read `design-tokens/typography.md` for text styles
3. Read `design-tokens/spacing.md` for layout
4. Explore individual component `.md` files for detailed APIs
