"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Check, ChevronRight } from "lucide-react";
import react from "react";
import { Collection, Header, Menu, MenuItem, MenuSection, MenuTrigger, Separator, SubmenuTrigger, composeRenderProps } from "react-aria-components";
import { dropdownItemStyles } from "./listBox.js";
import { Popover } from "./popover.js";
function menu_Menu({ className, ...otherProps }) {
    return /*#__PURE__*/ jsx(Menu, {
        ...otherProps,
        className: "tw:max-h-[inherit] tw:overflow-auto tw:p-1 tw:font-sans tw:outline-0 tw:[clip-path:inset(0_0_0_0_round_.75rem)] tw:empty:pb-2 tw:empty:text-center"
    });
}
function menu_MenuItem(props) {
    const textValue = props.textValue || ("string" == typeof props.children ? props.children : void 0);
    return /*#__PURE__*/ jsx(MenuItem, {
        textValue: textValue,
        ...props,
        className: dropdownItemStyles,
        children: composeRenderProps(props.children, (children, { selectionMode, isSelected, hasSubmenu })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    "none" !== selectionMode && /*#__PURE__*/ jsx("span", {
                        className: "tw:flex tw:w-4 tw:items-center",
                        children: isSelected && /*#__PURE__*/ jsx(Check, {
                            "aria-hidden": true,
                            className: "tw:h-4 tw:w-4"
                        })
                    }),
                    /*#__PURE__*/ jsx("span", {
                        className: "tw:flex tw:flex-1 tw:items-center tw:gap-2 tw:truncate tw:font-normal tw:group-selected:font-semibold",
                        children: children
                    }),
                    hasSubmenu && /*#__PURE__*/ jsx(ChevronRight, {
                        "aria-hidden": true,
                        className: "tw:absolute tw:right-2 tw:h-4 tw:w-4"
                    })
                ]
            }))
    });
}
function MenuSeparator(props) {
    return /*#__PURE__*/ jsx(Separator, {
        ...props,
        className: "tw:mx-3 tw:my-1 tw:border-b tw:border-neutral-300"
    });
}
function menu_MenuSection(props) {
    return /*#__PURE__*/ jsxs(MenuSection, {
        ...props,
        className: "tw:after:block tw:after:h-1.25 tw:after:content-[''] tw:first:-mt-1.25",
        children: [
            props.title && /*#__PURE__*/ jsx(Header, {
                className: "tw:sticky tw:-top-1.25 tw:z-10 tw:-mx-1 tw:-mt-px tw:truncate tw:border-y tw:border-y-neutral-200 tw:bg-neutral-100/60 tw:px-4 tw:py-1 tw:text-sm tw:font-semibold tw:text-neutral-500 tw:backdrop-blur-md tw:supports-[-moz-appearance:none]:bg-neutral-100 tw:[&+*]:mt-1",
                children: props.title
            }),
            /*#__PURE__*/ jsx(Collection, {
                items: props.items,
                children: props.children
            })
        ]
    });
}
function menu_MenuTrigger(props) {
    const [trigger, menu] = react.Children.toArray(props.children);
    return /*#__PURE__*/ jsxs(MenuTrigger, {
        ...props,
        children: [
            trigger,
            /*#__PURE__*/ jsx(Popover, {
                placement: props.placement,
                className: "tw:min-w-37.5",
                children: menu
            })
        ]
    });
}
function menu_SubmenuTrigger(props) {
    const [trigger, menu] = react.Children.toArray(props.children);
    return /*#__PURE__*/ jsxs(SubmenuTrigger, {
        ...props,
        children: [
            trigger,
            /*#__PURE__*/ jsx(Popover, {
                offset: -2,
                crossOffset: -4,
                children: menu
            })
        ]
    });
}
export { menu_Menu as Menu, menu_MenuItem as MenuItem, menu_MenuSection as MenuSection, MenuSeparator, menu_MenuTrigger as MenuTrigger, menu_SubmenuTrigger as SubmenuTrigger };

//# sourceMappingURL=menu.js.map