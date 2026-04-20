"use client";
import { CalendarIcon } from "lucide-react";
import type {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { DateRangePicker as AriaDateRangePicker } from "react-aria-components";

import { DateInput } from "./dateField";
import { Description, FieldError, FieldGroup, Label } from "./field";
import { FieldButton } from "./fieldButton";
import { Popover } from "./popover";
import { RangeCalendar } from "./rangeCalendar";
import { composeTailwindRenderProps } from "./utils";

interface Props<T extends DateValue> extends AriaDateRangePickerProps<T> {
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
}

export function DateRangePicker<T extends DateValue>({
  description,
  errorMessage,
  label,
  ...props
}: Props<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:group tw:flex tw:max-w-full tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      {label && <Label>{label}</Label>}

      <FieldGroup className="tw:w-auto tw:min-w-52 tw:cursor-text tw:disabled:cursor-default">
        <div className="tw:flex tw:w-fit tw:flex-1 tw:items-center tw:overflow-x-auto tw:overflow-y-clip tw:[scrollbar-width:none]">
          <DateInput className="tw:ps-3 tw:pe-2 tw:text-sm" slot="start" />

          <span
            aria-hidden="true"
            className="tw:text-neutral-800 tw:group-disabled:text-neutral-200 tw:forced-colors:text-[ButtonText] tw:forced-colors:group-disabled:text-[GrayText]"
          >
            –
          </span>

          <DateInput
            className="tw:flex-1 tw:ps-2 tw:pe-3 tw:text-sm"
            slot="end"
          />
        </div>

        <FieldButton className="tw:mr-1 tw:w-6 tw:outline-offset-0">
          <CalendarIcon aria-hidden className="tw:h-4 tw:w-4" />
        </FieldButton>
      </FieldGroup>

      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>

      <Popover className="tw:p-2">
        <RangeCalendar />
      </Popover>
    </AriaDateRangePicker>
  );
}
