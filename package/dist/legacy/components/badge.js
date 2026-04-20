import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { circle, root, root_inline, root_size_small, root_variant_danger, root_variant_info } from "./badge.module.js";
function Badge({ children, className, positionOffset, size = "regular", style, text, variant = "danger" }) {
    return /*#__PURE__*/ jsxs("div", {
        className: classnames(className, root, {
            danger: root_variant_danger,
            info: root_variant_info
        }[variant], {
            regular: void 0,
            small: root_size_small
        }[size], {
            [root_inline]: !children
        }),
        style: {
            ["--falcon-badge-position-offset"]: positionOffset,
            ...style
        },
        children: [
            children,
            /*#__PURE__*/ jsx("div", {
                className: circle,
                children: text
            })
        ]
    });
}
export { Badge };

//# sourceMappingURL=badge.js.map