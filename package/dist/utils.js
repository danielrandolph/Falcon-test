import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
const focusRing = tv({
    base: "tw:outline tw:outline-offset-2 tw:outline-blue-600 tw:forced-colors:outline-[Highlight]",
    variants: {
        isFocusVisible: {
            false: "tw:outline-0",
            true: "tw:outline-2"
        }
    }
});
function composeTailwindRenderProps(classNameArg, tw) {
    return composeRenderProps(classNameArg, (className)=>twMerge(tw, className));
}
export { composeTailwindRenderProps, focusRing };

//# sourceMappingURL=utils.js.map