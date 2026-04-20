import type { DateRangePickerProps as AriaDateRangePickerProps, DateValue, ValidationResult } from "react-aria-components";
interface Props<T extends DateValue> extends AriaDateRangePickerProps<T> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
}
export declare function DateRangePicker<T extends DateValue>({ description, errorMessage, label, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=dateRangePicker.d.ts.map