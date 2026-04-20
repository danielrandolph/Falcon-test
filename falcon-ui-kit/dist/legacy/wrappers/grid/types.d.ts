import { Breakpoint } from "../../../legacy/common/breakpoints";
export type BorderBetween = "column" | "row" | "all";
export declare const borderBetweens: BorderBetween[];
export interface IGridDefault {
    children?: React.ReactNode;
    className?: string;
    gap?: number;
    gapBreakpoints?: Partial<Record<Breakpoint, number>>;
}
export interface IGridWrapperProps extends IGridDefault {
    borderBetween?: BorderBetween;
    borderBetweenBreakpoints?: Partial<Record<Breakpoint, BorderBetween>>;
    columns?: number;
    columnsBreakpoints?: Partial<Record<Breakpoint, number>>;
    columnsGap?: number;
    columnsGapBreakpoints?: Partial<Record<Breakpoint, number>>;
    rowsGap?: number;
    rowsGapBreakpoints?: Partial<Record<Breakpoint, number>>;
}
//# sourceMappingURL=types.d.ts.map