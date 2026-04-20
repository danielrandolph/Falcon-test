import { jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { forwardRef } from "react";
const ContentContainer = /*#__PURE__*/ forwardRef((props, ref)=>{
    const { children, className } = props;
    return /*#__PURE__*/ jsx("div", {
        className: classnames("base-layout__content", className),
        ref: ref,
        children: children
    });
});
ContentContainer.displayName = "ContentContainer";
const ContentSection = /*#__PURE__*/ forwardRef((props, ref)=>{
    const { children, className } = props;
    return /*#__PURE__*/ jsx("section", {
        className: classnames("base-layout__content-section", className),
        ref: ref,
        children: children
    });
});
ContentSection.displayName = "ContentSection";
const Content = Object.assign(ContentContainer, {
    Section: ContentSection
});
Content.displayName = "Content";
export { Content, ContentContainer, ContentSection };

//# sourceMappingURL=content.js.map