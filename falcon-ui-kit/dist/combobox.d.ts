import type React from "react";
import type { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps, ValidationResult } from "react-aria-components";
import type { DropdownSectionProps } from "./listBox";
export interface ComboBoxProps<T extends object, M extends "single" | "multiple"> extends Omit<AriaComboBoxProps<T, M>, "children"> {
    children: React.ReactNode | ((item: T) => React.ReactNode);
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    label?: string;
    placeholder?: string;
}
export declare function ComboBox<T extends object, M extends "single" | "multiple" = "single">({ children, description, errorMessage, items, label, ...props }: ComboBoxProps<T, M>): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxSection<T extends object>(props: DropdownSectionProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=combobox.d.ts.map