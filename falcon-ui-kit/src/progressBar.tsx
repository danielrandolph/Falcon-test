"use client";
import type { ProgressBarProps as AriaProgressBarProps } from "react-aria-components";
import { ProgressBar as AriaProgressBar } from "react-aria-components";

import { composeTailwindRenderProps } from "./utils";
import { Label } from "./field";

interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:flex tw:w-64 tw:max-w-full tw:flex-col tw:gap-2 tw:font-sans",
      )}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="tw:flex tw:justify-between tw:gap-2">
            <Label>{label}</Label>
            <span className="tw:text-sm tw:text-neutral-600">{valueText}</span>
          </div>

          <div className="tw:relative tw:h-2 tw:max-w-full tw:overflow-hidden tw:rounded-full tw:bg-neutral-300 tw:outline tw:outline-1 tw:-outline-offset-1 tw:outline-transparent">
            <div
              className={`tw:absolute tw:top-0 tw:h-full tw:rounded-full tw:bg-blue-500 tw:forced-colors:bg-[Highlight] ${isIndeterminate ? "tw:left-full tw:duration-1000 tw:ease-out tw:animate-in tw:repeat-infinite tw:slide-in-from-left-[20rem]" : "tw:left-0"}`}
              style={{ width: `${isIndeterminate ? 40 : percentage}%` }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
