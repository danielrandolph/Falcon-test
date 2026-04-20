"use client";

import { ArrowRight, Search, FileText } from "lucide-react";
import Link from "next/link";

interface SpotlightItem {
  name: string;
  href: string;
  count: number;
}

interface SpotlightSectionProps {
  items: SpotlightItem[];
}

export function SpotlightSection({ items }: SpotlightSectionProps) {
  return (
    <div className="rounded-lg border border-[#dee3e5] bg-white p-4">
      <div className="mb-4 flex items-center gap-2">
        <h3 className="font-semibold text-[#111111]">Spotlight</h3>
        <ArrowRight className="h-4 w-4 text-[#6f7578]" />
      </div>
      <div className="space-y-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-[#f7f7f7] transition-colors"
          >
            <Link href={item.href} className="text-sm text-[#3a99d8] hover:underline">
              {item.name}
            </Link>
            <div className="flex items-center gap-2">
              <button className="rounded p-1 text-[#6f7578] hover:bg-[#dee3e5]">
                <Search className="h-4 w-4" />
              </button>
              <button className="rounded p-1 text-[#6f7578] hover:bg-[#dee3e5]">
                <FileText className="h-4 w-4" />
              </button>
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#f0f1f2] px-2 text-xs font-medium text-[#404547]">
                +{item.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
