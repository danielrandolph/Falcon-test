import { Argument } from "classnames";
interface IContentContainerDefaultProps {
    className?: Argument;
    children?: React.ReactNode;
}
export declare const ContentContainer: import("react").ForwardRefExoticComponent<IContentContainerDefaultProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ContentSection: import("react").ForwardRefExoticComponent<IContentContainerDefaultProps & import("react").RefAttributes<HTMLElement>>;
export declare const Content: import("react").ForwardRefExoticComponent<IContentContainerDefaultProps & import("react").RefAttributes<HTMLDivElement>> & {
    Section: import("react").ForwardRefExoticComponent<IContentContainerDefaultProps & import("react").RefAttributes<HTMLElement>>;
};
export {};
//# sourceMappingURL=content.d.ts.map