import classNames from "classnames";
import { forwardRef } from "react";
import { applyStyleProps, StyleProps } from "../common/styleProps";
import { ListEmptyState } from "./listEmptyState";
import * as css from "./table.module.less";

function TableContainer(
  {
    children,
    className,
    header,
    size = "regular",
    sx,
  }: {
    children: React.ReactNode;
    className?: string;
    header?: React.ReactNode;
    size?: "regular" | "small";
    sx?: StyleProps;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const s = applyStyleProps(sx);

  return (
    <div
      ref={ref}
      className={classNames(
        className,
        s.className,
        css.root,
        {
          regular: css.root_size_regular,
          small: css.root_size_small,
        }[size],
      )}
      style={s.style}
    >
      {header && <div className={css.header}>{header}</div>}

      <div className={css.scrollArea}>{children}</div>
    </div>
  );
}

type TableProps<T extends "table" | "div"> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  fixed?: boolean;
  sx?: StyleProps;
};

function Table<T extends "table" | "div">(
  { as, className, fixed, style, sx, ...otherProps }: TableProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(className, s.className, css.table, {
        [css.table_fixed]: fixed,
      })}
      role="table"
      style={{ ...style, ...s.style }}
      {...otherProps}
    />
  );
}

const WrappedTable = Object.assign(
  forwardRef(Table) as <T extends "table" | "div" = "div">(
    props: TableProps<T>,
  ) => React.JSX.Element,
  {
    Container: forwardRef(TableContainer),
    Head: forwardRef(TableHead) as <T extends "thead" | "div" = "div">(
      props: TableHeadProps<T>,
    ) => React.JSX.Element,
    Body: forwardRef(TableBody) as <T extends "tbody" | "div" = "div">(
      props: TableBodyProps<T>,
    ) => React.JSX.Element,
    Row: forwardRef(TableRow) as <T extends "tr" | "div" = "div">(
      props: TableRowProps<T>,
    ) => React.JSX.Element,
    TitleCell: forwardRef(TableTitleCell) as <T extends "th" | "div" = "div">(
      props: TableTitleCellProps<T>,
    ) => React.JSX.Element,
    MainCell: forwardRef(TableMainCell) as <
      T extends React.ElementType = "div",
    >(
      props: TableMainCellProps<T>,
    ) => React.JSX.Element,
    SecondaryCell: forwardRef(TableSecondaryCell) as <
      T extends React.ElementType = "div",
    >(
      props: TableSecondaryCellProps<T>,
    ) => React.JSX.Element,
    EmptyState: forwardRef(TableEmptyState),
  },
);

export { WrappedTable as Table };

type TableHeadProps<T extends "thead" | "div"> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  sx?: StyleProps;
};

function TableHead<T extends "thead" | "div">(
  { as, className, style, sx, ...otherProps }: TableHeadProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(className, s.className, css.head)}
      role="rowgroup"
      style={{ ...style, ...s.style }}
      {...otherProps}
    />
  );
}

type TableBodyProps<T extends "tbody" | "div"> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  sx?: StyleProps;
};

function TableBody<T extends "tbody" | "div">(
  { as, className, style, sx, ...otherProps }: TableBodyProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(className, s.className, css.body)}
      role="rowgroup"
      style={{ ...style, ...s.style }}
      {...otherProps}
    />
  );
}

type TableRowProps<T extends "tr" | "div"> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  sx?: StyleProps;
};

function TableRow<T extends "tr" | "div">(
  { as, className, style, sx, onClick, ...otherProps }: TableRowProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(className, s.className, css.row, {
        [css.row_interactive]: onClick,
      })}
      role="row"
      style={{ ...style, ...s.style }}
      onClick={onClick}
      {...otherProps}
    />
  );
}

type TableTitleCellProps<T extends "th" | "div"> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  sx?: StyleProps;
};

function TableTitleCell<T extends "th" | "div">(
  { as, className, style, sx, ...otherProps }: TableTitleCellProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(className, s.className, css.titleCell)}
      role="columnheader"
      style={{ ...style, ...s.style }}
      {...otherProps}
    />
  );
}

type TableMainCellProps<T extends React.ElementType> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  sx?: StyleProps;
};

function TableMainCell<T extends React.ElementType>(
  { as, className, style, sx, ...otherProps }: TableMainCellProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(className, s.className, css.mainCell, css.bodyCell)}
      role="rowheader"
      style={{ ...style, ...s.style }}
      {...otherProps}
    />
  );
}

type TableSecondaryCellProps<T extends React.ElementType> = {
  [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
  as?: T;
  sx?: StyleProps;
};

function TableSecondaryCell<T extends React.ElementType>(
  { as, className, style, sx, ...otherProps }: TableSecondaryCellProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.ForwardedRef<any>,
) {
  const As = as ?? "div";
  const s = applyStyleProps(sx);

  return (
    <As
      ref={ref}
      className={classNames(
        className,
        s.className,
        css.secondaryCell,
        css.bodyCell,
      )}
      role="cell"
      style={{ ...style, ...s.style }}
      tabIndex={-1}
      {...otherProps}
    />
  );
}

function TableEmptyState(
  {
    className,
    ...otherProps
  }: {
    className?: string;
    isFilterApplied?: boolean;
    itemsName?: string;
    sx?: StyleProps;
    onClearFilters?: () => void;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <ListEmptyState
      ref={ref}
      className={classNames(className, css.emptyState)}
      {...otherProps}
      border={false}
    />
  );
}
