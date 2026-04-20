import { StyleProps } from "../common/styleProps";
export declare const accordionHeaderPadding: readonly ["large", "medium", "small"];
export type AccordionHeaderPadding = (typeof accordionHeaderPadding)[number];
export declare const accordionHeaderPaddingDict: Record<AccordionHeaderPadding, string>;
export declare const accordionBgTheme: readonly ["white", "neutral", "neutral-inactive", "white-header-neutral-body", "white-header-neutral-inactive-body", "neutral-header-white-body", "neutral-inactive-header-white-body", "neutral-header-neutral-inactive-body", "neutral-inactive-header-neutral-body"];
export type AccordionBgTheme = (typeof accordionBgTheme)[number];
export declare const accordionBgThemeDict: Record<AccordionBgTheme, string>;
interface AccordionProps {
    header: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
    headerPadding?: AccordionHeaderPadding;
    onToggle?: (isOpen: boolean) => void;
    bgTheme?: AccordionBgTheme;
    isCustomHeader?: boolean;
    sx?: StyleProps;
}
export declare function Accordion({ header, children, defaultOpen, className, headerPadding, onToggle, bgTheme, isCustomHeader, sx, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=accordion.d.ts.map