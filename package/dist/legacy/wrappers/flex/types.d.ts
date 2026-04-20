import { Breakpoint } from "../../../legacy/common/breakpoints";
export declare const flexDirections: readonly ["row", "row-reverse", "column", "column-reverse"];
export type FlexDirection = (typeof flexDirections)[number];
export declare const flexAligns: readonly ["flex-start", "center", "flex-end", "baseline", "stretch"];
export type FlexAlign = (typeof flexAligns)[number];
export declare const flexJustifies: readonly ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];
export type FlexJustify = (typeof flexJustifies)[number];
export declare const flexWraps: readonly ["wrap", "nowrap"];
export type FlexWrap = (typeof flexWraps)[number];
export declare const flexes: readonly ["on", "none"];
export type Flex = (typeof flexes)[number];
export interface IFlexDefault {
    children?: React.ReactNode;
    className?: string;
    direction?: FlexDirection;
    directionBreakpoints?: Partial<Record<Breakpoint, FlexDirection>>;
    align?: FlexAlign;
    alignBreakpoints?: Partial<Record<Breakpoint, FlexAlign>>;
    justify?: FlexJustify;
    justifyBreakpoints?: Partial<Record<Breakpoint, FlexJustify>>;
    wrap?: FlexWrap;
    wrapBreakpoints?: Partial<Record<Breakpoint, FlexWrap>>;
    flex?: Flex;
    gap?: number;
    gapBreakpoints?: Partial<Record<Breakpoint, number>>;
}
//# sourceMappingURL=types.d.ts.map