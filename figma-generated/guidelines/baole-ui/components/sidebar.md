# Sidebar

## Purpose

A persistent or collapsible navigation sidebar for app layouts. Supports pinned navigation, collapsible sections, nested links, icon-only collapsed state, and mobile sheet fallback.

## When to Use

### ✅ Use Sidebar when:

- App has 5+ navigation destinations
- Users need quick switching between sections of an application
- Dashboard / app-shell layout with persistent left navigation

### ❌ Don't use Sidebar when:

- Only 2–3 top-level routes → Use `Navbar` with links
- Marketing/content pages → Use `Navbar` + footer
- Mobile is primary → Collapse into a hamburger Sheet overlay

## Installation

```typescript
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@baole/ui";
```

## Setup

```tsx
// Wrap your app layout in SidebarProvider
<SidebarProvider>
  <AppSidebar />
  <main>
    <SidebarTrigger /> {/* hamburger toggle */}
    {children}
  </main>
</SidebarProvider>
```

## Example Sidebar

```tsx
const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Analytics", url: "/analytics", icon: BarChart2 },
  { title: "Settings", url: "/settings", icon: Settings },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <Logo className="h-6 w-6" />
          <span className="font-semibold">baole.space</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
```

## Do's and Don'ts

### ✅ Do

- Use `SidebarProvider` at the layout root so all child components share sidebar state
- Put user account/avatar in `SidebarFooter`
- Show icon-only in collapsed state for space efficiency
- Use `SidebarTrigger` in the main content area for mobile toggle

### ❌ Don't

- Don't nest more than 2 levels of navigation in the sidebar
- Don't use sidebar for a marketing landing page
- Don't make sidebar items open dialogs — they should navigate
