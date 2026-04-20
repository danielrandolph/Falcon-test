import type { NumberFieldProps as AriaNumberFieldProps, ValidationResult } from "react-aria-components";
interface Props extends AriaNumberFieldProps {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
    placeholder?: string;
}
export declare function NumberField({ label, description, errorMessage, placeholder, ...otherProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=numberField.d.ts.map