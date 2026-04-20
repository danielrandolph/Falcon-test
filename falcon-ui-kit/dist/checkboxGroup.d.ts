import type { ReactNode } from "react";
import type { CheckboxGroupProps as AriaCheckboxGroupProps, ValidationResult } from "react-aria-components";
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, "children"> {
    label?: string;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function CheckboxGroup(props: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=checkboxGroup.d.ts.map