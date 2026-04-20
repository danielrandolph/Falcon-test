import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { forwardRef } from "react";
import { applyStyleProps } from "../common/styleProps.js";
import { ListEmptyState } from "./listEmptyState.js";
import { body, bodyCell, emptyState, head, header as external_table_module_js_header, mainCell, root, root_size_regular, root_size_small, row, row_interactive, scrollArea, secondaryCell, table, table_fixed, titleCell } from "./table.module.js";
function TableContainer({ children, className, header, size = "regular", sx }, ref) {
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsxs("div", {
        ref: ref,
        className: classnames(className, s.className, root, {
            regular: root_size_regular,
            small: root_size_small
        }[size]),
        style: s.style,
        children: [
            header && /*#__PURE__*/ jsx("div", {
                className: external_table_module_js_header,
                children: header
            }),
            /*#__PURE__*/ jsx("div", {
                className: scrollArea,
                children: children
            })
        ]
    });
}
function Table({ as, className, fixed, style, sx, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className, table, {
            [table_fixed]: fixed
        }),
        role: "table",
        style: {
            ...style,
            ...s.style
        },
        ...otherProps
    });
}
const WrappedTable = Object.assign(/*#__PURE__*/ forwardRef(Table), {
    Container: /*#__PURE__*/ forwardRef(TableContainer),
    Head: /*#__PURE__*/ forwardRef(TableHead),
    Body: /*#__PURE__*/ forwardRef(TableBody),
    Row: /*#__PURE__*/ forwardRef(TableRow),
    TitleCell: /*#__PURE__*/ forwardRef(TableTitleCell),
    MainCell: /*#__PURE__*/ forwardRef(TableMainCell),
    SecondaryCell: /*#__PURE__*/ forwardRef(TableSecondaryCell),
    EmptyState: /*#__PURE__*/ forwardRef(TableEmptyState)
});
function TableHead({ as, className, style, sx, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className, head),
        role: "rowgroup",
        style: {
            ...style,
            ...s.style
        },
        ...otherProps
    });
}
function TableBody({ as, className, style, sx, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className, body),
        role: "rowgroup",
        style: {
            ...style,
            ...s.style
        },
        ...otherProps
    });
}
function TableRow({ as, className, style, sx, onClick, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className, row, {
            [row_interactive]: onClick
        }),
        role: "row",
        style: {
            ...style,
            ...s.style
        },
        onClick: onClick,
        ...otherProps
    });
}
function TableTitleCell({ as, className, style, sx, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className, titleCell),
        role: "columnheader",
        style: {
            ...style,
            ...s.style
        },
        ...otherProps
    });
}
function TableMainCell({ as, className, style, sx, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className, mainCell, bodyCell),
        role: "rowheader",
        style: {
            ...style,
            ...s.style
        },
        ...otherProps
    });
}
function TableSecondaryCell({ as, className, style, sx, ...otherProps }, ref) {
    const As = as ?? "div";
    const s = applyStyleProps(sx);
    return /*#__PURE__*/ jsx(As, {
        ref: ref,
        className: classnames(className, s.className, secondaryCell, bodyCell),
        role: "cell",
        style: {
            ...style,
            ...s.style
        },
        tabIndex: -1,
        ...otherProps
    });
}
function TableEmptyState({ className, ...otherProps }, ref) {
    return /*#__PURE__*/ jsx(ListEmptyState, {
        ref: ref,
        className: classnames(className, emptyState),
        ...otherProps,
        border: false
    });
}
export { WrappedTable as Table };

//# sourceMappingURL=table.js.map