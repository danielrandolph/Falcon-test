"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { CalendarCell, CalendarGrid, CalendarGridBody, RangeCalendar, Text } from "react-aria-components";
import { tv } from "tailwind-variants";
import { CalendarGridHeader, CalendarHeader } from "./calendar.js";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
const cell = tv({
    extend: focusRing,
    base: "tw:flex tw:h-full tw:w-full tw:items-center tw:justify-center tw:rounded-full tw:text-neutral-900 tw:forced-color-adjust-none",
    variants: {
        selectionState: {
            none: "tw:group-hover:bg-neutral-200 tw:group-pressed:bg-neutral-300",
            middle: [
                "tw:group-hover:bg-blue-200 tw:forced-colors:group-hover:bg-[Highlight]",
                "tw:group-invalid:group-hover:bg-red-200 tw:forced-colors:group-invalid:group-hover:bg-[Mark]",
                "tw:group-pressed:bg-blue-300 tw:forced-colors:text-[HighlightText] tw:forced-colors:group-pressed:bg-[Highlight]",
                "tw:group-invalid:group-pressed:bg-red-300 tw:forced-colors:group-invalid:group-pressed:bg-[Mark]"
            ],
            cap: "tw:bg-blue-600 tw:text-white tw:group-invalid:bg-red-600 tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText] tw:forced-colors:group-invalid:bg-[Mark]"
        },
        isDisabled: {
            true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    }
});
function rangeCalendar_RangeCalendar({ errorMessage, ...props }) {
    return /*#__PURE__*/ jsxs(RangeCalendar, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:@container tw:w-3xs tw:max-w-full tw:font-sans"),
        children: [
            /*#__PURE__*/ jsx(CalendarHeader, {}),
            /*#__PURE__*/ jsxs(CalendarGrid, {
                className: "tw:border-spacing-0 tw:[&_td]:px-0 tw:[&_td]:py-px",
                children: [
                    /*#__PURE__*/ jsx(CalendarGridHeader, {}),
                    /*#__PURE__*/ jsx(CalendarGridBody, {
                        children: (date)=>/*#__PURE__*/ jsx(CalendarCell, {
                                className: "tw:group tw:aspect-square tw:w-[calc(100cqw/7)] tw:cursor-default tw:text-sm tw:outline-0 tw:[-webkit-tap-highlight-color:transparent] tw:outside-month:text-neutral-300 tw:selected:bg-blue-100 tw:invalid:selected:bg-red-100 tw:forced-colors:selected:bg-[Highlight] tw:forced-colors:invalid:selected:bg-[Mark] tw:selection-start:rounded-s-full tw:selection-end:rounded-e-full tw:[td:first-child_&]:rounded-s-full tw:[td:last-child_&]:rounded-e-full",
                                date: date,
                                children: ({ formattedDate, isSelected, isSelectionStart, isSelectionEnd, isFocusVisible, isDisabled })=>/*#__PURE__*/ jsx("span", {
                                        className: cell({
                                            isDisabled,
                                            isFocusVisible,
                                            selectionState: isSelected && (isSelectionStart || isSelectionEnd) ? "cap" : isSelected ? "middle" : "none"
                                        }),
                                        children: formattedDate
                                    })
                            })
                    })
                ]
            }),
            errorMessage && /*#__PURE__*/ jsx(Text, {
                className: "tw:text-sm tw:text-red-600",
                slot: "errorMessage",
                children: errorMessage
            })
        ]
    });
}
export { rangeCalendar_RangeCalendar as RangeCalendar };

//# sourceMappingURL=rangeCalendar.js.map