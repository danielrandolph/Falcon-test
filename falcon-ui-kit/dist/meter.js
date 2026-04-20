"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle } from "lucide-react";
import { Meter } from "react-aria-components";
import { composeTailwindRenderProps } from "./utils.js";
import { Label } from "./field.js";
function meter_Meter({ label, ...otherProps }) {
    return /*#__PURE__*/ jsx(Meter, {
        ...otherProps,
        className: composeTailwindRenderProps(otherProps.className, "tw:flex tw:max-w-full tw:flex-col tw:gap-2 tw:font-sans"),
        children: ({ percentage, valueText })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsxs("div", {
                        className: "tw:flex tw:justify-between tw:gap-2",
                        children: [
                            /*#__PURE__*/ jsx(Label, {
                                children: label
                            }),
                            /*#__PURE__*/ jsxs("span", {
                                className: `tw:text-sm ${percentage >= 80 ? "tw:text-red-600" : "tw:text-neutral-600"}`,
                                children: [
                                    percentage >= 80 && /*#__PURE__*/ jsx(AlertTriangle, {
                                        "aria-label": "Alert",
                                        className: "tw:inline-block tw:h-4 tw:w-4 tw:align-text-bottom"
                                    }),
                                    ` ${valueText}`
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: "tw:relative tw:h-2 tw:w-64 tw:max-w-full tw:rounded-full tw:bg-neutral-300 tw:outline-1 tw:-outline-offset-1 tw:outline-transparent",
                        children: /*#__PURE__*/ jsx("div", {
                            className: `tw:absolute tw:top-0 tw:left-0 tw:h-full tw:rounded-full ${getColor(percentage)} tw:forced-colors:bg-[Highlight]`,
                            style: {
                                width: `${percentage}%`
                            }
                        })
                    })
                ]
            })
    });
}
function getColor(percentage) {
    if (percentage < 70) return "tw:bg-green-600";
    if (percentage < 80) return "tw:bg-orange-500";
    return "tw:bg-red-600";
}
export { meter_Meter as Meter };

//# sourceMappingURL=meter.js.map