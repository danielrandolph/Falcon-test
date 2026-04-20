"use client";
import type {
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue,
  ValidationResult,
} from "react-aria-components";
import { TimeField as AriaTimeField } from "react-aria-components";

import { DateInput } from "./dateField";
import { Description, FieldError, Label } from "./field";
import { composeTailwindRenderProps } from "./utils";

interface Props<T extends TimeValue> extends AriaTimeFieldProps<T> {
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
}

export function TimeField<T extends TimeValue>({
  description,
  errorMessage,
  label,
  ...props
}: Props<T>) {
  return (
    <AriaTimeField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:flex tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      <Label>{label}</Label>
      <DateInput />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  );
}
