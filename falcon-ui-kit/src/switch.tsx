"use client";
import type React from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";
import { Switch as AriaSwitch } from "react-aria-components";
import { tv } from "tailwind-variants";

import { composeTailwindRenderProps, focusRing } from "./utils";

interface Props extends Omit<AriaSwitchProps, "children"> {
  children: React.ReactNode;
}

const track = tv({
  extend: focusRing,
  base: "tw:box-border tw:flex tw:h-5 tw:w-9 tw:shrink-0 tw:cursor-default tw:items-center tw:rounded-full tw:border tw:border-transparent tw:px-px tw:font-sans tw:shadow-inner tw:transition tw:duration-200 tw:ease-in-out",
  variants: {
    isSelected: {
      false:
        "tw:border-neutral-400 tw:bg-neutral-100 tw:group-pressed:bg-neutral-200",
      true: "tw:bg-neutral-700 tw:group-pressed:bg-neutral-800 tw:forced-colors:bg-[Highlight]!",
    },
    isDisabled: {
      true: "tw:border-neutral-300 tw:bg-neutral-100 tw:group-selected:bg-neutral-300 tw:forced-colors:border-[GrayText] tw:forced-colors:group-selected:bg-[GrayText]!",
    },
  },
});

const handle = tv({
  base: "tw:h-4 tw:w-4 tw:transform tw:rounded-full tw:shadow-xs tw:outline-1 tw:-outline-offset-1 tw:outline-transparent tw:transition tw:duration-200 tw:ease-in-out",
  variants: {
    isSelected: {
      false: "tw:translate-x-0 tw:bg-neutral-900",
      true: "tw:translate-x-full tw:bg-white",
    },
    isDisabled: {
      true: "tw:forced-colors:outline-[GrayText]",
    },
  },
  compoundVariants: [
    {
      isSelected: false,
      isDisabled: true,
      className: "tw:bg-neutral-300",
    },
    {
      isSelected: true,
      isDisabled: true,
      className: "tw:bg-neutral-50",
    },
  ],
});

export function Switch({ children, className, ...otherProps }: Props) {
  return (
    <AriaSwitch
      {...otherProps}
      className={composeTailwindRenderProps(
        className,
        "tw:group tw:relative tw:flex tw:items-center tw:gap-2 tw:text-sm tw:text-neutral-800 tw:transition tw:[-webkit-tap-highlight-color:transparent] tw:disabled:text-neutral-300 tw:forced-colors:disabled:text-[GrayText]",
      )}
    >
      {(renderProps) => (
        <>
          <div className={track(renderProps)}>
            <span className={handle(renderProps)} />
          </div>

          {children}
        </>
      )}
    </AriaSwitch>
  );
}
