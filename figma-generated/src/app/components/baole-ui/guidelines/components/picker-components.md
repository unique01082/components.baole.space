# Complete Component Guidelines - Pickers (6 components)

---

# DatePicker

## Purpose
Select dates from a calendar interface with keyboard and mouse support.

## When to Use
- Appointment booking
- Event scheduling
- Filtering by date
- Form date fields

## Installation
```typescript
import { DatePicker } from '@baole/ui'
```

## Props API
| Prop | Type | Description |
|------|------|-------------|
| `selected` | `Date` | Selected date |
| `onSelect` | `(date: Date) => void` | Selection handler |
| `disabled` | `(date: Date) => boolean` | Disable specific dates |
| `defaultMonth` | `Date` | Initial month displayed |

## Examples

### Basic DatePicker
```tsx
const [date, setDate] = useState<Date>()
return <DatePicker selected={date} onSelect={setDate} />
```

### In Popover
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Calendar size={16} className="mr-2" />
      {date ? format(date, 'PPP') : 'Pick a date'}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <DatePicker selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>
```

### Disable Past Dates
```tsx
<DatePicker
  selected={date}
  onSelect={setDate}
  disabled={(date) => date < new Date()}
/>
```

---

# DateRangePicker

## Purpose
Select a range of dates (start and end date) for filtering and reporting.

## When to Use
- Date range filters
- Reporting periods
- Booking duration
- Analytics date ranges

## Installation
```typescript
import { DateRangePicker } from '@baole/ui'
```

## Examples

### Basic Range
```tsx
const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>()
return (
  <DateRangePicker
    from={dateRange?.from}
    to={dateRange?.to}
    onSelect={setDateRange}
  />
)
```

### With Presets
```tsx
<div className="space-y-2">
  <div className="flex gap-2">
    <Button size="sm" variant="outline" onClick={() => setLast7Days()}>
      Last 7 days
    </Button>
    <Button size="sm" variant="outline" onClick={() => setLast30Days()}>
      Last 30 days
    </Button>
    <Button size="sm" variant="outline" onClick={() => setThisMonth()}>
      This month
    </Button>
  </div>
  <DateRangePicker from={from} to={to} onSelect={setRange} />
</div>
```

---

# TimePicker

## Purpose
Select specific times with hour and minute precision.

## When to Use
- Appointment scheduling
- Alarm/reminder setup
- Event start times
- Delivery time windows

## Installation
```typescript
import { TimePicker } from '@baole/ui'
```

## Examples

### Basic TimePicker
```tsx
const [time, setTime] = useState('09:00')
return <TimePicker value={time} onChange={setTime} />
```

### 12-hour Format
```tsx
<TimePicker
  value={time}
  onChange={setTime}
  format="12h"
  showPeriod
/>
```

### With Step
```tsx
<TimePicker
  value={time}
  onChange={setTime}
  step={15}  // 15-minute increments
/>
```

---

# ColorPicker

## Purpose
Select colors using various input methods (hex, RGB, HSL, visual picker).

## When to Use
- Theme customization
- Design tools
- Branding settings
- Visual editors

## Installation
```typescript
import { ColorPicker } from '@baole/ui'
```

## Examples

### Basic ColorPicker
```tsx
const [color, setColor] = useState('#a855f7')
return <ColorPicker value={color} onChange={setColor} />
```

### With Presets
```tsx
<ColorPicker
  value={color}
  onChange={setColor}
  presets={[
    '#a855f7', '#ec4899', '#f43f5e',
    '#3b82f6', '#10b981', '#f59e0b'
  ]}
/>
```

### In Popover
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="gap-2">
      <div
        className="h-4 w-4 rounded border"
        style={{ backgroundColor: color }}
      />
      {color}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <ColorPicker value={color} onChange={setColor} />
  </PopoverContent>
</Popover>
```

---

# Rating

## Purpose
Collect user ratings or display rating scores with visual stars/icons.

