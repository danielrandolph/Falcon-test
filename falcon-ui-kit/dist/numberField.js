"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button, NumberField } from "react-aria-components";
import { Description, FieldError, FieldGroup, Input, Label, fieldBorderStyles } from "./field.js";
import { composeTailwindRenderProps } from "./utils.js";
const spinnerButtonStyles = "tw:box-border tw:flex tw:flex-1 tw:cursor-default tw:border-0 tw:bg-transparent tw:px-0.5 tw:py-0 tw:text-neutral-500 tw:[-webkit-tap-highlight-color:transparent] tw:group-disabled:text-neutral-200 tw:forced-colors:group-disabled:text-[GrayText] tw:pressed:bg-neutral-100";
function numberField_NumberField({ label, description, errorMessage, placeholder, ...otherProps }) {
    return /*#__PURE__*/ jsxs(NumberField, {
        ...otherProps,
        className: composeTailwindRenderProps(otherProps.className, "tw:group tw:flex tw:flex-col tw:gap-1 tw:font-sans"),
        children: [
            /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsx(FieldGroup, {
                children: (renderProps)=>/*#__PURE__*/ jsxs(Fragment, {
                        children: [
                            /*#__PURE__*/ jsx(Input, {
                                className: "tw:w-20",
                                placeholder: placeholder
                            }),
                            /*#__PURE__*/ jsxs("div", {
                                className: fieldBorderStyles({
                                    ...renderProps,
                                    className: "tw:flex tw:h-full tw:flex-col tw:border-s"
                                }),
                                children: [
                                    /*#__PURE__*/ jsx(Button, {
                                        className: spinnerButtonStyles,
                                        slot: "increment",
                                        children: /*#__PURE__*/ jsx(ChevronUp, {
                                            "aria-hidden": true,
                                            className: "tw:h-4 tw:w-4"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx("div", {
                                        className: fieldBorderStyles({
                                            ...renderProps,
                                            className: "tw:border-b"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx(Button, {
                                        className: spinnerButtonStyles,
                                        slot: "decrement",
                                        children: /*#__PURE__*/ jsx(ChevronDown, {
                                            "aria-hidden": true,
                                            className: "tw:h-4 tw:w-4"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
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
export { numberField_NumberField as NumberField };

//# sourceMappingURL=numberField.js.map