# Complete Component Reference — All 87 Components

Quick reference guide for all @baole/ui components with basic examples.

---

## 🎨 Core Components (3)

### Button
```tsx
<Button variant="gradient">Click me</Button>
<Button variant="outline">Secondary</Button>
<Button size="sm" loading={true}>Loading...</Button>
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

### Badge
```tsx
<Badge>Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="error">Error</Badge>
```

---

## 📝 Form Components (11)

### Input
```tsx
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
```

### InputNumber
```tsx
<InputNumber min={0} max={100} step={1} defaultValue={50} />
```

### Textarea
```tsx
<Textarea rows={4} placeholder="Enter text..." />
```

### Checkbox
```tsx
<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms</Label>
```

### Switch
```tsx
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

### RadioGroup
```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="opt1" />
    <Label htmlFor="opt1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="opt2" />
    <Label htmlFor="opt2">Option 2</Label>
  </div>
</RadioGroup>
```

### Slider
```tsx
<Slider defaultValue={[50]} min={0} max={100} step={1} />
```

### Select
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### InputOTP
```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### Form
```tsx
<Form onSubmit={handleSubmit}>
  <FormItem label="Email" name="email" required>
    <Input type="email" />
  </FormItem>
  <Button type="submit">Submit</Button>
</Form>
```

### Label
```tsx
<Label htmlFor="email">Email Address</Label>
<Input id="email" />
```

---

## 📅 Picker Components (6)

### DatePicker
```tsx
<DatePicker selected={date} onSelect={setDate} />
```

### DateRangePicker
```tsx
<DateRangePicker from={startDate} to={endDate} onSelect={setDateRange} />
```

### TimePicker
```tsx
<TimePicker value={time} onChange={setTime} />
```

### ColorPicker
```tsx
<ColorPicker value={color} onChange={setColor} />
```

### Rating
```tsx
<Rating value={rating} onChange={setRating} max={5} />
```

### Upload
```tsx
<Upload
  accept="image/*"
  multiple
  maxSize={5 * 1024 * 1024}
  onUpload={handleUpload}
/>
```

---

## 💬 Feedback Components (9)

### Alert
```tsx
<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Changes saved successfully</AlertDescription>
</Alert>
```

### Toast (Sonner)
```tsx
import { toast } from 'sonner'

toast.success('Saved successfully')
toast.error('Failed to save')
toast.loading('Saving...')
```

### Message
```tsx
import { MessageManager } from '@baole/ui'

MessageManager.success('Operation successful')
MessageManager.error('Operation failed')
```

### Notification
```tsx
import { NotificationManager } from '@baole/ui'

NotificationManager.success({
  title: 'Success',
  description: 'Operation completed'
})
```

### Progress
```tsx
<Progress value={60} max={100} />
```

### Skeleton
```tsx
<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />
```

### Spinner
```tsx
<Spinner size="md" />
<Spinner size="lg" variant="primary" />
```

### EmptyState
```tsx
<EmptyState
  icon={<Inbox size={48} />}
  title="No items found"
  description="Try adjusting your filters"
/>
```

### Result
```tsx
<Result
  status="success"
  title="Payment Successful"
  subtitle="Your order has been confirmed"
/>
```

---

## 🎭 Overlay Components (9)

### Dialog
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <p>Content</p>
  </DialogContent>
</Dialog>
```

### AlertDialog
```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Sheet
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
    <p>Sheet content</p>
  </SheetContent>
</Sheet>
```

### Drawer
```tsx
<Drawer open={open} onOpenChange={setOpen}>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
    </DrawerHeader>
    <div className="p-4">Content</div>
  </DrawerContent>
</Drawer>
```

### Popover
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content</p>
  </PopoverContent>
</Popover>
```

### Tooltip
```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon"><Info size={20} /></Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Helpful information</p>
  </TooltipContent>
</Tooltip>
```

### HoverCard
```tsx
<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>
    <p>Additional information</p>
  </HoverCardContent>
</HoverCard>
```

### DropdownMenu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### ContextMenu
```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div className="border p-4">Right click me</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Command
```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem>Item 1</CommandItem>
      <CommandItem>Item 2</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

---

## 🧭 Navigation Components (12)

### Tabs
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Accordion
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Breadcrumb
```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Pagination
```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### NavigationMenu
```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products/a">Product A</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Menubar
```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### Sidebar
```tsx
<Sidebar collapsible>
  <SidebarHeader>Logo</SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarMenuItem href="/">Home</SidebarMenuItem>
      <SidebarMenuItem href="/dashboard">Dashboard</SidebarMenuItem>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>
