"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ProgressBar } from "react-aria-components";
import { composeTailwindRenderProps } from "./utils.js";
import { Label } from "./field.js";
function progressBar_ProgressBar({ label, ...props }) {
    return /*#__PURE__*/ jsx(ProgressBar, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:flex tw:w-64 tw:max-w-full tw:flex-col tw:gap-2 tw:font-sans"),
        children: ({ percentage, valueText, isIndeterminate })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsxs("div", {
                        className: "tw:flex tw:justify-between tw:gap-2",
                        children: [
                            /*#__PURE__*/ jsx(Label, {
                                children: label
                            }),
                            /*#__PURE__*/ jsx("span", {
                                className: "tw:text-sm tw:text-neutral-600",
                                children: valueText
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: "tw:relative tw:h-2 tw:max-w-full tw:overflow-hidden tw:rounded-full tw:bg-neutral-300 tw:outline tw:outline-1 tw:-outline-offset-1 tw:outline-transparent",
                        children: /*#__PURE__*/ jsx("div", {
                            className: `tw:absolute tw:top-0 tw:h-full tw:rounded-full tw:bg-blue-500 tw:forced-colors:bg-[Highlight] ${isIndeterminate ? "tw:left-full tw:duration-1000 tw:ease-out tw:animate-in tw:repeat-infinite tw:slide-in-from-left-[20rem]" : "tw:left-0"}`,
                            style: {
                                width: `${isIndeterminate ? 40 : percentage}%`
                            }
                        })
                    })
                ]
            })
    });
}
export { progressBar_ProgressBar as ProgressBar };

//# sourceMappingURL=progressBar.js.map