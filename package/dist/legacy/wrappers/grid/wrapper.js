import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import classnames from "classnames";
import { Box } from "../../components/box.js";
import * as __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__ from "./wrapper.module.js";
function gridTemplateColumns(i) {
    return null == i ? void 0 : `repeat(${i}, minmax(0, 1fr))`;
}
function GridWrapper({ borderBetween, borderBetweenBreakpoints, children, className, columns, columnsBreakpoints, columnsGap, columnsGapBreakpoints, gap, gapBreakpoints, rowsGap, rowsGapBreakpoints }, ref) {
    return /*#__PURE__*/ jsx(Box, {
        ref: ref,
        className: classnames(className, borderBetween && [
            __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__.borderBetween,
            __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__[`borderBetween_${borderBetween}`]
        ], borderBetweenBreakpoints && Object.entries(borderBetweenBreakpoints).map(([breakpoint, borderVal])=>__WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__[`borderBetween_${borderVal}_${breakpoint}`]), gap && __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__.root_gap_default, gapBreakpoints && Object.entries(gapBreakpoints).map(([key, value])=>null != value && __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__[`root_gap_${key}`]), columnsGap && __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__.root_colGap_default, columnsGapBreakpoints && Object.entries(columnsGapBreakpoints).map(([key, value])=>null != value && __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__[`root_colGap_${key}`]), rowsGap && __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__.root_rowGap_default, rowsGapBreakpoints && Object.entries(rowsGapBreakpoints).map(([key, value])=>null != value && __WEBPACK_EXTERNAL_MODULE__wrapper_module_js_313e7f56__[`root_rowGap_${key}`])),
        style: borderBetween || borderBetweenBreakpoints ? Object.fromEntries([
            ...Object.entries({
                default: gap,
                ...gapBreakpoints
            }).map(([key, value])=>[
                    `--gw-gap-${key}`,
                    value
                ]),
            ...Object.entries({
                default: columnsGap,
                ...columnsGapBreakpoints
            }).map(([key, value])=>[
                    `--gw-col-gap-${key}`,
                    value
                ]),
            ...Object.entries({
                default: rowsGap,
                ...rowsGapBreakpoints
            }).map(([key, value])=>[
                    `--gw-row-gap-${key}`,
                    value
                ])
        ]) : void 0,
        sx: {
            columnGap: {
                default: columnsGap,
                ...columnsGapBreakpoints
            },
            display: "grid",
            gap: {
                default: gap,
                ...gapBreakpoints
            },
            gridTemplateColumns: {
                default: gridTemplateColumns(columns),
                ...columnsBreakpoints && Object.fromEntries(Object.entries(columnsBreakpoints).map(([breakpoint, i])=>[
                        breakpoint,
                        gridTemplateColumns(i)
                    ]))
            },
            rowGap: {
                default: rowsGap,
                ...rowsGapBreakpoints
            }
        },
        children: children
    });
}
const WrappedGridWrapper = /*#__PURE__*/ forwardRef(GridWrapper);
export { WrappedGridWrapper as GridWrapper };

//# sourceMappingURL=wrapper.js.map