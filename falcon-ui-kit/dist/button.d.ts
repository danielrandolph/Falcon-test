import type { ButtonProps as RACButtonProps } from "react-aria-components";
export interface ButtonProps extends RACButtonProps {
    /** @default 'primary' */
    variant?: "primary" | "secondary" | "destructive" | "quiet";
}
export declare function Button({ variant, ...otherProps }: ButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=button.d.ts.map