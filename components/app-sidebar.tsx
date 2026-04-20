"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Settings2,
  Target,
  Users,
  FileText,
  CheckSquare,
  Calendar,
  MessageSquare,
  Plus,
  PanelLeftClose,
  Palette,
} from "lucide-react";
import { Button, Separator } from "../falcon-ui-kit/dist/index.js";

const navSections = [
  {
    items: [
      { name: "Actions", href: "/", icon: Settings2, isActive: true },
    ],
  },
  {
    label: "Records",
    items: [
      { name: "Opportunities", href: "/opportunities", icon: Target },
      { name: "Clients", href: "/clients", icon: Users },
    ],
  },
  {
    label: "Resources",
    items: [
      { name: "Notes", href: "/notes", icon: FileText },
      { name: "Tasks", href: "/tasks", icon: CheckSquare },
      { name: "Meetings", href: "/meetings", icon: Calendar },
    ],
  },
];

const chatItems = [
  { name: "New chat", href: "/chat/new", icon: Plus },
  { name: "What should I do t...", href: "/chat/1", icon: MessageSquare },
  { name: "I want to create an...", href: "/chat/2", icon: MessageSquare },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-56 border-r border-neutral-200 bg-white font-sans">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-14 items-center justify-between px-4">
          <span className="text-lg font-semibold text-neutral-800">AgVend</span>
          <Button variant="quiet" className="h-8 w-8 px-0">
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        </div>
        
        <Separator />

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              {section.label && (
                <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {section.label}
                </div>
              )}
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors ${
                          isActive || item.isActive
                            ? "bg-neutral-100 text-neutral-800 font-medium"
                            : "text-neutral-600 hover:bg-neutral-50"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Chats Section */}
          <div className="mb-4">
            <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
              Chats
            </div>
            <ul className="space-y-0.5">
              {chatItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-50"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <Separator />

        {/* Design System Link */}
        <div className="p-3">
          <Link
            href="/design-system"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-700"
          >
            <Palette className="h-4 w-4" />
            <span>Design System</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