```

### Steps
```tsx
<Steps
  current={1}
  items={[
    { title: 'Step 1', description: 'First step' },
    { title: 'Step 2', description: 'Second step' },
    { title: 'Step 3', description: 'Third step' },
  ]}
/>
```

### Anchor
```tsx
<Anchor
  links={[
    { href: '#section1', title: 'Section 1' },
    { href: '#section2', title: 'Section 2' },
  ]}
/>
```

### Segmented
```tsx
<Segmented
  options={['Daily', 'Weekly', 'Monthly']}
  value={selected}
  onChange={setSelected}
/>
```

---

## 📊 Data Display Components (14)

### Avatar
```tsx
<Avatar src="/user.jpg" alt="User" fallback="JD" />
```

### Table
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Calendar
```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>
```

### Carousel
```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Chart
```tsx
<LineChart
  data={data}
  xKey="month"
  lines={[
    { dataKey: 'value', name: 'Sales', color: '#a855f7' }
  ]}
/>

<BarChart
  data={data}
  xKey="category"
  bars={[{ dataKey: 'value' }]}
/>

<PieChart
  data={[
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
  ]}
/>
```

### Tree
```tsx
<Tree
  treeData={[
    {
      key: '1',
      title: 'Parent',
      children: [
        { key: '1-1', title: 'Child' }
      ]
    }
  ]}
/>
```

### List
```tsx
<List
  items={items}
  renderItem={(item) => (
    <div>{item.name}</div>
  )}
/>
```

### Timeline
```tsx
<Timeline
  items={[
    { title: 'Event 1', description: 'Description 1', time: '2024-01-01' },
    { title: 'Event 2', description: 'Description 2', time: '2024-01-02' },
  ]}
/>
```

### Statistic
```tsx
<Statistic
  title="Total Sales"
  value={12345}
  prefix="$"
  suffix="USD"
/>
```

### Descriptions
```tsx
<Descriptions
  items={[
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' },
  ]}
/>
```

### Tag
```tsx
<Tag>Default</Tag>
<Tag closable onClose={() => {}}>Closable</Tag>
```

### QRCode
```tsx
<QRCode value="https://example.com" size={200} />
```

### Image
```tsx
<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  fallback={<Skeleton className="h-[300px] w-[400px]" />}
/>
```

### Stepper
```tsx
<Stepper
  steps={[
    { label: 'Step 1', status: 'completed' },
    { label: 'Step 2', status: 'current' },
    { label: 'Step 3', status: 'pending' },
  ]}
/>
```

---

## 📐 Layout Components (14)

### Layout
```tsx
<Layout>
  <LayoutHeader>Header</LayoutHeader>
  <Layout>
    <LayoutSider>Sidebar</LayoutSider>
    <LayoutContent>Main content</LayoutContent>
  </Layout>
  <LayoutFooter>Footer</LayoutFooter>
</Layout>
```

### Container
```tsx
<Container maxWidth="lg">
  <p>Centered content</p>
</Container>
```

### Stack
```tsx
<Stack direction="vertical" spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

### Grid
```tsx
<Grid cols={3} gap={4}>
  <GridItem>1</GridItem>
  <GridItem>2</GridItem>
  <GridItem>3</GridItem>
</Grid>
```

### Space
```tsx
<Space size="md">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Space>
```

### Separator
```tsx
<Separator />
<Separator orientation="vertical" />
```

### Divider
```tsx
<Divider>Section Title</Divider>
```

### ScrollArea
```tsx
<ScrollArea className="h-[200px]">
  <div className="p-4">
    Long scrollable content
  </div>
</ScrollArea>
```

### AspectRatio
```tsx
<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="" className="object-cover" />
</AspectRatio>
```

### Resizable
```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
</ResizablePanelGroup>
```

### Affix
```tsx
<Affix offsetTop={10}>
  <Button>Sticky Button</Button>
</Affix>
```

### BackTop
```tsx
<BackTop visibilityHeight={400} />
```

### FloatButton
```tsx
<FloatButton icon={<Plus />} onClick={() => {}} />
<FloatButtonGroup>
  <FloatButton icon={<Settings />} />
  <FloatButton icon={<Help />} />
</FloatButtonGroup>
```

### Watermark
```tsx
<Watermark content="Confidential" rotate={-22}>
  <div className="p-8">Protected content</div>
