# Tabs

## Purpose

A navigation component for switching between related content panels. Built on Radix UI Tabs. Each tab corresponds to one panel of content.

## When to Use

### ✅ Use Tabs when:

- Content is divided into parallel sections of the same level
- User navigates between related but distinct views (Overview, Activity, Settings)
- Space is limited and content can be shown one section at a time

### ❌ Don't use Tabs when:

- Content has a sequence/order → Use `Steps` or `Stepper`
- Only 1 section of content — no need for tabs
- Sections are heavily nested → Consider routes/pages instead

## Installation

```typescript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@baole/ui";
```

## Props API

### Tabs (root)

| Prop            | Type                           | Default        | Description                       |
| --------------- | ------------------------------ | -------------- | --------------------------------- |
| `value`         | `string`                       | –              | Controlled active tab             |
| `onValueChange` | `(value: string) => void`      | –              | Called on tab change              |
| `defaultValue`  | `string`                       | –              | Initial active tab (uncontrolled) |
| `orientation`   | `"horizontal"` \| `"vertical"` | `"horizontal"` | Tab list direction                |

### TabsList / TabsTrigger

| Prop                 | Type      | Default | Description                          |
| -------------------- | --------- | ------- | ------------------------------------ |
| `value` (Trigger)    | `string`  | –       | **Required.** Identifier for the tab |
| `disabled` (Trigger) | `boolean` | `false` | Disables this tab                    |
| `className`          | `string`  | –       | Additional CSS classes               |

## Examples

```tsx
// Basic horizontal tabs
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="activity">Activity</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <OverviewPanel />
  </TabsContent>
  <TabsContent value="activity">
    <ActivityPanel />
  </TabsContent>
  <TabsContent value="settings">
    <SettingsPanel />
  </TabsContent>
</Tabs>

// Controlled tabs
<Tabs value={activeTab} onValueChange={setActiveTab}>
  {/* ... */}
</Tabs>

// Vertical tabs (sidebar style)
<Tabs orientation="vertical" defaultValue="profile" className="flex gap-6">
  <TabsList className="flex-col h-auto">
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  <div className="flex-1">
    <TabsContent value="profile"><ProfileSettings /></TabsContent>
    {/* ... */}
  </div>
</Tabs>
```

## Do's and Don'ts

### ✅ Do

- Keep tab labels short (1–2 words)
- Show tab count badges for async counts (e.g., "Issues (12)")
- Default to the most-used or most-important tab

### ❌ Don't

- Don't use more than 6–7 tabs in a row — they overflow on mobile
- Don't change tab content via page reload — tabs are client-side switching
- Don't disable tabs without explaining why (users are confused by greyed-out tabs)
