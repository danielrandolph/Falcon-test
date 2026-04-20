"use client";

import { ArrowRight, Search, FileText } from "lucide-react";
import { Link, Button } from "../falcon-ui-kit/dist/index.js";

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
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mb-4 flex items-center gap-2">
        <h3 className="font-semibold text-neutral-900">Spotlight</h3>
        <ArrowRight className="h-4 w-4 text-neutral-500" />
      </div>
      <div className="space-y-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-neutral-50 transition-colors"
          >
            <Link href={item.href} variant="primary" className="text-sm">
              {item.name}
            </Link>
            <div className="flex items-center gap-1">
              <Button variant="quiet" className="h-7 w-7 px-0">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="quiet" className="h-7 w-7 px-0">
                <FileText className="h-4 w-4" />
              </Button>
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-neutral-100 px-2 text-xs font-medium text-neutral-700">
                +{item.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
