import type React from "react";
import type { PopoverProps as AriaPopoverProps } from "react-aria-components";
export interface PopoverProps extends Omit<AriaPopoverProps, "children"> {
    children: React.ReactNode;
    showArrow?: boolean;
}
export declare function Popover({ children, showArrow, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=popover.d.ts.map