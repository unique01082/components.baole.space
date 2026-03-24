import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Separator,
  Skeleton,
} from "./components/baole-ui";
import {
  Plus,
  ArrowRight,
  Download,
  Search,
  Heart,
  Star,
  Trash2,
  Edit2,
  Check,
  AlertCircle,
  Info,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [badges, setBadges] = useState(["Design", "Development", "Photography"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                @baole/ui
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A rich, dark-gradient React component library for the baole.space
              ecosystem. Ant Design-level prop richness. shadcn/ui architecture.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Badge variant="gradient" size="lg">
                v0.1.0
              </Badge>
              <Badge variant="success" size="lg" dot>
                45+ Components
              </Badge>
              <Badge variant="info" size="lg" dot>
                React 19
              </Badge>
              <Badge variant="secondary" size="lg">
                Tailwind CSS v4
              </Badge>
            </div>
            <p className="text-sm text-white/50 italic mt-8">
              "In code we trust, in games we clutch, in photos we overexpose (+0.3
              EV)"
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
          {/* Buttons Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Buttons
            </h2>
            
            <div className="space-y-8">
              {/* Variants */}
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>
                    All 7 button variants with gradient, outline, and glass styles
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="gradient">Gradient</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sizes */}
              <Card>
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                  <CardDescription>
                    From xs to xl, plus icon-only variant
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="xs" variant="gradient">
                      Extra Small
                    </Button>
                    <Button size="sm" variant="gradient">
                      Small
                    </Button>
                    <Button size="md" variant="gradient">
                      Medium
                    </Button>
                    <Button size="lg" variant="gradient">
                      Large
                    </Button>
                    <Button size="xl" variant="gradient">
                      Extra Large
                    </Button>
                    <Button size="icon" variant="gradient">
                      <Heart size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* With Icons */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons with Icons</CardTitle>
                  <CardDescription>
                    leftIcon, rightIcon, and loading states
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="gradient" leftIcon={<Plus size={16} />}>
                      Create New
                    </Button>
                    <Button variant="outline" rightIcon={<ArrowRight size={16} />}>
                      Continue
                    </Button>
                    <Button variant="success" leftIcon={<Download size={16} />}>
                      Download
                    </Button>
                    <Button variant="ghost" loading>
                      Loading
                    </Button>
                    <Button variant="destructive" leftIcon={<Trash2 size={16} />}>
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* States */}
              <Card>
                <CardHeader>
                  <CardTitle>Button States</CardTitle>
                  <CardDescription>
                    Disabled and full-width variants
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="gradient" disabled>
                      Disabled Gradient
                    </Button>
                    <Button variant="outline" disabled>
                      Disabled Outline
                    </Button>
                    <Button variant="success" disabled>
                      Disabled Success
                    </Button>
                  </div>
                  <Button variant="gradient" fullWidth>
                    Full Width Button
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Badges Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Badges
            </h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Badge Variants</CardTitle>
                  <CardDescription>
                    Semantic color variants for status indication
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="gradient">Gradient</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badge Features</CardTitle>
                  <CardDescription>
                    Sizes, dots, and removable badges
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-white/60">Sizes:</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge size="sm" variant="gradient">Small</Badge>
                      <Badge size="md" variant="gradient">Medium</Badge>
                      <Badge size="lg" variant="gradient">Large</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <p className="text-sm text-white/60">With status dots:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="success" dot>Online</Badge>
                      <Badge variant="warning" dot>Away</Badge>
                      <Badge variant="destructive" dot>Busy</Badge>
                      <Badge variant="default" dot>Offline</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <p className="text-sm text-white/60">Removable badges:</p>
                    <div className="flex flex-wrap gap-2">
                      {badges.map((badge, i) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          removable
                          onRemove={() => {
                            setBadges(badges.filter((_, idx) => idx !== i));
                          }}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cards Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Cards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Glass Card</CardTitle>
                  <CardDescription>
                    Frosted glass effect with backdrop blur
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-white/70 text-sm">
                    This is the default card variant using glassmorphism design
                    principles. Perfect for modern, layered interfaces.
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="gradient">
                    Action
                  </Button>
                  <Button size="sm" variant="ghost">
                    Cancel
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="gradient" hoverable>
                <CardHeader>
                  <CardTitle>Gradient Border Card</CardTitle>
                  <CardDescription>
                    With gradient border and hover effect
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-white/70 text-sm">
                    Hover over this card to see the elevation effect. The gradient
                    border creates a premium, highlighted appearance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Badge variant="gradient">Featured</Badge>
                </CardFooter>
              </Card>

              <Card variant="solid">
                <CardHeader>
                  <CardTitle>Solid Card</CardTitle>
                  <CardDescription>
                    Solid background for stronger emphasis
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-white/70 text-sm">
                    Use solid cards when you need more visual separation from the
                    background or to emphasize important content.
                  </p>
                </CardContent>
              </Card>

              <Card variant="outlined" hoverable>
                <CardHeader>
                  <CardTitle>Outlined Card</CardTitle>
                  <CardDescription>
                    Transparent with visible border
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-white/70 text-sm">
                    Outlined cards are great for subtle grouping without heavy
                    visual weight. Perfect for secondary content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Inputs Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Form Controls
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Input Components</CardTitle>
                <CardDescription>
                  Rich input fields with validation states and icons
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Default input"
                    label="Username"
                    hint="Enter your username"
                  />
                  <Input
                    placeholder="Search..."
                    leftIcon={<Search size={16} />}
                    label="Search"
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Success state"
                    status="success"
                    label="Email"
                    hint="Email verified"
                    value="user@example.com"
                    readOnly
                  />
                  <Input
                    placeholder="Error state"
                    status="error"
                    label="Password"
                    error="Password is required"
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Clearable input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    clearable
                    onClear={() => setInputValue("")}
                    label="Clearable"
                  />
                  <Input
                    placeholder="Loading..."
                    loading
                    label="Loading State"
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <p className="text-sm text-white/60">Input Sizes:</p>
                  <div className="space-y-3">
                    <Input size="sm" placeholder="Small input" />
                    <Input size="md" placeholder="Medium input (default)" />
                    <Input size="lg" placeholder="Large input" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Feedback Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Feedback & Loading
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skeleton Loaders</CardTitle>
                  <CardDescription>
                    Animated loading placeholders
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <Skeleton variant="text" lines={3} />
                  <div className="flex gap-3 items-center">
                    <Skeleton variant="circle" width="48px" height="48px" />
                    <div className="flex-1">
                      <Skeleton variant="text" lines={2} />
                    </div>
                  </div>
                  <Skeleton variant="card" />
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardHeader>
                  <CardTitle>Status Indicators</CardTitle>
                  <CardDescription>
                    Visual feedback using badges and icons
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="text-emerald-400" size={20} />
                    <span className="text-sm">Deployment successful</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="text-amber-400" size={20} />
                    <span className="text-sm">Warning: High memory usage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="text-blue-400" size={20} />
                    <span className="text-sm">New update available</span>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success" dot>Processing</Badge>
                    <Badge variant="warning" dot>Pending</Badge>
                    <Badge variant="destructive" dot>Failed</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Design Philosophy */}
          <section>
            <Card variant="gradient" padding="lg">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">baole.space Design Philosophy</h3>
                <p className="text-white/80 max-w-2xl mx-auto">
                  This component library embodies the creative energy of a
                  developer, photographer, and gamer. Dark gradients, glassmorphism,
                  and subtle glows create a polished, energetic interface that's
                  never corporate or cold.
                </p>
                <Separator variant="gradient" className="my-6" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <Star className="mx-auto mb-2 text-purple-400" size={32} />
                    <h4 className="font-semibold mb-1">45+ Components</h4>
                    <p className="text-sm text-white/60">
                      Comprehensive library with Ant Design-level richness
                    </p>
                  </div>
                  <div>
                    <Heart className="mx-auto mb-2 text-fuchsia-400" size={32} />
                    <h4 className="font-semibold mb-1">Dark-First</h4>
                    <p className="text-sm text-white/60">
                      Designed for dark mode with gradient accents
                    </p>
                  </div>
                  <div>
                    <Edit2 className="mx-auto mb-2 text-pink-400" size={32} />
                    <h4 className="font-semibold mb-1">Fully Typed</h4>
                    <p className="text-sm text-white/60">
                      TypeScript strict mode, zero any types
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Footer */}
          <footer className="text-center py-12 space-y-4">
            <Separator variant="gradient" />
            <p className="text-white/50 text-sm mt-8">
              @baole/ui v0.1.0 — Built for the baole.space ecosystem
            </p>
            <p className="text-white/40 text-xs italic">
              "In code we trust, in games we clutch, in photos we overexpose (+0.3 EV)"
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}