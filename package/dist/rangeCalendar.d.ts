import type { DateValue, RangeCalendarProps as AriaRangeCalendarProps } from "react-aria-components";
interface Props<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, "visibleDuration"> {
    errorMessage?: string;
}
export declare function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rangeCalendar.d.ts.map