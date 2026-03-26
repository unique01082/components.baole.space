import { useState } from "react";
import {
  cn,
  // Core
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  // Form
  Input,
  InputNumber,
  Textarea,
  Checkbox,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Label,
  Slider,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Rating,
  ColorPicker,
  Upload,
  // Pickers
  DatePicker,
  DateRangePicker,
  TimePicker,
  // Data Entry
  AutoComplete,
  Cascader,
  TreeSelect,
  Transfer,
  // Feedback
  Alert,
  AlertTitle,
  AlertDescription,
  Progress,
  Skeleton,
  Spinner,
  Toaster,
  EmptyState,
  Result,
  // Overlay
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Popover,
  PopoverTrigger,
  PopoverContent,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  // Navigation
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Steps,
  Stepper,
  Segmented,
  // Data Display
  Avatar,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  List,
  Descriptions,
  Timeline,
  Statistic,
  Tree,
  QRCode,
  Tag,
  Chip,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Image as UIImage,
  Calendar,
  // Charts
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  // Layout
  Separator,
  Divider,
  ScrollArea,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  AspectRatio,
  Stack,
  Grid,
  GridItem,
  Space,
  Watermark,
  // Typography
  Heading,
  Text,
  Code,
  Kbd,
  // Utility
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  // Floating
  FloatButton,
  BackTop,
  // Types
  type ListItem,
  type DescriptionItem,
  type TimelineItem,
  type StepItem,
  type Step as StepType,
  type TreeNode,
  type SegmentedOption,
  type TransferItem,
} from "./components";
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
  Info,
  Settings,
  Bell,
  ChevronDown,
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Camera,
  X,
  Package,
  Layers,
  Box,
  ExternalLink,
  Eye,
  Copy,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

// ─── Section heading helper ─────────────────────────────────────────────────
const SH = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent border-b border-white/10 pb-3">
    {children}
  </h2>
);

