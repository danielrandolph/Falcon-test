"use client";

import { useState } from "react";
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
  PanelLeftOpen,
  PanelLeftClose,
  Palette,
} from "lucide-react";
import { Button, Separator, Tooltip, TooltipTrigger } from "../falcon-ui-kit/dist/index.js";
import { useSidebar } from "./sidebar-context";

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
  const { collapsed, setCollapsed } = useSidebar();
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <aside
      className="fixed left-0 top-0 z-40 h-screen border-r border-neutral-200 font-sans transition-all duration-200"
      style={{
        backgroundColor: "#F0F1F2",
        width: collapsed ? "3.5rem" : "14rem",
      }}
    >
      <div className="flex h-full flex-col overflow-hidden">
        {/* Logo / Header */}
        <div
          className={`flex h-14 shrink-0 items-center border-b border-neutral-200 ${collapsed ? "justify-center px-0" : "justify-between px-4"}`}
        >
          {collapsed ? (
            /* Collapsed: clicking logo opens sidebar */
            <button
              onClick={() => setCollapsed(false)}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-neutral-200"
              aria-label="Expand sidebar"
            >
              {logoHovered ? (
                <PanelLeftOpen className="h-4 w-4 text-neutral-600" />
              ) : (
                <img
                  src="/agvend-logo-short.svg"
                  alt="AgVend"
                  width={27}
                  height={17}
                  className="block"
                />
              )}
            </button>
          ) : (
            <>
              <Link href="/" aria-label="AgVend home">
                <img
                  src="/agvend-logo.svg"
                  alt="AgVend"
                  width={76}
                  height={16}
                  className="block"
                />
              </Link>
              <Button
                variant="quiet"
                className="h-8 w-8 px-0"
                onPress={() => setCollapsed(true)}
                aria-label="Collapse sidebar"
              >
                <PanelLeftClose className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-4">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              {section.label && !collapsed && (
                <div className="mb-1 px-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {section.label}
                </div>
              )}
              {section.label && collapsed && (
                <Separator className="my-2" />
              )}
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || item.isActive;

                  const linkEl = (
                    <Link
                      href={item.href}
                      className={`flex items-center rounded-lg px-2 py-1.5 text-sm transition-colors ${
                        collapsed ? "justify-center" : "gap-2"
                      } ${
                        isActive
                          ? "bg-neutral-200 text-neutral-800 font-medium"
                          : "text-neutral-600 hover:bg-neutral-200/60"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.name}</span>}
                    </Link>
                  );

                  return (
                    <li key={item.name}>
                      {collapsed ? (
                        <TooltipTrigger>
                          {linkEl}
                          <Tooltip placement="right">{item.name}</Tooltip>
                        </TooltipTrigger>
                      ) : (
                        linkEl
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Chats Section */}
          {!collapsed && (
            <div className="mb-4">
              <div className="mb-1 px-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                Chats
              </div>
              <ul className="space-y-0.5">
                {chatItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-200/60"
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {collapsed && (
            <>
              <Separator className="my-2" />
              {chatItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <TooltipTrigger key={index}>
                    <Link
                      href={item.href}
                      className="mb-0.5 flex items-center justify-center rounded-lg px-2 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-200/60"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                    </Link>
                    <Tooltip placement="right">{item.name}</Tooltip>
                  </TooltipTrigger>
                );
              })}
            </>
          )}
        </nav>

        <Separator />

        {/* Design System Link */}
        <div className="p-2">
          {collapsed ? (
            <TooltipTrigger>
              <Link
                href="/design-system"
                className="flex items-center justify-center rounded-lg px-2 py-1.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-200/60"
              >
                <Palette className="h-4 w-4 shrink-0" />
              </Link>
              <Tooltip placement="right">Design System</Tooltip>
            </TooltipTrigger>
          ) : (
            <Link
              href="/design-system"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-200/60"
            >
              <Palette className="h-4 w-4 shrink-0" />
              <span>Design System</span>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
