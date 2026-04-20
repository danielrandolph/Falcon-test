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
    <aside className="tw:fixed tw:left-0 tw:top-0 tw:z-40 tw:h-screen tw:w-56 tw:border-r tw:border-neutral-200 tw:bg-white tw:font-sans">
      <div className="tw:flex tw:h-full tw:flex-col">
        {/* Logo */}
        <div className="tw:flex tw:h-14 tw:items-center tw:justify-between tw:px-4">
          <span className="tw:text-lg tw:font-semibold tw:text-neutral-800">AgVend</span>
          <Button variant="quiet" className="tw:h-8 tw:w-8 tw:px-0">
            <PanelLeftClose className="tw:h-4 tw:w-4" />
          </Button>
        </div>
        
        <Separator />

        {/* Navigation */}
        <nav className="tw:flex-1 tw:overflow-y-auto tw:px-3 tw:py-4">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="tw:mb-4">
              {section.label && (
                <div className="tw:mb-2 tw:px-2 tw:text-xs tw:font-medium tw:uppercase tw:tracking-wider tw:text-neutral-500">
                  {section.label}
                </div>
              )}
              <ul className="tw:space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`tw:flex tw:items-center tw:gap-2 tw:rounded-lg tw:px-2 tw:py-1.5 tw:text-sm tw:transition-colors ${
                          isActive || item.isActive
                            ? "tw:bg-neutral-100 tw:text-neutral-800 tw:font-medium"
                            : "tw:text-neutral-600 tw:hover:bg-neutral-50"
                        }`}
                      >
                        <Icon className="tw:h-4 tw:w-4" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Chats Section */}
          <div className="tw:mb-4">
            <div className="tw:mb-2 tw:px-2 tw:text-xs tw:font-medium tw:uppercase tw:tracking-wider tw:text-neutral-500">
              Chats
            </div>
            <ul className="tw:space-y-0.5">
              {chatItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="tw:flex tw:items-center tw:gap-2 tw:rounded-lg tw:px-2 tw:py-1.5 tw:text-sm tw:text-neutral-600 tw:transition-colors tw:hover:bg-neutral-50"
                    >
                      <Icon className="tw:h-4 tw:w-4" />
                      <span className="tw:truncate">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <Separator />

        {/* Design System Link */}
        <div className="tw:p-3">
          <Link
            href="/design-system"
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-lg tw:px-2 tw:py-1.5 tw:text-sm tw:text-neutral-500 tw:transition-colors tw:hover:bg-neutral-50 tw:hover:text-neutral-700"
          >
            <Palette className="tw:h-4 tw:w-4" />
            <span>Design System</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
