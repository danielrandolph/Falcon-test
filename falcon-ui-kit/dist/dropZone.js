"use client";
import { jsx } from "react/jsx-runtime";
import { DropZone, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
const dropZone = tv({
    base: "flex min-h-24 w-[30%] items-center justify-center rounded-lg border border-1 border-neutral-300 bg-white p-8 text-center font-sans text-base text-balance",
    variants: {
        isFocusVisible: {
            true: "outline outline-2 -outline-offset-1 outline-blue-600 forced-colors:outline-[Highlight]"
        },
        isDropTarget: {
            true: "bg-blue-200 outline outline-2 -outline-offset-1 outline-blue-600 forced-colors:outline-[Highlight]"
        }
    }
});
function dropZone_DropZone(props) {
    return /*#__PURE__*/ jsx(DropZone, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>dropZone({
                ...renderProps,
                className
            }))
    });
}
export { dropZone_DropZone as DropZone };

//# sourceMappingURL=dropZone.js.map