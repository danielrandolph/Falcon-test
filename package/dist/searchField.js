"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { SearchIcon, XIcon } from "lucide-react";
import { SearchField } from "react-aria-components";
import { Description, FieldError, FieldGroup, Input, Label } from "./field.js";
import { FieldButton } from "./fieldButton.js";
import { composeTailwindRenderProps } from "./utils.js";
function searchField_SearchField({ className, description, errorMessage, label, placeholder, ...otherProps }) {
    return /*#__PURE__*/ jsxs(SearchField, {
        ...otherProps,
        className: composeTailwindRenderProps(className, "tw:group tw:flex tw:max-w-full tw:min-w-10 tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            label && /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsxs(FieldGroup, {
                children: [
                    /*#__PURE__*/ jsx(SearchIcon, {
                        "aria-hidden": true,
                        className: "tw:ml-2 tw:h-4 tw:w-4 tw:text-neutral-500 tw:group-disabled:text-neutral-200 tw:forced-colors:text-[ButtonText] tw:forced-colors:group-disabled:text-[GrayText]"
                    }),
                    /*#__PURE__*/ jsx(Input, {
                        className: "tw:pl-2 tw:[&::-webkit-search-cancel-button]:hidden",
                        placeholder: placeholder
                    }),
                    /*#__PURE__*/ jsx(FieldButton, {
                        className: "tw:mr-1 tw:w-6 tw:group-empty:invisible",
                        children: /*#__PURE__*/ jsx(XIcon, {
                            "aria-hidden": true,
                            className: "tw:h-4 tw:w-4"
                        })
                    })
                ]
            }),
            description && /*#__PURE__*/ jsx(Description, {
                children: description
            }),
            /*#__PURE__*/ jsx(FieldError, {
                children: errorMessage
            })
        ]
    });
}
export { searchField_SearchField as SearchField };

//# sourceMappingURL=searchField.js.map