"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutGrid, 
  MousePointer2, 
  ToggleLeft, 
  TextCursorInput, 
  ListChecks, 
  ChevronDown, 
  SlidersHorizontal, 
  Menu as MenuIcon,
  Layers,
  MessageSquare,
  Bell,
  Loader2,
  AlertCircle,
  Info,
  Calendar,
  Tag,
  Sparkles,
  Table,
  PanelLeft,
  Home
} from "lucide-react";

const components = [
  { name: "Overview", href: "/design-system", icon: Home },
  { name: "App Dashboard", href: "/", icon: LayoutGrid },
  { name: "Button", href: "/components/button", icon: MousePointer2 },
  { name: "Checkbox", href: "/components/checkbox", icon: ListChecks },
  { name: "Switch", href: "/components/switch", icon: ToggleLeft },
  { name: "TextField", href: "/components/textfield", icon: TextCursorInput },
  { name: "Select", href: "/components/select", icon: ChevronDown },
  { name: "Slider", href: "/components/slider", icon: SlidersHorizontal },
  { name: "Menu", href: "/components/menu", icon: MenuIcon },
  { name: "Tabs", href: "/components/tabs", icon: Layers },
  { name: "Dialog", href: "/components/dialog", icon: MessageSquare },
  { name: "Modal", href: "/components/modal", icon: PanelLeft },
  { name: "Toast", href: "/components/toast", icon: Bell },
  { name: "Loading", href: "/components/spinner", icon: Loader2 },
  { name: "Alert", href: "/components/alert", icon: AlertCircle },
  { name: "Tooltip", href: "/components/tooltip", icon: Info },
  { name: "Calendar", href: "/components/calendar", icon: Calendar },
  { name: "Badge", href: "/components/badge", icon: Tag },
  { name: "Progress", href: "/components/progress", icon: Sparkles },
  { name: "Table", href: "/components/table", icon: Table },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center gap-3 border-b border-border px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <LayoutGrid className="h-4 w-4 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Falcon UI</h1>
            <p className="text-xs text-muted-foreground">Design System</p>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Components
          </div>
          <ul className="space-y-1">
            {components.map((component) => {
              const Icon = component.icon;
              const isActive = pathname === component.href || (component.href === "/design-system" && pathname.startsWith("/components"));
              
              return (
                <li key={component.name}>
                  <Link
                    href={component.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {component.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="border-t border-border p-4">
          <div className="rounded-lg bg-muted p-3">
            <p className="text-xs text-muted-foreground">
              Built with React Aria Components
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
