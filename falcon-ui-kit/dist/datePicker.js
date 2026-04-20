"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { CalendarIcon } from "lucide-react";
import { DatePicker } from "react-aria-components";
import { Calendar } from "./calendar.js";
import { DateInput } from "./dateField.js";
import { Description, FieldError, FieldGroup, Label } from "./field.js";
import { FieldButton } from "./fieldButton.js";
import { Popover } from "./popover.js";
import { composeTailwindRenderProps } from "./utils.js";
function datePicker_DatePicker({ description, errorMessage, label, ...props }) {
    return /*#__PURE__*/ jsxs(DatePicker, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:group tw:flex tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            label && /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsxs(FieldGroup, {
                className: "tw:w-auto tw:min-w-52 tw:cursor-text tw:disabled:cursor-default",
                children: [
                    /*#__PURE__*/ jsx(DateInput, {
                        className: "tw:min-w-37.5 tw:flex-1 tw:px-3 tw:text-sm"
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
                children: /*#__PURE__*/ jsx(Calendar, {})
            })
        ]
    });
}
export { datePicker_DatePicker as DatePicker };

//# sourceMappingURL=datePicker.js.map