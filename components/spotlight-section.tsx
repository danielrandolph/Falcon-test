"use client";

import { ArrowRight, Search, FileText } from "lucide-react";
import { Link, Button, Separator } from "../falcon-ui-kit/dist/index.js";

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
    <div className="rounded-lg bg-white p-5">
      {/* Header */}
      <div className="mb-2 flex items-center gap-3">
        <h3 className="text-lg font-semibold text-neutral-900">Spotlight</h3>
        <Button variant="quiet" className="h-8 w-8 p-0">
          <ArrowRight className="h-5 w-5 text-neutral-700" />
        </Button>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between py-4">
              <Link
                href={item.href}
                variant="primary"
                className="text-lg font-medium no-underline"
              >
                {item.name}
              </Link>
              <div className="flex items-center gap-2">
                <Button variant="quiet" className="h-9 w-9 p-0">
                  <Search className="h-5 w-5 text-neutral-400" strokeWidth={1.5} />
                </Button>
                <Button variant="quiet" className="h-9 w-9 p-0">
                  <FileText className="h-5 w-5 text-neutral-400" strokeWidth={1.5} />
                </Button>
                <span className="flex h-7 min-w-[2rem] items-center justify-center rounded-full border border-neutral-200 bg-white px-2 text-sm font-medium text-neutral-600">
                  +{item.count}
                </span>
              </div>
            </div>
            {index < items.length - 1 && (
              <Separator className="bg-neutral-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
