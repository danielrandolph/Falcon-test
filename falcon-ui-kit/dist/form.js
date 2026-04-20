"use client";
import { jsx } from "react/jsx-runtime";
import { Form } from "react-aria-components";
import { twMerge } from "tailwind-merge";
function form_Form({ className, ...otherProps }) {
    return /*#__PURE__*/ jsx(Form, {
        ...otherProps,
        className: twMerge("tw:flex tw:flex-col tw:gap-6", className)
    });
}
export { form_Form as Form };

//# sourceMappingURL=form.js.map