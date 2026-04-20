import { DocsLayout } from "@/components/docs-layout";
import { 
  MousePointer2, 
  ToggleLeft, 
  TextCursorInput, 
  ListChecks,
  ChevronDown,
  SlidersHorizontal,
  Menu,
  Layers,
  MessageSquare,
  PanelLeft,
  Bell,
  Loader2,
  AlertCircle,
  Info,
  Calendar,
  Tag,
  Sparkles,
  Table
} from "lucide-react";
import Link from "next/link";

const components = [
  { name: "Button", href: "/components/button", icon: MousePointer2, description: "Interactive buttons with multiple variants and states" },
  { name: "Checkbox", href: "/components/checkbox", icon: ListChecks, description: "Checkboxes for selecting multiple options" },
  { name: "Switch", href: "/components/switch", icon: ToggleLeft, description: "Toggle switches for on/off states" },
  { name: "TextField", href: "/components/textfield", icon: TextCursorInput, description: "Text inputs with labels and validation" },
  { name: "Select", href: "/components/select", icon: ChevronDown, description: "Dropdown selection components" },
  { name: "Slider", href: "/components/slider", icon: SlidersHorizontal, description: "Range sliders for numeric input" },
  { name: "Menu", href: "/components/menu", icon: Menu, description: "Contextual menus and dropdowns" },
  { name: "Tabs", href: "/components/tabs", icon: Layers, description: "Tabbed content navigation" },
  { name: "Dialog", href: "/components/dialog", icon: MessageSquare, description: "Dialogs and alert dialogs" },
  { name: "Modal", href: "/components/modal", icon: PanelLeft, description: "Modal overlays for focused content" },
  { name: "Toast", href: "/components/toast", icon: Bell, description: "Toast notifications for feedback" },
  { name: "Loading", href: "/components/spinner", icon: Loader2, description: "Loading indicators" },
  { name: "Alert", href: "/components/alert", icon: AlertCircle, description: "Alert banners for important messages" },
  { name: "Tooltip", href: "/components/tooltip", icon: Info, description: "Tooltips for additional context" },
  { name: "Calendar", href: "/components/calendar", icon: Calendar, description: "Date picking components" },
  { name: "Badge", href: "/components/badge", icon: Tag, description: "Small status indicators" },
  { name: "Progress", href: "/components/progress", icon: Sparkles, description: "Progress bars and indicators" },
  { name: "Table", href: "/components/table", icon: Table, description: "Data tables with sorting and selection" },
];

export default function DesignSystem() {
  return (
    <DocsLayout>
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          Falcon UI Kit
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A comprehensive design system built with React Aria Components. 
          Accessible, customizable, and production-ready components for building 
          modern web applications.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Getting Started</h2>
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-2 font-medium text-foreground">Installation</h3>
          <pre className="rounded-lg bg-background p-4">
            <code className="text-muted-foreground">npm install @sinoalice/falcon-ui-kit</code>
          </pre>
          <h3 className="mb-2 mt-4 font-medium text-foreground">Usage</h3>
          <pre className="rounded-lg bg-background p-4">
            <code className="text-muted-foreground">{`import { Button } from "@sinoalice/falcon-ui-kit";
import "@sinoalice/falcon-ui-kit/dist/index.css";

function App() {
  return <Button variant="primary">Click me</Button>;
}`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Components</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => {
            const Icon = component.icon;
            return (
              <Link
                key={component.name}
                href={component.href}
                className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent hover:bg-card/80"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-accent">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
                </div>
                <h3 className="mb-1 font-medium text-foreground">{component.name}</h3>
                <p className="text-sm text-muted-foreground">{component.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </DocsLayout>
  );
}
