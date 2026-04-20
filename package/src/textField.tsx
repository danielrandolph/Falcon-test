"use client";
import type {
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { TextField as AriaTextField } from "react-aria-components";
import { tv } from "tailwind-variants";

import { composeTailwindRenderProps, focusRing } from "./utils";
import {
  Description,
  fieldBorderStyles,
  FieldError,
  Input,
  Label,
} from "./field";

const inputStyles = tv({
  extend: focusRing,
  base: "tw:box-border tw:min-h-9 tw:rounded-lg tw:border tw:px-3 tw:py-0 tw:font-sans tw:text-sm tw:transition",
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    isInvalid: fieldBorderStyles.variants.isInvalid,
    isDisabled: fieldBorderStyles.variants.isDisabled,
  },
});

interface Props extends AriaTextFieldProps {
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
  placeholder?: string;
}

export function TextField({
  description,
  errorMessage,
  label,
  ...props
}: Props) {
  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:flex tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      {label && <Label>{label}</Label>}
      <Input className={inputStyles} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
