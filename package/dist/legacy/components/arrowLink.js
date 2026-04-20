import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { Icon } from "./icon/index.js";
import { root } from "./arrowLink.module.js";
function ArrowLink({ className, direction = "forward" }) {
    return /*#__PURE__*/ jsx("div", {
        className: classnames(className, root),
        children: /*#__PURE__*/ jsx(Icon, {
            name: `arrow-${direction}`,
            size: "20"
        })
    });
}
export { ArrowLink };

//# sourceMappingURL=arrowLink.js.map