# Complete Component Guidelines - Overlay Components (Remaining 7)

---

# AlertDialog

## Purpose
Modal dialog for important confirmations and destructive actions requiring explicit user consent.

## When to Use
- Delete confirmations
- Destructive actions
- Critical warnings
- Cannot-undo operations

## Installation
```typescript
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@baole/ui'
```

## Examples

### Basic AlertDialog
```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline" className="text-red-500">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your data.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Controlled State
```tsx
const [open, setOpen] = useState(false)
return (
  <AlertDialog open={open} onOpenChange={setOpen}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Confirm Action</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={() => {
          handleAction()
          setOpen(false)
        }}>
          Confirm
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
)
```

---

# Sheet

## Purpose
Slide-in panels from screen edges for forms, filters, or secondary content.

## When to Use
- Mobile navigation menus
- Filters and settings
- Form panels
- Detail views

## Installation
```typescript
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@baole/ui'
```

## Examples

### Basic Sheet
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Description here</SheetDescription>
    </SheetHeader>
    <div className="py-4">Content</div>
    <SheetFooter>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### Side Options
```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="left | right | top | bottom">
    Content
  </SheetContent>
</Sheet>
```

### Filter Sheet
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Filter size={16} className="mr-2" />
      Filters
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
    </SheetHeader>
    <div className="space-y-4 py-4">
      <FormItem label="Category">
        <Select>{/* categories */}</Select>
      </FormItem>
      <FormItem label="Price Range">
        <Slider defaultValue={[0, 100]} />
      </FormItem>
    </div>
    <SheetFooter>
      <Button variant="outline">Reset</Button>
      <Button>Apply Filters</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

---

# Drawer

## Purpose
Bottom drawer for mobile-first interactions and progressive disclosure.

## When to Use
- Mobile bottom sheets
- Action menus on mobile
- Mobile-optimized forms
- Quick actions

## Installation
```typescript
import { Drawer } from '@baole/ui'
```

## Examples

### Basic Drawer
```tsx
const [open, setOpen] = useState(false)
return (
  <Drawer open={open} onOpenChange={setOpen}>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content</div>
    </DrawerContent>
  </Drawer>
)
```

---

# Popover

## Purpose
Floating panels for contextual content triggered by user interaction.

## When to Use
- Date pickers
- Color pickers
- Small forms
- Context-specific info

## Installation
```typescript
import { Popover, PopoverTrigger, PopoverContent } from '@baole/ui'
```

## Examples

### Basic Popover
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Popover Title</h4>
      <p className="text-sm">Content goes here</p>
    </div>
  </PopoverContent>
</Popover>
```

### Position Control
```tsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent
    side="top | right | bottom | left"
    align="start | center | end"
  >
    Content
  </PopoverContent>
</Popover>
```

---

# HoverCard

## Purpose
Display rich content on hover with delay, perfect for previews and additional context.

## When to Use
- User profile previews
- Link previews
- Additional context
- Hover details

## Installation
```typescript
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@baole/ui'
```

## Examples

### Basic HoverCard
```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-3">
      <Avatar src="/avatar.jpg" fallback="JD" />
      <div>
        <h4 className="font-medium">John Doe</h4>
        <p className="text-sm text-[var(--color-text-muted)]">
          Software Developer
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

---

# DropdownMenu

## Purpose
Contextual menus for actions, navigation, and settings.

## When to Use
- User account menus
- Action menus (more options)
- Context-specific actions
- Navigation menus

## Installation
```typescript
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
} from '@baole/ui'
```

## Examples

### Basic Menu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Icons
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreVertical size={20} />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Edit size={16} className="mr-2" />
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Copy size={16} className="mr-2" />
      Duplicate
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-500">
      <Trash2 size={16} className="mr-2" />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### User Menu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="gap-2">
      <Avatar src="/user.jpg" fallback="JD" className="h-8 w-8" />
      John Doe
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

# ContextMenu

## Purpose
Right-click menus for context-specific actions.

## When to Use
- Right-click actions
- File/folder actions
- Canvas/editor tools
- Desktop-like interactions

## Installation
```typescript
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '@baole/ui'
```

## Examples

### Basic Context Menu
```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div className="border rounded-lg p-8 text-center">
      Right click me
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

---

# Command

## Purpose
Command palette for keyboard-driven navigation and search.

## When to Use
- Quick search/navigation (⌘K)
- Command palettes
- Global search
- Keyboard shortcuts

## Installation
```typescript
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@baole/ui'
```

## Examples

### Basic Command
```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Dashboard</CommandItem>
      <CommandItem>Projects</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Command Dialog (⌘K)
```tsx
function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => router.push('/dashboard')}>
            Dashboard
          </CommandItem>
          <CommandItem onSelect={() => router.push('/projects')}>
            Projects
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
```

---

**Related Components:**
- [Dialog](./dialog.md) - For complex modals
- [Tooltip](./tooltip.md) - For simple hints
- [Button](./button.md) - Menu triggers
