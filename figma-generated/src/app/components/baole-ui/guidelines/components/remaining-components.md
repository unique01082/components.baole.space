# Complete Component Guidelines - Layout, Typography, Utility, Data Entry, Feedback, System

---

# LAYOUT COMPONENTS (14)

## Layout

**Purpose:** Application layout structure with header, sidebar, content, footer.

```typescript
import { Layout, LayoutHeader, LayoutSider, LayoutContent, LayoutFooter } from '@baole/ui'
```

### Example
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

---

## Container

**Purpose:** Max-width centered containers for page content.

```typescript
import { Container } from '@baole/ui'
```

### Example
```tsx
<Container maxWidth="lg">
  <p>Centered content with max-width</p>
</Container>
```

---

## Stack

**Purpose:** Vertical or horizontal stacking with consistent spacing.

```typescript
import { Stack } from '@baole/ui'
```

### Example
```tsx
<Stack direction="vertical" spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

---

## Grid

**Purpose:** Responsive grid layouts.

```typescript
import { Grid, GridItem } from '@baole/ui'
```

### Example
```tsx
<Grid cols={3} gap={4}>
  <GridItem>1</GridItem>
  <GridItem colSpan={2}>2 (spans 2 columns)</GridItem>
  <GridItem>3</GridItem>
</Grid>
```

---

## Space

**Purpose:** Add spacing between inline elements.

```typescript
import { Space } from '@baole/ui'
```

### Example
```tsx
<Space size="md">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>
```

---

## Separator

**Purpose:** Visual dividers between content sections.

```typescript
import { Separator } from '@baole/ui'
```

### Example
```tsx
<div>
  <p>Section 1</p>
  <Separator />
  <p>Section 2</p>
</div>

<div className="flex gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
</div>
```

---

## Divider

**Purpose:** Separator with optional text.

```typescript
import { Divider } from '@baole/ui'
```

### Example
```tsx
<Divider>Section Title</Divider>
<Divider orientation="left">Left aligned</Divider>
```

---

## ScrollArea

**Purpose:** Custom styled scrollable areas.

```typescript
import { ScrollArea } from '@baole/ui'
```

### Example
```tsx
<ScrollArea className="h-[400px] w-full">
  <div className="p-4">
    {/* Long scrollable content */}
  </div>
</ScrollArea>
```

---

## AspectRatio

**Purpose:** Maintain aspect ratio for responsive media.

```typescript
import { AspectRatio } from '@baole/ui'
```

### Example
```tsx
<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" className="object-cover" />
</AspectRatio>
```

---

## Resizable

**Purpose:** Resizable panel layouts.

```typescript
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@baole/ui'
```

### Example
```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
</ResizablePanelGroup>
```

---

## Affix

**Purpose:** Fix elements to viewport while scrolling.

```typescript
import { Affix } from '@baole/ui'
```

### Example
```tsx
<Affix offsetTop={10}>
  <Button>Sticky Button</Button>
</Affix>
```

---

## BackTop

**Purpose:** Scroll to top button.

```typescript
import { BackTop } from '@baole/ui'
```

### Example
```tsx
<BackTop visibilityHeight={400} />
```

---

## FloatButton

**Purpose:** Floating action buttons.

```typescript
import { FloatButton, FloatButtonGroup } from '@baole/ui'
```

### Example
```tsx
<FloatButton
  icon={<Plus size={20} />}
  onClick={() => handleCreate()}
/>

<FloatButtonGroup>
  <FloatButton icon={<Settings size={20} />} />
  <FloatButton icon={<Help size={20} />} />
</FloatButtonGroup>
```

---

## Watermark

**Purpose:** Add watermark overlays to content.

```typescript
import { Watermark } from '@baole/ui'
```

### Example
```tsx
<Watermark content="Confidential" rotate={-22}>
  <div className="p-8">
    Protected content here
  </div>
</Watermark>
```

---

# TYPOGRAPHY COMPONENTS (4)

## Heading

**Purpose:** Semantic heading components with gradient support.

```typescript
import { Heading } from '@baole/ui'
```

### Example
```tsx
<Heading level={1}>H1 Heading</Heading>
<Heading level={2} gradient>H2 with Gradient</Heading>
<Heading level={3}>H3 Heading</Heading>
```

---

## Text

**Purpose:** Paragraph and body text with variants.

```typescript
import { Text } from '@baole/ui'
```

### Example
```tsx
<Text variant="body">Body text</Text>
<Text variant="caption">Caption text</Text>
<Text variant="small">Small text</Text>
```

---

## Code

**Purpose:** Inline and block code display.

```typescript
import { Code } from '@baole/ui'
```

### Example
```tsx
<Code>inline code</Code>

<Code block language="typescript">
  {`function example() {
    return "code block"
  }`}
</Code>
```

---

## Kbd

**Purpose:** Keyboard shortcut display.

```typescript
import { Kbd } from '@baole/ui'
```

### Example
```tsx
<div>
  Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search
</div>
```

---

# UTILITY COMPONENTS (5)

## Toggle

**Purpose:** Toggle button for on/off states.

```typescript
import { Toggle } from '@baole/ui'
```

### Example
```tsx
<Toggle pressed={pressed} onPressedChange={setPressed}>
  <Bold size={16} />
