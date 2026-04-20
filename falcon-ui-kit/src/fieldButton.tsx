"use client";
import type { ButtonProps as RACButtonProps } from "react-aria-components";
import { Button as RACButton, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "./utils";

interface ButtonProps extends RACButtonProps {
  /** @default 'primary' */
  variant?: "primary" | "secondary" | "destructive" | "icon";
}

const button = tv({
  extend: focusRing,
  base: "tw:relative tw:inline-flex tw:cursor-default tw:items-center tw:justify-center tw:rounded-md tw:border-0 tw:bg-transparent tw:p-1 tw:text-center tw:font-sans tw:text-sm tw:text-neutral-600 tw:transition tw:[-webkit-tap-highlight-color:transparent] tw:hover:bg-black/5 tw:disabled:bg-transparent tw:pressed:bg-black/10",
  variants: {
    isDisabled: {
      true: "tw:border-black/5 tw:bg-neutral-100 tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
  },
});

export function FieldButton(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, className }),
      )}
    >
      {props.children}
    </RACButton>
  );
}
