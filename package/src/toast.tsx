"use client";
import { XIcon } from "lucide-react";
import {
  Button,
  Text,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
  UNSTABLE_ToastQueue as ToastQueue,
  UNSTABLE_ToastRegion as RACToastRegion,
} from "react-aria-components";
import { flushSync } from "react-dom";

export const toasts = new ToastQueue<{
  description?: string;
  title: string;
}>({
  wrapUpdate(fn) {
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        flushSync(fn);
      });
    } else {
      fn();
    }
  },
});

export function ToastRegion() {
  return (
    <RACToastRegion
      className="tw:fixed tw:right-4 tw:bottom-4 tw:flex tw:flex-col-reverse tw:gap-2 tw:rounded-lg tw:outline-none tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-blue-600 tw:focus-visible:outline-solid"
      queue={toasts}
    >
      {({ toast }) => (
        <Toast
          className="tw:flex tw:w-57.5 tw:items-center tw:gap-4 tw:rounded-lg tw:bg-blue-600 tw:px-4 tw:py-3 tw:font-sans tw:outline-none tw:[view-transition-class:toast] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-blue-600 tw:focus-visible:outline-solid tw:forced-colors:outline"
          style={{ viewTransitionName: toast.key }}
          toast={toast}
        >
          <ToastContent className="tw:flex tw:min-w-0 tw:flex-1 tw:flex-col">
            <Text
              className="tw:text-sm tw:font-semibold tw:text-white"
              slot="title"
            >
              {toast.content.title}
            </Text>

            {toast.content.description && (
              <Text className="tw:text-xs tw:text-white" slot="description">
                {toast.content.description}
              </Text>
            )}
          </ToastContent>

          <Button
            aria-label="Close"
            className="tw:flex tw:h-8 tw:w-8 tw:flex-none tw:appearance-none tw:items-center tw:justify-center tw:rounded-sm tw:border-none tw:bg-transparent tw:p-0 tw:text-white tw:outline-none tw:[-webkit-tap-highlight-color:transparent] tw:hover:bg-white/10 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-white tw:focus-visible:outline-solid tw:pressed:bg-white/15"
            slot="close"
          >
            <XIcon className="tw:h-4 tw:w-4" />
          </Button>
        </Toast>
      )}
    </RACToastRegion>
  );
}
