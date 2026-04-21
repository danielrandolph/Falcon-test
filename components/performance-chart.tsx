"use client";

import { ArrowRight } from "lucide-react";
import { ToggleButton, ToggleButtonGroup } from "../falcon-ui-kit/dist/index.js";

const chartData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 55 },
  { month: "Apr", value: 70 },
  { month: "May", value: 60 },
  { month: "Jun", value: 90 },
];

export function PerformanceChart() {
  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-neutral-900">My Performance</h3>
          <ArrowRight className="h-4 w-4 text-neutral-500" />
        </div>
        <ToggleButtonGroup selectionMode="single" defaultSelectedKeys={["crop"]}>
          <ToggleButton id="crop" className="h-7 text-xs px-3">
            Crop Year
          </ToggleButton>
          <ToggleButton id="clients" className="h-7 text-xs px-3">
            Clients
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <div className="flex h-40 items-end justify-between gap-2">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full max-w-10 rounded-t bg-blue-200 transition-all hover:bg-blue-400"
                style={{ height: `${(data.value / maxValue) * 100}%` }}
              />
              <span className="text-xs text-neutral-500">{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
