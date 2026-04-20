"use client";
import { ChevronDown } from "lucide-react";
import type React from "react";
import type {
  ListBoxItemProps,
  SelectProps as AriaSelectProps,
  ValidationResult,
} from "react-aria-components";
import {
  Button,
  ListBox,
  Select as AriaSelect,
  SelectValue,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Description, FieldError, Label } from "./field";
import type { DropdownSectionProps } from "./listBox";
import { DropdownItem, DropdownSection } from "./listBox";
import { Popover } from "./popover";
import { composeTailwindRenderProps, focusRing } from "./utils";

const styles = tv({
  extend: focusRing,
  base: "tw:flex tw:h-9 tw:w-full tw:min-w-45 tw:cursor-default tw:items-center tw:gap-4 tw:rounded-lg tw:border tw:border-black/10 tw:bg-neutral-50 tw:pr-2 tw:pl-3 tw:text-start tw:font-sans tw:transition tw:[-webkit-tap-highlight-color:transparent]",
  variants: {
    isDisabled: {
      false:
        "tw:text-neutral-800 tw:group-invalid:outline tw:group-invalid:outline-red-600 tw:hover:bg-neutral-100 tw:forced-colors:group-invalid:outline-[Mark] tw:pressed:bg-neutral-200",
      true: "tw:border-transparent tw:bg-neutral-100 tw:text-neutral-200 tw:forced-colors:text-[GrayText]",
    },
  },
});

interface Props<T extends object, M extends "single" | "multiple">
  extends Omit<AriaSelectProps<T, M>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function Select<
  T extends object,
  M extends "single" | "multiple" = "single",
>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: Props<T, M>) {
  return (
    <AriaSelect
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:group tw:relative tw:flex tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      {label && <Label>{label}</Label>}

      <Button className={styles}>
        <SelectValue className="tw:flex-1 tw:text-sm">
          {({ selectedText, defaultChildren }) =>
            selectedText || defaultChildren
          }
        </SelectValue>

        <ChevronDown
          aria-hidden
          className="tw:h-4 tw:w-4 tw:text-neutral-600 tw:group-disabled:text-neutral-200 tw:forced-colors:text-[ButtonText] tw:forced-colors:group-disabled:text-[GrayText]"
        />
      </Button>

      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>

      <Popover className="tw:min-w-(--trigger-width)">
        <ListBox
          className="tw:box-border tw:max-h-[inherit] tw:overflow-auto tw:p-1 tw:outline-hidden tw:[clip-path:inset(0_0_0_0_round_.75rem)]"
          items={items}
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

export function SelectSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return <DropdownSection {...props} />;
}
