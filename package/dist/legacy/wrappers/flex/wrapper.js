import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Box } from "../../components/box.js";
function FlexWrapper({ align, alignBreakpoints, children, className, direction, directionBreakpoints, flex, gap, gapBreakpoints, justify, justifyBreakpoints, wrap, wrapBreakpoints }, ref) {
    return /*#__PURE__*/ jsx(Box, {
        ref: ref,
        className: className,
        sx: {
            alignItems: {
                default: align,
                ...alignBreakpoints
            },
            display: "flex",
            flexDirection: {
                default: direction,
                ...directionBreakpoints
            },
            flex: "on" === flex ? 1 : flex,
            flexWrap: {
                default: wrap,
                ...wrapBreakpoints
            },
            gap: {
                default: gap,
                ...gapBreakpoints
            },
            justifyContent: {
                default: justify,
                ...justifyBreakpoints
            }
        },
        children: children
    });
}
const WrappedFlexWrapper = /*#__PURE__*/ forwardRef(FlexWrapper);
export { WrappedFlexWrapper as FlexWrapper };

//# sourceMappingURL=wrapper.js.map