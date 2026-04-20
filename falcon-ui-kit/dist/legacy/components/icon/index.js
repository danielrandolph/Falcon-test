import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { IconInternal } from "./internal.js";
const iconSizes = [
    "8",
    "12",
    "16",
    "20",
    "24",
    "32",
    "36",
    "42",
    "56",
    "62",
    "72",
    "92"
];
const iconColors = [
    "primary",
    "secondary",
    "special",
    "success",
    "danger",
    "gray",
    "link",
    "white",
    "yellow",
    "text-dark",
    "text-base"
];
function Icon(props) {
    const { className, color, title, name, size } = props;
    return /*#__PURE__*/ jsx(IconInternal, {
        className: classnames([
            className,
            "icon",
            `icon-${name}`,
            size ? `icon-size-${size}` : void 0,
            color && `icon-${color}`
        ]),
        name: name,
        title: title
    });
}
export { Icon, iconColors, iconSizes };

//# sourceMappingURL=index.js.map