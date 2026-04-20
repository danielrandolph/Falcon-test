import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { forwardRef } from "react";
import { applyStyleProps } from "../common/styleProps.js";
import { IconInternal } from "./icon/internal.js";
import { buttons as external_emptyState_module_js_buttons, content, extraInfo as external_emptyState_module_js_extraInfo, icon, root, root_border, root_smallTitle, subtext as external_emptyState_module_js_subtext, title as external_emptyState_module_js_title } from "./emptyState.module.js";
function EmptyState({ border = true, buttons, className, extraInfo, iconName, smallTitle, subtext, sx, title }, ref) {
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx("div", {
        ref: ref,
        className: classnames(className, s.className, root, {
            [root_border]: border,
            [root_smallTitle]: smallTitle
        }),
        style: s.style,
        children: /*#__PURE__*/ jsxs("div", {
            className: content,
            children: [
                iconName && /*#__PURE__*/ jsx(IconInternal, {
                    className: icon,
                    name: iconName
                }),
                title && /*#__PURE__*/ jsx("div", {
                    className: external_emptyState_module_js_title,
                    children: title
                }),
                subtext && /*#__PURE__*/ jsx("div", {
                    className: external_emptyState_module_js_subtext,
                    children: subtext
                }),
                extraInfo && /*#__PURE__*/ jsx("div", {
                    className: external_emptyState_module_js_extraInfo,
                    children: extraInfo
                }),
                buttons && /*#__PURE__*/ jsx("div", {
                    className: external_emptyState_module_js_buttons,
                    children: buttons
                })
            ]
        })
    });
}
const WrappedEmptyState = /*#__PURE__*/ forwardRef(EmptyState);
export { WrappedEmptyState as EmptyState };

//# sourceMappingURL=emptyState.js.map