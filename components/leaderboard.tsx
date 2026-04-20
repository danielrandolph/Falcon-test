"use client";

import { ArrowRight } from "lucide-react";
import { Separator } from "../falcon-ui-kit/dist/index.js";

interface LeaderboardItem {
  rank: number;
  name: string;
  value: string;
  details: string[];
}

interface LeaderboardProps {
  title: string;
  period: string;
  items: LeaderboardItem[];
}

export function Leaderboard({ title, period, items }: LeaderboardProps) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-neutral-900">{title}</h3>
          <ArrowRight className="h-4 w-4 text-neutral-500" />
        </div>
        <span className="text-xs text-neutral-500">{period}</span>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700">
                {item.rank}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-medium text-neutral-900 text-sm">{item.name}</div>
                <div className="flex flex-wrap gap-1.5 text-xs text-neutral-500">
                  {item.details.map((detail, i) => (
                    <span key={i}>
                      {detail}
                      {i < item.details.length - 1 && <span className="ml-1.5">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {index < items.length - 1 && <Separator className="mt-3" />}
          </div>
        ))}
      </div>
    </div>
  );
}
