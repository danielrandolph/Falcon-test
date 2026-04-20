"use client";
import type { ReactNode } from "react";
import type {
  RadioGroupProps as RACRadioGroupProps,
  RadioProps,
  ValidationResult,
} from "react-aria-components";
import {
  composeRenderProps,
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Description, FieldError, Label } from "./field";
import { composeTailwindRenderProps, focusRing } from "./utils";

interface Props extends Omit<RACRadioGroupProps, "children"> {
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  label?: string;
}

export function RadioGroup(props: Props) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:group tw:flex tw:flex-col tw:gap-2 tw:font-sans",
      )}
    >
      <Label>{props.label}</Label>

      <div className="tw:flex tw:gap-2 tw:group-orientation-horizontal:gap-4 tw:group-orientation-vertical:flex-col">
        {props.children}
      </div>

      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RACRadioGroup>
  );
}

const styles = tv({
  extend: focusRing,
  base: "tw:box-border tw:h-4.5 tw:w-4.5 tw:rounded-full tw:border tw:bg-white tw:transition-all",
  variants: {
    isSelected: {
      false: "tw:border-neutral-400 tw:group-pressed:border-neutral-500",
      true: "tw:border-6 tw:border-neutral-700 tw:group-pressed:border-neutral-800 tw:forced-colors:border-[Highlight]!",
    },
    isInvalid: {
      true: "tw:border-red-700 tw:group-pressed:border-red-800 tw:forced-colors:border-[Mark]!",
    },
    isDisabled: {
      true: "tw:border-neutral-200 tw:forced-colors:border-[GrayText]!",
    },
  },
});

export function Radio(props: RadioProps) {
  return (
    <RACRadio
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:group tw:relative tw:flex tw:items-center tw:gap-2 tw:text-sm tw:text-neutral-800 tw:transition tw:[-webkit-tap-highlight-color:transparent] tw:disabled:text-neutral-300 tw:forced-colors:disabled:text-[GrayText]",
      )}
    >
      {composeRenderProps(props.children, (children, renderProps) => (
        <>
          <div className={styles(renderProps)} />
          {children}
        </>
      ))}
    </RACRadio>
  );
}
