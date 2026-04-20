"use client";
import { ChevronDown } from "lucide-react";
import type React from "react";
import type {
  ComboBoxProps as AriaComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from "react-aria-components";
import {
  ComboBox as AriaComboBox,
  ComboBoxValue,
  ListBox,
} from "react-aria-components";

import { Description, FieldError, FieldGroup, Input, Label } from "./field";
import { FieldButton } from "./fieldButton";
import type { DropdownSectionProps } from "./listBox";
import { DropdownItem, DropdownSection } from "./listBox";
import { Popover } from "./popover";
import { composeTailwindRenderProps } from "./utils";

export interface ComboBoxProps<
  T extends object,
  M extends "single" | "multiple",
> extends Omit<AriaComboBoxProps<T, M>, "children"> {
  children: React.ReactNode | ((item: T) => React.ReactNode);
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
  placeholder?: string;
}

export function ComboBox<
  T extends object,
  M extends "single" | "multiple" = "single",
>({
  children,
  description,
  errorMessage,
  items,
  label,
  ...props
}: ComboBoxProps<T, M>) {
  return (
    <AriaComboBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:group tw:flex tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      <Label>{label}</Label>

      <FieldGroup>
        <Input className="tw:ps-3 tw:pe-1" />

        <FieldButton className="tw:mr-1 tw:w-6 tw:outline-offset-0">
          <ChevronDown aria-hidden className="tw:h-4 tw:w-4" />
        </FieldButton>
      </FieldGroup>

      {props.selectionMode === "multiple" && (
        <ComboBoxValue
          className="tw:text-xs tw:text-neutral-600"
          placeholder="No items selected"
        />
      )}

      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>

      <Popover className="tw:w-(--trigger-width)">
        <ListBox
          className="tw:box-border tw:max-h-[inherit] tw:overflow-auto tw:p-1 tw:outline-0 tw:[clip-path:inset(0_0_0_0_round_.75rem)]"
          items={items}
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

export function ComboBoxSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return <DropdownSection {...props} />;
}
