"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type {
  CalendarProps as AriaCalendarProps,
  DateValue,
} from "react-aria-components";
import {
  Calendar as AriaCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  Text,
  useLocale,
} from "react-aria-components";
import { tv } from "tailwind-variants";

import { composeTailwindRenderProps, focusRing } from "./utils";
import { Button } from "./button";

const cellStyles = tv({
  extend: focusRing,
  base: "tw:flex tw:aspect-square tw:w-[calc(100cqw/7)] tw:cursor-default tw:items-center tw:justify-center tw:rounded-full tw:text-sm tw:forced-color-adjust-none tw:[-webkit-tap-highlight-color:transparent]",
  variants: {
    isSelected: {
      false:
        "tw:text-neutral-900 tw:hover:bg-neutral-200 tw:pressed:bg-neutral-300",
      true: "tw:bg-blue-600 tw:text-white tw:invalid:bg-red-600 tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText] tw:forced-colors:invalid:bg-[Mark]",
    },
    isDisabled: {
      true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]",
    },
  },
});

export interface CalendarProps<T extends DateValue>
  extends Omit<AriaCalendarProps<T>, "visibleDuration"> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:@container tw:flex tw:w-3xs tw:max-w-full tw:flex-col tw:font-sans",
      )}
    >
      <CalendarHeader />

      <CalendarGrid className="tw:border-spacing-0">
        <CalendarGridHeader />

        <CalendarGridBody>
          {(date) => <CalendarCell date={date} className={cellStyles} />}
        </CalendarGridBody>
      </CalendarGrid>

      {errorMessage && (
        <Text slot="errorMessage" className="tw:text-sm tw:text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  );
}

export function CalendarHeader() {
  const { direction } = useLocale();

  return (
    <header className="tw:border-box tw:flex tw:items-center tw:gap-1 tw:px-1 tw:pb-4">
      <Button slot="previous" variant="quiet">
        {direction === "rtl" ? (
          <ChevronRight aria-hidden size={18} />
        ) : (
          <ChevronLeft aria-hidden size={18} />
        )}
      </Button>

      <Heading className="tw:mx-2 tw:my-0 tw:flex-1 tw:text-center tw:font-sans tw:text-base tw:font-semibold tw:text-neutral-900 tw:[font-variation-settings:normal]" />

      <Button slot="next" variant="quiet">
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden size={18} />
        ) : (
          <ChevronRight aria-hidden size={18} />
        )}
      </Button>
    </header>
  );
}

export function CalendarGridHeader() {
  return (
    <AriaCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="tw:text-xs tw:font-semibold tw:text-neutral-500">
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  );
}
