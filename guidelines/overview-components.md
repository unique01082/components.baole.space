# @baolq/ui Component Overview

Complete reference table for all 91+ components in the @baolq/ui design system.

## Component Categorization

### Inputs & Forms

| Component       | Purpose                                | File                         | Key Props                                             |
| --------------- | -------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| **Button**      | Primary action trigger with 7 variants | `components/button.md`       | `variant`, `size`, `loading`, `leftIcon`, `rightIcon` |
| **Input**       | Text input with validation states      | `components/input.md`        | `status`, `label`, `error`, `leftIcon`, `clearable`   |
| **Textarea**    | Multi-line text input                  | `components/textarea.md`     | `autoResize`, `maxLength`, `showCount`                |
| **Select**      | Dropdown selection with search         | `components/select.md`       | Compound API (Trigger, Content, Item)                 |
| **Checkbox**    | Binary choice with indeterminate       | `components/checkbox.md`     | `checked`, `indeterminate`, `label`                   |
| **RadioGroup**  | Mutually exclusive options             | `components/radio-group.md`  | `value`, `onValueChange`, `direction`                 |
| **Switch**      | Toggle control                         | `components/switch.md`       | `checked`, `onCheckedChange`, `loading`               |
| **Slider**      | Range input                            | `components/slider.md`       | `min`, `max`, `step`, `showTooltip`                   |
| **Form**        | Form wrapper with validation           | `components/form.md`         | Uses `react-hook-form`                                |
| **Label**       | Accessible field labels                | `components/label.md`        | `htmlFor`, `required`                                 |
| **Toggle**      | Binary toggle button                   | `components/toggle.md`       | `pressed`, `variant`                                  |
| **ToggleGroup** | Multiple toggles as group              | `components/toggle-group.md` | `type`, `value`, `onValueChange`                      |
| **InputOTP**    | One-time password entry                | `components/input-otp.md`    | `maxLength`, slots                                    |

### Advanced Inputs

| Component           | Purpose                                          | File                              | Key Props                                   |
| ------------------- | ------------------------------------------------ | --------------------------------- | ------------------------------------------- |
| **DatePicker**      | Date selection input                             | `components/date-picker.md`       | `value`, `onChange`, `placeholder`          |
| **DateRangePicker** | Date range selection                             | `components/date-range-picker.md` | `value`, `onChange`, date range             |
| **TimePicker**      | Time selection input                             | `components/time-picker.md`       | `value`, `onChange`, `format`               |
| **AutoComplete**    | Text input with suggestions                      | `components/auto-complete.md`     | `options`, `onSearch`, `filterOption`       |
| **InputNumber**     | Numeric input with controls                      | `components/input-number.md`      | `min`, `max`, `step`, `precision`           |
| **ColorPicker**     | Color selection input                            | `components/color-picker.md`      | `value`, `onChange`, `format`               |
| **Cascader**        | Hierarchical dropdown selection                  | `components/cascader.md`          | `options`, `value`, `onChange`, `multiple`  |
| **Segmented**       | Segmented control for mutually exclusive options | `components/segmented.md`         | `options`, `value`, `onChange`              |
| **Rating**          | Star/custom rating input                         | `components/rating.md`            | `value`, `max`, `allowHalf`, `onChange`     |
| **Mentions**        | @mention text input                              | `components/mentions.md`          | `options`, `prefix`, `onSearch`             |
| **Upload**          | File upload with drag-and-drop                   | `components/upload.md`            | `accept`, `multiple`, `maxSize`, `listType` |

### Overlays

