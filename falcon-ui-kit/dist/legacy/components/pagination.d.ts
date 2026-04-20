export interface PaginationItemProps {
    "aria-current"?: "page";
    "aria-label"?: string;
    children: React.ReactNode;
    className: string;
}
export declare function Pagination({ activePage, children, className, pageCount, }: {
    activePage: number;
    children: (page: number | undefined, props: PaginationItemProps) => React.ReactElement;
    className?: string;
    pageCount: number;
}): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=pagination.d.ts.map