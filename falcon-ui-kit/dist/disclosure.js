"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import { Disclosure, DisclosurePanel, DisclosureStateContext, Heading, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button } from "./button.js";
import { composeTailwindRenderProps } from "./utils.js";
const disclosure = tv({
    base: "tw:group tw:min-w-50 tw:rounded-lg tw:font-sans tw:text-neutral-900"
});
const chevron = tv({
    base: "tw:h-4 tw:w-4 tw:text-neutral-500 tw:transition-transform tw:duration-200 tw:ease-in-out",
    variants: {
        isExpanded: {
            true: "tw:rotate-90 tw:transform"
        },
        isDisabled: {
            true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    }
});
function disclosure_Disclosure({ children, ...props }) {
    return /*#__PURE__*/ jsx(Disclosure, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>disclosure({
                ...renderProps,
                className
            })),
        children: children
    });
}
function useDisclosureContext() {
    const value = useContext(DisclosureStateContext);
    if (!value) throw new Error();
    return value;
}
function DisclosureHeader({ children }) {
    const { isExpanded } = useDisclosureContext();
    return /*#__PURE__*/ jsx(Heading, {
        className: "tw:m-0 tw:text-lg tw:font-semibold",
        children: /*#__PURE__*/ jsx(Button, {
            className: "tw:w-full tw:justify-start tw:font-medium",
            slot: "trigger",
            variant: "quiet",
            children: ({ isDisabled })=>/*#__PURE__*/ jsxs(Fragment, {
                    children: [
                        /*#__PURE__*/ jsx(ChevronRight, {
                            "aria-hidden": true,
                            className: chevron({
                                isExpanded,
                                isDisabled
                            })
                        }),
                        /*#__PURE__*/ jsx("span", {
                            children: children
                        })
                    ]
                })
        })
    });
}
function disclosure_DisclosurePanel({ children, ...props }) {
    return /*#__PURE__*/ jsx(DisclosurePanel, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:h-(--disclosure-panel-height) tw:overflow-clip tw:motion-safe:transition-[height]"),
        children: /*#__PURE__*/ jsx("div", {
            className: "tw:px-4 tw:py-2",
            children: children
        })
    });
}
export { disclosure_Disclosure as Disclosure, DisclosureHeader, disclosure_DisclosurePanel as DisclosurePanel };

//# sourceMappingURL=disclosure.js.map