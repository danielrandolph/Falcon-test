import classNames from "classnames";
import { forwardRef } from "react";
import { applyStyleProps, StyleProps } from "../common/styleProps";
import { IconInternal } from "./icon/internal";
import * as css from "./emptyState.module.less";

function EmptyState(
  {
    border = true,
    buttons,
    className,
    extraInfo,
    iconName,
    smallTitle,
    subtext,
    sx,
    title,
  }: {
    border?: boolean;
    buttons?: React.ReactNode;
    className?: string;
    extraInfo?: React.ReactNode;
    iconName?: string;
    smallTitle?: boolean;
    subtext?: React.ReactNode;
    sx?: StyleProps;
    title?: React.ReactNode;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const s = applyStyleProps(sx);

  return (
    <div
      ref={ref}
      className={classNames(className, s.className, css.root, {
        [css.root_border]: border,
        [css.root_smallTitle]: smallTitle,
      })}
      style={s.style}
    >
      <div className={css.content}>
        {iconName && <IconInternal className={css.icon} name={iconName} />}
        {title && <div className={css.title}>{title}</div>}
        {subtext && <div className={css.subtext}>{subtext}</div>}
        {extraInfo && <div className={css.extraInfo}>{extraInfo}</div>}
        {buttons && <div className={css.buttons}>{buttons}</div>}
      </div>
    </div>
  );
}

const WrappedEmptyState = forwardRef(EmptyState);

export { WrappedEmptyState as EmptyState };
