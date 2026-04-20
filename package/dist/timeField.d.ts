import type { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from "react-aria-components";
interface Props<T extends TimeValue> extends AriaTimeFieldProps<T> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
}
export declare function TimeField<T extends TimeValue>({ description, errorMessage, label, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=timeField.d.ts.map