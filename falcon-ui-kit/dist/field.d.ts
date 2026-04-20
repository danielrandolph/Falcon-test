import type { FieldErrorProps, GroupProps, InputProps, LabelProps, TextProps } from "react-aria-components";
export declare function Label(props: LabelProps): import("react/jsx-runtime").JSX.Element;
export declare function Description(props: TextProps): import("react/jsx-runtime").JSX.Element;
export declare function FieldError(props: FieldErrorProps): import("react/jsx-runtime").JSX.Element;
export declare const fieldBorderStyles: import("tailwind-variants").TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, "transition", {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, "transition", unknown, unknown, undefined>>;
export declare const fieldGroupStyles: import("tailwind-variants").TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, "tw:group tw:box-border tw:flex tw:h-9 tw:items-center tw:overflow-hidden tw:rounded-lg tw:border tw:bg-white tw:transition tw:forced-colors:bg-[Field]", {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "tw:outline tw:outline-offset-2 tw:outline-blue-600 tw:forced-colors:outline-[Highlight]", {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "tw:outline tw:outline-offset-2 tw:outline-blue-600 tw:forced-colors:outline-[Highlight]", unknown, unknown, undefined>>>;
export declare function FieldGroup(props: GroupProps): import("react/jsx-runtime").JSX.Element;
export declare function Input(props: InputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=field.d.ts.map