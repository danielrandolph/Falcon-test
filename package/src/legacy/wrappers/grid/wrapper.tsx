import { forwardRef } from "react";
import classNames from "classnames";

import { IGridWrapperProps } from "./types";
import { Box } from "../../components/box";
import * as css from "./wrapper.module.less";

function gridTemplateColumns(i: number | undefined) {
  return i == null ? undefined : `repeat(${i}, minmax(0, 1fr))`;
}

function GridWrapper(
  {
    borderBetween,
    borderBetweenBreakpoints,
    children,
    className,
    columns,
    columnsBreakpoints,
    columnsGap,
    columnsGapBreakpoints,
    gap,
    gapBreakpoints,
    rowsGap,
    rowsGapBreakpoints,
  }: IGridWrapperProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box
      ref={ref}
      className={classNames(
        className,
        borderBetween && [
          css.borderBetween,
          css[`borderBetween_${borderBetween}`],
        ],
        borderBetweenBreakpoints &&
          Object.entries(borderBetweenBreakpoints).map(
            ([breakpoint, borderVal]) =>
              css[`borderBetween_${borderVal}_${breakpoint}`],
          ),
        gap && css.root_gap_default,
        gapBreakpoints &&
          Object.entries(gapBreakpoints).map(
            ([key, value]) => value != null && css[`root_gap_${key}`],
          ),
        columnsGap && css.root_colGap_default,
        columnsGapBreakpoints &&
          Object.entries(columnsGapBreakpoints).map(
            ([key, value]) => value != null && css[`root_colGap_${key}`],
          ),
        rowsGap && css.root_rowGap_default,
        rowsGapBreakpoints &&
          Object.entries(rowsGapBreakpoints).map(
            ([key, value]) => value != null && css[`root_rowGap_${key}`],
          ),
      )}
      style={
        borderBetween || borderBetweenBreakpoints
          ? Object.fromEntries([
              ...Object.entries({
                default: gap,
                ...gapBreakpoints,
              }).map(([key, value]) => [`--gw-gap-${key}`, value]),
              ...Object.entries({
                default: columnsGap,
                ...columnsGapBreakpoints,
              }).map(([key, value]) => [`--gw-col-gap-${key}`, value]),
              ...Object.entries({
                default: rowsGap,
                ...rowsGapBreakpoints,
              }).map(([key, value]) => [`--gw-row-gap-${key}`, value]),
            ])
          : undefined
      }
      sx={{
        columnGap: { default: columnsGap, ...columnsGapBreakpoints },
        display: "grid",
        gap: { default: gap, ...gapBreakpoints },
        gridTemplateColumns: {
          default: gridTemplateColumns(columns),
          ...(columnsBreakpoints &&
            Object.fromEntries(
              Object.entries(columnsBreakpoints).map(([breakpoint, i]) => [
                breakpoint,
                gridTemplateColumns(i),
              ]),
            )),
        },
        rowGap: { default: rowsGap, ...rowsGapBreakpoints },
      }}
    >
      {children}
    </Box>
  );
}

const WrappedGridWrapper = forwardRef(GridWrapper);

export { WrappedGridWrapper as GridWrapper };
