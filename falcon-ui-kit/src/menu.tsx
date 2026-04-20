"use client";
import { Check, ChevronRight } from "lucide-react";
import React from "react";
import type {
  MenuItemProps,
  MenuProps,
  MenuSectionProps as AriaMenuSectionProps,
  MenuTriggerProps as AriaMenuTriggerProps,
  SeparatorProps,
  SubmenuTriggerProps,
} from "react-aria-components";
import {
  Collection,
  composeRenderProps,
  Header,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuTrigger as AriaMenuTrigger,
  Separator,
  SubmenuTrigger as AriaSubmenuTrigger,
} from "react-aria-components";

import { dropdownItemStyles } from "./listBox";
import type { PopoverProps } from "./popover";
import { Popover } from "./popover";

export function Menu<T extends object>({
  className,
  ...otherProps
}: MenuProps<T>) {
  return (
    <AriaMenu
      {...otherProps}
      className="tw:max-h-[inherit] tw:overflow-auto tw:p-1 tw:font-sans tw:outline-0 tw:[clip-path:inset(0_0_0_0_round_.75rem)] tw:empty:pb-2 tw:empty:text-center"
    />
  );
}

export function MenuItem(props: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <AriaMenuItem
      textValue={textValue}
      {...props}
      className={dropdownItemStyles}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== "none" && (
              <span className="tw:flex tw:w-4 tw:items-center">
                {isSelected && <Check aria-hidden className="tw:h-4 tw:w-4" />}
              </span>
            )}

            <span className="tw:flex tw:flex-1 tw:items-center tw:gap-2 tw:truncate tw:font-normal tw:group-selected:font-semibold">
              {children}
            </span>

            {hasSubmenu && (
              <ChevronRight
                aria-hidden
                className="tw:absolute tw:right-2 tw:h-4 tw:w-4"
              />
            )}
          </>
        ),
      )}
    </AriaMenuItem>
  );
}

export function MenuSeparator(props: SeparatorProps) {
  return (
    <Separator
      {...props}
      className="tw:mx-3 tw:my-1 tw:border-b tw:border-neutral-300"
    />
  );
}

export interface MenuSectionProps<T> extends AriaMenuSectionProps<T> {
  items?: Iterable<T>;
  title?: string;
}

export function MenuSection<T extends object>(props: MenuSectionProps<T>) {
  return (
    <AriaMenuSection
      {...props}
      className="tw:after:block tw:after:h-1.25 tw:after:content-[''] tw:first:-mt-1.25"
    >
      {props.title && (
        <Header className="tw:sticky tw:-top-1.25 tw:z-10 tw:-mx-1 tw:-mt-px tw:truncate tw:border-y tw:border-y-neutral-200 tw:bg-neutral-100/60 tw:px-4 tw:py-1 tw:text-sm tw:font-semibold tw:text-neutral-500 tw:backdrop-blur-md tw:supports-[-moz-appearance:none]:bg-neutral-100 tw:[&+*]:mt-1">
          {props.title}
        </Header>
      )}

      <Collection items={props.items}>{props.children}</Collection>
    </AriaMenuSection>
  );
}

interface MenuTriggerProps extends AriaMenuTriggerProps {
  placement?: PopoverProps["placement"];
}

export function MenuTrigger(props: MenuTriggerProps) {
  const [trigger, menu] = React.Children.toArray(props.children) as [
    React.ReactElement,
    React.ReactElement,
  ];

  return (
    <AriaMenuTrigger {...props}>
      {trigger}

      <Popover placement={props.placement} className="tw:min-w-37.5">
        {menu}
      </Popover>
    </AriaMenuTrigger>
  );
}

export function SubmenuTrigger(props: SubmenuTriggerProps) {
  const [trigger, menu] = React.Children.toArray(props.children) as [
    React.ReactElement,
    React.ReactElement,
  ];
  return (
    <AriaSubmenuTrigger {...props}>
      {trigger}

      <Popover offset={-2} crossOffset={-4}>
        {menu}
      </Popover>
    </AriaSubmenuTrigger>
  );
}
