import { Breakpoint } from "../../../legacy/common/breakpoints";

export const flexDirections = [
  "row",
  "row-reverse",
  "column",
  "column-reverse",
] as const;
export type FlexDirection = (typeof flexDirections)[number];
//
//
export const flexAligns = [
  "flex-start",
  "center",
  "flex-end",
  "baseline",
  "stretch",
] as const;
export type FlexAlign = (typeof flexAligns)[number];
//
//
export const flexJustifies = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
] as const;
export type FlexJustify = (typeof flexJustifies)[number];
//
//
export const flexWraps = ["wrap", "nowrap"] as const;
export type FlexWrap = (typeof flexWraps)[number];
//
//
export const flexes = ["on", "none"] as const;
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
