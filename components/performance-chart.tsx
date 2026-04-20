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
    <div className="tw:rounded-lg tw:border tw:border-neutral-200 tw:bg-white tw:p-4 tw:font-sans">
      <div className="tw:mb-4 tw:flex tw:items-center tw:justify-between">
        <div className="tw:flex tw:items-center tw:gap-2">
          <h3 className="tw:font-semibold tw:text-neutral-900">My Performance</h3>
          <ArrowRight className="tw:h-4 tw:w-4 tw:text-neutral-500" />
        </div>
        <ToggleButtonGroup selectionMode="single" defaultSelectedKeys={["crop"]}>
          <ToggleButton id="crop" className="tw:h-7 tw:text-xs tw:px-3">
            Crop Year
          </ToggleButton>
          <ToggleButton id="clients" className="tw:h-7 tw:text-xs tw:px-3">
            Clients
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Chart */}
      <div className="tw:mt-6">
        <div className="tw:flex tw:h-40 tw:items-end tw:justify-between tw:gap-2">
          {chartData.map((data, index) => (
            <div key={index} className="tw:flex tw:flex-1 tw:flex-col tw:items-center tw:gap-2">
              <div
                className="tw:w-full tw:max-w-10 tw:rounded-t tw:bg-blue-200 tw:transition-all tw:hover:bg-blue-400"
                style={{ height: `${(data.value / maxValue) * 100}%` }}
              />
              <span className="tw:text-xs tw:text-neutral-500">{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
