"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { DateField, DateInput, DateSegment } from "react-aria-components";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps } from "./utils.js";
import { Description, FieldError, Label, fieldGroupStyles } from "./field.js";
function dateField_DateField({ label, description, errorMessage, ...props }) {
    return /*#__PURE__*/ jsxs(DateField, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:flex tw:flex-col tw:gap-1"),
        children: [
            label && /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsx(dateField_DateInput, {}),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: errorMessage
            })
        ]
    });
}
const segmentStyles = tv({
    base: "tw:inline tw:rounded-xs tw:p-0.5 tw:whitespace-nowrap tw:text-neutral-800 tw:caret-transparent tw:outline-0 tw:forced-color-adjust-none tw:[-webkit-tap-highlight-color:transparent] tw:forced-colors:text-[ButtonText] tw:type-literal:p-0",
    variants: {
        isPlaceholder: {
            true: "tw:text-neutral-600"
        },
        isDisabled: {
            true: "tw:text-neutral-200 tw:forced-colors:text-[GrayText]"
        },
        isFocused: {
            true: "tw:bg-blue-600 tw:text-white tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText]"
        }
    }
});
function dateField_DateInput(props) {
    return /*#__PURE__*/ jsx(DateInput, {
        className: (renderProps)=>fieldGroupStyles({
                ...renderProps,
                className: "tw:inline tw:h-9 tw:min-w-37.5 tw:cursor-text tw:overflow-x-auto tw:px-3 tw:font-sans tw:text-sm tw:leading-8.5 tw:whitespace-nowrap tw:[scrollbar-width:none] tw:disabled:cursor-default"
            }),
        ...props,
        children: (segment)=>/*#__PURE__*/ jsx(DateSegment, {
                segment: segment,
                className: segmentStyles
            })
    });
}
export { dateField_DateField as DateField, dateField_DateInput as DateInput };

//# sourceMappingURL=dateField.js.map