| Component        | Purpose                      | File                          | Key Props                             |
| ---------------- | ---------------------------- | ----------------------------- | ------------------------------------- |
| **Dialog**       | Modal overlay                | `components/dialog.md`        | `open`, `onOpenChange`, `size`        |
| **AlertDialog**  | Confirmation modal           | `components/alert-dialog.md`  | Compound API (Action, Cancel)         |
| **Modal**        | Flexible overlay with footer | `components/modal.md`         | `open`, `width`, `centered`, `footer` |
| **Drawer**       | Mobile bottom sheet          | `components/drawer.md`        | `direction`, glass styling            |
| **Sheet**        | Slide-in side panel          | `components/sheet.md`         | `side`, `size`                        |
| **Popover**      | Floating content             | `components/popover.md`       | `open`, `onOpenChange`                |
| **HoverCard**    | Hover-triggered content      | `components/hover-card.md`    | `openDelay`, `closeDelay`             |
| **Tooltip**      | Contextual hints             | `components/tooltip.md`       | `side`, `delayDuration`               |
| **DropdownMenu** | Action menu                  | `components/dropdown-menu.md` | Compound API (Item, Separator)        |
| **ContextMenu**  | Right-click menu             | `components/context-menu.md`  | Compound API (Trigger, Item, Sub)     |

### Feedback

| Component        | Purpose                        | File                         | Key Props                                   |
| ---------------- | ------------------------------ | ---------------------------- | ------------------------------------------- |
| **Alert**        | Inline messages                | `components/alert.md`        | `variant`, `title`, `closable`              |
| **Sonner**       | Toast notifications            | `components/toast.md`        | Imperative API via `toast()`                |
| **Progress**     | Loading indicators             | `components/progress.md`     | `value`, `variant`, `animated`              |
| **Skeleton**     | Loading placeholders           | `components/skeleton.md`     | `variant`, `lines`, `animated`              |
| **Spinner**      | Animated loading indicator     | `components/spinner.md`      | `size`, `variant`                           |
| **Message**      | Global transient toast message | `components/message.md`      | `MessageManager.success/error/warning/info` |
| **Notification** | Rich persistent notification   | `components/notification.md` | `title`, `description`, `type`, `duration`  |
| **Result**       | Terminal process state         | `components/result.md`       | `status`, `title`, `subtitle`, `extra`      |
| **EmptyState**   | Empty content placeholder      | `components/empty-state.md`  | `icon`, `title`, `description`, `action`    |
| **Tour**         | Guided walkthrough             | `components/tour.md`         | `steps`, `open`, `current`, `onFinish`      |
| **Watermark**    | Content watermark overlay      | `components/watermark.md`    | `content`, `rotate`, `font`, `image`        |

### Navigation

| Component          | Purpose          | File                            | Key Props                               |
| ------------------ | ---------------- | ------------------------------- | --------------------------------------- |
| **Tabs**           | Tabbed interface | `components/tabs.md`            | `variant`, `value`, `onValueChange`     |
| **Breadcrumb**     | Navigation trail | `components/breadcrumb.md`      | Compound API (Item, Link, Separator)    |
| **NavigationMenu** | Site navigation  | `components/navigation-menu.md` | Radix NavigationMenu primitives         |
| **Menubar**        | App menu bar     | `components/menubar.md`         | Compound API (Menu, Item, Sub)          |
| **Pagination**     | Page controls    | `components/pagination.md`      | `total`, `page`, `pageSize`, `onChange` |
| **Sidebar**        | Collapsible nav  | `components/sidebar.md`         | `collapsible`, `defaultOpen`            |

### Navigation Utilities

| Component   | Purpose                      | File                    | Key Props                             |
| ----------- | ---------------------------- | ----------------------- | ------------------------------------- |
| **Anchor**  | In-page scroll navigation    | `components/anchor.md`  | `links`, `activeLink`, `offsetTop`    |
| **Steps**   | Multi-step process indicator | `components/steps.md`   | `items`, `current`, `status`, `type`  |
| **Stepper** | Interactive step wizard      | `components/stepper.md` | `steps`, `currentStep`, `orientation` |

### Data Display

