import { Breakpoint } from "../../legacy/common/breakpoints";
export interface ITypographyDefaultProps {
    children?: React.ReactNode | string;
    className?: string;
    color?: "alert" | "link" | "primary" | "success" | "text" | "text-dark" | "text-light";
    fontSize?: number;
    fontSizeBreakpoints?: Partial<Record<Breakpoint, number>>;
    fontWeight?: 400 | 500 | 700;
    lineHeight?: "base" | "medium" | "large";
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}
export declare function Typography({ children, className, color, fontSize, fontSizeBreakpoints, fontWeight, lineHeight, variant, }: ITypographyDefaultProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=typography.d.ts.map