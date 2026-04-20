import classNames from "classnames";
import { forwardRef } from "react";
import { applyStyleProps, StyleProps } from "../common/styleProps";

export type BoxProps<T extends React.ElementType> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  sx?: StyleProps;
};

function Box<T extends React.ElementType>(
  { as, className, style, sx, ...otherProps }: BoxProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(className, s.className)}
      style={{ ...style, ...s.style }}
      {...otherProps}
    />
  );
}

const WrappedBox = forwardRef(Box) as <T extends React.ElementType = "div">(
  props: BoxProps<T>,
) => React.JSX.Element;

export { WrappedBox as Box };
