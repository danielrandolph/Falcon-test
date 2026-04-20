import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { Box } from "./box.js";
function Loading({ className, hideText, inline, label = "Loading...", small }) {
    return small ? /*#__PURE__*/ jsxs(Box, {
        sx: {
            alignItems: "center",
            display: "flex",
            flexDirection: inline ? "row" : "column",
            gap: 8,
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ jsx("div", {
                className: classnames("loader loader-extra-small", className),
                children: /*#__PURE__*/ jsx("svg", {
                    className: "circular",
                    viewBox: "12 12 25 25",
                    children: /*#__PURE__*/ jsx("circle", {
                        className: "path",
                        cx: "25",
                        cy: "25",
                        fill: "none",
                        r: "10",
                        strokeWidth: "2"
                    })
                })
            }),
            hideText ? null : /*#__PURE__*/ jsx("div", {
                className: "loader-label",
                children: label
            })
        ]
    }) : /*#__PURE__*/ jsxs("div", {
        className: classnames("loading-component", className, {
            "loading-inline": inline
        }),
        children: [
            /*#__PURE__*/ jsx("div", {
                className: "loader",
                children: /*#__PURE__*/ jsx("svg", {
                    className: "circular",
                    viewBox: "25 25 50 50",
                    children: /*#__PURE__*/ jsx("circle", {
                        className: "path",
                        cx: "50",
                        cy: "50",
                        fill: "none",
                        r: "20",
                        strokeWidth: "2"
                    })
                })
            }),
            hideText ? null : /*#__PURE__*/ jsx("div", {
                className: "loader-label",
                children: label
            })
        ]
    });
}
export { Loading };

//# sourceMappingURL=loading.js.map