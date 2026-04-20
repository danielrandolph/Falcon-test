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
    <div className="tw:rounded-lg tw:border tw:border-neutral-200 tw:bg-neutral-50 tw:p-4 tw:font-sans">
      <div className="tw:mb-2 tw:flex tw:items-center tw:gap-2 tw:text-sm tw:text-neutral-500">
        <Icon className="tw:h-4 tw:w-4" />
        <span>{title}</span>
      </div>
      <div className="tw:mb-3 tw:text-3xl tw:font-semibold tw:text-neutral-900">{value}</div>
      <div className="tw:flex tw:flex-wrap tw:gap-2">
        {badges.map((badge, index) => (
          <Badge key={index} variant="info" size="small">
            <span className="tw:text-xs tw:font-medium tw:text-neutral-700">
              {badge.value} {badge.label}
            </span>
          </Badge>
        ))}
      </div>
    </div>
  );
}
