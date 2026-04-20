"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, Heading, Text, useLocale } from "react-aria-components";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
import { Button } from "./button.js";
const cellStyles = tv({
    extend: focusRing,
    base: "tw:flex tw:aspect-square tw:w-[calc(100cqw/7)] tw:cursor-default tw:items-center tw:justify-center tw:rounded-full tw:text-sm tw:forced-color-adjust-none tw:[-webkit-tap-highlight-color:transparent]",
    variants: {
        isSelected: {
            false: "tw:text-neutral-900 tw:hover:bg-neutral-200 tw:pressed:bg-neutral-300",
            true: "tw:bg-blue-600 tw:text-white tw:invalid:bg-red-600 tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText] tw:forced-colors:invalid:bg-[Mark]"
        },
        isDisabled: {
            true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    }
});
function calendar_Calendar({ errorMessage, ...props }) {
    return /*#__PURE__*/ jsxs(Calendar, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:@container tw:flex tw:w-3xs tw:max-w-full tw:flex-col tw:font-sans"),
        children: [
            /*#__PURE__*/ jsx(CalendarHeader, {}),
            /*#__PURE__*/ jsxs(CalendarGrid, {
                className: "tw:border-spacing-0",
                children: [
                    /*#__PURE__*/ jsx(calendar_CalendarGridHeader, {}),
                    /*#__PURE__*/ jsx(CalendarGridBody, {
                        children: (date)=>/*#__PURE__*/ jsx(CalendarCell, {
                                date: date,
                                className: cellStyles
                            })
                    })
                ]
            }),
            errorMessage && /*#__PURE__*/ jsx(Text, {
                slot: "errorMessage",
                className: "tw:text-sm tw:text-red-600",
                children: errorMessage
            })
        ]
    });
}
function CalendarHeader() {
    const { direction } = useLocale();
    return /*#__PURE__*/ jsxs("header", {
        className: "tw:border-box tw:flex tw:items-center tw:gap-1 tw:px-1 tw:pb-4",
        children: [
            /*#__PURE__*/ jsx(Button, {
                slot: "previous",
                variant: "quiet",
                children: "rtl" === direction ? /*#__PURE__*/ jsx(ChevronRight, {
                    "aria-hidden": true,
                    size: 18
                }) : /*#__PURE__*/ jsx(ChevronLeft, {
                    "aria-hidden": true,
                    size: 18
                })
            }),
            /*#__PURE__*/ jsx(Heading, {
                className: "tw:mx-2 tw:my-0 tw:flex-1 tw:text-center tw:font-sans tw:text-base tw:font-semibold tw:text-neutral-900 tw:[font-variation-settings:normal]"
            }),
            /*#__PURE__*/ jsx(Button, {
                slot: "next",
                variant: "quiet",
                children: "rtl" === direction ? /*#__PURE__*/ jsx(ChevronLeft, {
                    "aria-hidden": true,
                    size: 18
                }) : /*#__PURE__*/ jsx(ChevronRight, {
                    "aria-hidden": true,
                    size: 18
                })
            })
        ]
    });
}
function calendar_CalendarGridHeader() {
    return /*#__PURE__*/ jsx(CalendarGridHeader, {
        children: (day)=>/*#__PURE__*/ jsx(CalendarHeaderCell, {
                className: "tw:text-xs tw:font-semibold tw:text-neutral-500",
                children: day
            })
    });
}
export { calendar_Calendar as Calendar, calendar_CalendarGridHeader as CalendarGridHeader, CalendarHeader };

//# sourceMappingURL=calendar.js.map