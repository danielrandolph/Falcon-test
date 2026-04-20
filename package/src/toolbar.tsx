"use client";
import type { ToolbarProps } from "react-aria-components";
import {
  composeRenderProps,
  ToggleButtonGroupContext,
  Toolbar as RACToolbar,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "tw:flex tw:flex-wrap tw:gap-2",
  variants: {
    orientation: {
      horizontal: "tw:flex-row tw:items-center",
      vertical: "tw:flex-col tw:items-start",
    },
  },
});

export function Toolbar(props: ToolbarProps) {
  return (
    <ToggleButtonGroupContext.Provider
      value={{ orientation: props.orientation }}
    >
      <RACToolbar
        {...props}
        className={composeRenderProps(
          props.className,
          (className, renderProps) => styles({ ...renderProps, className }),
        )}
      />
    </ToggleButtonGroupContext.Provider>
  );
}
