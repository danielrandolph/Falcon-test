import type React from "react";
import type { DisclosurePanelProps as AriaDisclosurePanelProps, DisclosureProps as AriaDisclosureProps } from "react-aria-components";
interface DisclosureProps extends AriaDisclosureProps {
    children: React.ReactNode;
}
export declare function Disclosure({ children, ...props }: DisclosureProps): import("react/jsx-runtime").JSX.Element;
interface DisclosureHeaderProps {
    children: React.ReactNode;
}
export declare function DisclosureHeader({ children }: DisclosureHeaderProps): import("react/jsx-runtime").JSX.Element;
interface DisclosurePanelProps extends AriaDisclosurePanelProps {
    children: React.ReactNode;
}
export declare function DisclosurePanel({ children, ...props }: DisclosurePanelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=disclosure.d.ts.map