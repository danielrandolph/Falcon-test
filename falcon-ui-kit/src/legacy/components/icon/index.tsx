import classNames, { Argument } from "classnames";
import { IconInternal } from "./internal";

export const iconSizes = [
  "8",
  "12",
  "16",
  "20",
  "24",
  "32",
  "36",
  "42",
  "56",
  "62",
  "72",
  "92",
] as const;
export type IconSize = (typeof iconSizes)[number];

export const iconColors = [
  "primary",
  "secondary",
  "special",
  "success",
  "danger",
  "gray",
  "link",
  "white",
  "yellow",
  "text-dark",
  "text-base",
] as const;
export type IconColor = (typeof iconColors)[number];

export function Icon(props: {
  className?: Argument;
  color?: IconColor;
  name: string;
  title?: string;
  size?: IconSize;
}) {
  const { className, color, title, name, size } = props;

  return (
    <IconInternal
      className={classNames([
        className,
        "icon",
        `icon-${name}`,
        size ? `icon-size-${size}` : undefined,
        color && `icon-${color}`,
      ])}
      name={name}
      title={title}
    />
  );
}
