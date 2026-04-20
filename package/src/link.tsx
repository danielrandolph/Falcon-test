"use client";
import type { LinkProps as AriaLinkProps } from "react-aria-components";
import { composeRenderProps, Link as AriaLink } from "react-aria-components";
import { tv } from "tailwind-variants";

import { focusRing } from "./utils";

interface LinkProps extends AriaLinkProps {
  variant?: "primary" | "secondary";
}

const styles = tv({
  extend: focusRing,
  base: "tw:rounded-xs tw:underline tw:transition tw:[-webkit-tap-highlight-color:transparent] tw:disabled:cursor-default tw:disabled:no-underline tw:forced-colors:disabled:text-[GrayText]",
  variants: {
    variant: {
      primary:
        "tw:text-blue-600 tw:underline tw:decoration-blue-600/60 tw:hover:decoration-blue-600",
      secondary:
        "tw:text-neutral-700 tw:underline tw:decoration-neutral-700/50 tw:hover:decoration-neutral-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Link(props: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        styles({ ...renderProps, className, variant: props.variant }),
      )}
    />
  );
}
