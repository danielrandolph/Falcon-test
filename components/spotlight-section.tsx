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
    <div className="tw:rounded-lg tw:border tw:border-neutral-200 tw:bg-white tw:p-4 tw:font-sans">
      <div className="tw:mb-4 tw:flex tw:items-center tw:gap-2">
        <h3 className="tw:font-semibold tw:text-neutral-900">Spotlight</h3>
        <ArrowRight className="tw:h-4 tw:w-4 tw:text-neutral-500" />
      </div>
      <div className="tw:space-y-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="tw:flex tw:items-center tw:justify-between tw:rounded-lg tw:px-2 tw:py-2 tw:hover:bg-neutral-50 tw:transition-colors"
          >
            <Link href={item.href} variant="primary" className="tw:text-sm">
              {item.name}
            </Link>
            <div className="tw:flex tw:items-center tw:gap-1">
              <Button variant="quiet" className="tw:h-7 tw:w-7 tw:px-0">
                <Search className="tw:h-4 tw:w-4" />
              </Button>
              <Button variant="quiet" className="tw:h-7 tw:w-7 tw:px-0">
                <FileText className="tw:h-4 tw:w-4" />
              </Button>
              <span className="tw:flex tw:h-6 tw:min-w-6 tw:items-center tw:justify-center tw:rounded-full tw:bg-neutral-100 tw:px-2 tw:text-xs tw:font-medium tw:text-neutral-700">
                +{item.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