## When to Use
- Product reviews
- Feedback forms
- Satisfaction surveys
- Content ratings

## Installation
```typescript
import { Rating } from '@baole/ui'
```

## Props API
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current rating |
| `onChange` | `(value: number) => void` | - | Change handler |
| `max` | `number` | `5` | Maximum rating |
| `readOnly` | `boolean` | `false` | Read-only display |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Icon size |

## Examples

### Basic Rating
```tsx
const [rating, setRating] = useState(0)
return <Rating value={rating} onChange={setRating} />
```

### Read-only Display
```tsx
<Rating value={4.5} readOnly />
```

### Custom Max
```tsx
<Rating value={rating} onChange={setRating} max={10} />
```

### With Label
```tsx
<div className="space-y-2">
  <Label>Rate this product</Label>
  <Rating value={rating} onChange={setRating} />
  <p className="text-sm text-[var(--color-text-muted)]">
    {rating} out of 5 stars
  </p>
</div>
```

---

# Upload

## Purpose
File upload with drag-and-drop, preview, and progress tracking.

## When to Use
- File attachments
- Image uploads
- Document submission
- Avatar/profile picture upload

## Installation
```typescript
import { Upload } from '@baole/ui'
```

## Props API
| Prop | Type | Description |
|------|------|-------------|
| `accept` | `string` | Accepted file types |
| `multiple` | `boolean` | Allow multiple files |
| `maxSize` | `number` | Max file size (bytes) |
| `onUpload` | `(files: File[]) => void` | Upload handler |
| `disabled` | `boolean` | Disabled state |

## Examples

### Basic Upload
```tsx
<Upload
  accept="image/*"
  onUpload={(files) => handleUpload(files)}
/>
```

### Multiple Files
```tsx
<Upload
  accept=".pdf,.doc,.docx"
  multiple
  maxSize={5 * 1024 * 1024}  // 5MB
  onUpload={handleUpload}
/>
```

### Drag and Drop
```tsx
<Upload
  accept="image/*"
  onUpload={handleUpload}
  className="border-2 border-dashed border-[var(--color-border)] rounded-lg p-8 text-center hover:border-[var(--color-primary)] transition-colors"
>
  <div className="space-y-2">
    <Upload size={48} className="mx-auto text-[var(--color-text-muted)]" />
    <p>Drag and drop files here, or click to select</p>
    <p className="text-xs text-[var(--color-text-muted)]">
      PNG, JPG up to 10MB
    </p>
  </div>
</Upload>
```

### With Preview
```tsx
function ImageUpload() {
  const [preview, setPreview] = useState<string>()

  const handleUpload = (files: File[]) => {
    const file = files[0]
    const reader = new FileReader()
    reader.onloadend = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-4">
      <Upload accept="image/*" onUpload={handleUpload} />
      {preview && (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="max-w-full h-auto rounded-lg"
          />
          <Button
            size="sm"
            variant="outline"
            onClick={() => setPreview(undefined)}
            className="absolute top-2 right-2"
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  )
}
```

### Avatar Upload
```tsx
<div className="flex items-center gap-4">
  <Avatar src={avatar} fallback="JD" className="h-20 w-20" />
  <Upload
    accept="image/*"
    onUpload={handleAvatarUpload}
  >
    <Button variant="outline">Change Avatar</Button>
  </Upload>
</div>
```

---

## Common Patterns

### Form with File Upload
```tsx
<Form onSubmit={handleSubmit}>
  <FormItem label="Name" required>
    <Input />
  </FormItem>
  
  <FormItem label="Resume" required>
    <Upload
      accept=".pdf,.doc,.docx"
      maxSize={5 * 1024 * 1024}
      onUpload={(files) => setResume(files[0])}
    />
  </FormItem>
  
  <Button type="submit" variant="gradient">Submit Application</Button>
</Form>
```

---

**Related Components:**
- [Form](./form.md) - Use in forms
- [Button](./button.md) - Upload triggers
- [Progress](./progress.md) - Upload progress
