import type { CellProps, ColumnProps, RowProps, TableBodyProps, TableHeaderProps, TableProps as AriaTableProps } from "react-aria-components";
interface Props extends Omit<AriaTableProps, "className"> {
    className?: string;
}
export declare function Table({ className, onScroll, ...otherProps }: Props): import("react/jsx-runtime").JSX.Element;
export declare function Column({ className, width, ...otherProps }: ColumnProps): import("react/jsx-runtime").JSX.Element;
export declare function TableHeader<T extends object>(props: TableHeaderProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function TableBody<T extends object>(props: TableBodyProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Row<T extends object>({ id, columns, children, ...otherProps }: RowProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Cell(props: CellProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=table.d.ts.map