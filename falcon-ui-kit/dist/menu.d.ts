import type { MenuItemProps, MenuProps, MenuSectionProps as AriaMenuSectionProps, MenuTriggerProps as AriaMenuTriggerProps, SeparatorProps, SubmenuTriggerProps } from "react-aria-components";
import type { PopoverProps } from "./popover";
export declare function Menu<T extends object>({ className, ...otherProps }: MenuProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function MenuItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export declare function MenuSeparator(props: SeparatorProps): import("react/jsx-runtime").JSX.Element;
export interface MenuSectionProps<T> extends AriaMenuSectionProps<T> {
    items?: Iterable<T>;
    title?: string;
}
export declare function MenuSection<T extends object>(props: MenuSectionProps<T>): import("react/jsx-runtime").JSX.Element;
interface MenuTriggerProps extends AriaMenuTriggerProps {
    placement?: PopoverProps["placement"];
}
export declare function MenuTrigger(props: MenuTriggerProps): import("react/jsx-runtime").JSX.Element;
export declare function SubmenuTrigger(props: SubmenuTriggerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=menu.d.ts.map