"use client";
import type { GridListItemProps, GridListProps } from "react-aria-components";
import {
  Button,
  composeRenderProps,
  GridList as AriaGridList,
  GridListHeader as AriaGridListHeader,
  GridListItem as AriaGridListItem,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { Checkbox } from "./checkbox";
import { composeTailwindRenderProps, focusRing } from "./utils";

export function GridList<T extends object>({
  className,
  ...otherProps
}: GridListProps<T>) {
  return (
    <AriaGridList
      {...otherProps}
      className={composeTailwindRenderProps(
        className,
        "tw:relative tw:w-50 tw:overflow-auto tw:rounded-lg tw:border tw:border-neutral-300 tw:bg-white tw:font-sans tw:empty:flex tw:empty:items-center tw:empty:justify-center tw:empty:text-sm tw:empty:italic",
      )}
    />
  );
}

const itemStyles = tv({
  extend: focusRing,
  base: "tw:relative tw:flex tw:cursor-default tw:gap-3 tw:border-t tw:border-transparent tw:px-3 tw:py-2 tw:text-sm tw:text-neutral-900 tw:-outline-offset-2 tw:select-none tw:first:rounded-t-lg tw:first:border-t-0 tw:last:mb-0 tw:last:rounded-b-lg",
  variants: {
    isSelected: {
      false: "tw:hover:bg-neutral-100 tw:pressed:bg-neutral-100",
      true: "tw:z-20 tw:border-y-blue-200 tw:bg-blue-100 tw:hover:bg-blue-200 tw:pressed:bg-blue-200",
    },
    isDisabled: {
      true: "tw:z-10 tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
  },
});

export function GridListItem(props: GridListItemProps) {
  return (
    <AriaGridListItem
      textValue={
        typeof props.children === "string" ? props.children : undefined
      }
      {...props}
      className={itemStyles}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, selectionBehavior, allowsDragging }) => (
          <>
            {allowsDragging && <Button slot="drag">≡</Button>}

            {selectionMode !== "none" && selectionBehavior === "toggle" && (
              <Checkbox slot="selection" />
            )}

            {children}
          </>
        ),
      )}
    </AriaGridListItem>
  );
}

export function GridListHeader({
  children,
  className,
  ...otherProps
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <AriaGridListHeader
      {...otherProps}
      className={twMerge(
        "tw:z-10 tw:-mt-px tw:border-y tw:border-y-neutral-200 tw:bg-neutral-100/60 tw:px-4 tw:py-1 tw:text-sm tw:font-semibold tw:text-neutral-500 tw:backdrop-blur-md tw:supports-[-moz-appearance:none]:bg-neutral-100",
        className,
      )}
    >
      {children}
    </AriaGridListHeader>
  );
}
