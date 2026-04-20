import { forwardRef } from "react";

import { IFlexDefault } from "./types";
import { Box } from "../../components/box";

function FlexWrapper(
  {
    align,
    alignBreakpoints,
    children,
    className,
    direction,
    directionBreakpoints,
    flex,
    gap,
    gapBreakpoints,
    justify,
    justifyBreakpoints,
    wrap,
    wrapBreakpoints,
  }: IFlexDefault,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box
      ref={ref}
      className={className}
      sx={{
        alignItems: { default: align, ...alignBreakpoints },
        display: "flex",
        flexDirection: { default: direction, ...directionBreakpoints },
        flex: flex === "on" ? 1 : flex,
        flexWrap: { default: wrap, ...wrapBreakpoints },
        gap: { default: gap, ...gapBreakpoints },
        justifyContent: { default: justify, ...justifyBreakpoints },
      }}
    >
      {children}
    </Box>
  );
}

const WrappedFlexWrapper = forwardRef(FlexWrapper);

export { WrappedFlexWrapper as FlexWrapper };
