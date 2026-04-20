import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
function ButtonLink(props) {
    const { className, title, onClick, type = "button", disabled, children } = props;
    return /*#__PURE__*/ jsx("button", {
        className: classnames("link-color", className),
        disabled: disabled,
        onClick: onClick,
        title: title,
        type: type,
        children: children
    });
}
export { ButtonLink };

//# sourceMappingURL=index.js.map