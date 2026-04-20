import { forwardRef } from "react";
import classNames from "classnames";

import { StyleProps } from "../common/styleProps";
import { Box } from "./box";
import { IconInternal } from "./icon/internal";
import * as css from "./labelCard.module.less";

function LabelCard(
  {
    className,
    description,
    iconName = "signal",
    sx,
    title,
    variant = "neutral",
  }: {
    className?: string;
    description?: React.ReactNode;
    iconName?: string;
    sx?: StyleProps;
    title: React.ReactNode;
    variant?: "green" | "yellow" | "neutral" | "red" | "purple" | "blue";
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box
      ref={ref}
      className={classNames(
        className,
        css.root,
        {
          blue: css.root_variant_blue,
          green: css.root_variant_green,
          neutral: css.root_variant_neutral,
          purple: css.root_variant_purple,
          red: css.root_variant_red,
          yellow: css.root_variant_yellow,
        }[variant],
      )}
      sx={sx}
    >
      {iconName && <IconInternal className={css.icon} name={iconName} />}

      <div className={css.text}>
        <div className={css.title}>{title}</div>
        {description && <div className={css.description}>{description}</div>}
      </div>
    </Box>
  );
}

const WrappedLabelCard = forwardRef(LabelCard);

export { WrappedLabelCard as LabelCard };
