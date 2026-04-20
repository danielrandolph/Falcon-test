import classNames from "classnames";

import { Breakpoint } from "../../legacy/common/breakpoints";
import { Box } from "./box";
import * as css from "./typography.module.less";

export interface ITypographyDefaultProps {
  children?: React.ReactNode | string;
  className?: string;
  color?:
    | "alert"
    | "link"
    | "primary"
    | "success"
    | "text"
    | "text-dark"
    | "text-light";
  fontSize?: number;
  fontSizeBreakpoints?: Partial<Record<Breakpoint, number>>;
  fontWeight?: 400 | 500 | 700;
  lineHeight?: "base" | "medium" | "large";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const variantStyles: Partial<
  Record<
    keyof JSX.IntrinsicElements,
    Pick<
      React.CSSProperties,
      "display" | "fontSize" | "fontWeight" | "lineHeight"
    >
  >
> = {
  h1: { display: "block", fontSize: 32, fontWeight: 500, lineHeight: 1.2 },
  h2: { display: "block", fontSize: 26, fontWeight: 500, lineHeight: 1.2 },
  h3: { display: "block", fontSize: 20, fontWeight: 500, lineHeight: 1.4 },
  h4: { display: "block", fontSize: 18, fontWeight: 500, lineHeight: 1.2 },
  h5: { display: "block", fontSize: 15, fontWeight: 500, lineHeight: 1.4 },
  h6: { display: "block", fontSize: 13, fontWeight: 500, lineHeight: 1.2 },
  p: { display: "block" },
};

export function Typography({
  children,
  className,
  color,
  fontSize,
  fontSizeBreakpoints,
  fontWeight,
  lineHeight,
  variant = "p",
}: ITypographyDefaultProps) {
  const variantStyle = variantStyles[variant];

  return (
    <Box
      as={variant}
      className={classNames(
        className,
        css.root,
        color
          ? {
              alert: css.color_alert,
              link: css.color_link,
              primary: css.color_primary,
              success: css.color_success,
              text: css.color_base,
              "text-dark": css.color_dark,
              "text-light": css.color_light,
            }[color]
          : undefined,
      )}
      sx={{
        display: variantStyle?.display,
        fontSize: {
          default: fontSize ?? variantStyle?.fontSize,
          ...fontSizeBreakpoints,
        },
        fontWeight: fontWeight ?? variantStyle?.fontWeight,
        lineHeight: lineHeight
          ? { base: 1.2, medium: 1.4, large: 1.6 }[lineHeight]
          : variantStyle?.lineHeight,
      }}
    >
      {children}
    </Box>
  );
}
