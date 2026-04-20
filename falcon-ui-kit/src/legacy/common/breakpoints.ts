export const breakpoints = ["xxs", "xs", "sm", "md", "lg", "xl"] as const;
export type Breakpoint = (typeof breakpoints)[number];