| Component        | Purpose                  | File                         | Key Props                                   |
| ---------------- | ------------------------ | ---------------------------- | ------------------------------------------- |
| **Table**        | Data tables              | `components/table.md`        | `striped`, `hoverable`, `stickyHeader`      |
| **Accordion**    | Expandable sections      | `components/accordion.md`    | `type`, `variant`, `collapsible`            |
| **Collapsible**  | Show/hide content        | `components/collapsible.md`  | `open`, `onOpenChange`                      |
| **Calendar**     | Date picker calendar     | `components/calendar.md`     | `mode`, `selected`, `onSelect`, `disabled`  |
| **Carousel**     | Image/content slider     | `components/carousel.md`     | `opts`, `orientation`, subcomponents        |
| **Command**      | Command palette          | `components/command.md`      | Cmd+K pattern, `CommandDialog`              |
| **List**         | Structured item list     | `components/list.md`         | `items`, `bordered`, `hoverable`, `divided` |
| **Descriptions** | Key-value detail panel   | `components/descriptions.md` | `items`, `columns`, `bordered`, `layout`    |
| **Timeline**     | Chronological event list | `components/timeline.md`     | `items`, `variant`                          |

### Advanced Data Display

| Component      | Purpose                        | File                        | Key Props                                |
| -------------- | ------------------------------ | --------------------------- | ---------------------------------------- |
| **Tree**       | Hierarchical tree view         | `components/tree.md`        | `treeData`, `checkable`, `expandedKeys`  |
| **TreeSelect** | Hierarchical dropdown selector | `components/tree-select.md` | `treeData`, `value`, `multiple`          |
| **Transfer**   | Dual-panel item mover          | `components/transfer.md`    | `dataSource`, `targetKeys`, `showSearch` |

### Data Visualization

| Component     | Purpose                  | File                      | Key Props                                 |
| ------------- | ------------------------ | ------------------------- | ----------------------------------------- |
| **Chart**     | Line/Bar/Area/Pie charts | `components/chart.md`     | `data`, `xKey`, `lines/bars/areas/slices` |
| **Statistic** | Key metric with trend    | `components/statistic.md` | `title`, `value`, `trend`, `trendValue`   |
| **QRCode**    | QR code generator        | `components/qrcode.md`    | `value`, `size`, `level`, `imageSettings` |

### Layout

| Component       | Purpose                | File                         | Key Props                         |
| --------------- | ---------------------- | ---------------------------- | --------------------------------- |
| **Card**        | Content container      | `components/card.md`         | `variant`, `hoverable`, `padding` |
| **Separator**   | Divider line           | `components/separator.md`    | `orientation`                     |
| **AspectRatio** | Maintains aspect ratio | `components/aspect-ratio.md` | `ratio`                           |
| **ScrollArea**  | Custom scrollbar       | `components/scroll-area.md`  | Radix ScrollArea                  |
| **Resizable**   | Resizable panels       | `components/resizable.md`    | `react-resizable-panels`          |

### Layout Utilities

| Component       | Purpose                      | File                         | Key Props                                      |
| --------------- | ---------------------------- | ---------------------------- | ---------------------------------------------- |
| **Container**   | Responsive centered wrapper  | `components/container.md`    | `size` (sm/md/lg/xl/full)                      |
| **Grid**        | CSS grid layout              | `components/grid.md`         | `cols`, `gap`; `GridItem` with `span`          |
| **Stack**       | Flexbox layout primitive     | `components/stack.md`        | `direction`, `spacing`, `align`, `justify`     |
| **Space**       | Inline spacing with split    | `components/space.md`        | `direction`, `size`, `split`, `wrap`           |
| **Layout**      | App shell structure          | `components/layout.md`       | `LayoutHeader`, `LayoutSider`, `LayoutContent` |
| **Divider**     | Section separator with label | `components/divider.md`      | `orientation`, `variant`, `label`              |
| **Image**       | Image with fallback          | `components/image.md`        | `src`, `alt`, `fallback`, `aspectRatio`        |
| **FloatButton** | Fixed floating action button | `components/float-button.md` | `icon`, `tooltip`, `FloatButtonGroup`          |
| **BackTop**     | Scroll-to-top button         | `components/back-top.md`     | `visibilityHeight`, `target`                   |
| **Affix**       | Sticky element wrapper       | `components/affix.md`        | `offsetTop`, `offsetBottom`, `onChange`        |
| **Anchor**      | In-page jump navigation      | `components/anchor.md`       | `links`, `activeLink`, `offsetTop`             |

### Utility

