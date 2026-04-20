"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { XIcon } from "lucide-react";
import { Button, Text, UNSTABLE_Toast, UNSTABLE_ToastContent, UNSTABLE_ToastQueue, UNSTABLE_ToastRegion } from "react-aria-components";
import { flushSync } from "react-dom";
const toasts = new UNSTABLE_ToastQueue({
    wrapUpdate (fn) {
        if ("startViewTransition" in document) document.startViewTransition(()=>{
            flushSync(fn);
        });
        else fn();
    }
});
function ToastRegion() {
    return /*#__PURE__*/ jsx(UNSTABLE_ToastRegion, {
        className: "tw:fixed tw:right-4 tw:bottom-4 tw:flex tw:flex-col-reverse tw:gap-2 tw:rounded-lg tw:outline-none tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-blue-600 tw:focus-visible:outline-solid",
        queue: toasts,
        children: ({ toast })=>/*#__PURE__*/ jsxs(UNSTABLE_Toast, {
                className: "tw:flex tw:w-57.5 tw:items-center tw:gap-4 tw:rounded-lg tw:bg-blue-600 tw:px-4 tw:py-3 tw:font-sans tw:outline-none tw:[view-transition-class:toast] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-blue-600 tw:focus-visible:outline-solid tw:forced-colors:outline",
                style: {
                    viewTransitionName: toast.key
                },
                toast: toast,
                children: [
                    /*#__PURE__*/ jsxs(UNSTABLE_ToastContent, {
                        className: "tw:flex tw:min-w-0 tw:flex-1 tw:flex-col",
                        children: [
                            /*#__PURE__*/ jsx(Text, {
                                className: "tw:text-sm tw:font-semibold tw:text-white",
                                slot: "title",
                                children: toast.content.title
                            }),
                            toast.content.description && /*#__PURE__*/ jsx(Text, {
                                className: "tw:text-xs tw:text-white",
                                slot: "description",
                                children: toast.content.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx(Button, {
                        "aria-label": "Close",
                        className: "tw:flex tw:h-8 tw:w-8 tw:flex-none tw:appearance-none tw:items-center tw:justify-center tw:rounded-sm tw:border-none tw:bg-transparent tw:p-0 tw:text-white tw:outline-none tw:[-webkit-tap-highlight-color:transparent] tw:hover:bg-white/10 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-white tw:focus-visible:outline-solid tw:pressed:bg-white/15",
                        slot: "close",
                        children: /*#__PURE__*/ jsx(XIcon, {
                            className: "tw:h-4 tw:w-4"
                        })
                    })
                ]
            })
    });
}
export { ToastRegion, toasts };

//# sourceMappingURL=toast.js.map