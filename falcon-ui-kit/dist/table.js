"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUp } from "lucide-react";
import { Button, Cell, Collection, Column, ColumnResizer, Group, ResizableTableContainer, Row, Table, TableBody, TableHeader, composeRenderProps, useTableOptions } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Checkbox } from "./checkbox.js";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
function table_Table({ className, onScroll, ...otherProps }) {
    return /*#__PURE__*/ jsx(ResizableTableContainer, {
        className: twMerge("tw:relative tw:box-border tw:max-h-80 tw:w-full tw:scroll-pt-[2.281rem] tw:overflow-auto tw:rounded-lg tw:border tw:border-neutral-300 tw:bg-white tw:font-sans", className),
        onScroll: onScroll,
        children: /*#__PURE__*/ jsx(Table, {
            ...otherProps,
            className: "tw:box-border tw:border-separate tw:border-spacing-0 tw:overflow-hidden tw:has-[>[data-empty]]:h-full"
        })
    });
}
const columnStyles = tv({
    extend: focusRing,
    base: "tw:box-border tw:flex tw:h-5 tw:flex-1 tw:items-center tw:gap-1 tw:overflow-hidden tw:px-2"
});
const resizerStyles = tv({
    extend: focusRing,
    base: "tw:box-content tw:h-5 tw:w-px tw:translate-x-2 tw:cursor-col-resize tw:rounded-xs tw:bg-neutral-400 tw:bg-clip-content tw:px-2 tw:py-1 tw:-outline-offset-2 tw:forced-colors:bg-[ButtonBorder] tw:resizing:w-0.5 tw:resizing:bg-blue-600 tw:resizing:pl-1.75 tw:forced-colors:resizing:bg-[Highlight]"
});
function table_Column({ className, width, ...otherProps }) {
    return /*#__PURE__*/ jsx(Column, {
        ...otherProps,
        className: composeTailwindRenderProps(className, "tw:box-border tw:h-1 tw:cursor-default tw:text-start tw:text-sm tw:font-semibold tw:text-neutral-700 tw:focus-within:z-20 tw:[&:hover]:z-20"),
        children: composeRenderProps(otherProps.children, (children, { allowsSorting, sortDirection })=>/*#__PURE__*/ jsxs("div", {
                className: "tw:flex tw:items-center",
                children: [
                    /*#__PURE__*/ jsxs(Group, {
                        role: "presentation",
                        tabIndex: -1,
                        className: columnStyles,
                        children: [
                            /*#__PURE__*/ jsx("span", {
                                className: "tw:truncate",
                                children: children
                            }),
                            allowsSorting && /*#__PURE__*/ jsx("span", {
                                className: `tw:flex tw:h-4 tw:w-4 tw:items-center tw:justify-center tw:transition ${"descending" === sortDirection ? "tw:rotate-180" : ""}`,
                                children: sortDirection && /*#__PURE__*/ jsx(ArrowUp, {
                                    "aria-hidden": true,
                                    className: "tw:h-4 tw:w-4 tw:text-neutral-500 tw:forced-colors:text-[ButtonText]"
                                })
                            })
                        ]
                    }),
                    !width && /*#__PURE__*/ jsx(ColumnResizer, {
                        className: resizerStyles
                    })
                ]
            }))
    });
}
function table_TableHeader(props) {
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
    return /*#__PURE__*/ jsxs(TableHeader, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:sticky tw:top-0 tw:z-10 tw:rounded-t-lg tw:border-b tw:border-b-neutral-200 tw:bg-neutral-100/60 tw:backdrop-blur-md tw:supports-[-moz-appearance:none]:bg-neutral-100 tw:forced-colors:bg-[Canvas]"),
        children: [
            allowsDragging && /*#__PURE__*/ jsx(table_Column, {}),
            "toggle" === selectionBehavior && /*#__PURE__*/ jsx(Column, {
                width: 36,
                minWidth: 36,
                className: "tw:box-border tw:cursor-default tw:p-2 tw:text-start tw:text-sm tw:font-semibold",
                children: "multiple" === selectionMode && /*#__PURE__*/ jsx(Checkbox, {
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ jsx(Collection, {
                items: props.columns,
                children: props.children
            })
        ]
    });
}
function table_TableBody(props) {
    return /*#__PURE__*/ jsx(TableBody, {
        ...props,
        className: "tw:empty:text-center tw:empty:text-sm tw:empty:italic"
    });
}
const rowStyles = tv({
    extend: focusRing,
    base: "tw:group/row tw:relative tw:cursor-default tw:text-sm tw:text-neutral-900 tw:-outline-offset-2 tw:select-none tw:last:rounded-b-lg tw:hover:bg-neutral-100 tw:disabled:text-neutral-300 tw:pressed:bg-neutral-100 tw:selected:bg-blue-100 tw:selected:hover:bg-blue-200 tw:selected:pressed:bg-blue-200"
});
function table_Row({ id, columns, children, ...otherProps }) {
    const { selectionBehavior, allowsDragging } = useTableOptions();
    return /*#__PURE__*/ jsxs(Row, {
        id: id,
        ...otherProps,
        className: rowStyles,
        children: [
            allowsDragging && /*#__PURE__*/ jsx(table_Cell, {
                children: /*#__PURE__*/ jsx(Button, {
                    slot: "drag",
                    children: "≡"
                })
            }),
            "toggle" === selectionBehavior && /*#__PURE__*/ jsx(table_Cell, {
                children: /*#__PURE__*/ jsx(Checkbox, {
                    slot: "selection"
                })
            }),
            /*#__PURE__*/ jsx(Collection, {
                items: columns,
                children: children
            })
        ]
    });
}
const cellStyles = tv({
    extend: focusRing,
    base: "tw:box-border tw:truncate tw:border-b tw:border-b-neutral-200 tw:p-2 tw:-outline-offset-2 tw:[--selected-border:var(--color-blue-200)] tw:[-webkit-tap-highlight-color:transparent] tw:group-last/row:border-b-0 tw:group-selected/row:border-(--selected-border) tw:group-last/row:first:rounded-bl-lg tw:group-last/row:last:rounded-br-lg tw:[:is(:has(+[data-selected])_*)]:border-(--selected-border)"
});
function table_Cell(props) {
    return /*#__PURE__*/ jsx(Cell, {
        ...props,
        className: cellStyles
    });
}
export { table_Cell as Cell, table_Column as Column, table_Row as Row, table_Table as Table, table_TableBody as TableBody, table_TableHeader as TableHeader };

//# sourceMappingURL=table.js.map