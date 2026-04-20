import type React from "react";
import type { ListBoxItemProps, SelectProps as AriaSelectProps, ValidationResult } from "react-aria-components";
import type { DropdownSectionProps } from "./listBox";
interface Props<T extends object, M extends "single" | "multiple"> extends Omit<AriaSelectProps<T, M>, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}
export declare function Select<T extends object, M extends "single" | "multiple" = "single">({ label, description, errorMessage, children, items, ...props }: Props<T, M>): import("react/jsx-runtime").JSX.Element;
export declare function SelectItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export declare function SelectSection<T extends object>(props: DropdownSectionProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=select.d.ts.map