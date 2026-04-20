import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { Box } from "./box.js";
import { IconInternal } from "./icon/internal.js";
import { description as external_labelCard_module_js_description, icon, root, root_variant_blue, root_variant_green, root_variant_neutral, root_variant_purple, root_variant_red, root_variant_yellow, text as external_labelCard_module_js_text, title as external_labelCard_module_js_title } from "./labelCard.module.js";
function LabelCard({ className, description, iconName = "signal", sx, title, variant = "neutral" }, ref) {
    return /*#__PURE__*/ jsxs(Box, {
        ref: ref,
        className: classnames(className, root, {
            blue: root_variant_blue,
            green: root_variant_green,
            neutral: root_variant_neutral,
            purple: root_variant_purple,
            red: root_variant_red,
            yellow: root_variant_yellow
        }[variant]),
        sx: sx,
        children: [
            iconName && /*#__PURE__*/ jsx(IconInternal, {
                className: icon,
                name: iconName
            }),
            /*#__PURE__*/ jsxs("div", {
                className: external_labelCard_module_js_text,
                children: [
                    /*#__PURE__*/ jsx("div", {
                        className: external_labelCard_module_js_title,
                        children: title
                    }),
                    description && /*#__PURE__*/ jsx("div", {
                        className: external_labelCard_module_js_description,
                        children: description
                    })
                ]
            })
        ]
    });
}
const WrappedLabelCard = /*#__PURE__*/ forwardRef(LabelCard);
export { WrappedLabelCard as LabelCard };

//# sourceMappingURL=labelCard.js.map