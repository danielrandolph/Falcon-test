import type { SliderProps as AriaSliderProps } from "react-aria-components";
interface Props<T> extends AriaSliderProps<T> {
    label?: string;
    thumbLabels?: string[];
}
export declare function Slider<T extends number | number[]>({ label, thumbLabels, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=slider.d.ts.map