"use client";
import type { DialogProps } from "react-aria-components";
import { Dialog as RACDialog } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Dialog(props: DialogProps) {
  return (
    <RACDialog
      {...props}
      className={twMerge(
        "tw:relative tw:box-border tw:max-h-[inherit] tw:overflow-auto tw:p-6 tw:outline-0 tw:[[data-placement]>&]:p-4",
        props.className,
      )}
    />
  );
}
