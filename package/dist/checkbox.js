"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Check, Minus } from "lucide-react";
import { Checkbox, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils.js";
const checkboxStyles = tv({
    base: "tw:group tw:relative tw:flex tw:items-center tw:gap-2 tw:font-sans tw:text-sm tw:transition tw:[-webkit-tap-highlight-color:transparent]",
    variants: {
        isDisabled: {
            false: "tw:text-neutral-800",
            true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    }
});
const boxStyles = tv({
    extend: focusRing,
    base: "tw:box-border tw:flex tw:h-4.5 tw:w-4.5 tw:shrink-0 tw:items-center tw:justify-center tw:rounded-sm tw:border tw:transition",
    variants: {
        isSelected: {
            false: "tw:border-(--tw-color) tw:bg-white tw:[--tw-color:var(--tw-color-neutral-400)] tw:group-pressed:[--tw-color:var(--tw-color-neutral-500)]",
            true: "tw:border-(--tw-color) tw:bg-(--tw-color) tw:[--tw-color:var(--tw-color-neutral-700)] tw:group-pressed:[--tw-color:var(--tw-color-neutral-800)] tw:forced-colors:[--tw-color:Highlight]!"
        },
        isInvalid: {
            true: "tw:[--tw-color:var(--tw-color-red-700)] tw:group-pressed:[--tw-color:var(--tw-color-red-800)] tw:forced-colors:[--tw-color:Mark]!"
        },
        isDisabled: {
            true: "tw:[--tw-color:var(--tw-color-neutral-200)] tw:forced-colors:[--tw-color:GrayText]!"
        }
    }
});
const iconStyles = "tw:pointer-events-none tw:h-3.5 tw:w-3.5 tw:text-white tw:group-disabled:text-neutral-400 tw:forced-colors:text-[HighlightText]";
function checkbox_Checkbox(props) {
    return /*#__PURE__*/ jsx(Checkbox, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>checkboxStyles({
                ...renderProps,
                className
            })),
        children: composeRenderProps(props.children, (children, { isSelected, isIndeterminate, ...renderProps })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: boxStyles({
                            isSelected: isSelected || isIndeterminate,
                            ...renderProps
                        }),
                        children: isIndeterminate ? /*#__PURE__*/ jsx(Minus, {
                            "aria-hidden": true,
                            className: iconStyles
                        }) : isSelected ? /*#__PURE__*/ jsx(Check, {
                            "aria-hidden": true,
                            className: iconStyles
                        }) : null
                    }),
                    children
                ]
            }))
    });
}
export { checkbox_Checkbox as Checkbox };

//# sourceMappingURL=checkbox.js.map