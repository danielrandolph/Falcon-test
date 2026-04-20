import { StyleProps } from "../common/styleProps";
export type BoxProps<T extends React.ElementType> = {
    [K in keyof React.ComponentProps<T>]: React.ComponentProps<T>[K];
} & {
    as?: T;
    sx?: StyleProps;
};
declare const WrappedBox: <T extends React.ElementType = "div">(props: BoxProps<T>) => React.JSX.Element;
export { WrappedBox as Box };
//# sourceMappingURL=box.d.ts.map