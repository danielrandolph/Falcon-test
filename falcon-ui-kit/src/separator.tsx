"use client";
import type { SeparatorProps } from "react-aria-components";
import { Separator as RACSeparator } from "react-aria-components";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "tw:border-none tw:bg-neutral-300 tw:forced-colors:bg-[ButtonBorder]",
  variants: {
    orientation: {
      horizontal: "tw:h-px tw:w-full",
      vertical: "tw:h-full tw:min-h-8 tw:w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export function Separator({
  className,
  orientation,
  ...otherProps
}: SeparatorProps) {
  return (
    <RACSeparator
      {...otherProps}
      className={styles({ className, orientation })}
      orientation={orientation}
    />
  );
}
