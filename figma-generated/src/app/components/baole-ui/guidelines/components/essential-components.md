# Form • Label • Progress • Skeleton • Popover • Tabs

---

# Form

## Purpose
Container for form fields with built-in validation, error handling, and submission management.

## Installation
```typescript
import { Form, FormItem } from '@baole/ui'
```

## Basic Example
```tsx
<Form onSubmit={handleSubmit} errors={errors} touched={touched}>
  <FormItem label="Email" name="email" required>
    <Input type="email" />
  </FormItem>
  <FormItem label="Password" name="password" required>
    <Input type="password" />
  </FormItem>
  <Button type="submit" variant="gradient">Submit</Button>
</Form>
```

## Props API
| Prop | Type | Description |
|------|------|-------------|
| `errors` | `Record<string, string>` | Field error messages |
| `touched` | `Record<string, boolean>` | Touched fields |
| `onSubmit` | `(e: FormEvent) => void` | Submit handler |

---

# Label

## Purpose
Accessible labels for form inputs, improving usability and accessibility.

## Installation
```typescript
import { Label } from '@baole/ui'
```

## Basic Example
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" />
</div>
```

## With Required Indicator
```tsx
<Label htmlFor="name">
  Full Name <span className="text-red-500">*</span>
</Label>
<Input id="name" required />
```

---

# Progress

## Purpose
Visual indicator of task completion or loading progress.

## Installation
```typescript
import { Progress } from '@baole/ui'
```

## Basic Example
```tsx
<Progress value={60} max={100} />
```

## With Label
```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>60%</span>
  </div>
  <Progress value={60} />
</div>
```

## Indeterminate (Loading)
```tsx
<Progress value={null} />  {/* Animated loading state */}
```

---

# Skeleton

## Purpose
Loading placeholders that mimic content structure while data loads.

## Installation
```typescript
import { Skeleton } from '@baole/ui'
```

## Basic Example
```tsx
<Skeleton className="h-4 w-[250px]" />
```

## Card Skeleton
```tsx
<Card>
  <CardHeader>
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-3 w-[150px] mt-2" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-32 w-full" />
  </CardContent>
</Card>
```

## List Skeleton
```tsx
<div className="space-y-3">
  {[1, 2, 3].map(i => (
    <div key={i} className="flex items-center gap-3">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
    </div>
  ))}
</div>
```

---

# Popover

## Purpose
Floating panels for displaying contextual content triggered by user interaction.

## Installation
```typescript
import { Popover, PopoverTrigger, PopoverContent } from '@baole/ui'
```

## Basic Example
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Popover Title</h4>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Popover content goes here.
      </p>
    </div>
  </PopoverContent>
</Popover>
```

## Date Picker Popover
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Calendar size={16} className="mr-2" />
      {date ? format(date, 'PPP') : 'Pick a date'}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  </PopoverContent>
</Popover>
```

## Position
```tsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent side="top" align="start">
    Content
  </PopoverContent>
</Popover>
```

---

# Tabs

## Purpose
Organize content into tabbed sections for easy navigation.

## Installation
```typescript
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@baole/ui'
```

## Basic Example
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Content for Tab 3</p>
  </TabsContent>
</Tabs>
```

## Controlled Tabs
```tsx
function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="analytics">Analytics content</TabsContent>
    </Tabs>
  )
}
```

## In Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Dashboard</CardTitle>
  </CardHeader>
  <Tabs defaultValue="overview">
    <TabsList className="px-6">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
    </TabsList>
    <TabsContent value="overview" className="px-6 pb-6">
      <p>Overview content</p>
    </TabsContent>
    <TabsContent value="analytics" className="px-6 pb-6">
      <p>Analytics content</p>
    </TabsContent>
  </Tabs>
</Card>
```

---

## Common Form Pattern

```tsx
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await submitForm(formData)
      toast.success('Form submitted successfully')
    } catch (error) {
      toast.error('Submission failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit} errors={errors}>
      <FormItem label="Name" name="name" required>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormItem>

      <FormItem label="Email" name="email" required>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormItem>

      <FormItem label="Message" name="message" required>
        <Textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
        />
      </FormItem>

      <Button type="submit" variant="gradient" loading={loading} disabled={loading}>
        Submit
      </Button>
    </Form>
  )
}
```

---

**For complete documentation, see individual component files.**
