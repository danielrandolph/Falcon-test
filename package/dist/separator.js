"use client";
import { jsx } from "react/jsx-runtime";
import { Separator } from "react-aria-components";
import { tv } from "tailwind-variants";
const styles = tv({
    base: "tw:border-none tw:bg-neutral-300 tw:forced-colors:bg-[ButtonBorder]",
    variants: {
        orientation: {
            horizontal: "tw:h-px tw:w-full",
            vertical: "tw:h-full tw:min-h-8 tw:w-px"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});
function separator_Separator({ className, orientation, ...otherProps }) {
    return /*#__PURE__*/ jsx(Separator, {
        ...otherProps,
        className: styles({
            className,
            orientation
        }),
        orientation: orientation
    });
}
export { separator_Separator as Separator };

//# sourceMappingURL=separator.js.map