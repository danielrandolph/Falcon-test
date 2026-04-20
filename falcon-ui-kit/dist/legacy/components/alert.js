import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { forwardRef } from "react";
import { buttons as external_alert_module_js_buttons, content, description as external_alert_module_js_description, icon, inner, partnerLogo as external_alert_module_js_partnerLogo, root, root_size_large, root_variant_error, root_variant_neutral, root_variant_success, root_variant_warning, text as external_alert_module_js_text, title as external_alert_module_js_title } from "./alert.module.js";
import { Box } from "./box.js";
import { IconInternal } from "./icon/internal.js";
function Alert({ buttons, className, description, iconName, partnerLogo, size = "regular", sx, title, variant = "warning" }, ref) {
    return /*#__PURE__*/ jsx(Box, {
        ref: ref,
        className: classnames(className, root, {
            error: root_variant_error,
            neutral: root_variant_neutral,
            success: root_variant_success,
            warning: root_variant_warning
        }[variant], {
            regular: void 0,
            large: root_size_large
        }[size]),
        sx: sx,
        children: /*#__PURE__*/ jsxs("div", {
            className: inner,
            children: [
                /*#__PURE__*/ jsxs("div", {
                    className: content,
                    children: [
                        iconName && /*#__PURE__*/ jsx(IconInternal, {
                            className: icon,
                            name: iconName
                        }),
                        partnerLogo && /*#__PURE__*/ jsx("div", {
                            className: external_alert_module_js_partnerLogo,
                            children: partnerLogo
                        }),
                        /*#__PURE__*/ jsxs("div", {
                            className: external_alert_module_js_text,
                            children: [
                                /*#__PURE__*/ jsx("div", {
                                    className: external_alert_module_js_title,
                                    children: title
                                }),
                                description && /*#__PURE__*/ jsx("div", {
                                    className: external_alert_module_js_description,
                                    children: description
                                })
                            ]
                        })
                    ]
                }),
                buttons && /*#__PURE__*/ jsx("div", {
                    className: external_alert_module_js_buttons,
                    children: buttons
                })
            ]
        })
    });
}
const WrappedAlert = /*#__PURE__*/ forwardRef(Alert);
export { WrappedAlert as Alert };

//# sourceMappingURL=alert.js.map