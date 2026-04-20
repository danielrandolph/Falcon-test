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
    <div className="rounded-xl bg-white p-5 shadow-sm">
      {/* Header with icon and title */}
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-5 w-5 text-sky-500" strokeWidth={1.5} />
        <span className="text-sm font-medium text-neutral-600">{title}</span>
      </div>
      
      {/* Large value */}
      <div className="mb-4 text-4xl font-bold text-neutral-900">{value}</div>
      
      {/* Badge pills */}
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600"
          >
            {badge.value} {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
}
