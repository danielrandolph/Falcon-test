import type React from "react";
import type { TooltipProps, TooltipTriggerComponentProps } from "react-aria-components";
interface Props extends Omit<TooltipProps, "children"> {
    children: React.ReactNode;
}
export declare function Tooltip({ children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export declare function TooltipTrigger({ delay, ...otherProps }: TooltipTriggerComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=tooltip.d.ts.map