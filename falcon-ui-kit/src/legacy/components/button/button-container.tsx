import classNames, { Argument } from "classnames";

export function ButtonContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: Argument;
}) {
  return (
    <span className={classNames("btn-icon-container", className)}>
      {children}
    </span>
  );
}
