"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Button, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils.js";
const button_button = tv({
    extend: focusRing,
    base: "tw:relative tw:box-border tw:inline-flex tw:h-9 tw:cursor-default tw:items-center tw:justify-center tw:gap-2 tw:rounded-lg tw:border tw:border-transparent tw:px-3.5 tw:py-0 tw:text-center tw:font-sans tw:text-sm tw:transition tw:[-webkit-tap-highlight-color:transparent] tw:[&:has(>svg:only-child)]:h-8 tw:[&:has(>svg:only-child)]:w-8 tw:[&:has(>svg:only-child)]:px-0",
    variants: {
        variant: {
            primary: "tw:bg-blue-600 tw:text-white tw:hover:bg-blue-700 tw:pressed:bg-blue-800",
            secondary: "tw:border-black/10 tw:bg-neutral-50 tw:text-neutral-800 tw:hover:bg-neutral-100 tw:pressed:bg-neutral-200",
            destructive: "tw:bg-red-700 tw:text-white tw:hover:bg-red-800 tw:pressed:bg-red-900",
            quiet: "tw:border-0 tw:bg-transparent tw:text-neutral-800 tw:hover:bg-neutral-200 tw:pressed:bg-neutral-300"
        },
        isDisabled: {
            true: "tw:border-transparent tw:bg-neutral-100 tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        },
        isPending: {
            true: "tw:text-transparent"
        }
    },
    defaultVariants: {
        variant: "primary"
    },
    compoundVariants: [
        {
            variant: "quiet",
            isDisabled: true,
            class: "tw:bg-transparent"
        }
    ]
});
function button_Button({ variant, ...otherProps }) {
    return /*#__PURE__*/ jsx(Button, {
        ...otherProps,
        className: composeRenderProps(otherProps.className, (className, renderProps)=>button_button({
                ...renderProps,
                variant,
                className
            })),
        children: composeRenderProps(otherProps.children, (children, { isPending })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    children,
                    isPending && /*#__PURE__*/ jsx("span", {
                        "aria-hidden": true,
                        className: "tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center",
                        children: /*#__PURE__*/ jsxs("svg", {
                            className: "tw:h-4 tw:w-4 tw:animate-spin tw:text-white",
                            viewBox: "0 0 24 24",
                            stroke: "secondary" === variant || "quiet" === variant ? "black" : "white",
                            children: [
                                /*#__PURE__*/ jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    strokeWidth: "4",
                                    fill: "none",
                                    className: "tw:opacity-25"
                                }),
                                /*#__PURE__*/ jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    strokeWidth: "4",
                                    strokeLinecap: "round",
                                    fill: "none",
                                    pathLength: "100",
                                    strokeDasharray: "60 140",
                                    strokeDashoffset: "0"
                                })
                            ]
                        })
                    })
                ]
            }))
    });
}
export { button_Button as Button };

//# sourceMappingURL=button.js.map