"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Radio, RadioGroup, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "./field.js";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
function radioGroup_RadioGroup(props) {
    return /*#__PURE__*/ jsxs(RadioGroup, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:group tw:flex tw:flex-col tw:gap-2 tw:font-sans"),
        children: [
            /*#__PURE__*/ jsx(Label, {
                children: props.label
            }),
            /*#__PURE__*/ jsx("div", {
                className: "tw:flex tw:gap-2 tw:group-orientation-horizontal:gap-4 tw:group-orientation-vertical:flex-col",
                children: props.children
            }),
            props.description && /*#__PURE__*/ jsx(Description, {
                children: props.description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: props.errorMessage
            })
        ]
    });
}
const styles = tv({
    extend: focusRing,
    base: "tw:box-border tw:h-4.5 tw:w-4.5 tw:rounded-full tw:border tw:bg-white tw:transition-all",
    variants: {
        isSelected: {
            false: "tw:border-neutral-400 tw:group-pressed:border-neutral-500",
            true: "tw:border-6 tw:border-neutral-700 tw:group-pressed:border-neutral-800 tw:forced-colors:border-[Highlight]!"
        },
        isInvalid: {
            true: "tw:border-red-700 tw:group-pressed:border-red-800 tw:forced-colors:border-[Mark]!"
        },
        isDisabled: {
            true: "tw:border-neutral-200 tw:forced-colors:border-[GrayText]!"
        }
    }
});
function radioGroup_Radio(props) {
    return /*#__PURE__*/ jsx(Radio, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:group tw:relative tw:flex tw:items-center tw:gap-2 tw:text-sm tw:text-neutral-800 tw:transition tw:[-webkit-tap-highlight-color:transparent] tw:disabled:text-neutral-300 tw:forced-colors:disabled:text-[GrayText]"),
        children: composeRenderProps(props.children, (children, renderProps)=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: styles(renderProps)
                    }),
                    children
                ]
            }))
    });
}
export { radioGroup_Radio as Radio, radioGroup_RadioGroup as RadioGroup };

//# sourceMappingURL=radioGroup.js.map