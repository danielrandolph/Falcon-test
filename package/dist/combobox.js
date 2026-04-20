"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import { ComboBox, ComboBoxValue, ListBox } from "react-aria-components";
import { Description, FieldError, FieldGroup, Input, Label } from "./field.js";
import { FieldButton } from "./fieldButton.js";
import { DropdownItem, DropdownSection } from "./listBox.js";
import { Popover } from "./popover.js";
import { composeTailwindRenderProps } from "./utils.js";
function combobox_ComboBox({ children, description, errorMessage, items, label, ...props }) {
    return /*#__PURE__*/ jsxs(ComboBox, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:group tw:flex tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsxs(FieldGroup, {
                children: [
                    /*#__PURE__*/ jsx(Input, {
                        className: "tw:ps-3 tw:pe-1"
                    }),
                    /*#__PURE__*/ jsx(FieldButton, {
                        className: "tw:mr-1 tw:w-6 tw:outline-offset-0",
                        children: /*#__PURE__*/ jsx(ChevronDown, {
                            "aria-hidden": true,
                            className: "tw:h-4 tw:w-4"
                        })
                    })
                ]
            }),
            "multiple" === props.selectionMode && /*#__PURE__*/ jsx(ComboBoxValue, {
                className: "tw:text-xs tw:text-neutral-600",
                placeholder: "No items selected"
            }),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: errorMessage
            }),
            /*#__PURE__*/ jsx(Popover, {
                className: "tw:w-(--trigger-width)",
                children: /*#__PURE__*/ jsx(ListBox, {
                    className: "tw:box-border tw:max-h-[inherit] tw:overflow-auto tw:p-1 tw:outline-0 tw:[clip-path:inset(0_0_0_0_round_.75rem)]",
                    items: items,
                    children: children
                })
            })
        ]
    });
}
function ComboBoxItem(props) {
    return /*#__PURE__*/ jsx(DropdownItem, {
        ...props
    });
}
function ComboBoxSection(props) {
    return /*#__PURE__*/ jsx(DropdownSection, {
        ...props
    });
}
export { combobox_ComboBox as ComboBox, ComboBoxItem, ComboBoxSection };

//# sourceMappingURL=combobox.js.map