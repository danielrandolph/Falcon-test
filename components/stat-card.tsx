"use client";

import { LucideIcon } from "lucide-react";
import { Badge } from "../falcon-ui-kit/dist/legacy/index.js";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  badges: Array<{ label: string; value: string }>;
}

export function StatCard({ title, value, icon: Icon, badges }: StatCardProps) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-neutral-500">
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </div>
      <div className="mb-3 text-3xl font-semibold text-neutral-900">{value}</div>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <Badge key={index} variant="info" size="small">
            <span className="text-xs font-medium text-neutral-700">
              {badge.value} {badge.label}
            </span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
