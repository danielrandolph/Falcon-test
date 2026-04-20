import type { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from "react-aria-components";
interface Props<T extends DateValue> extends AriaDatePickerProps<T> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
}
export declare function DatePicker<T extends DateValue>({ description, errorMessage, label, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=datePicker.d.ts.map