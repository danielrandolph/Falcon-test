import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { Box } from "./box.js";
import { body, footer, header, root } from "./card.module.js";
import { forwardRef } from "react";
function Card({ children, className, sx }, ref) {
    return /*#__PURE__*/ jsx(Box, {
        ref: ref,
        className: classnames(className, root),
        sx: sx,
        children: children
    });
}
const WrappedCard = Object.assign(/*#__PURE__*/ forwardRef(Card), {
    Header: /*#__PURE__*/ forwardRef(CardHeader),
    Body: /*#__PURE__*/ forwardRef(CardBody),
    Footer: /*#__PURE__*/ forwardRef(CardFooter)
});
function CardHeader({ children, className, sx }, ref) {
    return /*#__PURE__*/ jsx(Box, {
        ref: ref,
        className: classnames(className, header),
        sx: sx,
        children: children
    });
}
function CardBody({ children, className, sx }, ref) {
    return /*#__PURE__*/ jsx(Box, {
        ref: ref,
        className: classnames(className, body),
        sx: sx,
        children: children
    });
}
function CardFooter({ children, className, sx }, ref) {
    return /*#__PURE__*/ jsx(Box, {
        ref: ref,
        className: classnames(className, footer),
        sx: sx,
        children: children
    });
}
export { WrappedCard as Card };

//# sourceMappingURL=card.js.map