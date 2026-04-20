"use client";
import { ChevronRight } from "lucide-react";
import type React from "react";
import { useContext } from "react";
import type {
  DisclosurePanelProps as AriaDisclosurePanelProps,
  DisclosureProps as AriaDisclosureProps,
} from "react-aria-components";
import {
  composeRenderProps,
  Disclosure as AriaDisclosure,
  DisclosurePanel as AriaDisclosurePanel,
  DisclosureStateContext,
  Heading,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { Button } from "./button";
import { composeTailwindRenderProps } from "./utils";

const disclosure = tv({
  base: "tw:group tw:min-w-50 tw:rounded-lg tw:font-sans tw:text-neutral-900",
});

const chevron = tv({
  base: "tw:h-4 tw:w-4 tw:text-neutral-500 tw:transition-transform tw:duration-200 tw:ease-in-out",
  variants: {
    isExpanded: {
      true: "tw:rotate-90 tw:transform",
    },
    isDisabled: {
      true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
  },
});

interface DisclosureProps extends AriaDisclosureProps {
  children: React.ReactNode;
}

export function Disclosure({ children, ...props }: DisclosureProps) {
  return (
    <AriaDisclosure
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        disclosure({ ...renderProps, className }),
      )}
    >
      {children}
    </AriaDisclosure>
  );
}

interface DisclosureHeaderProps {
  children: React.ReactNode;
}

function useDisclosureContext() {
  const value = useContext(DisclosureStateContext);
  if (!value) throw new Error();
  return value;
}

export function DisclosureHeader({ children }: DisclosureHeaderProps) {
  const { isExpanded } = useDisclosureContext();

  return (
    <Heading className="tw:m-0 tw:text-lg tw:font-semibold">
      <Button
        className="tw:w-full tw:justify-start tw:font-medium"
        slot="trigger"
        variant="quiet"
      >
        {({ isDisabled }) => (
          <>
            <ChevronRight
              aria-hidden
              className={chevron({ isExpanded, isDisabled })}
            />

            <span>{children}</span>
          </>
        )}
      </Button>
    </Heading>
  );
}

interface DisclosurePanelProps extends AriaDisclosurePanelProps {
  children: React.ReactNode;
}

export function DisclosurePanel({ children, ...props }: DisclosurePanelProps) {
  return (
    <AriaDisclosurePanel
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:h-(--disclosure-panel-height) tw:overflow-clip tw:motion-safe:transition-[height]",
      )}
    >
      <div className="tw:px-4 tw:py-2">{children}</div>
    </AriaDisclosurePanel>
  );
}
