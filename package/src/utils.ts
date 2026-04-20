import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const focusRing = tv({
  base: "tw:outline tw:outline-offset-2 tw:outline-blue-600 tw:forced-colors:outline-[Highlight]",
  variants: {
    isFocusVisible: {
      false: "tw:outline-0",
      true: "tw:outline-2",
    },
  },
});

export function composeTailwindRenderProps<T>(
  classNameArg: string | ((v: T) => string) | undefined,
  tw: string,
): string | ((v: T) => string) {
  return composeRenderProps(classNameArg, (className) =>
    twMerge(tw, className),
  );
}
