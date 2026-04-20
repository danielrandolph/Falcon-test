"use client";
import { AlertCircleIcon, InfoIcon } from "lucide-react";
import type { ReactNode } from "react";
import { chain } from "react-aria";
import type { DialogProps } from "react-aria-components";
import { Heading } from "react-aria-components";

import { Button } from "./button";
import { Dialog } from "./dialog";

interface AlertDialogProps extends Omit<DialogProps, "children"> {
  actionLabel: string;
  cancelLabel?: string;
  children: ReactNode;
  title: string;
  variant?: "info" | "destructive";
  onAction?: () => void;
}

export function AlertDialog({
  actionLabel,
  cancelLabel,
  children,
  title,
  variant,
  onAction,
  ...props
}: AlertDialogProps) {
  return (
    <Dialog role="alertdialog" {...props}>
      {({ close }) => (
        <>
          <Heading
            slot="title"
            className="tw:my-0 tw:text-xl tw:leading-6 tw:font-semibold"
          >
            {title}
          </Heading>
          <div
            className={`tw:absolute tw:top-6 tw:right-6 tw:h-6 tw:w-6 tw:stroke-2 ${variant === "destructive" ? "tw:text-red-500" : "tw:text-blue-500"}`}
          >
            {variant === "destructive" ? (
              <AlertCircleIcon aria-hidden />
            ) : (
              <InfoIcon aria-hidden />
            )}
          </div>

          <p className="tw:mt-3 tw:text-neutral-500">{children}</p>

          <div className="tw:mt-6 tw:flex tw:justify-end tw:gap-2">
            <Button variant="secondary" onPress={close}>
              {cancelLabel || "Cancel"}
            </Button>

            <Button
              autoFocus
              variant={variant === "destructive" ? "destructive" : "primary"}
              onPress={chain(onAction, close)}
            >
              {actionLabel}
            </Button>
          </div>
        </>
      )}
    </Dialog>
  );
}