</Toggle>
```

---

## ToggleGroup

**Purpose:** Group of mutually exclusive toggles.

```typescript
import { ToggleGroup, ToggleGroupItem } from '@baole/ui'
```

### Example
```tsx
<ToggleGroup type="single" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="left">
    <AlignLeft size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight size={16} />
  </ToggleGroupItem>
</ToggleGroup>
```

---

## Collapsible

**Purpose:** Collapsible content sections.

```typescript
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@baole/ui'
```

### Example
```tsx
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Show more</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>Hidden content that can be toggled</p>
  </CollapsibleContent>
</Collapsible>
```

---

## Chip

**Purpose:** Interactive chips with close functionality.

```typescript
import { Chip } from '@baole/ui'
```

### Example
```tsx
<Chip closable onClose={() => handleRemove()}>
  Removable chip
</Chip>
```

---

## Tour

**Purpose:** Product tour and onboarding.

```typescript
import { Tour } from '@baole/ui'
```

### Example
```tsx
<Tour
  open={open}
  onClose={() => setOpen(false)}
  steps={[
    {
      title: 'Welcome',
      description: 'Start your tour here',
      target: '#step1',
    },
    {
      title: 'Next Step',
      description: 'Continue here',
      target: '#step2',
    },
  ]}
/>
```

---

# DATA ENTRY COMPONENTS (5)

## AutoComplete

**Purpose:** Input with autocomplete suggestions.

```typescript
import { AutoComplete } from '@baole/ui'
```

### Example
```tsx
<AutoComplete
  options={['Apple', 'Banana', 'Orange', 'Mango']}
  onSelect={setValue}
  placeholder="Search fruits..."
/>
```

---

## Mentions

**Purpose:** @mentions input for tagging users.

```typescript
import { Mentions } from '@baole/ui'
```

### Example
```tsx
<Mentions
  options={[
    { value: 'user1', label: 'John Doe' },
    { value: 'user2', label: 'Jane Smith' },
  ]}
  placeholder="Mention someone with @"
/>
```

---

## Cascader

**Purpose:** Cascading dropdown selection.

```typescript
import { Cascader } from '@baole/ui'
```

### Example
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

---

## Transfer

**Purpose:** Transfer items between two lists.

```typescript
import { Transfer } from '@baole/ui'
```

### Example
```tsx
<Transfer
  dataSource={items}
  targetKeys={selectedKeys}
  onChange={setSelectedKeys}
  titles={['Available', 'Selected']}
/>
```

---

## TreeSelect

**Purpose:** Tree structured dropdown selection.

```typescript
import { TreeSelect } from '@baole/ui'
```

### Example
```tsx
<TreeSelect
  treeData={[
    {
      value: 'parent',
      title: 'Parent',
      children: [
        { value: 'child1', title: 'Child 1' },
        { value: 'child2', title: 'Child 2' },
      ]
    }
  ]}
  placeholder="Select item"
/>
```

---

# FEEDBACK COMPONENTS (Remaining 5)

## Spinner

**Purpose:** Loading spinner indicator.

```typescript
import { Spinner } from '@baole/ui'
```

### Example
```tsx
<Spinner size="md" />
<Spinner size="lg" variant="primary" />
```

---

## EmptyState

**Purpose:** Empty state illustrations and messages.

```typescript
import { EmptyState } from '@baole/ui'
```

### Example
```tsx
<EmptyState
  icon={<Inbox size={48} />}
  title="No items found"
  description="Try adjusting your filters or create a new item"
  action={<Button>Create Item</Button>}
/>
```

---

## Result

**Purpose:** Result pages for success/error states.

```typescript
import { Result } from '@baole/ui'
```

### Example
```tsx
<Result
  status="success"
  title="Payment Successful"
  subtitle="Your order #12345 has been confirmed"
  extra={<Button>View Order</Button>}
/>

<Result
  status="error"
  title="Payment Failed"
  subtitle="Please try again or contact support"
/>
```

---

## Message

**Purpose:** Top-centered message notifications.

```typescript
import { MessageManager } from '@baole/ui'
```

### Example
```tsx
MessageManager.success('Operation successful')
MessageManager.error('Operation failed')
MessageManager.warning('Warning message')
MessageManager.info('Information message')
```

---

## Notification

**Purpose:** Corner notification system.

```typescript
import { NotificationManager } from '@baole/ui'
```

### Example
```tsx
NotificationManager.success({
  title: 'Success',
  description: 'Your changes have been saved',
  duration: 3000,
})

NotificationManager.error({
  title: 'Error',
  description: 'Failed to save changes',
})
```

---

# SYSTEM COMPONENTS (1)

## ThemeProvider

**Purpose:** Theme management and switching.

```typescript
import { ThemeProvider, useTheme } from '@baole/ui'
```

### Example

```tsx
// App root
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <YourApp />
    </ThemeProvider>
  )
}

// Theme toggle
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  )
}
```

---

**✅ ALL 87 COMPONENTS DOCUMENTED**

**Related Files:**
- [all-components.md](./all-components.md) - Quick syntax reference
- [Guidelines.md](../Guidelines.md) - Master index
- [Design Tokens](../design-tokens/colors.md) - Visual system
