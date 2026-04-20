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
    <div className="tw:rounded-lg tw:border tw:border-neutral-200 tw:bg-white tw:p-4 tw:font-sans">
      <div className="tw:mb-4 tw:flex tw:items-center tw:justify-between">
        <div className="tw:flex tw:items-center tw:gap-2">
          <h3 className="tw:font-semibold tw:text-neutral-900">{title}</h3>
          <ArrowRight className="tw:h-4 tw:w-4 tw:text-neutral-500" />
        </div>
        <span className="tw:text-xs tw:text-neutral-500">{period}</span>
      </div>

      <div className="tw:space-y-3">
        {items.map((item, index) => (
          <div key={index}>
            <div className="tw:flex tw:items-start tw:gap-3">
              <div className="tw:flex tw:h-6 tw:w-6 tw:shrink-0 tw:items-center tw:justify-center tw:rounded-full tw:bg-neutral-100 tw:text-xs tw:font-semibold tw:text-neutral-700">
                {item.rank}
              </div>
              <div className="tw:min-w-0 tw:flex-1">
                <div className="tw:font-medium tw:text-neutral-900 tw:text-sm">{item.name}</div>
                <div className="tw:flex tw:flex-wrap tw:gap-1.5 tw:text-xs tw:text-neutral-500">
                  {item.details.map((detail, i) => (
                    <span key={i}>
                      {detail}
                      {i < item.details.length - 1 && <span className="tw:ml-1.5">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {index < items.length - 1 && <Separator className="tw:mt-3" />}
          </div>
        ))}
      </div>
    </div>
  );
}
