# @baole/ui Component Library

> A comprehensive, production-ready React component library with 75+ components featuring dark-gradient design system, glassmorphism effects, and purple-fuchsia-pink gradient accents.

## 🎨 Design Philosophy

The @baole/ui library embodies the **baole.space aesthetic** with:
- **Dark-first color palette** with sophisticated gradients
- **Glassmorphism effects** using backdrop-blur for depth
- **Purple-fuchsia-pink gradient accents** for primary interactions
- **9 gradient presets** for diverse visual treatments
- **Glow and shadow tokens** for elevation and focus states
- **Accessible by default** using Radix UI primitives

## 📦 Component Inventory (75+ Components)

### Core Components (3)
- **Button** - Multiple variants (solid, outline, ghost, gradient, link)
- **Card** - Container with header, content, footer sections
- **Badge** - Status indicators and labels

### Form Components (10)
- **Input** - Text input with variants
- **Textarea** - Multi-line text input
- **Checkbox** - Binary selection
- **Switch** - Toggle control
- **RadioGroup** - Single selection from options
- **Label** - Form field labels
- **Slider** - Range input
- **Select** - Dropdown selection
- **InputOTP** - One-time password input
- **Form** - Form container with validation support

### Advanced Input Components (4)
- **DatePicker** - Single date selection with calendar
- **DateRangePicker** - Date range selection
- **ColorPicker** - Color selection with presets
- **Rating** - Star rating input
- **Upload** - File upload with drag-drop

### Data Entry Components (4)
- **AutoComplete** - Input with suggestions
- **Mentions** - @mention support in textarea
- **Cascader** - Multi-level dropdown selection
- **Transfer** - Dual-list selection with search

### Feedback Components (8)
- **Alert** - Contextual alerts (info, success, warning, error)
- **Progress** - Progress indicators with variants
- **Skeleton** - Loading placeholders
- **Spinner** - Loading spinner
- **Toast** - Temporary notifications (via Sonner)
- **EmptyState** - Empty state illustrations
- **Result** - Result pages (success, error, etc.)
- **Notification** - Persistent notifications

### Overlay Components (9)
- **Dialog** - Modal dialog
- **AlertDialog** - Confirmation dialog
- **Sheet** - Bottom sheet/drawer
- **Drawer** - Side drawer (enhanced)
- **Modal** - Alternative modal implementation
- **Popover** - Floating content
- **HoverCard** - Hover-triggered card
- **Tooltip** - Hover hints
- **Command** - Command palette (⌘K)

### Navigation Components (8)
- **Tabs** - Tabbed interface
- **Accordion** - Collapsible sections
- **DropdownMenu** - Dropdown with nested menus
- **ContextMenu** - Right-click context menu
- **NavigationMenu** - Mega menu navigation
- **Menubar** - Application menu bar
- **Breadcrumb** - Breadcrumb navigation
- **Pagination** - Page navigation

### Data Display Components (12)
- **Avatar** - User avatars with sizes
- **Table** - Data table with sorting
- **Calendar** - Full calendar component
- **Carousel** - Image/content carousel
- **Image** - Image with fallback and loading
- **Statistic** - Statistical number display
- **List** - List with items
- **Descriptions** - Key-value descriptions
- **Timeline** - Vertical timeline
- **Stepper** - Step-by-step progress
- **Tag** - Labeled badges
- **Tree** - Hierarchical tree view

### Layout Components (12)
- **Layout** - App layout container
- **LayoutHeader** - Header section
- **LayoutSider** - Sidebar section
- **LayoutContent** - Content section
- **LayoutFooter** - Footer section
- **Separator** - Visual divider
- **Divider** - Divider with text
- **ScrollArea** - Custom scrollable area
- **AspectRatio** - Aspect ratio container
- **Resizable** - Resizable panels
- **Container** - Responsive container
- **Stack** - Vertical/horizontal stack
- **Grid** - Grid layout system
- **Space** - Spacing between elements
- **Affix** - Fixed positioning
- **BackTop** - Scroll to top button

### Typography Components (4)
- **Heading** - Headings (h1-h6) with gradients
- **Text** - Paragraph text with variants
- **Code** - Inline and block code
- **Kbd** - Keyboard key display

### Utility Components (5)
- **Toggle** - Toggle button
- **ToggleGroup** - Toggle button group
- **Collapsible** - Collapsible content
- **Chip** - Interactive chip/tag
- **Segmented** - Segmented control

### System Components (1)
- **ThemeProvider** - Theme management (dark/light/system)

