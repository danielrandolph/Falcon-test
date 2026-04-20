"use client";
import type { FormProps } from "react-aria-components";
import { Form as RACForm } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Form({ className, ...otherProps }: FormProps) {
  return (
    <RACForm
      {...otherProps}
      className={twMerge("tw:flex tw:flex-col tw:gap-6", className)}
    />
  );
}
