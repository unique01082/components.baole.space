# Layout

## Purpose

Page-level structural layout components for building admin dashboards, app shells, and documentation sites. Provides `Layout`, `LayoutHeader`, `LayoutSider`, `LayoutContent`, and `LayoutFooter` to compose standard app layouts.

## When to Use

### ✅ Use Layout when:

- Building an application shell (header + sidebar + content area)
- Composing admin dashboard scaffolding
- Creating documentation or settings pages with persistent sidebar navigation

### ❌ Don't use Layout when:

- Marketing or landing pages (use full-width sections with Container)
- Simple single-column content pages (use Container + Stack)

## Installation

```typescript
import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent,
  LayoutFooter,
} from "@baolq/ui";
```

## Props API

### Layout

| Prop        | Type      | Default | Description                                 |
| ----------- | --------- | ------- | ------------------------------------------- |
| `hasSider`  | `boolean` | `false` | Enables horizontal arrangement with a sider |
| `className` | `string`  | –       | Additional CSS classes                      |

### LayoutSider

| Prop             | Type                           | Default | Description                          |
| ---------------- | ------------------------------ | ------- | ------------------------------------ |
| `width`          | `number`                       | `200`   | Full sider width in pixels           |
| `collapsed`      | `boolean`                      | `false` | Controlled collapsed state           |
| `collapsedWidth` | `number`                       | `64`    | Width when collapsed                 |
| `onCollapse`     | `(collapsed: boolean) => void` | –       | Callback when collapse state changes |
| `className`      | `string`                       | –       | Additional CSS classes               |

### LayoutHeader / LayoutContent / LayoutFooter

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | –       | Additional CSS classes |
| `children`  | `React.ReactNode` | –       | Content                |

## Examples

### Standard App Shell

```tsx
function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <LayoutHeader className="h-14 flex items-center px-6 bg-black/50 border-b border-white/10">
        <Logo />
        <div className="ml-auto flex items-center gap-4">
          <UserMenu />
        </div>
      </LayoutHeader>

      <Layout hasSider>
        <LayoutSider
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="border-r border-white/10"
        >
          <NavMenu />
        </LayoutSider>

        <LayoutContent className="flex-1 overflow-auto">
          <div className="p-6">{children}</div>
        </LayoutContent>
      </Layout>
    </Layout>
  );
}
```

### With Footer

```tsx
<Layout className="min-h-screen">
  <LayoutHeader>
    <TopNav />
  </LayoutHeader>

  <LayoutContent className="flex-1">
    <Container>{children}</Container>
  </LayoutContent>

  <LayoutFooter className="py-8 border-t border-white/10">
    <Container>
      <Footer />
    </Container>
  </LayoutFooter>
</Layout>
```

### Nested Layouts (Multi-Level)

```tsx
<Layout>
  <LayoutHeader>
    <MainHeader />
  </LayoutHeader>

  <Layout hasSider>
    <LayoutSider width={240} collapsed={siderCollapsed}>
      <SideNav />
    </LayoutSider>

    <Layout>
      <LayoutContent>{children}</LayoutContent>
      <LayoutFooter>
        <Breadcrumb />
      </LayoutFooter>
    </Layout>
  </Layout>
</Layout>
```

## Do's and Don'ts

### ✅ Do

- Always set `hasSider` on the inner `Layout` when using `LayoutSider`
- Use `LayoutContent` with `flex-1 overflow-auto` for scrollable main content
- Set explicit `height` or `min-h-screen` on the root `Layout`

### ❌ Don't

- Don't use Layout for marketing pages — it's designed for app shells
- Don't nest more than 2 levels of Layout hierarchy

## Accessibility

- `LayoutHeader` renders as `<header>`
- `LayoutContent` renders as `<main>`
- `LayoutFooter` renders as `<footer>`
- These landmarks provide automatic screen reader navigation
