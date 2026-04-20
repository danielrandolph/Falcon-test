"use client";
import type { ModalOverlayProps } from "react-aria-components";
import { Modal as RACModal, ModalOverlay } from "react-aria-components";
import { tv } from "tailwind-variants";

const overlayStyles = tv({
  base: "tw:absolute tw:top-0 tw:left-0 tw:isolate tw:z-20 tw:h-(--page-height) tw:w-full tw:bg-black/[50%] tw:text-center tw:backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "tw:duration-200 tw:ease-out tw:animate-in tw:fade-in",
    },
    isExiting: {
      true: "tw:duration-200 tw:ease-in tw:animate-out tw:fade-out",
    },
  },
});

const modalStyles = tv({
  base: "tw:max-h-[calc(var(--visual-viewport-height)*.9)] tw:w-full tw:max-w-[min(90vw,450px)] tw:rounded-2xl tw:border tw:border-black/10 tw:bg-white tw:bg-clip-padding tw:text-left tw:align-middle tw:font-sans tw:text-neutral-700 tw:shadow-2xl tw:forced-colors:bg-[Canvas]",
  variants: {
    isEntering: {
      true: "tw:duration-200 tw:ease-out tw:animate-in tw:zoom-in-105",
    },
    isExiting: {
      true: "tw:duration-200 tw:ease-in tw:animate-out tw:zoom-out-95",
    },
  },
});

export function Modal(props: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <div className="tw:sticky tw:top-0 tw:left-0 tw:box-border tw:flex tw:h-(--visual-viewport-height) tw:w-full tw:items-center tw:justify-center">
        <RACModal {...props} className={modalStyles} />
      </div>
    </ModalOverlay>
  );
}
