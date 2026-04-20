"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { CheckboxGroup } from "react-aria-components";
import { composeTailwindRenderProps } from "./utils.js";
import { Description, FieldError, Label } from "./field.js";
function checkboxGroup_CheckboxGroup(props) {
    return /*#__PURE__*/ jsxs(CheckboxGroup, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:flex tw:flex-col tw:gap-2 tw:font-sans"),
        children: [
            /*#__PURE__*/ jsx(Label, {
                children: props.label
            }),
            props.children,
            props.description && /*#__PURE__*/ jsx(Description, {
                children: props.description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: props.errorMessage
            })
        ]
    });
}
export { checkboxGroup_CheckboxGroup as CheckboxGroup };

//# sourceMappingURL=checkboxGroup.js.map