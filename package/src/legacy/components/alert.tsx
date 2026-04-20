import classNames from "classnames";
import { forwardRef } from "react";
import * as css from "./alert.module.less";
import { Box } from "./box";
import { StyleProps } from "../common/styleProps";
import { IconInternal } from "./icon/internal";

function Alert(
  {
    buttons,
    className,
    description,
    iconName,
    partnerLogo,
    size = "regular",
    sx,
    title,
    variant = "warning",
  }: {
    buttons?: React.ReactNode;
    className?: string;
    description?: React.ReactNode;
    iconName?: string;
    partnerLogo?: React.ReactNode;
    size?: "regular" | "large";
    sx?: StyleProps;
    title: React.ReactNode;
    variant?: "error" | "neutral" | "success" | "warning";
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
          error: css.root_variant_error,
          neutral: css.root_variant_neutral,
          success: css.root_variant_success,
          warning: css.root_variant_warning,
        }[variant],
        {
          regular: undefined,
          large: css.root_size_large,
        }[size],
      )}
      sx={sx}
    >
      <div className={css.inner}>
        <div className={css.content}>
          {iconName && <IconInternal className={css.icon} name={iconName} />}

          {partnerLogo && <div className={css.partnerLogo}>{partnerLogo}</div>}

          <div className={css.text}>
            <div className={css.title}>{title}</div>

            {description && (
              <div className={css.description}>{description}</div>
            )}
          </div>
        </div>

        {buttons && <div className={css.buttons}>{buttons}</div>}
      </div>
    </Box>
  );
}

const WrappedAlert = forwardRef(Alert);

export { WrappedAlert as Alert };