export default function App() {
  // Form state
  const [inputValue, setInputValue] = useState("baolq");
  const [inputNumber, setInputNumber] = useState<number>(42);
  const [textarea, setTextarea] = useState(
    "Dark gradients, glassmorphism, and subtle glows.",
  );
  const [checkbox, setCheckbox] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [radio, setRadio] = useState("react");
  const [slider, setSlider] = useState([65]);
  const [select, setSelect] = useState("vite");
  const [rating, setRating] = useState(4);
  const [color, setColor] = useState("#8b5cf6");
  // Navigation state
  const [segmented, setSegmented] = useState("components");
  const [stepsStep, setStepsStep] = useState(1);
  const [stepperStep, setStepperStep] = useState(1);
  const [page, setPage] = useState(1);
  // Transfer / tree state
  const [transferTarget, setTransferTarget] = useState<string[]>(["3"]);
  const [treeChecked, setTreeChecked] = useState<string[]>([]);
  const [treeExpanded, setTreeExpanded] = useState<string[]>(["1", "2"]);
  // Toggles
  const [toggleBold, setToggleBold] = useState(false);
  const [toggleItalic, setToggleItalic] = useState(true);
  const [toggleGroup, setToggleGroup] = useState("left");
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

  // ─── Static data ────────────────────────────────────────────────────────
  const listItems: ListItem[] = [
    {
      id: "1",
      title: "Build @baolq/ui library",
      description: "84 components, Radix primitives, CVA",
      actions: (
        <Badge variant="success" dot>
          Done
        </Badge>
      ),
    },
    {
      id: "2",
      title: "Write design guidelines",
      description: "29 component docs + Figma Make guides",
      actions: (
        <Badge variant="success" dot>
          Done
        </Badge>
      ),
    },
    {
      id: "3",
      title: "Publish to npm",
      description: "@baolq/ui@0.1.0 on public registry",
      actions: (
        <Badge variant="success" dot>
          Done
        </Badge>
      ),
    },
    {
      id: "4",
      title: "Integrate into baole.space",
      description: "Replace local UI primitives",
      actions: (
        <Badge variant="warning" dot>
          Pending
        </Badge>
      ),
    },
  ];

  const descItems: DescriptionItem[] = [
    { label: "Package", content: "@baolq/ui" },
    { label: "Version", content: "0.1.0" },
    { label: "License", content: "MIT" },
    { label: "React", content: ">=18" },
    { label: "Tailwind", content: "v4" },
    { label: "Build", content: "Vite 6" },
  ];

  const timelineItems: TimelineItem[] = [
    {
      title: "Project started",
      timestamp: "Dec 2024",
      description: "Figma Make generated 84 components",
      color: "primary",
    },
    {
      title: "Docs written",
      timestamp: "Jan 2025",
      description: "29 component guides + design tokens",
      color: "success",
    },
    {
      title: "TS errors fixed",
      timestamp: "Mar 2025",
      description: "Zero-error clean build",
      color: "success",
    },
    {
      title: "Published",
      timestamp: "Mar 2025",
      description: "@baolq/ui@0.1.0 on npm",
      color: "success",
    },
    {
      title: "Integration",
      timestamp: "Soon™",
      description: "baole.space personal website",
      color: "default",
    },
  ];

  const stepsItems: StepItem[] = [
    { title: "Install", description: "pnpm add @baolq/ui" },
    { title: "Import CSS", description: "import '@baolq/ui/style.css'" },
    {
      title: "Use components",
      description: "import { Button } from '@baolq/ui'",
    },
    { title: "Ship it", description: "Deploy your project" },
  ];

  const stepperSteps: StepType[] = [
    { title: "Design", description: "Figma designs" },
    { title: "Build", description: "React components" },
    { title: "Test", description: "Zero TS errors" },
    { title: "Publish", description: "npm registry" },
  ];

  const treeData: TreeNode[] = [
    {
      key: "1",
      title: "src/components/",
      children: [
        { key: "1-1", title: "button.tsx" },
        { key: "1-2", title: "card.tsx" },
        { key: "1-3", title: "input.tsx" },
      ],
    },
    {
      key: "2",
      title: "src/styles/",
      children: [
        { key: "2-1", title: "baole-tokens.css" },
        { key: "2-2", title: "index.css" },
      ],
    },
    { key: "3", title: "package.json" },
    { key: "4", title: "vite.config.ts" },
  ];

  const transferItems: TransferItem[] = [
    { key: "1", title: "Button", description: "Core action component" },
    { key: "2", title: "Card", description: "Content container" },
    { key: "3", title: "Badge", description: "Status indicator" },
    { key: "4", title: "Input", description: "Text input field" },
    { key: "5", title: "Dialog", description: "Modal overlay" },
  ];

  const chartData = [
    { month: "Jan", downloads: 0, stars: 0, issues: 0 },
    { month: "Feb", downloads: 120, stars: 15, issues: 3 },
    { month: "Mar", downloads: 892, stars: 47, issues: 8 },
  ];

  const segmentedOptions: SegmentedOption[] = [
    { label: "Components", value: "components" },
    { label: "Tokens", value: "tokens" },
    { label: "Guidelines", value: "guidelines" },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        {/* Background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
          {/* ── HERO ──────────────────────────────────────────────────────── */}
          <section className="text-center space-y-6">
            <Heading level="h1" gradient>
              @baolq/ui
            </Heading>
            <Text size="lg" variant="secondary" className="max-w-2xl mx-auto">
              Complete component showcase — 84+ React components with
              dark-gradient design. Built with Radix UI primitives, CVA
              variants, and Tailwind CSS v4.
            </Text>
            <Space size="sm" wrap>
              <Badge variant="gradient" size="lg">
                v0.1.0
              </Badge>
              <Badge variant="success" size="lg" dot>
                84+ Components
              </Badge>
              <Badge variant="info" size="lg" dot>
                React 19
              </Badge>
              <Badge variant="secondary" size="lg">
                Tailwind v4
              </Badge>
            </Space>
          </section>

          {/* ── TYPOGRAPHY ────────────────────────────────────────────────── */}
          <section>
            <SH>Typography</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Heading</CardTitle>
                  <CardDescription>
                    h1–h6 with optional gradient
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-2">
                  <Heading level="h1">Heading 1 — baole.space</Heading>
                  <Heading level="h2" gradient>
                    Heading 2 — Gradient Text
                  </Heading>
                  <Heading level="h3">Heading 3 — Dark First</Heading>
                  <Heading level="h4">Heading 4 — Glassmorphism</Heading>
                  <Heading level="h5">Heading 5 — CVA Variants</Heading>
                  <Heading level="h6">Heading 6 — Zero TS Errors</Heading>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Text, Code & Kbd</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <Text size="xl">Extra large text</Text>
                  <Text size="lg" weight="semibold">
                    Large semibold text
                  </Text>
                  <Text size="md">
                    Default body — the quick brown fox jumps over the lazy dog
                  </Text>
                  <Text size="sm" variant="secondary">
                    Small secondary text
                  </Text>
                  <Text size="xs" variant="muted">
                    Extra small muted text
                  </Text>
                  <div className="flex flex-wrap gap-3 items-center pt-2">
                    <Code>npm install @baolq/ui</Code>
                    <Kbd size="sm">⌘K</Kbd>
                    <Kbd>Ctrl + K</Kbd>
                    <Kbd size="lg">Shift + ⌘ + P</Kbd>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── BUTTONS ────────────────────────────────────────────────────── */}
          <section>
            <SH>Buttons</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="sm">
                    <Button variant="gradient">Gradient</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="link">Link</Button>
                  </Space>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sizes, Icons & States</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <Space wrap size="sm">
                    <Button size="xs" variant="gradient">
                      XS
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
                      XL
                    </Button>
                    <Button size="icon" variant="gradient">
                      <Heart size={16} />
                    </Button>
                  </Space>
                  <Space wrap size="sm">
                    <Button variant="gradient" leftIcon={<Plus size={16} />}>
                      Create
                    </Button>
                    <Button
                      variant="outline"
                      rightIcon={<ArrowRight size={16} />}
                    >
                      Continue
                    </Button>
                    <Button variant="success" leftIcon={<Download size={16} />}>
                      Download
                    </Button>
                    <Button variant="ghost" loading>
                      Loading
                    </Button>
                    <Button
                      variant="destructive"
                      leftIcon={<Trash2 size={16} />}
                      disabled
                    >
                      Disabled
                    </Button>
                  </Space>
                  <Button variant="gradient" fullWidth>
                    Full Width Button
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── BADGE / TAG / CHIP ─────────────────────────────────────────── */}
          <section>
            <SH>Badge / Tag / Chip</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Badge</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <Space wrap size="sm">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="gradient">Gradient</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="destructive">Error</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                  </Space>
                  <Space wrap size="sm">
                    <Badge variant="success" dot>
                      Online
                    </Badge>
                    <Badge variant="warning" dot>
                      Away
                    </Badge>
                    <Badge variant="destructive" dot>
                      Busy
                    </Badge>
                    <Badge size="sm" variant="gradient">
                      SM
                    </Badge>
                    <Badge size="lg" variant="gradient">
                      LG
                    </Badge>
                    <Badge variant="outline" removable onRemove={() => {}}>
                      Removable
                    </Badge>
                  </Space>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tag</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="sm">
                    <Tag variant="default">Default</Tag>
                    <Tag variant="solid">Solid</Tag>
                    <Tag variant="gradient">Gradient</Tag>
                    <Tag variant="success">Success</Tag>
                    <Tag variant="warning">Warning</Tag>
                    <Tag variant="error">Error</Tag>
                    <Tag variant="info">Info</Tag>
                    <Tag variant="gradient" closable onClose={() => {}}>
                      Closable
                    </Tag>
                    <Tag variant="info" icon={<Star size={12} />}>
                      Featured
                    </Tag>
                  </Space>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chip</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="sm">
                    <Chip>Default</Chip>
                    <Chip variant="gradient">Gradient</Chip>
                    <Chip variant="solid">Solid</Chip>
                    <Chip leftIcon={<Camera size={14} />}>Photography</Chip>
                    <Chip variant="gradient" onRemove={() => {}}>
                      Removable
                    </Chip>
                  </Space>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── CARDS ──────────────────────────────────────────────────────── */}
          <section>
            <SH>Cards</SH>
            <Grid cols={2} gap="lg">
              <Card variant="glass" hoverable>
                <CardHeader>
                  <CardTitle>Glass Card</CardTitle>
                  <CardDescription>Frosted glass effect</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Text size="sm" variant="secondary">
                    Glassmorphism with backdrop blur — perfect for dark
                    interfaces.
                  </Text>
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
                  <CardTitle>Gradient Border</CardTitle>
                  <CardDescription>Premium gradient border</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Text size="sm" variant="secondary">
                    Hover to see elevation. The gradient border creates a
                    highlighted appearance.
                  </Text>
                </CardContent>
                <CardFooter>
                  <Badge variant="gradient">Featured</Badge>
                </CardFooter>
              </Card>
              <Card variant="solid">
                <CardHeader>
                  <CardTitle>Solid Card</CardTitle>
                  <CardDescription>Strong emphasis</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Text size="sm" variant="secondary">
                    Use for important content requiring visual separation.
                  </Text>
                </CardContent>
              </Card>
              <Card variant="outlined" hoverable>
                <CardHeader>
                  <CardTitle>Outlined Card</CardTitle>
                  <CardDescription>Transparent with border</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Text size="sm" variant="secondary">
                    Great for secondary content without heavy visual weight.
                  </Text>
                </CardContent>
              </Card>
            </Grid>
          </section>

          {/* ── FORM CONTROLS ──────────────────────────────────────────────── */}
          <section>
            <SH>Form Controls</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Input</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <Grid cols={2} gap="md">
                    <Input
                      label="Username"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter username"
                      hint="Your unique handle"
                      clearable
                      onClear={() => setInputValue("")}
                    />
                    <Input
                      label="Search"
                      placeholder="Search components…"
                      leftIcon={<Search size={16} />}
                    />
                    <Input
                      label="Email"
                      value="user@baole.space"
                      status="success"
                      hint="Verified ✓"
                      readOnly
                    />
                    <Input
                      label="Password"
                      placeholder="Enter password"
                      status="error"
                      error="Password too weak"
                    />
                    <Input label="Loading" placeholder="Fetching…" loading />
                    <Input
                      label="Disabled"
                      placeholder="Cannot edit"
                      disabled
                    />
                  </Grid>
                  <Space direction="vertical" size="sm" className="w-full">
                    <Input size="sm" placeholder="Small input" />
                    <Input size="md" placeholder="Medium input (default)" />
                    <Input size="lg" placeholder="Large input" />
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Form Controls</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Grid cols={2} gap="lg">
                    <div className="space-y-2">
                      <Label>InputNumber</Label>
                      <InputNumber
                        value={inputNumber}
                        onChange={(v) => setInputNumber(v ?? 42)}
                        min={0}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Textarea</Label>
                      <Textarea
                        value={textarea}
                        onChange={(e) => setTextarea(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Select</Label>
                      <Select value={select} onValueChange={setSelect}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pick framework" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vite">Vite</SelectItem>
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="remix">Remix</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Slider — {slider[0]}%</Label>
                      <Slider
                        value={slider}
                        onValueChange={setSlider}
                        min={0}
                        max={100}
                        step={5}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Rating</Label>
                      <Rating value={rating} onChange={setRating} max={5} />
                    </div>
                    <div className="space-y-2">
                      <Label>ColorPicker</Label>
                      <ColorPicker
                        value={color}
                        onChange={setColor}
                        showInput
                        presetColors={[
                          "#8b5cf6",
                          "#d946ef",
                          "#ec4899",
                          "#06b6d4",
                          "#10b981",
                        ]}
                      />
                    </div>
                    <div className="flex items-center gap-6 pt-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="cb1"
                          checked={checkbox}
                          onCheckedChange={(v) => setCheckbox(!!v)}
                        />
                        <Label htmlFor="cb1">Agree to terms</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={switchOn}
                          onCheckedChange={setSwitchOn}
                        />
                        <Label>{switchOn ? "Dark mode" : "Light mode"}</Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Radio Group</Label>
                      <RadioGroup value={radio} onValueChange={setRadio}>
                        <div className="flex gap-4">
                          {["react", "vue", "svelte"].map((v) => (
                            <div key={v} className="flex items-center gap-1.5">
                              <RadioGroupItem value={v} id={`r-${v}`} />
                              <Label htmlFor={`r-${v}`} className="capitalize">
                                {v}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>InputOTP</CardTitle>
                  <CardDescription>One-time password input</CardDescription>
                </CardHeader>
                <CardContent className="pt-4 flex justify-center">
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Date / Time Pickers</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Grid cols={3} gap="md">
                    <div className="space-y-2">
                      <Label>DatePicker</Label>
                      <DatePicker
                        placeholder="Pick a date"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>TimePicker</Label>
                      <TimePicker
                        placeholder="Pick a time"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>DateRangePicker</Label>
                      <DateRangePicker
                        placeholder="Select range"
                        className="w-full"
                      />
                    </div>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── DATA ENTRY ─────────────────────────────────────────────────── */}
          <section>
            <SH>Data Entry</SH>
            <div className="space-y-6">
              <Grid cols={2} gap="lg">
                <Card>
                  <CardHeader>
                    <CardTitle>AutoComplete</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <AutoComplete
                      options={[
                        { value: "@baolq/ui", label: "@baolq/ui" },
                        { value: "@shadcn/ui", label: "@shadcn/ui" },
                        {
                          value: "@radix-ui/react-dialog",
                          label: "@radix-ui/react-dialog",
                        },
                        { value: "lucide-react", label: "lucide-react" },
                        { value: "tailwind-merge", label: "tailwind-merge" },
                      ]}
                      placeholder="Type to search packages…"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Cascader</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Cascader
                      options={[
                        {
                          value: "ui",
                          label: "UI Libraries",
                          children: [
                            {
                              value: "react",
                              label: "React",
                              children: [
                                { value: "baolq", label: "@baolq/ui" },
                                { value: "shadcn", label: "shadcn/ui" },
                              ],
                            },
                            {
                              value: "vue",
                              label: "Vue",
                              children: [{ value: "naive", label: "Naive UI" }],
                            },
                          ],
                        },
                        {
                          value: "state",
                          label: "State Mgmt",
                          children: [
                            { value: "zustand", label: "Zustand" },
                            { value: "jotai", label: "Jotai" },
                          ],
                        },
                      ]}
                      placeholder="Select tech stack"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>TreeSelect</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <TreeSelect
                      treeData={[
                        {
                          value: "src",
                          label: "src/",
                          children: [
                            {
                              value: "components",
                              label: "components/",
                              children: [
                                { value: "btn", label: "button.tsx" },
                                { value: "card", label: "card.tsx" },
                              ],
                            },
                            {
                              value: "styles",
                              label: "styles/",
                              children: [
                                { value: "tokens", label: "baole-tokens.css" },
                              ],
                            },
                          ],
                        },
                      ]}
                      placeholder="Select file…"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Upload</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Upload
                      accept="image/*"
                      multiple
                      maxSize={5}
                      listType="picture"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Card>
                <CardHeader>
                  <CardTitle>Transfer</CardTitle>
                  <CardDescription>
                    Move items between two lists
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Transfer
                    dataSource={transferItems}
                    targetKeys={transferTarget}
                    onChange={(keys) => setTransferTarget(keys)}
                    titles={["Available", "Selected"]}
                    showSearch
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── FEEDBACK ───────────────────────────────────────────────────── */}
          <section>
            <SH>Feedback</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alert</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <Alert variant="default">
                    <AlertTitle>Default</AlertTitle>
                    <AlertDescription>
                      Base alert for general information.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="success">
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                      @baolq/ui published successfully to npm!
                    </AlertDescription>
                  </Alert>
                  <Alert variant="warning">
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                      peerDependencies are optional — install what you use.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="error">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      ERR_PNPM_GIT_UNCLEAN — commit your changes first.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="info">
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>
                      84+ components, React 18+, Vite compatible.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <Progress value={100} label="Published ✓" />
                  <Progress value={75} variant="gradient" label="Guidelines" />
                  <Progress value={50} variant="gradient" label="Integration" />
                  <Progress value={25} label="Tests" />
                  <Progress
                    value={slider[0]}
                    label={`Dynamic — ${slider[0]}%`}
                    showValue
                  />
                </CardContent>
              </Card>

              <Grid cols={2} gap="lg">
                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <Skeleton variant="text" lines={3} />
                    <div className="flex gap-3 items-center">
                      <Skeleton variant="circle" width="40px" height="40px" />
                      <div className="flex-1">
                        <Skeleton variant="text" lines={2} />
                      </div>
                    </div>
                    <Skeleton variant="card" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Spinner</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex gap-6 items-center justify-center flex-wrap py-4">
                      <Spinner size="sm" />
                      <Spinner size="md" />
                      <Spinner size="lg" />
                      <Spinner size="xl" />
                      <Spinner size="lg" variant="primary" />
                      <Spinner size="lg" variant="secondary" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>EmptyState</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <EmptyState
                      icon={<Package size={48} className="text-purple-400" />}
                      title="No components yet"
                      description="Install @baolq/ui to get 84+ components."
                      action={
                        <Button
                          variant="gradient"
                          size="sm"
                          leftIcon={<Download size={14} />}
                        >
                          Install now
                        </Button>
                      }
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Result</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Result
                      status="success"
                      title="Published!"
                      subtitle="@baolq/ui@0.1.0 is live on npm."
                      extra={
                        <Button
                          size="sm"
                          variant="success"
                          leftIcon={<ExternalLink size={14} />}
                        >
                          View on npm
                        </Button>
                      }
                    />
                  </CardContent>
                </Card>
              </Grid>
            </div>
          </section>

          {/* ── OVERLAYS ───────────────────────────────────────────────────── */}
          <section>
            <SH>Overlays</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog / AlertDialog / Sheet</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="sm">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="gradient">Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>@baolq/ui</DialogTitle>
                          <DialogDescription>
                            A dark-gradient React component library. 84+
                            components built with Radix UI primitives.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <Badge variant="gradient">v0.1.0</Badge>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                          <Button variant="gradient" size="sm">
                            Confirm
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Package</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will unpublish @baolq/ui from npm. This action
                            cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Open Sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Component Browser</SheetTitle>
                          <SheetDescription>
                            Browse all 84+ components in @baolq/ui.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-4 space-y-2">
                          {[
                            "Button",
                            "Card",
                            "Badge",
                            "Input",
                            "Dialog",
                            "Table",
                          ].map((c) => (
                            <div
                              key={c}
                              className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <Text size="sm">{c}</Text>
                              <Badge variant="outline" size="sm">
                                stable
                              </Badge>
                            </div>
                          ))}
                        </div>
                        <SheetFooter>
                          <Button variant="gradient" className="w-full">
                            View all components
                          </Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popover / HoverCard / Tooltip</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="sm">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          rightIcon={<ChevronDown size={14} />}
                        >
                          Quick Stats
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="space-y-2">
                          <Heading level="h6">Package Stats</Heading>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <Text size="sm">Components</Text>
                              <Badge variant="gradient">84+</Badge>
                            </div>
                            <div className="flex justify-between">
                              <Text size="sm">TS Errors</Text>
                              <Badge variant="success">0</Badge>
                            </div>
                            <div className="flex justify-between">
                              <Text size="sm">Bundle</Text>
                              <Badge variant="info">432KB</Badge>
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="link">@baolq</Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex gap-3">
                          <Avatar fallback="BL" size="lg" />
                          <div className="space-y-1">
                            <Heading level="h6">Bao LE</Heading>
                            <Text size="xs" variant="muted">
                              Developer · Photographer · Gamer
                            </Text>
                            <Text size="xs" variant="secondary">
                              Author of @baolq/ui
                            </Text>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="secondary" size="icon">
                          <Info size={16} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        Built with Radix UI + CVA + Tailwind v4
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="secondary" size="icon">
                          <Settings size={16} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">Settings</TooltipContent>
                    </Tooltip>
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Command</CardTitle>
                  <CardDescription>Searchable command palette</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Command className="rounded-xl border border-white/10 max-w-lg">
                    <CommandInput placeholder="Search components…" />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Core">
                        <CommandItem>
                          <Box size={14} className="mr-2" />
                          Button <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                          <Layers size={14} className="mr-2" />
                          Card
                        </CommandItem>
                        <CommandItem>
                          <Bell size={14} className="mr-2" />
                          Badge
                        </CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="Form">
                        <CommandItem>
                          <Edit2 size={14} className="mr-2" />
                          Input
                        </CommandItem>
                        <CommandItem>
                          <Check size={14} className="mr-2" />
                          Select
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── NAVIGATION ─────────────────────────────────────────────────── */}
          <section>
            <SH>Navigation</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Breadcrumb</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">baole.space</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">@baolq/ui</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>button.tsx</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Segmented</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space direction="vertical" size="sm">
                    <Segmented
                      options={segmentedOptions}
                      value={segmented}
                      onChange={setSegmented}
                    />
                    <Segmented
                      options={segmentedOptions}
                      value={segmented}
                      onChange={setSegmented}
                      size="lg"
                    />
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Tabs defaultValue="core">
                    <TabsList>
                      <TabsTrigger value="core">Core (3)</TabsTrigger>
                      <TabsTrigger value="form">Form (11)</TabsTrigger>
                      <TabsTrigger value="overlay">Overlay (9)</TabsTrigger>
                      <TabsTrigger value="data">Data (13)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="core" className="pt-4">
                      <Space wrap size="sm">
                        <Badge variant="gradient">Button</Badge>
                        <Badge variant="gradient">Card</Badge>
                        <Badge variant="gradient">Badge</Badge>
                      </Space>
                    </TabsContent>
                    <TabsContent value="form" className="pt-4">
                      <Space wrap size="sm">
                        {[
                          "Input",
                          "InputNumber",
                          "Textarea",
                          "Checkbox",
                          "Switch",
                          "RadioGroup",
                          "Label",
                          "Slider",
                          "Select",
                          "InputOTP",
                          "Rating",
                        ].map((c) => (
                          <Badge key={c} variant="info">
                            {c}
                          </Badge>
                        ))}
                      </Space>
                    </TabsContent>
                    <TabsContent value="overlay" className="pt-4">
                      <Space wrap size="sm">
                        {[
                          "Dialog",
                          "AlertDialog",
                          "Sheet",
                          "Drawer",
                          "Modal",
                          "Popover",
                          "HoverCard",
                          "Tooltip",
                          "Command",
                        ].map((c) => (
                          <Badge key={c} variant="warning">
                            {c}
                          </Badge>
                        ))}
                      </Space>
                    </TabsContent>
                    <TabsContent value="data" className="pt-4">
                      <Space wrap size="sm">
                        {[
                          "Avatar",
                          "Table",
                          "Calendar",
                          "Carousel",
                          "Image",
                          "Statistic",
                          "List",
                          "Descriptions",
                          "Timeline",
                          "Stepper",
                          "Tag",
                          "Tree",
                          "QRCode",
                        ].map((c) => (
                          <Badge key={c} variant="success">
                            {c}
                          </Badge>
                        ))}
                      </Space>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="install">
                      <AccordionTrigger>How to install?</AccordionTrigger>
                      <AccordionContent>
                        <Code block>pnpm add @baolq/ui lucide-react</Code>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="use">
                      <AccordionTrigger>
                        How to use components?
                      </AccordionTrigger>
                      <AccordionContent>
                        <Code block>
                          {"import { Button } from '@baolq/ui'"}
                        </Code>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="css">
                      <AccordionTrigger>Import styles?</AccordionTrigger>
                      <AccordionContent>
                        <Code block>{"import '@baolq/ui/style.css'"}</Code>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>DropdownMenu & ContextMenu</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="sm">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          rightIcon={<ChevronDown size={14} />}
                        >
                          Actions
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Package Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Download size={14} className="mr-2" />
                          Install
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit2 size={14} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ExternalLink size={14} className="mr-2" />
                          View on npm
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-400">
                          <Trash2 size={14} className="mr-2" />
                          Unpublish
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <ContextMenu>
                      <ContextMenuTrigger asChild>
                        <div className="px-4 py-3 rounded-lg border border-dashed border-white/20 text-sm text-white/50 cursor-context-menu select-none">
                          Right-click me
                        </div>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuLabel>Component</ContextMenuLabel>
                        <ContextMenuSeparator />
                        <ContextMenuItem>
                          <Eye size={14} className="mr-2" />
                          View source
                        </ContextMenuItem>
                        <ContextMenuItem>
                          <Copy size={14} className="mr-2" />
                          Copy import
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Steps</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <Steps
                    items={stepsItems}
                    current={stepsStep}
                    onStepChange={setStepsStep}
                  />
                  <Space size="sm">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setStepsStep(Math.max(0, stepsStep - 1))}
                    >
                      Prev
                    </Button>
                    <Button
                      size="sm"
                      variant="gradient"
                      onClick={() =>
                        setStepsStep(
                          Math.min(stepsItems.length - 1, stepsStep + 1),
                        )
                      }
                    >
                      Next
                    </Button>
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Stepper</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <Stepper
                    steps={stepperSteps}
                    currentStep={stepperStep}
                    variant="gradient"
                  />
                  <Space size="sm">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        setStepperStep(Math.max(0, stepperStep - 1))
                      }
                    >
                      Prev
                    </Button>
                    <Button
                      size="sm"
                      variant="gradient"
                      onClick={() =>
                        setStepperStep(
                          Math.min(stepperSteps.length - 1, stepperStep + 1),
                        )
                      }
                    >
                      Next
                    </Button>
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pagination</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setPage(Math.max(1, page - 1))}
                        />
                      </PaginationItem>
                      {[1, 2, 3].map((p) => (
                        <PaginationItem key={p}>
                          <PaginationLink
                            isActive={page === p}
                            onClick={() => setPage(p)}
                          >
                            {p}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      {[8, 9, 10].map((p) => (
                        <PaginationItem key={p}>
                          <PaginationLink
                            isActive={page === p}
                            onClick={() => setPage(p)}
                          >
                            {p}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setPage(Math.min(10, page + 1))}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── DATA DISPLAY ───────────────────────────────────────────────── */}
          <section>
            <SH>Data Display</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="sm">
                    {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
                      <Avatar key={size} size={size} fallback="BL" />
                    ))}
                    <Avatar
                      size="lg"
                      src="https://github.com/octocat.png"
                      alt="octocat"
                    />
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistic</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Grid cols={4} gap="md">
                    <Statistic title="Components" value={84} suffix="+" />
                    <Statistic
                      title="TS Errors"
                      value={0}
                      trend="down"
                      trendValue="11 fixed"
                    />
                    <Statistic title="Bundle" value="432" suffix="KB" />
                    <Statistic
                      title="Downloads"
                      value={892}
                      trend="up"
                      trendValue="+23%"
                    />
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Table</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Radix</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "Button", cat: "Core", radix: false },
                        { name: "Dialog", cat: "Overlay", radix: true },
                        { name: "Select", cat: "Form", radix: true },
                        { name: "Calendar", cat: "Data Display", radix: false },
                        { name: "Command", cat: "Overlay", radix: true },
                      ].map((row) => (
                        <TableRow key={row.name}>
                          <TableCell className="font-medium">
                            {row.name}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" size="sm">
                              {row.cat}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="success" dot>
                              stable
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {row.radix ? (
                              <Check size={14} className="text-emerald-400" />
                            ) : (
                              "—"
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>List</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <List items={listItems} bordered hoverable divided />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Descriptions</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Descriptions
                    title="Package Info"
                    items={descItems}
                    columns={3}
                    bordered
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Timeline</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Timeline items={timelineItems} variant="gradient" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tree</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Tree
                    treeData={treeData}
                    checkable
                    checkedKeys={treeChecked}
                    expandedKeys={treeExpanded}
                    onCheck={setTreeChecked}
                    onExpand={setTreeExpanded}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>QRCode</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Space wrap size="xl">
                    <QRCode
                      value="https://npmjs.com/package/@baolq/ui"
                      size={120}
                      level="M"
                    />
                    <QRCode
                      value="https://baole.space"
                      size={120}
                      level="H"
                      fgColor="#8b5cf6"
                    />
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Carousel</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Carousel className="w-full max-w-lg mx-auto">
                    <CarouselContent>
                      {[
                        "Button — 7 variants",
                        "Card — 4 variants",
                        "Badge — 8 variants",
                        "Input — rich validation",
                        "Dialog — accessible",
                      ].map((item, i) => (
                        <CarouselItem key={i}>
                          <Card
                            variant="gradient"
                            className="text-center py-10 px-4"
                          >
                            <Heading level="h4">{item}</Heading>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Image</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Grid cols={3} gap="md">
                    <UIImage
                      src="https://picsum.photos/seed/baolq1/400/300"
                      alt="landscape"
                      aspectRatio="video"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                    <UIImage
                      src="https://picsum.photos/seed/baolq2/400/400"
                      alt="square"
                      aspectRatio="square"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                    <UIImage
                      src="https://invalid.xyz/404.jpg"
                      alt="fallback"
                      aspectRatio="video"
                      fallback={
                        <div className="flex items-center justify-center h-full bg-white/5 rounded-xl">
                          <Text size="sm" variant="muted">
                            Image failed to load
                          </Text>
                        </div>
                      }
                    />
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex justify-center">
                  <Calendar mode="single" />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── CHARTS ─────────────────────────────────────────────────────── */}
          <section>
            <SH>Charts</SH>
            <Grid cols={2} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>LineChart</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <LineChart
                    data={chartData}
                    xKey="month"
                    lines={[
                      {
                        dataKey: "downloads",
                        name: "Downloads",
                        color: "#8b5cf6",
                      },
                      { dataKey: "stars", name: "Stars", color: "#d946ef" },
                    ]}
                    height={200}
                    showLegend
                    showGrid
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>BarChart</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <BarChart
                    data={chartData}
                    xKey="month"
                    bars={[
                      {
                        dataKey: "downloads",
                        name: "Downloads",
                        color: "#8b5cf6",
                      },
                      { dataKey: "issues", name: "Issues", color: "#f59e0b" },
                    ]}
                    height={200}
                    showLegend
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AreaChart</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <AreaChart
                    data={chartData}
                    xKey="month"
                    areas={[
                      {
                        dataKey: "downloads",
                        name: "Downloads",
                        color: "#8b5cf6",
                      },
                    ]}
                    height={200}
                    showGrid
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>PieChart</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <PieChart
                    data={[
                      { name: "Form", value: 11 },
                      { name: "Overlay", value: 9 },
                      { name: "Navigation", value: 11 },
                      { name: "Data Display", value: 13 },
                      { name: "Layout", value: 14 },
                      { name: "Other", value: 26 },
                    ]}
                    height={200}
                    showLegend
                  />
                </CardContent>
              </Card>
            </Grid>
          </section>

          {/* ── LAYOUT ─────────────────────────────────────────────────────── */}
          <section>
            <SH>Layout</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Stack & Space</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <Text size="sm" variant="muted">
                    Stack horizontal:
                  </Text>
                  <Stack direction="row" spacing="sm">
                    <Badge variant="gradient">React</Badge>
                    <Badge variant="info">Vite</Badge>
                    <Badge variant="success">pnpm</Badge>
                    <Badge variant="warning">Tailwind</Badge>
                  </Stack>
                  <Text size="sm" variant="muted">
                    Space wrap:
                  </Text>
                  <Space wrap size="sm">
                    {[
                      "@baolq/ui",
                      "lucide-react",
                      "clsx",
                      "tailwind-merge",
                      "class-variance-authority",
                      "canvas-confetti",
                    ].map((d) => (
                      <Tag key={d} variant="solid">
                        {d}
                      </Tag>
                    ))}
                  </Space>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grid</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Grid cols={4} gap="sm">
                    {[
                      "Button",
                      "Card",
                      "Badge",
                      "Input",
                      "Dialog",
                      "Tooltip",
                      "Select",
                      "Avatar",
                    ].map((c) => (
                      <GridItem
                        key={c}
                        className="bg-white/5 rounded-lg p-3 text-center"
                      >
                        <Text size="xs" variant="secondary">
                          {c}
                        </Text>
                      </GridItem>
                    ))}
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ScrollArea</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ScrollArea className="h-40 rounded-lg border border-white/10">
                    <div className="p-4 space-y-2">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Badge variant="outline" size="sm">
                            #{i + 1}
                          </Badge>
                          <Text size="sm" variant="secondary">
                            Component #{i + 1} — @baolq/ui
                          </Text>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resizable Panels</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ResizablePanelGroup
                    direction="horizontal"
                    className="rounded-lg border border-white/10 min-h-[120px]"
                  >
                    <ResizablePanel defaultSize={30} minSize={20}>
                      <div className="h-full flex items-center justify-center p-4">
                        <Text size="sm" variant="muted">
                          Sidebar
                        </Text>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel>
                      <div className="h-full flex items-center justify-center p-4">
                        <Text size="sm" variant="muted">
                          Main Content
                        </Text>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Separator & Divider</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <Separator />
                  <Separator variant="gradient" />
                  <Divider>Components</Divider>
                  <Divider variant="gradient">Design System</Divider>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AspectRatio</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Grid cols={3} gap="md">
                    {[
                      ["16/9", 16 / 9, "from-purple-500/30 to-fuchsia-500/30"],
                      ["1/1", 1, "from-fuchsia-500/30 to-pink-500/30"],
                      ["4/3", 4 / 3, "from-blue-500/30 to-purple-500/30"],
                    ].map(([label, ratio, gradient]) => (
                      <div key={label as string}>
                        <Text size="xs" variant="muted" className="mb-1">
                          {label as string}
                        </Text>
                        <AspectRatio
                          ratio={ratio as number}
                          className={cn(
                            "bg-gradient-to-br rounded-lg flex items-center justify-center",
                            gradient as string,
                          )}
                        >
                          <Text size="xs">{label as string}</Text>
                        </AspectRatio>
                      </div>
                    ))}
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Watermark</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Watermark
                    content="@baolq/ui"
                    font={{ color: "rgba(139,92,246,0.15)", fontSize: 14 }}
                    gap={[80, 60]}
                  >
                    <div className="h-32 rounded-lg border border-white/10 flex items-center justify-center">
                      <Text size="sm" variant="muted">
                        Watermarked content area
                      </Text>
                    </div>
                  </Watermark>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── UTILITY ────────────────────────────────────────────────────── */}
          <section>
            <SH>Utility</SH>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Toggle & ToggleGroup</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <Space size="sm">
                    <Toggle
                      pressed={toggleBold}
                      onPressedChange={setToggleBold}
                      aria-label="Bold"
                    >
                      <Bold size={16} />
                    </Toggle>
                    <Toggle
                      pressed={toggleItalic}
                      onPressedChange={setToggleItalic}
                      aria-label="Italic"
                    >
                      <Italic size={16} />
                    </Toggle>
                  </Space>
                  <ToggleGroup
                    type="single"
                    value={toggleGroup}
                    onValueChange={(v) => v && setToggleGroup(v)}
                  >
                    <ToggleGroupItem value="left" aria-label="Left">
                      <AlignLeft size={16} />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Center">
                      <AlignCenter size={16} />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Right">
                      <AlignRight size={16} />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Collapsible</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Collapsible
                    open={collapsibleOpen}
                    onOpenChange={setCollapsibleOpen}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="outline"
                        rightIcon={
                          <ChevronDown
                            size={14}
                            className={cn(
                              "transition-transform",
                              collapsibleOpen && "rotate-180",
                            )}
                          />
                        }
                      >
                        @baolq/ui bundled dependencies
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <div className="space-y-1 pl-4">
                        {[
                          "class-variance-authority",
                          "clsx",
                          "tailwind-merge",
                          "canvas-confetti",
                          "date-fns",
                          "tw-animate-css",
                        ].map((dep) => (
                          <div key={dep} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <Code>{dep}</Code>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* ── FOOTER ─────────────────────────────────────────────────────── */}
          <footer className="text-center py-12">
            <Separator variant="gradient" className="mb-8" />
            <Space direction="vertical" size="xs" className="items-center">
              <Text size="sm" variant="secondary">
                @baolq/ui v0.1.0 — Built for the baole.space ecosystem
              </Text>
              <Text size="xs" variant="muted" className="italic">
                "In code we trust, in games we clutch, in photos we overexpose
                (+0.3 EV)"
              </Text>
            </Space>
          </footer>
        </div>

        {/* ── FIXED FLOATING ──────────────────────────────────────────────── */}
        <FloatButton
          icon={<Star size={18} />}
          tooltip="Star @baolq/ui"
          variant="primary"
          shape="circle"
        />
        <BackTop />
      </div>

      <Toaster />
    </TooltipProvider>
  );
}
