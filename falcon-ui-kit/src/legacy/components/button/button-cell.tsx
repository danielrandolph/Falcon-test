import classNames, { Argument } from "classnames";

export function ButtonCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: Argument;
}) {
  return <span className={classNames("btn-cell", className)}>{children}</span>;
}
