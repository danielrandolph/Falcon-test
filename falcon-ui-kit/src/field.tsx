"use client";
import type {
  FieldErrorProps,
  GroupProps,
  InputProps,
  LabelProps,
  TextProps,
} from "react-aria-components";
import {
  composeRenderProps,
  FieldError as RACFieldError,
  Group,
  Input as RACInput,
  Label as RACLabel,
  Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { composeTailwindRenderProps, focusRing } from "./utils";

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        "tw:w-fit tw:cursor-default tw:font-sans tw:text-sm tw:font-medium tw:text-neutral-600",
        props.className,
      )}
    />
  );
}

export function Description(props: TextProps) {
  return (
    <Text
      {...props}
      className={twMerge("tw:text-sm tw:text-neutral-600", props.className)}
      slot="description"
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:text-sm tw:text-red-600 tw:forced-colors:text-[Mark]",
      )}
    />
  );
}

export const fieldBorderStyles = tv({
  base: "transition",
  variants: {
    isFocusWithin: {
      false:
        "tw:border-neutral-300 tw:hover:border-neutral-400 tw:forced-colors:border-[ButtonBorder]",
      true: "tw:border-neutral-600 tw:forced-colors:border-[Highlight]",
    },
    isInvalid: {
      true: "tw:border-red-600 tw:forced-colors:border-[Mark]",
    },
    isDisabled: {
      true: "tw:border-neutral-200 tw:forced-colors:border-[GrayText]",
    },
  },
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: "tw:group tw:box-border tw:flex tw:h-9 tw:items-center tw:overflow-hidden tw:rounded-lg tw:border tw:bg-white tw:transition tw:forced-colors:bg-[Field]",
  variants: fieldBorderStyles.variants,
});

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className }),
      )}
    />
  );
}

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:min-h-9 tw:min-w-0 tw:flex-1 tw:border-0 tw:bg-white tw:px-3 tw:py-0 tw:font-sans tw:text-sm tw:text-neutral-800 tw:outline tw:outline-0 tw:[-webkit-tap-highlight-color:transparent] tw:placeholder:text-neutral-600 tw:disabled:text-neutral-200 tw:disabled:placeholder:text-neutral-200",
      )}
    />
  );
}
