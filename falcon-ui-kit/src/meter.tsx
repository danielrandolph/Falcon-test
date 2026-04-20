"use client";
import { AlertTriangle } from "lucide-react";
import type { MeterProps as AriaMeterProps } from "react-aria-components";
import { Meter as AriaMeter } from "react-aria-components";

import { composeTailwindRenderProps } from "./utils";
import { Label } from "./field";

interface Props extends AriaMeterProps {
  label?: string;
}

export function Meter({ label, ...otherProps }: Props) {
  return (
    <AriaMeter
      {...otherProps}
      className={composeTailwindRenderProps(
        otherProps.className,
        "tw:flex tw:max-w-full tw:flex-col tw:gap-2 tw:font-sans",
      )}
    >
      {({ percentage, valueText }) => (
        <>
          <div className="tw:flex tw:justify-between tw:gap-2">
            <Label>{label}</Label>

            <span
              className={`tw:text-sm ${percentage >= 80 ? "tw:text-red-600" : "tw:text-neutral-600"}`}
            >
              {percentage >= 80 && (
                <AlertTriangle
                  aria-label="Alert"
                  className="tw:inline-block tw:h-4 tw:w-4 tw:align-text-bottom"
                />
              )}

              {` ${valueText}`}
            </span>
          </div>

          <div className="tw:relative tw:h-2 tw:w-64 tw:max-w-full tw:rounded-full tw:bg-neutral-300 tw:outline-1 tw:-outline-offset-1 tw:outline-transparent">
            <div
              className={`tw:absolute tw:top-0 tw:left-0 tw:h-full tw:rounded-full ${getColor(percentage)} tw:forced-colors:bg-[Highlight]`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </>
      )}
    </AriaMeter>
  );
}

function getColor(percentage: number) {
  if (percentage < 70) {
    return "tw:bg-green-600";
  }

  if (percentage < 80) {
    return "tw:bg-orange-500";
  }

  return "tw:bg-red-600";
}
