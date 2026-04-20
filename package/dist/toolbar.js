"use client";
import { jsx } from "react/jsx-runtime";
import { ToggleButtonGroupContext, Toolbar, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
const styles = tv({
    base: "tw:flex tw:flex-wrap tw:gap-2",
    variants: {
        orientation: {
            horizontal: "tw:flex-row tw:items-center",
            vertical: "tw:flex-col tw:items-start"
        }
    }
});
function toolbar_Toolbar(props) {
    return /*#__PURE__*/ jsx(ToggleButtonGroupContext.Provider, {
        value: {
            orientation: props.orientation
        },
        children: /*#__PURE__*/ jsx(Toolbar, {
            ...props,
            className: composeRenderProps(props.className, (className, renderProps)=>styles({
                    ...renderProps,
                    className
                }))
        })
    });
}
export { toolbar_Toolbar as Toolbar };

//# sourceMappingURL=toolbar.js.map