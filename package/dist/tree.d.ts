import type { TreeItemProps as AriaTreeItemProps, TreeProps } from "react-aria-components";
export declare function Tree<T extends object>({ children, ...props }: TreeProps<T>): import("react/jsx-runtime").JSX.Element;
interface ItemProps extends Partial<AriaTreeItemProps> {
    title: string;
}
export declare function TreeItem(props: ItemProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=tree.d.ts.map