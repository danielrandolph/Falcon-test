import type { ReactNode } from "react";
import type { RadioGroupProps as RACRadioGroupProps, RadioProps, ValidationResult } from "react-aria-components";
interface Props extends Omit<RACRadioGroupProps, "children"> {
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
}
export declare function RadioGroup(props: Props): import("react/jsx-runtime").JSX.Element;
export declare function Radio(props: RadioProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=radioGroup.d.ts.map