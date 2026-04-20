import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { root, root_variant_blue, root_variant_green, root_variant_purple, root_variant_red, root_variant_yellow } from "./label.module.js";
function Label({ className, text, variant = "neutral" }) {
    return /*#__PURE__*/ jsx("div", {
        className: classnames(className, root, {
            blue: root_variant_blue,
            green: root_variant_green,
            neutral: void 0,
            purple: root_variant_purple,
            red: root_variant_red,
            yellow: root_variant_yellow
        }[variant]),
        children: text
    });
}
export { Label };

//# sourceMappingURL=label.js.map