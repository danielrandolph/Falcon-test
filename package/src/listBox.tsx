"use client";
import { Check } from "lucide-react";
import type {
  ListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  SectionProps,
} from "react-aria-components";
import {
  Collection,
  composeRenderProps,
  Header,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxSection,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { composeTailwindRenderProps, focusRing } from "./utils";

type ListBoxProps<T> = Omit<AriaListBoxProps<T>, "layout" | "orientation">;

export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  return (
    <AriaListBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:w-50 tw:rounded-lg tw:border tw:border-neutral-300 tw:bg-white tw:p-1 tw:font-sans tw:outline-0",
      )}
    >
      {children}
    </AriaListBox>
  );
}

const itemStyles = tv({
  extend: focusRing,
  base: "tw:group tw:relative tw:flex tw:cursor-default tw:items-center tw:gap-8 tw:rounded-md tw:px-2.5 tw:py-1.5 tw:text-sm tw:will-change-transform tw:forced-color-adjust-none tw:select-none",
  variants: {
    isSelected: {
      false:
        "tw:text-neutral-700 tw:-outline-offset-2 tw:hover:bg-neutral-100 tw:pressed:bg-neutral-100",
      true: "tw:bg-blue-600 tw:text-white tw:-outline-offset-4 tw:outline-white tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText] tw:forced-colors:outline-[HighlightText] tw:[&+[data-selected]]:rounded-t-none tw:[&:has(+[data-selected])]:rounded-b-none",
    },
    isDisabled: {
      true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
  },
});

export function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <AriaListBoxItem {...props} textValue={textValue} className={itemStyles}>
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <div className="tw:absolute tw:right-4 tw:bottom-0 tw:left-4 tw:hidden tw:h-px tw:bg-white/20 tw:forced-colors:bg-[HighlightText] tw:[.group[data-selected]:has(+[data-selected])_&]:block" />
        </>
      ))}
    </AriaListBoxItem>
  );
}

export const dropdownItemStyles = tv({
  base: "tw:group tw:flex tw:cursor-default tw:items-center tw:gap-4 tw:rounded-lg tw:py-2 tw:pr-3 tw:pl-3 tw:text-sm tw:no-underline tw:outline-0 tw:forced-color-adjust-none tw:select-none tw:[-webkit-tap-highlight-color:transparent] tw:selected:pr-1 tw:[[href]]:cursor-pointer",
  variants: {
    isDisabled: {
      false: "tw:text-neutral-900",
      true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "tw:bg-blue-600 tw:text-white tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText]",
    },
    isPressed: {
      true: "tw:bg-neutral-100",
    },
  },
  compoundVariants: [
    {
      isFocused: false,
      isOpen: true,
      className: "tw:bg-neutral-100",
    },
  ],
});

export function DropdownItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={dropdownItemStyles}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span className="tw:flex tw:flex-1 tw:items-center tw:gap-2 tw:truncate tw:font-normal tw:group-selected:font-semibold">
            {children}
          </span>

          <span className="tw:flex tw:w-5 tw:items-center">
            {isSelected && <Check className="tw:h-4 tw:w-4" />}
          </span>
        </>
      ))}
    </AriaListBoxItem>
  );
}

export interface DropdownSectionProps<T> extends SectionProps<T> {
  items?: Iterable<T>;
  title?: string;
}

export function DropdownSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return (
    <ListBoxSection className="tw:after:block tw:after:h-1.25 tw:after:content-[''] tw:first:-mt-1.25 tw:last:after:hidden">
      <Header className="tw:sticky tw:-top-1.25 tw:z-10 tw:-mx-1 tw:-mt-px tw:truncate tw:border-y tw:border-y-neutral-200 tw:bg-neutral-100/60 tw:px-4 tw:py-1 tw:text-sm tw:font-semibold tw:text-neutral-500 tw:backdrop-blur-md tw:supports-[-moz-appearance:none]:bg-neutral-100 tw:[&+*]:mt-1">
        {props.title}
      </Header>

      <Collection items={props.items}>{props.children}</Collection>
    </ListBoxSection>
  );
}
