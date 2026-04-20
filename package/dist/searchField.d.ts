import type { SearchFieldProps as AriaSearchFieldProps, ValidationResult } from "react-aria-components";
interface Props extends AriaSearchFieldProps {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
    placeholder?: string;
}
export declare function SearchField({ className, description, errorMessage, label, placeholder, ...otherProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=searchField.d.ts.map