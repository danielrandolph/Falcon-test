declare const styleProps: Record<"flex" | "alignItems" | "border" | "borderBottom" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontSize" | "fontWeight" | "gap" | "gridTemplateColumns" | "justifyContent" | "lineHeight" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "rowGap", {
    cssProperty: string;
    format?: (value: number | string) => number | string | undefined;
}>;
type MediaKey = "default" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs" | "print";
type StyleProp<T> = T | {
    [K in MediaKey]?: T;
};
export type StyleProps = {
    [K in keyof typeof styleProps]?: StyleProp<React.CSSProperties[K]>;
};
export declare function applyStyleProps(props: StyleProps | undefined): {
    className: string;
    style: React.CSSProperties;
};
export {};
//# sourceMappingURL=styleProps.d.ts.map