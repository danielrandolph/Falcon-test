"use client";
import type {
  DateFieldProps as AriaDateFieldProps,
  DateInputProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import {
  DateField as AriaDateField,
  DateInput as AriaDateInput,
  DateSegment,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { composeTailwindRenderProps } from "./utils";
import { Description, FieldError, fieldGroupStyles, Label } from "./field";

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:flex tw:flex-col tw:gap-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <DateInput />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}

const segmentStyles = tv({
  base: "tw:inline tw:rounded-xs tw:p-0.5 tw:whitespace-nowrap tw:text-neutral-800 tw:caret-transparent tw:outline-0 tw:forced-color-adjust-none tw:[-webkit-tap-highlight-color:transparent] tw:forced-colors:text-[ButtonText] tw:type-literal:p-0",
  variants: {
    isPlaceholder: {
      true: "tw:text-neutral-600",
    },
    isDisabled: {
      true: "tw:text-neutral-200 tw:forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "tw:bg-blue-600 tw:text-white tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText]",
    },
  },
});

export function DateInput(props: Omit<DateInputProps, "children">) {
  return (
    <AriaDateInput
      className={(renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          className:
            "tw:inline tw:h-9 tw:min-w-37.5 tw:cursor-text tw:overflow-x-auto tw:px-3 tw:font-sans tw:text-sm tw:leading-8.5 tw:whitespace-nowrap tw:[scrollbar-width:none] tw:disabled:cursor-default",
        })
      }
      {...props}
    >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </AriaDateInput>
  );
}
