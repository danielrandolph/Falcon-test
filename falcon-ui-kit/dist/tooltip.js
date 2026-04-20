"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { OverlayArrow, Tooltip, TooltipTrigger, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
const styles = tv({
    base: "tw:group tw:box-border tw:rounded-lg tw:border tw:border-neutral-800 tw:bg-neutral-700 tw:px-3 tw:py-1.5 tw:font-sans tw:text-xs tw:text-white tw:drop-shadow-lg tw:will-change-transform",
    variants: {
        isEntering: {
            true: "tw:placement-left:slide-in-from-right-0.5 tw:placement-right:slide-in-from-left-0.5 tw:placement-top:slide-in-from-bottom-0.5 tw:placement-bottom:slide-in-from-top-0.5 tw:duration-200 tw:ease-out tw:animate-in tw:fade-in"
        },
        isExiting: {
            true: "tw:placement-left:slide-out-to-right-0.5 tw:placement-right:slide-out-to-left-0.5 tw:placement-top:slide-out-to-bottom-0.5 tw:placement-bottom:slide-out-to-top-0.5 tw:duration-150 tw:ease-in tw:animate-out tw:fade-out"
        }
    }
});
function tooltip_Tooltip({ children, ...props }) {
    return /*#__PURE__*/ jsxs(Tooltip, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>styles({
                ...renderProps,
                className
            })),
        offset: 10,
        children: [
            /*#__PURE__*/ jsx(OverlayArrow, {
                children: /*#__PURE__*/ jsx("svg", {
                    className: "tw:block tw:fill-neutral-700 tw:stroke-neutral-800 tw:group-placement-left:-rotate-90 tw:group-placement-right:rotate-90 tw:group-placement-bottom:rotate-180 tw:forced-colors:fill-[Canvas] tw:forced-colors:stroke-[ButtonBorder]",
                    width: 8,
                    height: 8,
                    viewBox: "0 0 8 8",
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M0 0 L4 4 L8 0"
                    })
                })
            }),
            children
        ]
    });
}
function tooltip_TooltipTrigger({ delay = 400, ...otherProps }) {
    return /*#__PURE__*/ jsx(TooltipTrigger, {
        delay: delay,
        ...otherProps
    });
}
export { tooltip_Tooltip as Tooltip, tooltip_TooltipTrigger as TooltipTrigger };

//# sourceMappingURL=tooltip.js.map