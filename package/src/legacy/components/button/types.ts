export const buttonColors = [
  "primary",
  "secondary",
  "special",
  "success",
  "warning",
  "danger",
  "marketing-blue",
  "marketing-green",
  "gray",
  "dark-gray",
  "jd-green",
  "corteva",
  "rabo",
  "farmop",
  "goose",
  false,
] as const;
export type ButtonColor = (typeof buttonColors)[number];
//
//
export const buttonSizes = [24, 32, 36, 44, 56, false] as const;
export type ButtonSize = (typeof buttonSizes)[number];
//
//
export const buttonGutters = [0, 12, 16, 24, 32, 36] as const;
export type ButtonGutter = (typeof buttonGutters)[number];
//
//
export const buttonMinWidths = ["min-width", "min-width-large", false] as const;
export type ButtonMinWidth = (typeof buttonMinWidths)[number];
