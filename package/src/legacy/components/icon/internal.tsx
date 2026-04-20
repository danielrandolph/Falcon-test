export function IconInternal({
  name,
  title,
  ...otherProps
}: React.ComponentPropsWithoutRef<"svg"> & {
  name: string;
  title?: string;
}) {
  return (
    <svg {...otherProps}>
      {title && <title>{title}</title>}
      <use xlinkHref={`#svg-${name}`} />
    </svg>
  );
}
