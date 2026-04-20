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
    <aside className="fixed left-0 top-0 z-40 h-screen w-56 border-r border-[#dee3e5] bg-white">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-14 items-center justify-between border-b border-[#dee3e5] px-4">
          <span className="text-lg font-semibold text-[#2d3e4f]">AgVend</span>
          <button className="rounded p-1 text-[#6f7578] hover:bg-[#f0f1f2]">
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              {section.label && (
                <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-[#6f7578]">
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
                        className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                          isActive || item.isActive
                            ? "bg-[#f0f1f2] text-[#2d3e4f] font-medium"
                            : "text-[#404547] hover:bg-[#f0f1f2]"
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
            <div className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-[#6f7578]">
              Chats
            </div>
            <ul className="space-y-0.5">
              {chatItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#404547] transition-colors hover:bg-[#f0f1f2]"
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

        {/* Design System Link */}
        <div className="border-t border-[#dee3e5] p-3">
          <Link
            href="/design-system"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-[#6f7578] transition-colors hover:bg-[#f0f1f2] hover:text-[#404547]"
          >
            <Palette className="h-4 w-4" />
            <span>Design System</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
