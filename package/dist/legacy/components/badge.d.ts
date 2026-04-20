export type BadgeSize = "regular" | "small";
export type BadgeVariant = "danger" | "info";
export declare function Badge({ children, className, positionOffset, size, style, text, variant, }: {
    className?: string;
    size?: BadgeSize;
    style?: React.CSSProperties;
    text?: string | number;
    variant?: BadgeVariant;
} & ({
    children?: never;
    positionOffset?: never;
} | {
    children: React.ReactNode;
    positionOffset?: string;
})): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=badge.d.ts.map