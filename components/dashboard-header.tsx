"use client";

import { HelpCircle } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[#dee3e5] bg-white px-6">
      <h1 className="text-lg font-semibold text-[#111111]">Dashboard</h1>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 overflow-hidden rounded-full bg-[#dee3e5]">
          <img
            src="/placeholder.svg?height=32&width=32&query=user avatar professional"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <button className="rounded p-1 text-[#6f7578] hover:bg-[#f0f1f2]">
          <HelpCircle className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
