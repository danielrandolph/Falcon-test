"use client";
import { jsx } from "react/jsx-runtime";
import { ToggleButton, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils.js";
const styles = tv({
    extend: focusRing,
    base: "tw:relative tw:box-border tw:inline-flex tw:h-9 tw:cursor-default tw:items-center tw:justify-center tw:gap-2 tw:rounded-lg tw:border tw:border-black/10 tw:px-3.5 tw:text-center tw:font-sans tw:text-sm tw:transition tw:forced-color-adjust-none tw:[-webkit-tap-highlight-color:transparent] tw:[&:has(>svg:only-child)]:aspect-square tw:[&:has(>svg:only-child)]:h-8 tw:[&:has(>svg:only-child)]:px-0",
    variants: {
        isSelected: {
            false: "tw:bg-neutral-50 tw:text-neutral-800 tw:hover:bg-neutral-100 tw:forced-colors:bg-[ButtonFace]! tw:forced-colors:text-[ButtonText]! tw:pressed:bg-neutral-200",
            true: "tw:bg-neutral-700 tw:text-white tw:hover:bg-neutral-800 tw:forced-colors:bg-[Highlight]! tw:forced-colors:text-[HighlightText]! tw:pressed:bg-neutral-900"
        },
        isDisabled: {
            true: "tw:border-transparent tw:bg-neutral-100 tw:text-neutral-300 tw:forced-colors:bg-[ButtonFace]! tw:forced-colors:text-[GrayText]!"
        }
    }
});
function toggleButton_ToggleButton(props) {
    return /*#__PURE__*/ jsx(ToggleButton, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>styles({
                ...renderProps,
                className
            }))
    });
}
export { toggleButton_ToggleButton as ToggleButton };

//# sourceMappingURL=toggleButton.js.map