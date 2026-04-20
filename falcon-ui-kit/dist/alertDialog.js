"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircleIcon, InfoIcon } from "lucide-react";
import { chain } from "react-aria";
import { Heading } from "react-aria-components";
import { Button } from "./button.js";
import { Dialog } from "./dialog.js";
function AlertDialog({ actionLabel, cancelLabel, children, title, variant, onAction, ...props }) {
    return /*#__PURE__*/ jsx(Dialog, {
        role: "alertdialog",
        ...props,
        children: ({ close })=>/*#__PURE__*/ jsxs(Fragment, {
                children: [
                    /*#__PURE__*/ jsx(Heading, {
                        slot: "title",
                        className: "tw:my-0 tw:text-xl tw:leading-6 tw:font-semibold",
                        children: title
                    }),
                    /*#__PURE__*/ jsx("div", {
                        className: `tw:absolute tw:top-6 tw:right-6 tw:h-6 tw:w-6 tw:stroke-2 ${"destructive" === variant ? "tw:text-red-500" : "tw:text-blue-500"}`,
                        children: "destructive" === variant ? /*#__PURE__*/ jsx(AlertCircleIcon, {
                            "aria-hidden": true
                        }) : /*#__PURE__*/ jsx(InfoIcon, {
                            "aria-hidden": true
                        })
                    }),
                    /*#__PURE__*/ jsx("p", {
                        className: "tw:mt-3 tw:text-neutral-500",
                        children: children
                    }),
                    /*#__PURE__*/ jsxs("div", {
                        className: "tw:mt-6 tw:flex tw:justify-end tw:gap-2",
                        children: [
                            /*#__PURE__*/ jsx(Button, {
                                variant: "secondary",
                                onPress: close,
                                children: cancelLabel || "Cancel"
                            }),
                            /*#__PURE__*/ jsx(Button, {
                                autoFocus: true,
                                variant: "destructive" === variant ? "destructive" : "primary",
                                onPress: chain(onAction, close),
                                children: actionLabel
                            })
                        ]
                    })
                ]
            })
    });
}
export { AlertDialog };

//# sourceMappingURL=alertDialog.js.map