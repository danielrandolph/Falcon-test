"use client";
import { jsx } from "react/jsx-runtime";
import { Dialog } from "react-aria-components";
import { twMerge } from "tailwind-merge";
function dialog_Dialog(props) {
    return /*#__PURE__*/ jsx(Dialog, {
        ...props,
        className: twMerge("tw:relative tw:box-border tw:max-h-[inherit] tw:overflow-auto tw:p-6 tw:outline-0 tw:[[data-placement]>&]:p-4", props.className)
    });
}
export { dialog_Dialog as Dialog };

//# sourceMappingURL=dialog.js.map