"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  badges: Array<{ label: string; value: string }>;
}

export function StatCard({ title, value, icon: Icon, badges }: StatCardProps) {
  return (
    <div className="rounded-lg border border-[#dee3e5] bg-[#f7f7f7] p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-[#6f7578]">
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </div>
      <div className="mb-3 text-3xl font-semibold text-[#111111]">{value}</div>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-[#404547] border border-[#dee3e5]"
          >
            {badge.value} {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
}
