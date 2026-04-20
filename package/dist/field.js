"use client";
import { jsx } from "react/jsx-runtime";
import { FieldError, Group, Input, Label, Text, composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
function field_Label(props) {
    return /*#__PURE__*/ jsx(Label, {
        ...props,
        className: twMerge("tw:w-fit tw:cursor-default tw:font-sans tw:text-sm tw:font-medium tw:text-neutral-600", props.className)
    });
}
function Description(props) {
    return /*#__PURE__*/ jsx(Text, {
        ...props,
        className: twMerge("tw:text-sm tw:text-neutral-600", props.className),
        slot: "description"
    });
}
function field_FieldError(props) {
    return /*#__PURE__*/ jsx(FieldError, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:text-sm tw:text-red-600 tw:forced-colors:text-[Mark]")
    });
}
const fieldBorderStyles = tv({
    base: "transition",
    variants: {
        isFocusWithin: {
            false: "tw:border-neutral-300 tw:hover:border-neutral-400 tw:forced-colors:border-[ButtonBorder]",
            true: "tw:border-neutral-600 tw:forced-colors:border-[Highlight]"
        },
        isInvalid: {
            true: "tw:border-red-600 tw:forced-colors:border-[Mark]"
        },
        isDisabled: {
            true: "tw:border-neutral-200 tw:forced-colors:border-[GrayText]"
        }
    }
});
const fieldGroupStyles = tv({
    extend: focusRing,
    base: "tw:group tw:box-border tw:flex tw:h-9 tw:items-center tw:overflow-hidden tw:rounded-lg tw:border tw:bg-white tw:transition tw:forced-colors:bg-[Field]",
    variants: fieldBorderStyles.variants
});
function FieldGroup(props) {
    return /*#__PURE__*/ jsx(Group, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>fieldGroupStyles({
                ...renderProps,
                className
            }))
    });
}
function field_Input(props) {
    return /*#__PURE__*/ jsx(Input, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:min-h-9 tw:min-w-0 tw:flex-1 tw:border-0 tw:bg-white tw:px-3 tw:py-0 tw:font-sans tw:text-sm tw:text-neutral-800 tw:outline tw:outline-0 tw:[-webkit-tap-highlight-color:transparent] tw:placeholder:text-neutral-600 tw:disabled:text-neutral-200 tw:disabled:placeholder:text-neutral-200")
    });
}
export { Description, field_FieldError as FieldError, FieldGroup, field_Input as Input, field_Label as Label, fieldBorderStyles, fieldGroupStyles };

//# sourceMappingURL=field.js.map