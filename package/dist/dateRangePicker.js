"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { CalendarIcon } from "lucide-react";
import { DateRangePicker } from "react-aria-components";
import { DateInput } from "./dateField.js";
import { Description, FieldError, FieldGroup, Label } from "./field.js";
import { FieldButton } from "./fieldButton.js";
import { Popover } from "./popover.js";
import { RangeCalendar } from "./rangeCalendar.js";
import { composeTailwindRenderProps } from "./utils.js";
function dateRangePicker_DateRangePicker({ description, errorMessage, label, ...props }) {
    return /*#__PURE__*/ jsxs(DateRangePicker, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:group tw:flex tw:max-w-full tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            label && /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsxs(FieldGroup, {
                className: "tw:w-auto tw:min-w-52 tw:cursor-text tw:disabled:cursor-default",
                children: [
                    /*#__PURE__*/ jsxs("div", {
                        className: "tw:flex tw:w-fit tw:flex-1 tw:items-center tw:overflow-x-auto tw:overflow-y-clip tw:[scrollbar-width:none]",
                        children: [
                            /*#__PURE__*/ jsx(DateInput, {
                                className: "tw:ps-3 tw:pe-2 tw:text-sm",
                                slot: "start"
                            }),
                            /*#__PURE__*/ jsx("span", {
                                "aria-hidden": "true",
                                className: "tw:text-neutral-800 tw:group-disabled:text-neutral-200 tw:forced-colors:text-[ButtonText] tw:forced-colors:group-disabled:text-[GrayText]",
                                children: "–"
                            }),
                            /*#__PURE__*/ jsx(DateInput, {
                                className: "tw:flex-1 tw:ps-2 tw:pe-3 tw:text-sm",
                                slot: "end"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx(FieldButton, {
                        className: "tw:mr-1 tw:w-6 tw:outline-offset-0",
                        children: /*#__PURE__*/ jsx(CalendarIcon, {
                            "aria-hidden": true,
                            className: "tw:h-4 tw:w-4"
                        })
                    })
                ]
            }),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: errorMessage
            }),
            /*#__PURE__*/ jsx(Popover, {
                className: "tw:p-2",
                children: /*#__PURE__*/ jsx(RangeCalendar, {})
            })
        ]
    });
}
export { dateRangePicker_DateRangePicker as DateRangePicker };

//# sourceMappingURL=dateRangePicker.js.map