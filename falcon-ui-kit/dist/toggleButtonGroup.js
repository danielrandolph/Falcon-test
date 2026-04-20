"use client";
import { jsx } from "react/jsx-runtime";
import { ToggleButtonGroup, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
const styles = tv({
    base: "tw:flex tw:gap-1",
    variants: {
        orientation: {
            horizontal: "tw:flex-row",
            vertical: "tw:flex-col"
        }
    }
});
function toggleButtonGroup_ToggleButtonGroup(props) {
    return /*#__PURE__*/ jsx(ToggleButtonGroup, {
        ...props,
        className: composeRenderProps(props.className, (className, renderProps)=>styles({
                ...renderProps,
                className
            }))
    });
}
export { toggleButtonGroup_ToggleButtonGroup as ToggleButtonGroup };

//# sourceMappingURL=toggleButtonGroup.js.map