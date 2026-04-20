import type { CalendarProps as AriaCalendarProps, DateValue } from "react-aria-components";
export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, "visibleDuration"> {
    errorMessage?: string;
}
export declare function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function CalendarHeader(): import("react/jsx-runtime").JSX.Element;
export declare function CalendarGridHeader(): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=calendar.d.ts.map