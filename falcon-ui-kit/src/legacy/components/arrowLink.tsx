import classNames from "classnames";
import { Icon } from "./icon";
import * as css from "./arrowLink.module.less";

export function ArrowLink({
  className,
  direction = "forward",
}: {
  className?: string;
  direction?: "back" | "down" | "up" | "forward";
}) {
  return (
    <div className={classNames(className, css.root)}>
      <Icon name={`arrow-${direction}`} size="20" />
    </div>
  );
}
