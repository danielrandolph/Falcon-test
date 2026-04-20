import type { TextFieldProps as AriaTextFieldProps, ValidationResult } from "react-aria-components";
interface Props extends AriaTextFieldProps {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
    placeholder?: string;
}
export declare function TextField({ description, errorMessage, label, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=textField.d.ts.map