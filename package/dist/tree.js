"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronRight } from "lucide-react";
import { Button, Tree, TreeItem, TreeItemContent } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Checkbox } from "./checkbox.js";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
const itemStyles = tv({
    extend: focusRing,
    base: "tw:group tw:relative tw:flex tw:cursor-default tw:gap-3 tw:border-t tw:border-transparent tw:bg-white tw:px-3 tw:py-1 tw:font-sans tw:text-sm tw:text-neutral-900 tw:-outline-offset-2 tw:select-none tw:first:rounded-t-lg tw:first:border-t-0 tw:last:rounded-b-lg",
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
function tree_Tree({ children, ...props }) {
    return /*#__PURE__*/ jsx(Tree, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:relative tw:w-48 tw:max-w-full tw:overflow-auto tw:rounded-lg tw:border tw:border-neutral-200"),
        children: children
    });
}
const expandButton = tv({
    extend: focusRing,
    base: "tw:flex tw:h-8 tw:w-8 tw:shrink-0 tw:cursor-default tw:items-center tw:justify-center tw:rounded-lg tw:border-0 tw:bg-transparent tw:p-0 tw:text-start tw:[-webkit-tap-highlight-color:transparent]",
    variants: {
        isDisabled: {
            true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    }
});
const chevron = tv({
    base: "tw:h-4.5 tw:w-4.5 tw:text-neutral-500 tw:transition-transform tw:duration-200 tw:ease-in-out",
    variants: {
        isExpanded: {
            true: "tw:rotate-90 tw:transform"
        },
        isDisabled: {
            true: "tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    }
});
function tree_TreeItem(props) {
    return /*#__PURE__*/ jsxs(TreeItem, {
        className: itemStyles,
        textValue: props.title,
        ...props,
        children: [
            /*#__PURE__*/ jsx(TreeItemContent, {
                ...props,
                children: ({ selectionMode, selectionBehavior, hasChildItems, isExpanded, isDisabled })=>/*#__PURE__*/ jsxs("div", {
                        className: "tw:flex tw:items-center",
                        children: [
                            "none" !== selectionMode && "toggle" === selectionBehavior && /*#__PURE__*/ jsx(Checkbox, {
                                slot: "selection"
                            }),
                            /*#__PURE__*/ jsx("div", {
                                className: "tw:w-[calc((var(--tree-item-level)-1)*(var(--tw-spacing)*3))] tw:shrink-0"
                            }),
                            hasChildItems ? /*#__PURE__*/ jsx(Button, {
                                slot: "chevron",
                                className: expandButton({
                                    isDisabled
                                }),
                                children: /*#__PURE__*/ jsx(ChevronRight, {
                                    "aria-hidden": true,
                                    className: chevron({
                                        isExpanded,
                                        isDisabled
                                    })
                                })
                            }) : /*#__PURE__*/ jsx("div", {
                                className: "tw:h-8 tw:w-8 tw:shrink-0"
                            }),
                            props.title
                        ]
                    })
            }),
            props.children
        ]
    });
}
export { tree_Tree as Tree, tree_TreeItem as TreeItem };

//# sourceMappingURL=tree.js.map