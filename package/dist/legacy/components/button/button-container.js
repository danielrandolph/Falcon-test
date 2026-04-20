import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
function ButtonContainer({ children, className }) {
    return /*#__PURE__*/ jsx("span", {
        className: classnames("btn-icon-container", className),
        children: children
    });
}
export { ButtonContainer };

//# sourceMappingURL=button-container.js.map