"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { TextField } from "react-aria-components";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
import { Description, FieldError, Input, Label, fieldBorderStyles } from "./field.js";
const inputStyles = tv({
    extend: focusRing,
    base: "tw:box-border tw:min-h-9 tw:rounded-lg tw:border tw:px-3 tw:py-0 tw:font-sans tw:text-sm tw:transition",
    variants: {
        isFocused: fieldBorderStyles.variants.isFocusWithin,
        isInvalid: fieldBorderStyles.variants.isInvalid,
        isDisabled: fieldBorderStyles.variants.isDisabled
    }
});
function textField_TextField({ description, errorMessage, label, ...props }) {
    return /*#__PURE__*/ jsxs(TextField, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:flex tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            label && /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsx(Input, {
                className: inputStyles
            }),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: errorMessage
            })
        ]
    });
}
export { textField_TextField as TextField };

//# sourceMappingURL=textField.js.map