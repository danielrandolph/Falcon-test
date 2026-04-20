"use client";
import { ChevronRight } from "lucide-react";
import type {
  TreeItemProps as AriaTreeItemProps,
  TreeProps,
} from "react-aria-components";
import {
  Button,
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Checkbox } from "./checkbox";
import { composeTailwindRenderProps, focusRing } from "./utils";

const itemStyles = tv({
  extend: focusRing,
  base: "tw:group tw:relative tw:flex tw:cursor-default tw:gap-3 tw:border-t tw:border-transparent tw:bg-white tw:px-3 tw:py-1 tw:font-sans tw:text-sm tw:text-neutral-900 tw:-outline-offset-2 tw:select-none tw:first:rounded-t-lg tw:first:border-t-0 tw:last:rounded-b-lg",
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

export function Tree<T extends object>({ children, ...props }: TreeProps<T>) {
  return (
    <AriaTree
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:relative tw:w-48 tw:max-w-full tw:overflow-auto tw:rounded-lg tw:border tw:border-neutral-200",
      )}
    >
      {children}
    </AriaTree>
  );
}

const expandButton = tv({
  extend: focusRing,
  base: "tw:flex tw:h-8 tw:w-8 tw:shrink-0 tw:cursor-default tw:items-center tw:justify-center tw:rounded-lg tw:border-0 tw:bg-transparent tw:p-0 tw:text-start tw:[-webkit-tap-highlight-color:transparent]",
  variants: {
    isDisabled: {
      true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
  },
});

const chevron = tv({
  base: "tw:h-4.5 tw:w-4.5 tw:text-neutral-500 tw:transition-transform tw:duration-200 tw:ease-in-out",
  variants: {
    isExpanded: {
      true: "tw:rotate-90 tw:transform",
    },
    isDisabled: {
      true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
  },
});

interface ItemProps extends Partial<AriaTreeItemProps> {
  title: string;
}

export function TreeItem(props: ItemProps) {
  return (
    <AriaTreeItem className={itemStyles} textValue={props.title} {...props}>
      <AriaTreeItemContent {...props}>
        {({
          selectionMode,
          selectionBehavior,
          hasChildItems,
          isExpanded,
          isDisabled,
        }) => (
          <div className="tw:flex tw:items-center">
            {selectionMode !== "none" && selectionBehavior === "toggle" && (
              <Checkbox slot="selection" />
            )}

            <div className="tw:w-[calc((var(--tree-item-level)-1)*(var(--tw-spacing)*3))] tw:shrink-0" />

            {hasChildItems ? (
              <Button slot="chevron" className={expandButton({ isDisabled })}>
                <ChevronRight
                  aria-hidden
                  className={chevron({ isExpanded, isDisabled })}
                />
              </Button>
            ) : (
              <div className="tw:h-8 tw:w-8 tw:shrink-0" />
            )}

            {props.title}
          </div>
        )}
      </AriaTreeItemContent>

      {props.children}
    </AriaTreeItem>
  );
}
