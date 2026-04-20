"use client";

import { HelpCircle } from "lucide-react";
import { Button } from "../falcon-ui-kit/dist/index.js";

export function DashboardHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-200 bg-white px-6">
      <h1 className="text-lg font-semibold text-neutral-800">Dashboard</h1>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-neutral-200 overflow-hidden">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" 
            alt="User avatar" 
            className="h-full w-full object-cover"
          />
        </div>
        <Button variant="quiet" className="h-8 w-8 px-0">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
