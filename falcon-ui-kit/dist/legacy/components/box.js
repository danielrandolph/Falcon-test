import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { forwardRef } from "react";
import { applyStyleProps } from "../common/styleProps.js";
function Box({ as, className, style, sx, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className),
        style: {
            ...style,
            ...s.style
        },
        ...otherProps
    });
}
const WrappedBox = /*#__PURE__*/ forwardRef(Box);
export { WrappedBox as Box };

//# sourceMappingURL=box.js.map