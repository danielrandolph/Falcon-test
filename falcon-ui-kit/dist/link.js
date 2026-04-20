"use client";
import { jsx } from "react/jsx-runtime";
import { Link, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils.js";
const styles = tv({
    extend: focusRing,
    base: "tw:rounded-xs tw:underline tw:transition tw:[-webkit-tap-highlight-color:transparent] tw:disabled:cursor-default tw:disabled:no-underline tw:forced-colors:disabled:text-[GrayText]",
    variants: {
        variant: {
            primary: "tw:text-blue-600 tw:underline tw:decoration-blue-600/60 tw:hover:decoration-blue-600",
            secondary: "tw:text-neutral-700 tw:underline tw:decoration-neutral-700/50 tw:hover:decoration-neutral-700"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});
function link_Link(props) {
    return /*#__PURE__*/ jsx(Link, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>styles({
                ...renderProps,
                className,
                variant: props.variant
            }))
    });
}
export { link_Link as Link };

//# sourceMappingURL=link.js.map