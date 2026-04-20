"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import type {
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Button, NumberField as AriaNumberField } from "react-aria-components";

import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  fieldBorderStyles,
} from "./field";
import { composeTailwindRenderProps } from "./utils";

interface Props extends AriaNumberFieldProps {
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
  placeholder?: string;
}

const spinnerButtonStyles =
  "tw:box-border tw:flex tw:flex-1 tw:cursor-default tw:border-0 tw:bg-transparent tw:px-0.5 tw:py-0 tw:text-neutral-500 tw:[-webkit-tap-highlight-color:transparent] tw:group-disabled:text-neutral-200 tw:forced-colors:group-disabled:text-[GrayText] tw:pressed:bg-neutral-100";

export function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
  ...otherProps
}: Props) {
  return (
    <AriaNumberField
      {...otherProps}
      className={composeTailwindRenderProps(
        otherProps.className,
        "tw:group tw:flex tw:flex-col tw:gap-1 tw:font-sans",
      )}
    >
      <Label>{label}</Label>

      <FieldGroup>
        {(renderProps) => (
          <>
            <Input className="tw:w-20" placeholder={placeholder} />

            <div
              className={fieldBorderStyles({
                ...renderProps,
                className: "tw:flex tw:h-full tw:flex-col tw:border-s",
              })}
            >
              <Button className={spinnerButtonStyles} slot="increment">
                <ChevronUp aria-hidden className="tw:h-4 tw:w-4" />
              </Button>

              <div
                className={fieldBorderStyles({
                  ...renderProps,
                  className: "tw:border-b",
                })}
              />

              <Button className={spinnerButtonStyles} slot="decrement">
                <ChevronDown aria-hidden className="tw:h-4 tw:w-4" />
              </Button>
            </div>
          </>
        )}
      </FieldGroup>

      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  );
}