| Component      | Purpose                   | File                       | Key Props                                                   |
| -------------- | ------------------------- | -------------------------- | ----------------------------------------------------------- |
| **Avatar**     | User avatar               | `components/avatar.md`     | `size`, `ring`, `status`, `shape`                           |
| **Badge**      | Status labels             | `components/badge.md`      | `variant`, `size`, `dot`, `removable`                       |
| **Chip**       | Interactive filter label  | `components/chip.md`       | `variant`, `clickable`, `onRemove`                          |
| **Tag**        | Static category label     | `components/tag.md`        | `variant`, `closable`, `icon`                               |
| **Kbd**        | Keyboard key display      | `components/kbd.md`        | `size`                                                      |
| **Code**       | Inline/block code display | `components/code.md`       | `block`, `language`                                         |
| **Typography** | Semantic heading and text | `components/typography.md` | `Heading` (level, gradient), `Text` (size, weight, variant) |

---

## Common Usage Patterns

### 1. Form with Validation

The most common pattern combines `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`, and `Input`:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  Input,
  Button,
} from "@baolq/ui";

const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle submission
    console.log(values);
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
  );
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
  Label,
} from "@baolq/ui";
import { Plus } from "lucide-react";
import { useState } from "react";

function CreateProjectDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleCreate = () => {
    // Create logic
    console.log("Creating project:", name);
    setOpen(false);
    setName("");
  };

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
  );
}
```

### 3. Toast Notifications (Imperative API)

Use `toast` from `@baolq/ui` for temporary feedback:

```tsx
import { Button, toast } from "@baolq/ui";

function NotificationExamples() {
  return (
    <div className="flex gap-2">
      {/* Success */}
      <Button
        variant="success"
        onClick={() => toast.success("Changes saved successfully!")}
      >
        Save
      </Button>

      {/* Error */}
      <Button
        variant="destructive"
        onClick={() => toast.error("Failed to delete item")}
      >
        Delete
      </Button>

      {/* Info */}
      <Button
        variant="outline"
        onClick={() => toast.info("New update available")}
      >
        Info
      </Button>

      {/* Warning */}
      <Button
        variant="secondary"
        onClick={() => toast.warning("Your session will expire soon")}
      >
        Warning
      </Button>

      {/* Promise-based (loading → success/error) */}
      <Button
        variant="gradient"
        onClick={() => {
          toast.promise(
            fetch("/api/data").then((res) => res.json()),
            {
              loading: "Loading data...",
              success: (data) => `Loaded ${data.count} items`,
              error: "Failed to load data",
            },
          );
        }}
      >
        Load Data
      </Button>

      {/* Custom duration */}
      <Button
        onClick={() => {
          toast("This will disappear in 10 seconds", {
            duration: 10000,
          });
        }}
      >
        Long Toast
      </Button>

      {/* With action button */}
      <Button
        onClick={() => {
          toast("File deleted", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }}
      >
        Delete with Undo
      </Button>
    </div>
  );
}

// Don't forget to include Toaster in your root layout
import { Toaster } from "@baolq/ui";

function RootLayout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
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
} from "@baolq/ui";
import { useEffect, useState } from "react";
import { Search, FileText, Settings, User } from "lucide-react";

function CommandPaletteExample() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-sm text-white/50">
        Press{" "}
        <kbd className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded">
          ⌘K
        </kbd>{" "}
        to open command palette
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => console.log("Search")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Search files</span>
            </CommandItem>
            <CommandItem onSelect={() => console.log("New Document")}>
              <FileText className="mr-2 h-4 w-4" />
              <span>New document</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => console.log("Profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => console.log("Settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
```

---

## Component Composition Examples

### Card + Badge + Button

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
} from "@baolq/ui";
import { ArrowRight } from "lucide-react";

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
</Card>;
```

### Table + Badge + Button

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
  Button,
} from "@baolq/ui";

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
        <Badge variant="success" dot>
          Active
        </Badge>
      </TableCell>
      <TableCell>
        <Button size="sm" variant="ghost">
          Edit
        </Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

---

## Next Steps

1. Read `design-tokens/colors.md` for color system
2. Read `design-tokens/typography.md` for text styles
3. Read `design-tokens/spacing.md` for layout
4. Explore individual component `.md` files for detailed APIs
