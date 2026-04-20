import type { ListBoxItemProps, ListBoxProps as AriaListBoxProps, SectionProps } from "react-aria-components";
type ListBoxProps<T> = Omit<AriaListBoxProps<T>, "layout" | "orientation">;
export declare function ListBox<T extends object>({ children, ...props }: ListBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ListBoxItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export declare const dropdownItemStyles: import("tailwind-variants").TVReturnType<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    isPressed: {
        true: string;
    };
}, undefined, "tw:group tw:flex tw:cursor-default tw:items-center tw:gap-4 tw:rounded-lg tw:py-2 tw:pr-3 tw:pl-3 tw:text-sm tw:no-underline tw:outline-0 tw:forced-color-adjust-none tw:select-none tw:[-webkit-tap-highlight-color:transparent] tw:selected:pr-1 tw:[[href]]:cursor-pointer", {
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    isPressed: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    isPressed: {
        true: string;
    };
}, undefined, "tw:group tw:flex tw:cursor-default tw:items-center tw:gap-4 tw:rounded-lg tw:py-2 tw:pr-3 tw:pl-3 tw:text-sm tw:no-underline tw:outline-0 tw:forced-color-adjust-none tw:select-none tw:[-webkit-tap-highlight-color:transparent] tw:selected:pr-1 tw:[[href]]:cursor-pointer", unknown, unknown, undefined>>;
export declare function DropdownItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export interface DropdownSectionProps<T> extends SectionProps<T> {
    items?: Iterable<T>;
    title?: string;
}
export declare function DropdownSection<T extends object>(props: DropdownSectionProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=listBox.d.ts.map