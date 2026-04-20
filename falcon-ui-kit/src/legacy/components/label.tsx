import classNames from "classnames";
import * as css from "./label.module.less";

export function Label({
  className,
  text,
  variant = "neutral",
}: {
  className?: string;
  text: string;
  variant?: "green" | "yellow" | "neutral" | "red" | "purple" | "blue";
}) {
  return (
    <div
      className={classNames(
        className,
        css.root,
        {
          blue: css.root_variant_blue,
          green: css.root_variant_green,
          neutral: undefined,
          purple: css.root_variant_purple,
          red: css.root_variant_red,
          yellow: css.root_variant_yellow,
        }[variant],
      )}
    >
      {text}
    </div>
  );
}
