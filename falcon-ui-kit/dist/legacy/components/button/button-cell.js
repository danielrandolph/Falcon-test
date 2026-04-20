import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
function ButtonCell({ children, className }) {
    return /*#__PURE__*/ jsx("span", {
        className: classnames("btn-cell", className),
        children: children
    });
}
export { ButtonCell };

//# sourceMappingURL=button-cell.js.map