import type React from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";
interface Props extends Omit<AriaSwitchProps, "children"> {
    children: React.ReactNode;
}
export declare function Switch({ children, className, ...otherProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=switch.d.ts.map