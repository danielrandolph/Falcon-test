"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { Breadcrumb, Breadcrumbs } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Link } from "./link.js";
import { composeTailwindRenderProps } from "./utils.js";
function breadcrumbs_Breadcrumbs(props) {
    return /*#__PURE__*/ jsx(Breadcrumbs, {
        ...props,
        className: twMerge("tw:flex tw:gap-1", props.className)
    });
}
function breadcrumbs_Breadcrumb(props) {
    return /*#__PURE__*/ jsx(Breadcrumb, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:flex tw:items-center tw:gap-1"),
        children: ({ isCurrent })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsx(Link, {
                        variant: "secondary",
                        ...props
                    }),
                    !isCurrent && /*#__PURE__*/ jsx(ChevronRight, {
                        className: "tw:h-3 tw:w-3 tw:text-neutral-600"
                    })
                ]
            })
    });
}
export { breadcrumbs_Breadcrumb as Breadcrumb, breadcrumbs_Breadcrumbs as Breadcrumbs };

//# sourceMappingURL=breadcrumbs.js.map