## 🚀 Quick Start

### Installation

```bash
# Install the library (when published)
npm install @baole/ui
# or
pnpm add @baole/ui
# or
yarn add @baole/ui
```

### Basic Usage

```tsx
import { Button, Card, Input } from '@baole/ui';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your name" />
      </Card.Content>
      <Card.Footer>
        <Button variant="gradient">Submit</Button>
      </Card.Footer>
    </Card>
  );
}
```

## 🎯 Design Tokens

### Colors
```css
--color-bg: Dark background
--color-bg-secondary: Secondary background
--color-bg-elevated: Elevated surface
--color-bg-glass: Glassmorphic background
--color-bg-glass-hover: Hover state
--color-bg-overlay: Overlay backdrop

--color-text: Primary text
--color-text-secondary: Secondary text
--color-text-muted: Muted text
--color-text-placeholder: Placeholder text

--color-primary: Primary brand color
--color-border: Border color
--color-border-strong: Emphasized border
```

### Gradients
```css
--gradient-primary: Purple to fuchsia
--gradient-secondary: Pink to purple
--gradient-success: Green gradient
--gradient-warning: Yellow gradient
--gradient-error: Red gradient
```

### Effects
```css
--blur-glass: 8px - Glassmorphism blur
--blur-heavy: 16px - Heavy blur
--shadow-glass: Subtle glass shadow
--shadow-elevated: Elevated shadow
--glow-primary: Primary color glow
```

## 📖 Component API Examples

### Button

```tsx
<Button variant="gradient" size="lg" disabled={false}>
  Click Me
</Button>

// Variants: solid | outline | ghost | gradient | link
// Sizes: sm | md | lg | icon
```

### Form with Validation

```tsx
<Form errors={errors} touched={touched} onSubmit={handleSubmit}>
  <FormItem label="Email" name="email" required>
    <Input type="email" placeholder="your@email.com" />
  </FormItem>
  
  <FormItem label="Password" name="password" required>
    <Input type="password" />
  </FormItem>
  
  <FormActions>
    <Button type="submit" variant="gradient">Sign In</Button>
  </FormActions>
</Form>
```

### Data Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>
          <Badge variant="success">Active</Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Dialog

```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="gradient" onClick={handleConfirm}>
        Confirm
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## 🎨 Theming

```tsx
import { ThemeProvider } from '@baole/ui';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  );
}

// Use the theme hook
import { useTheme } from '@baole/ui';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </Button>
  );
}
```

## 🏗️ Architecture

### TypeScript-First
- **Zero `any` types** - Strict typing throughout
- **Comprehensive prop interfaces** - Full IntelliSense support
- **Generic utilities** - Type-safe helper functions

### Accessibility
- **ARIA attributes** - Proper semantic HTML
- **Keyboard navigation** - Full keyboard support
- **Screen reader support** - Descriptive labels
- **Focus management** - Visible focus indicators

### Performance
- **Tree-shakeable** - Import only what you need
- **Optimized bundle** - Minimal runtime overhead
- **React 18+** - Concurrent features support
- **Server Components ready** - RSC compatible

### Styling
- **Tailwind CSS v4** - Utility-first styling
- **CSS Custom Properties** - Dynamic theming
- **Class Variance Authority** - Type-safe variant management
- **Radix UI Primitives** - Unstyled accessible components

## 📚 Advanced Patterns

### Compound Components

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Controlled Components

```tsx
const [value, setValue] = useState('');

<Input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```

### Render Props

```tsx
<Transfer
  dataSource={data}
  render={(item) => (
    <div>
      <Avatar src={item.avatar} />
      <span>{item.name}</span>
    </div>
  )}
/>
```

## 🔧 Customization

### Override Styles

```tsx
<Button className="custom-class hover:scale-105">
  Custom Button
</Button>
```

### Extend Variants

```tsx
import { buttonVariants } from '@baole/ui';

const myButton = buttonVariants({
  variant: 'gradient',
  size: 'lg',
});
```

### Custom Theme Tokens

```css
:root {
  --color-primary: #your-color;
  --gradient-primary: linear-gradient(to right, #start, #end);
}
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for:
- Code standards
- Component structure
- Testing requirements
- Documentation format

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Resources

- **Documentation**: [docs.baole.space]
- **GitHub**: [github.com/baole/ui]
- **Storybook**: [storybook.baole.space]
- **Figma**: [figma.com/@baole-ui]

---

**Built with ❤️ for the modern web**
