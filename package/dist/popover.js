"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { OverlayArrow, Popover, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
const styles = tv({
    base: "tw:rounded-xl tw:border tw:border-black/10 tw:bg-white tw:bg-clip-padding tw:font-sans tw:text-neutral-700 tw:shadow-2xl tw:outline-0 tw:forced-colors:bg-[Canvas]",
    variants: {
        isEntering: {
            true: "tw:duration-200 tw:ease-out tw:animate-in tw:fade-in tw:placement-left:slide-in-from-right-1 tw:placement-right:slide-in-from-left-1 tw:placement-top:slide-in-from-bottom-1 tw:placement-bottom:slide-in-from-top-1"
        },
        isExiting: {
            true: "tw:duration-150 tw:ease-in tw:animate-out tw:fade-out tw:placement-left:slide-out-to-right-1 tw:placement-right:slide-out-to-left-1 tw:placement-top:slide-out-to-bottom-1 tw:placement-bottom:slide-out-to-top-1"
        }
    }
});
function popover_Popover({ children, showArrow, ...props }) {
    const offset = showArrow ? 12 : 8;
    return /*#__PURE__*/ jsxs(Popover, {
        offset: offset,
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>styles({
                ...renderProps,
                className
            })),
        children: [
            showArrow && /*#__PURE__*/ jsx(OverlayArrow, {
                className: "tw:group",
                children: /*#__PURE__*/ jsx("svg", {
                    className: "tw:block tw:fill-white tw:stroke-black/10 tw:stroke-1 tw:group-placement-left:-rotate-90 tw:group-placement-right:rotate-90 tw:group-placement-bottom:rotate-180 tw:forced-colors:fill-[Canvas] tw:forced-colors:stroke-[ButtonBorder]",
                    width: 12,
                    height: 12,
                    viewBox: "0 0 12 12",
                    children: /*#__PURE__*/ jsx("path", {
                        d: "M0 0 L6 6 L12 0"
                    })
                })
            }),
            children
        ]
    });
}
export { popover_Popover as Popover };

//# sourceMappingURL=popover.js.map