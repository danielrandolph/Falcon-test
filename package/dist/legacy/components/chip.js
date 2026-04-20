import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { Icon } from "./icon/index.js";
import { root, root_fullWidth, root_type_error, root_type_success, root_type_warning, text as external_chip_module_js_text } from "./chip.module.js";
function Chip({ className, fullWidth, icon, text, type = "neutral" }) {
    return /*#__PURE__*/ jsxs("div", {
        className: classnames(className, root, {
            error: root_type_error,
            neutral: void 0,
            success: root_type_success,
            warning: root_type_warning
        }[type], {
            [root_fullWidth]: fullWidth
        }),
        children: [
            icon && /*#__PURE__*/ jsx(Icon, {
                name: icon,
                size: fullWidth ? "20" : "16"
            }),
            /*#__PURE__*/ jsx("div", {
                className: external_chip_module_js_text,
                children: text
            })
        ]
    });
}
export { Chip };

//# sourceMappingURL=chip.js.map