import { ButtonColor, ButtonGutter, ButtonMinWidth, ButtonSize } from "./types";
import { Breakpoint } from "../../../legacy/common/breakpoints";
export type IButtonProps<T extends React.ElementType = "button"> = Omit<{
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
}, "color"> & {
    as?: T;
    borderNone?: boolean;
    color?: ButtonColor;
    fontSize?: number;
    fontSizeBreakpoints?: Partial<Record<Breakpoint, number>>;
    fullWidth?: boolean;
    fullWidthXs?: boolean;
    gradient?: boolean;
    gutter?: ButtonGutter;
    gutterBreakpoints?: Partial<Record<Breakpoint, ButtonGutter>>;
    iconButton?: boolean;
    minWidth?: ButtonMinWidth;
    outline?: boolean;
    size?: ButtonSize;
    sizeBreakpoints?: Partial<Record<Breakpoint, ButtonSize>>;
};
declare const WrappedButton: <T extends React.ElementType = "button">(props: IButtonProps<T>) => React.JSX.Element;
export { WrappedButton as Button };
//# sourceMappingURL=button.d.ts.map