import { Argument } from "classnames";
export declare const iconSizes: readonly ["8", "12", "16", "20", "24", "32", "36", "42", "56", "62", "72", "92"];
export type IconSize = (typeof iconSizes)[number];
export declare const iconColors: readonly ["primary", "secondary", "special", "success", "danger", "gray", "link", "white", "yellow", "text-dark", "text-base"];
export type IconColor = (typeof iconColors)[number];
export declare function Icon(props: {
    className?: Argument;
    color?: IconColor;
    name: string;
    title?: string;
    size?: IconSize;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map