"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Button, GridList, GridListHeader, GridListItem, composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Checkbox } from "./checkbox.js";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
function gridList_GridList({ className, ...otherProps }) {
    return /*#__PURE__*/ jsx(GridList, {
        ...otherProps,
        className: composeTailwindRenderProps(className, "tw:relative tw:w-50 tw:overflow-auto tw:rounded-lg tw:border tw:border-neutral-300 tw:bg-white tw:font-sans tw:empty:flex tw:empty:items-center tw:empty:justify-center tw:empty:text-sm tw:empty:italic")
    });
}
const itemStyles = tv({
    extend: focusRing,
    base: "tw:relative tw:flex tw:cursor-default tw:gap-3 tw:border-t tw:border-transparent tw:px-3 tw:py-2 tw:text-sm tw:text-neutral-900 tw:-outline-offset-2 tw:select-none tw:first:rounded-t-lg tw:first:border-t-0 tw:last:mb-0 tw:last:rounded-b-lg",
    variants: {
        isSelected: {
            false: "tw:hover:bg-neutral-100 tw:pressed:bg-neutral-100",
            true: "tw:z-20 tw:border-y-blue-200 tw:bg-blue-100 tw:hover:bg-blue-200 tw:pressed:bg-blue-200"
        },
        isDisabled: {
            true: "tw:z-10 tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    }
});
function gridList_GridListItem(props) {
    return /*#__PURE__*/ jsx(GridListItem, {
        textValue: "string" == typeof props.children ? props.children : void 0,
        ...props,
        className: itemStyles,
        children: composeRenderProps(props.children, (children, { selectionMode, selectionBehavior, allowsDragging })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    allowsDragging && /*#__PURE__*/ jsx(Button, {
                        slot: "drag",
                        children: "≡"
                    }),
                    "none" !== selectionMode && "toggle" === selectionBehavior && /*#__PURE__*/ jsx(Checkbox, {
                        slot: "selection"
                    }),
                    children
                ]
            }))
    });
}
function gridList_GridListHeader({ children, className, ...otherProps }) {
    return /*#__PURE__*/ jsx(GridListHeader, {
        ...otherProps,
        className: twMerge("tw:z-10 tw:-mt-px tw:border-y tw:border-y-neutral-200 tw:bg-neutral-100/60 tw:px-4 tw:py-1 tw:text-sm tw:font-semibold tw:text-neutral-500 tw:backdrop-blur-md tw:supports-[-moz-appearance:none]:bg-neutral-100", className),
        children: children
    });
}
export { gridList_GridList as GridList, gridList_GridListHeader as GridListHeader, gridList_GridListItem as GridListItem };

//# sourceMappingURL=gridList.js.map