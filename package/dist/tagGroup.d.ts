import type { TagGroupProps as AriaTagGroupProps, TagListProps, TagProps as AriaTagProps } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
declare const tagStyles: import("tailwind-variants").TVReturnType<{
    color: {
        gray: string;
        green: string;
        yellow: string;
        blue: string;
    };
    allowsRemoving: {
        true: string;
    };
    isSelected: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, "tw:flex tw:max-w-fit tw:cursor-default tw:items-center tw:gap-1 tw:rounded-full tw:border tw:px-3 tw:py-0.5 tw:font-sans tw:text-xs tw:transition tw:[-webkit-tap-highlight-color:transparent]", {
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
type Color = VariantProps<typeof tagStyles>["color"];
interface Props<T> extends Omit<AriaTagGroupProps, "children">, Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {
    description?: string;
    errorMessage?: string;
    label?: string;
}
export declare function TagGroup<T extends object>({ children, className, description, errorMessage, items, label, renderEmptyState, ...otherProps }: Props<T>): import("react/jsx-runtime").JSX.Element;
interface TagProps extends AriaTagProps {
    color?: Color;
}
export declare function Tag({ color, ...otherProps }: TagProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=tagGroup.d.ts.map