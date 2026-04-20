import classNames from "classnames";
import * as css from "./badge.module.less";

export type BadgeSize = "regular" | "small";
export type BadgeVariant = "danger" | "info";

export function Badge({
  children,
  className,
  positionOffset,
  size = "regular",
  style,
  text,
  variant = "danger",
}: {
  className?: string;
  size?: BadgeSize;
  style?: React.CSSProperties;
  text?: string | number;
  variant?: BadgeVariant;
} & (
  | { children?: never; positionOffset?: never }
  | { children: React.ReactNode; positionOffset?: string }
)) {
  return (
    <div
      className={classNames(
        className,
        css.root,
        {
          danger: css.root_variant_danger,
          info: css.root_variant_info,
        }[variant],
        {
          regular: undefined,
          small: css.root_size_small,
        }[size],
        { [css.root_inline]: !children },
      )}
      style={{
        ["--falcon-badge-position-offset" as string]: positionOffset,
        ...style,
      }}
    >
      {children}

      <div className={css.circle}>{text}</div>
    </div>
  );
}
