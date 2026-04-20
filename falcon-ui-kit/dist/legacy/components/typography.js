import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { Box } from "./box.js";
import { color_alert, color_base, color_dark, color_light, color_link, color_primary, color_success, root } from "./typography.module.js";
const variantStyles = {
    h1: {
        display: "block",
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1.2
    },
    h2: {
        display: "block",
        fontSize: 26,
        fontWeight: 500,
        lineHeight: 1.2
    },
    h3: {
        display: "block",
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.4
    },
    h4: {
        display: "block",
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1.2
    },
    h5: {
        display: "block",
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.4
    },
    h6: {
        display: "block",
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 1.2
    },
    p: {
        display: "block"
    }
};
function Typography({ children, className, color, fontSize, fontSizeBreakpoints, fontWeight, lineHeight, variant = "p" }) {
    const variantStyle = variantStyles[variant];
    return /*#__PURE__*/ jsx(Box, {
        as: variant,
        className: classnames(className, root, color ? ({
            alert: color_alert,
            link: color_link,
            primary: color_primary,
            success: color_success,
            text: color_base,
            "text-dark": color_dark,
            "text-light": color_light
        })[color] : void 0),
        sx: {
            display: variantStyle?.display,
            fontSize: {
                default: fontSize ?? variantStyle?.fontSize,
                ...fontSizeBreakpoints
            },
            fontWeight: fontWeight ?? variantStyle?.fontWeight,
            lineHeight: lineHeight ? ({
                base: 1.2,
                medium: 1.4,
                large: 1.6
            })[lineHeight] : variantStyle?.lineHeight
        },
        children: children
    });
}
export { Typography };

//# sourceMappingURL=typography.js.map