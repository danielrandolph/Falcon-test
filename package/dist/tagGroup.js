"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { XIcon } from "lucide-react";
import { Button, Tag, TagGroup, TagList, Text, composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Description, Label } from "./field.js";
import { focusRing } from "./utils.js";
const tagStyles = tv({
    extend: focusRing,
    base: "tw:flex tw:max-w-fit tw:cursor-default tw:items-center tw:gap-1 tw:rounded-full tw:border tw:px-3 tw:py-0.5 tw:font-sans tw:text-xs tw:transition tw:[-webkit-tap-highlight-color:transparent]",
    variants: {
        color: {
            gray: "",
            green: "",
            yellow: "",
            blue: ""
        },
        allowsRemoving: {
            true: "tw:pr-1"
        },
        isSelected: {
            true: "tw:border-transparent tw:bg-blue-600 tw:text-white tw:forced-color-adjust-none tw:forced-colors:bg-[Highlight] tw:forced-colors:text-[HighlightText]"
        },
        isDisabled: {
            true: "tw:bg-neutral-100 tw:text-neutral-300 tw:forced-colors:text-[GrayText]"
        }
    },
    compoundVariants: [
        {
            color: "blue",
            isSelected: false,
            isDisabled: false,
            className: "tw:border-blue-200 tw:bg-blue-100 tw:text-blue-700 tw:hover:border-blue-300"
        },
        {
            color: "gray",
            isSelected: false,
            isDisabled: false,
            className: "tw:border-neutral-200 tw:bg-white tw:text-neutral-600 tw:hover:border-neutral-300"
        },
        {
            color: "green",
            isSelected: false,
            isDisabled: false,
            className: "tw:border-green-200 tw:bg-green-100 tw:text-green-700 tw:hover:border-green-300"
        },
        {
            color: "yellow",
            isSelected: false,
            isDisabled: false,
            className: "tw:border-yellow-200 tw:bg-yellow-100 tw:text-yellow-700 tw:hover:border-yellow-300"
        }
    ],
    defaultVariants: {
        color: "gray"
    }
});
function tagGroup_TagGroup({ children, className, description, errorMessage, items, label, renderEmptyState, ...otherProps }) {
    return /*#__PURE__*/ jsxs(TagGroup, {
        ...otherProps,
        className: twMerge("tw:flex tw:flex-col tw:gap-2 tw:font-sans", className),
        children: [
            /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsx(TagList, {
                className: "tw:flex tw:flex-wrap tw:gap-1",
                items: items,
                renderEmptyState: renderEmptyState,
                children: children
            }),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            errorMessage && /*#__PURE__*/ jsx(Text, {
                className: "tw:text-sm tw:text-red-600",
                slot: "errorMessage",
                children: errorMessage
            })
        ]
    });
}
const removeButtonStyles = tv({
    extend: focusRing,
    base: "tw:flex tw:cursor-default tw:items-center tw:justify-center tw:rounded-full tw:border-0 tw:bg-transparent tw:p-0.5 tw:text-inherit tw:transition-[background-color] tw:hover:bg-black/10 tw:pressed:bg-black/20"
});
function tagGroup_Tag({ color, ...otherProps }) {
    return /*#__PURE__*/ jsx(Tag, {
        textValue: "string" == typeof otherProps.children ? otherProps.children : void 0,
        ...otherProps,
        className: composeRenderProps(otherProps.className, (className, renderProps)=>tagStyles({
                ...renderProps,
                className,
                color
            })),
        children: composeRenderProps(otherProps.children, (children, { allowsRemoving })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    children,
                    allowsRemoving && /*#__PURE__*/ jsx(Button, {
                        className: removeButtonStyles,
                        slot: "remove",
                        children: /*#__PURE__*/ jsx(XIcon, {
                            "aria-hidden": true,
                            className: "tw:h-3 tw:w-3"
                        })
                    })
                ]
            }))
    });
}
export { tagGroup_Tag as Tag, tagGroup_TagGroup as TagGroup };

//# sourceMappingURL=tagGroup.js.map