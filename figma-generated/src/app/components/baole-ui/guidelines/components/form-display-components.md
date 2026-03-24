# Slider • Label • Progress • Skeleton

---

# Slider

## Purpose
Range input for selecting numeric values by dragging a handle along a track.

## When to Use
- Volume controls, brightness settings
- Price range filters
- Quantity selection
- Percentage adjustments

## Installation
```typescript
import { Slider } from '@baole/ui'
```

## Props API
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number[]` | - | Controlled value(s) |
| `defaultValue` | `number[]` | `[0]` | Uncontrolled default |
| `onValueChange` | `(value: number[]) => void` | - | Change handler |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `disabled` | `boolean` | `false` | Disabled state |

## Examples

### Basic Slider
```tsx
<Slider defaultValue={[50]} min={0} max={100} step={1} />
```

### Controlled Slider
```tsx
const [value, setValue] = useState([50])
return (
  <div className="space-y-2">
    <Slider value={value} onValueChange={setValue} max={100} />
    <p className="text-sm text-[var(--color-text-muted)]">Value: {value[0]}</p>
  </div>
)
```

### Range Slider
```tsx
<Slider defaultValue={[25, 75]} min={0} max={100} step={1} />
```

### With Label
```tsx
<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Volume</Label>
    <span className="text-sm text-[var(--color-text-muted)]">{volume}%</span>
  </div>
  <Slider
    value={[volume]}
    onValueChange={(val) => setVolume(val[0])}
    max={100}
  />
</div>
```

---

# Label

## Purpose
Accessible labels for form inputs that improve usability and click targets.

## When to Use
- **All form inputs** - Every input needs a label
- **Accessibility** - Screen reader support
- **Click targets** - Make entire label clickable

## Installation
```typescript
import { Label } from '@baole/ui'
```

## Props API
| Prop | Type | Description |
|------|------|-------------|
| `htmlFor` | `string` | Associated input ID |
| `required` | `boolean` | Show required indicator |

## Examples

### Basic Label
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" />
</div>
```

### Required Field
```tsx
<Label htmlFor="name">
  Full Name <span className="text-red-500">*</span>
</Label>
<Input id="name" required />
```

### With Helper Text
```tsx
<div className="space-y-1.5">
  <Label htmlFor="username">Username</Label>
  <Input id="username" />
  <p className="text-xs text-[var(--color-text-muted)]">
    3-20 characters, alphanumeric only
  </p>
</div>
```

---

# Progress

## Purpose
Visual indicator of task completion or loading progress.

## When to Use
- File uploads/downloads
- Multi-step processes
- Loading states with known duration
- Task completion percentages

## Installation
```typescript
import { Progress } from '@baole/ui'
```

## Props API
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number \| null` | - | Progress value (0-100) |
| `max` | `number` | `100` | Maximum value |
| `variant` | `"default" \| "gradient"` | `"default"` | Visual style |

## Examples

### Basic Progress
```tsx
<Progress value={60} />
```

### With Label
```tsx
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>60%</span>
  </div>
  <Progress value={60} />
</div>
```

### Indeterminate (Loading)
```tsx
<Progress value={null} />  {/* Animated loading state */}
```

### Gradient Progress
```tsx
<Progress value={75} variant="gradient" />
```

### Upload Progress
```tsx
function FileUpload() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10))
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-2">
      <Progress value={progress} variant="gradient" />
      <p className="text-sm text-center text-[var(--color-text-muted)]">
        {progress}% uploaded
      </p>
    </div>
  )
}
```

---

# Skeleton

## Purpose
Loading placeholders that mimic content structure while data loads.

## When to Use
- Page initial load
- Lazy loaded content
- API data fetching
- Image loading placeholders

## Installation
```typescript
import { Skeleton } from '@baole/ui'
```

## Props API
| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Custom dimensions and styling |

## Examples

### Basic Skeleton
```tsx
<Skeleton className="h-4 w-[250px]" />
```

### Text Lines
```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-[90%]" />
  <Skeleton className="h-4 w-[80%]" />
</div>
```

### Avatar Skeleton
```tsx
<Skeleton className="h-12 w-12 rounded-full" />
```

### Card Skeleton
```tsx
<Card>
  <CardHeader>
    <Skeleton className="h-6 w-[200px]" />
    <Skeleton className="h-4 w-[150px] mt-2" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-32 w-full rounded-lg" />
    <div className="space-y-2 mt-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
    </div>
  </CardContent>
</Card>
```

### Profile Skeleton
```tsx
<div className="flex items-center gap-4">
  <Skeleton className="h-16 w-16 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-5 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
</div>
```

### List Skeleton
```tsx
<div className="space-y-4">
  {[1, 2, 3].map(i => (
    <div key={i} className="flex items-center gap-3">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-3 w-[40%]" />
      </div>
    </div>
  ))}
</div>
```

### Table Skeleton
```tsx
<Table>
  <TableHeader>
    <TableRow>
      {[1, 2, 3].map(i => (
        <TableHead key={i}>
          <Skeleton className="h-4 w-20" />
        </TableHead>
      ))}
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1, 2, 3, 4].map(row => (
      <TableRow key={row}>
        {[1, 2, 3].map(col => (
          <TableCell key={col}>
            <Skeleton className="h-4 w-full" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Conditional Loading
```tsx
function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading } = useUser(userId)

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-4 w-[150px] mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-32 w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>{data.email}</CardDescription>
      </CardHeader>
      <CardContent>{data.bio}</CardContent>
    </Card>
  )
}
```

---

## Common Patterns

### Form Loading State
```tsx
{isLoading ? (
  <div className="space-y-4">
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-20 w-full" />
    <Skeleton className="h-10 w-32" />
  </div>
) : (
  <Form>{/* Actual form */}</Form>
)}
```

---

**Related Components:**
- Input, Textarea, Select - Use with Label
- Spinner - For inline loading
- EmptyState - For no data states
