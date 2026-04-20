"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const chartData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 55 },
  { month: "Apr", value: 70 },
  { month: "May", value: 60 },
  { month: "Jun", value: 90 },
];

export function PerformanceChart() {
  const [activeTab, setActiveTab] = useState<"crop" | "clients">("crop");
  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="rounded-lg border border-[#dee3e5] bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[#111111]">My Performance</h3>
          <ArrowRight className="h-4 w-4 text-[#6f7578]" />
        </div>
        <div className="flex rounded-md border border-[#dee3e5] bg-white p-0.5">
          <button
            onClick={() => setActiveTab("crop")}
            className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
              activeTab === "crop"
                ? "bg-[#f0f1f2] text-[#111111]"
                : "text-[#6f7578] hover:text-[#404547]"
            }`}
          >
            Crop Year
          </button>
          <button
            onClick={() => setActiveTab("clients")}
            className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
              activeTab === "clients"
                ? "bg-[#f0f1f2] text-[#111111]"
                : "text-[#6f7578] hover:text-[#404547]"
            }`}
          >
            Clients
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <div className="flex h-40 items-end justify-between gap-2">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full max-w-10 rounded-t bg-[#b2cce5] transition-all hover:bg-[#6b9dc5]"
                style={{ height: `${(data.value / maxValue) * 100}%` }}
              />
              <span className="text-xs text-[#6f7578]">{data.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
