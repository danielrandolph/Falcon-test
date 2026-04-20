"use client";

import { HelpCircle } from "lucide-react";
import { Button } from "../falcon-ui-kit/dist/index.js";

export function DashboardHeader() {
  return (
    <header className="tw:flex tw:h-14 tw:items-center tw:justify-between tw:border-b tw:border-neutral-200 tw:bg-white tw:px-6 tw:font-sans">
      <h1 className="tw:text-lg tw:font-semibold tw:text-neutral-800">Dashboard</h1>
      <div className="tw:flex tw:items-center tw:gap-3">
        <div className="tw:h-8 tw:w-8 tw:rounded-full tw:bg-neutral-200 tw:overflow-hidden">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" 
            alt="User avatar" 
            className="tw:h-full tw:w-full tw:object-cover"
          />
        </div>
        <Button variant="quiet" className="tw:h-8 tw:w-8 tw:px-0">
          <HelpCircle className="tw:h-4 tw:w-4" />
        </Button>
      </div>
    </header>
  );
}