</Watermark>
```

---

## 🔤 Typography Components (4)

### Heading
```tsx
<Heading level={1}>H1 Heading</Heading>
<Heading level={2} gradient>H2 with Gradient</Heading>
```

### Text
```tsx
<Text variant="body">Body text</Text>
<Text variant="caption">Caption text</Text>
```

### Code
```tsx
<Code>inline code</Code>
<Code block language="typescript">
  function example() {'{'}
    return "code block"
  {'}'}
</Code>
```

### Kbd
```tsx
<Kbd>⌘</Kbd> + <Kbd>K</Kbd>
```

---

## 🔧 Utility Components (5)

### Toggle
```tsx
<Toggle pressed={pressed} onPressedChange={setPressed}>
  <Bold size={16} />
</Toggle>
```

### ToggleGroup
```tsx
<ToggleGroup type="single" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

### Collapsible
```tsx
<Collapsible>
  <CollapsibleTrigger>Show more</CollapsibleTrigger>
  <CollapsibleContent>
    Hidden content
  </CollapsibleContent>
</Collapsible>
```

### Chip
```tsx
<Chip closable onClose={() => {}}>
  Removable chip
</Chip>
```

### Tour
```tsx
<Tour
  open={open}
  onClose={() => setOpen(false)}
  steps={[
    { title: 'Welcome', description: 'Start here', target: '#step1' },
    { title: 'Next', description: 'Then here', target: '#step2' },
  ]}
/>
```

---

## 🔤 Data Entry Components (5)

### AutoComplete
```tsx
<AutoComplete
  options={['Apple', 'Banana', 'Orange']}
  onSelect={setValue}
  placeholder="Search fruits..."
/>
```

### Mentions
```tsx
<Mentions
  options={[
    { value: 'user1', label: 'John Doe' },
    { value: 'user2', label: 'Jane Smith' },
  ]}
  placeholder="Mention someone with @"
/>
```

### Cascader
```tsx
<Cascader
  options={[
    {
      value: 'electronics',
      label: 'Electronics',
      children: [
        { value: 'phones', label: 'Phones' },
        { value: 'laptops', label: 'Laptops' },
      ]
    }
  ]}
/>
```

### Transfer
```tsx
<Transfer
  dataSource={items}
  targetKeys={selectedKeys}
  onChange={setSelectedKeys}
/>
```

### TreeSelect
```tsx
<TreeSelect
  treeData={[
    {
      value: 'parent',
      title: 'Parent',
      children: [
        { value: 'child', title: 'Child' }
      ]
    }
  ]}
  placeholder="Select item"
/>
```

---

## ⚙️ System Components (1)

### ThemeProvider
```tsx
import { ThemeProvider, useTheme } from '@baole/ui'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <YourApp />
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </Button>
  )
}
```

---

## 📦 Complete Import Example

```typescript
import {
  // Core
  Button, Card, Badge,
  
  // Forms
  Input, Textarea, Select, Checkbox, Switch, RadioGroup,
  Slider, Label, Form, FormItem, InputOTP, InputNumber,
  
  // Pickers
  DatePicker, TimePicker, ColorPicker, Rating, Upload,
  
  // Feedback
  Alert, Progress, Skeleton, Spinner, EmptyState, Result,
  Toaster,
  
  // Overlays
  Dialog, AlertDialog, Sheet, Drawer, Popover, Tooltip,
  HoverCard, DropdownMenu, ContextMenu, Command,
  
  // Navigation
  Tabs, Accordion, Breadcrumb, Pagination, Sidebar, Steps,
  
  // Data Display
  Avatar, Table, Calendar, Carousel, Chart, Tree, List,
  Timeline, Statistic, Tag, QRCode,
  
  // Layout
  Layout, Container, Stack, Grid, Separator, ScrollArea,
  AspectRatio, Resizable,
  
  // Typography
  Heading, Text, Code, Kbd,
  
  // Utility
  Toggle, ToggleGroup, Collapsible, Chip, Tour,
  
  // Data Entry
  AutoComplete, Mentions, Cascader, Transfer, TreeSelect,
  
  // System
  ThemeProvider, useTheme,
} from '@baole/ui'

// Toast (from sonner)
import { toast } from 'sonner'
```

---

**🎉 Total: 87 Production-Ready Components**

For detailed documentation of each component, see individual component files in `guidelines/components/`.
