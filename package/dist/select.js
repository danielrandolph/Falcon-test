"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import { Button, ListBox, Select, SelectValue } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "./field.js";
import { DropdownItem, DropdownSection } from "./listBox.js";
import { Popover } from "./popover.js";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
const styles = tv({
    extend: focusRing,
    base: "tw:flex tw:h-9 tw:w-full tw:min-w-45 tw:cursor-default tw:items-center tw:gap-4 tw:rounded-lg tw:border tw:border-black/10 tw:bg-neutral-50 tw:pr-2 tw:pl-3 tw:text-start tw:font-sans tw:transition tw:[-webkit-tap-highlight-color:transparent]",
    variants: {
        isDisabled: {
            false: "tw:text-neutral-800 tw:group-invalid:outline tw:group-invalid:outline-red-600 tw:hover:bg-neutral-100 tw:forced-colors:group-invalid:outline-[Mark] tw:pressed:bg-neutral-200",
            true: "tw:border-transparent tw:bg-neutral-100 tw:text-neutral-200 tw:forced-colors:text-[GrayText]"
        }
    }
});
function select_Select({ label, description, errorMessage, children, items, ...props }) {
    return /*#__PURE__*/ jsxs(Select, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:group tw:relative tw:flex tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            label && /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsxs(Button, {
                className: styles,
                children: [
                    /*#__PURE__*/ jsx(SelectValue, {
                        className: "tw:flex-1 tw:text-sm",
                        children: ({ selectedText, defaultChildren })=>selectedText || defaultChildren
                    }),
                    /*#__PURE__*/ jsx(ChevronDown, {
                        "aria-hidden": true,
                        className: "tw:h-4 tw:w-4 tw:text-neutral-600 tw:group-disabled:text-neutral-200 tw:forced-colors:text-[ButtonText] tw:forced-colors:group-disabled:text-[GrayText]"
                    })
                ]
            }),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: errorMessage
            }),
            /*#__PURE__*/ jsx(Popover, {
                className: "tw:min-w-(--trigger-width)",
                children: /*#__PURE__*/ jsx(ListBox, {
                    className: "tw:box-border tw:max-h-[inherit] tw:overflow-auto tw:p-1 tw:outline-hidden tw:[clip-path:inset(0_0_0_0_round_.75rem)]",
                    items: items,
                    children: children
                })
            })
        ]
    });
}
function SelectItem(props) {
    return /*#__PURE__*/ jsx(DropdownItem, {
        ...props
    });
}
function SelectSection(props) {
    return /*#__PURE__*/ jsx(DropdownSection, {
        ...props
    });
}
export { select_Select as Select, SelectItem, SelectSection };

//# sourceMappingURL=select.js.map