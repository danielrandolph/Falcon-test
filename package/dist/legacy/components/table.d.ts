import { StyleProps } from "../common/styleProps";
type TableProps<T extends "table" | "div"> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    fixed?: boolean;
    sx?: StyleProps;
};
declare const WrappedTable: (<T extends "table" | "div" = "div">(props: TableProps<T>) => React.JSX.Element) & {
    Container: import("react").ForwardRefExoticComponent<{
        children: React.ReactNode;
        className?: string;
        header?: React.ReactNode;
        size?: "regular" | "small";
        sx?: StyleProps;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Head: <T extends "thead" | "div" = "div">(props: TableHeadProps<T>) => React.JSX.Element;
    Body: <T extends "tbody" | "div" = "div">(props: TableBodyProps<T>) => React.JSX.Element;
    Row: <T extends "tr" | "div" = "div">(props: TableRowProps<T>) => React.JSX.Element;
    TitleCell: <T extends "th" | "div" = "div">(props: TableTitleCellProps<T>) => React.JSX.Element;
    MainCell: <T extends React.ElementType = "div">(props: TableMainCellProps<T>) => React.JSX.Element;
    SecondaryCell: <T extends React.ElementType = "div">(props: TableSecondaryCellProps<T>) => React.JSX.Element;
    EmptyState: import("react").ForwardRefExoticComponent<{
        className?: string;
        isFilterApplied?: boolean;
        itemsName?: string;
        sx?: StyleProps;
        onClearFilters?: () => void;
    } & import("react").RefAttributes<HTMLDivElement>>;
};
export { WrappedTable as Table };
type TableHeadProps<T extends "thead" | "div"> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    sx?: StyleProps;
};
type TableBodyProps<T extends "tbody" | "div"> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    sx?: StyleProps;
};
type TableRowProps<T extends "tr" | "div"> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    sx?: StyleProps;
};
type TableTitleCellProps<T extends "th" | "div"> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    sx?: StyleProps;
};
type TableMainCellProps<T extends React.ElementType> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    sx?: StyleProps;
};
type TableSecondaryCellProps<T extends React.ElementType> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    sx?: StyleProps;
};
//# sourceMappingURL=table.d.ts.map