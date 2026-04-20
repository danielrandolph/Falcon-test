import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { forwardRef } from "react";
import { description as external_commentsBanner_module_js_description, icon, root, text as external_commentsBanner_module_js_text, timeStamp as external_commentsBanner_module_js_timeStamp, title, titleAndTimeStamp } from "./commentsBanner.module.js";
import { Box } from "./box.js";
import { IconInternal } from "./icon/internal.js";
function CommentsBanner({ className, description, sx, timeStamp }, ref) {
    return /*#__PURE__*/ jsxs(Box, {
        ref: ref,
        className: classnames(className, root),
        sx: sx,
        children: [
            /*#__PURE__*/ jsx(IconInternal, {
                className: icon,
                name: "comment"
            }),
            /*#__PURE__*/ jsxs("div", {
                className: external_commentsBanner_module_js_text,
                children: [
                    /*#__PURE__*/ jsxs("div", {
                        className: titleAndTimeStamp,
                        children: [
                            /*#__PURE__*/ jsx("div", {
                                className: title,
                                children: "Comments"
                            }),
                            timeStamp && /*#__PURE__*/ jsx("div", {
                                className: external_commentsBanner_module_js_timeStamp,
                                children: timeStamp
                            })
                        ]
                    }),
                    description && /*#__PURE__*/ jsx("div", {
                        className: external_commentsBanner_module_js_description,
                        children: description
                    })
                ]
            })
        ]
    });
}
const WrappedCommentsBanner = /*#__PURE__*/ forwardRef(CommentsBanner);
export { WrappedCommentsBanner as CommentsBanner };

//# sourceMappingURL=commentsBanner.js.map