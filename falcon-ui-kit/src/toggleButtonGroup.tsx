"use client";
import type { ToggleButtonGroupProps } from "react-aria-components";
import {
  composeRenderProps,
  ToggleButtonGroup as RACToggleButtonGroup,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "tw:flex tw:gap-1",
  variants: {
    orientation: {
      horizontal: "tw:flex-row",
      vertical: "tw:flex-col",
    },
  },
});

export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return (
    <RACToggleButtonGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        styles({ ...renderProps, className }),
      )}
    />
  );
}
