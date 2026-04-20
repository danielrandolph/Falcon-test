import classNames from "classnames";
import { Icon } from "./icon";
import * as css from "./chip.module.less";

export function Chip({
  className,
  fullWidth,
  icon,
  text,
  type = "neutral",
}: {
  className?: string;
  fullWidth?: boolean;
  icon?: string;
  text: string;
  type?: "error" | "neutral" | "success" | "warning";
}) {
  return (
    <div
      className={classNames(
        className,
        css.root,
        {
          error: css.root_type_error,
          neutral: undefined,
          success: css.root_type_success,
          warning: css.root_type_warning,
        }[type],
        { [css.root_fullWidth]: fullWidth },
      )}
    >
      {icon && <Icon name={icon} size={fullWidth ? "20" : "16"} />}

      <div className={css.text}>{text}</div>
    </div>
  );
}
