"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { TimeField } from "react-aria-components";
import { DateInput } from "./dateField.js";
import { Description, FieldError, Label } from "./field.js";
import { composeTailwindRenderProps } from "./utils.js";
function timeField_TimeField({ description, errorMessage, label, ...props }) {
    return /*#__PURE__*/ jsxs(TimeField, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:flex tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsx(DateInput, {}),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: errorMessage
            })
        ]
    });
}
export { timeField_TimeField as TimeField };

//# sourceMappingURL=timeField.js.map