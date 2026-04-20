import { jsx, jsxs } from "react/jsx-runtime";
function IconInternal({ name, title, ...otherProps }) {
    return /*#__PURE__*/ jsxs("svg", {
        ...otherProps,
        children: [
            title && /*#__PURE__*/ jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx("use", {
                xlinkHref: `#svg-${name}`
            })
        ]
    });
}
export { IconInternal };

//# sourceMappingURL=internal.js.map