"use client";
import { CalendarIcon } from "lucide-react";
import type {
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { DatePicker as AriaDatePicker } from "react-aria-components";

import { Calendar } from "./calendar";
import { DateInput } from "./dateField";
import { Description, FieldError, FieldGroup, Label } from "./field";
import { FieldButton } from "./fieldButton";
import { Popover } from "./popover";
import { composeTailwindRenderProps } from "./utils";

interface Props<T extends DateValue> extends AriaDatePickerProps<T> {
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
}

export function DatePicker<T extends DateValue>({
  description,
  errorMessage,
  label,
  ...props
}: Props<T>) {
  return (
    <AriaDatePicker
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:group tw:flex tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      {label && <Label>{label}</Label>}

      <FieldGroup className="tw:w-auto tw:min-w-52 tw:cursor-text tw:disabled:cursor-default">
        <DateInput className="tw:min-w-37.5 tw:flex-1 tw:px-3 tw:text-sm" />

        <FieldButton className="tw:mr-1 tw:w-6 tw:outline-offset-0">
          <CalendarIcon aria-hidden className="tw:h-4 tw:w-4" />
        </FieldButton>
      </FieldGroup>

      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>

      <Popover className="tw:p-2">
        <Calendar />
      </Popover>
    </AriaDatePicker>
  );
}
