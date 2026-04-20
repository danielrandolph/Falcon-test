import { forwardRef } from "react";
import classNames from "classnames";

import { ButtonColor, ButtonGutter, ButtonMinWidth, ButtonSize } from "./types";
import { Breakpoint } from "../../../legacy/common/breakpoints";
import { applyStyleProps } from "../../common/styleProps";

export type IButtonProps<T extends React.ElementType = "button"> = Omit<
  { [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K] },
  "color" // avoid conflicts with Button's color prop
> & {
  as?: T;
  borderNone?: boolean;
  color?: ButtonColor;
  fontSize?: number;
  fontSizeBreakpoints?: Partial<Record<Breakpoint, number>>;
  fullWidth?: boolean;
  fullWidthXs?: boolean;
  gradient?: boolean;
  gutter?: ButtonGutter;
  gutterBreakpoints?: Partial<Record<Breakpoint, ButtonGutter>>;
  iconButton?: boolean;
  minWidth?: ButtonMinWidth;
  outline?: boolean;
  size?: ButtonSize;
  sizeBreakpoints?: Partial<Record<Breakpoint, ButtonSize>>;
};

function Button<T extends React.ElementType>(
  props: IButtonProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  if (!props.as || props.as === "button") props = { type: "button", ...props };

  const {
    as: As = "button",
    borderNone = false,
    className,
    color = "primary",
    fontSize,
    fontSizeBreakpoints,
    fullWidth = false,
    fullWidthXs = false,
    gradient,
    gutter,
    gutterBreakpoints,
    iconButton = false,
    minWidth = iconButton ? false : "min-width",
    outline = iconButton ?? borderNone,
    size = 44,
    sizeBreakpoints,
    style,
    ...otherProps
  } = props;

  const s = applyStyleProps({
    fontSize: { default: fontSize, ...fontSizeBreakpoints },
  });

  return (
    <As
      ref={ref}
      className={classNames(
        className,
        "btn",
        {
          "btn-border-view": outline,
          "btn-border--none": borderNone,
          "btn-icon": iconButton,
          "full-width": fullWidth,
          "full-width--xs": fullWidthXs,
          "btn-gradient": gradient,
        },
        minWidth && `btn-${minWidth}`,
        color && `btn-${color}`,
        size && `btn--size-${size}`,
        sizeBreakpoints
          ? Object.entries(sizeBreakpoints).map(
              ([breakpoint, value]) => `btn--size-${value}-${breakpoint}`,
            )
          : undefined,
        gutter != null && `btn--gutter-${gutter}`,
        gutterBreakpoints
          ? Object.entries(gutterBreakpoints).map(
              ([breakpoint, value]) => `btn--gutter-${value}-${breakpoint}`,
            )
          : undefined,
        s.className,
      )}
      style={{ ...style, ...s.style }}
      {...otherProps}
    />
  );
}

const WrappedButton = forwardRef(Button) as <
  T extends React.ElementType = "button",
>(
  props: IButtonProps<T>,
) => React.JSX.Element;

export { WrappedButton as Button };
