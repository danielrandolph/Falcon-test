import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { applyStyleProps } from "../../common/styleProps.js";
function Button(props, ref) {
    if (!props.as || "button" === props.as) props = {
        type: "button",
        ...props
    };
    const { as: As = "button", borderNone = false, className, color = "primary", fontSize, fontSizeBreakpoints, fullWidth = false, fullWidthXs = false, gradient, gutter, gutterBreakpoints, iconButton = false, minWidth = iconButton ? false : "min-width", outline = iconButton ?? borderNone, size = 44, sizeBreakpoints, style, ...otherProps } = props;
    const s = applyStyleProps({
        fontSize: {
            default: fontSize,
            ...fontSizeBreakpoints
        }
    });
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, "btn", {
            "btn-border-view": outline,
            "btn-border--none": borderNone,
            "btn-icon": iconButton,
            "full-width": fullWidth,
            "full-width--xs": fullWidthXs,
            "btn-gradient": gradient
        }, minWidth && `btn-${minWidth}`, color && `btn-${color}`, size && `btn--size-${size}`, sizeBreakpoints ? Object.entries(sizeBreakpoints).map(([breakpoint, value])=>`btn--size-${value}-${breakpoint}`) : void 0, null != gutter && `btn--gutter-${gutter}`, gutterBreakpoints ? Object.entries(gutterBreakpoints).map(([breakpoint, value])=>`btn--gutter-${value}-${breakpoint}`) : void 0, s.className),
        style: {
            ...style,
            ...s.style
        },
        ...otherProps
    });
}
const WrappedButton = /*#__PURE__*/ forwardRef(Button);
export { WrappedButton as Button };

//# sourceMappingURL=button.js.map