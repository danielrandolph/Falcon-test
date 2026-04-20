import classNames, { Argument } from "classnames";

export function ButtonLink(props: {
  className?: Argument;
  type?: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  const {
    className,
    title,
    onClick,
    type = "button",
    disabled,
    children,
  } = props;
  return (
    <button
      className={classNames("link-color", className)}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
}
