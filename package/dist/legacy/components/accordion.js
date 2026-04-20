import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import classnames from "classnames";
import { Box } from "./box.js";
import { IconInternal } from "./icon/internal.js";
import { applyStyleProps } from "../common/styleProps.js";
import { body, header as external_accordion_module_js_header, headerToggleIcon, root, root_neutral, root_neutralHeaderNeutralInactiveBody, root_neutralHeaderWhiteBody, root_neutralInactive, root_neutralInactiveHeaderNeutralBody, root_neutralInactiveHeaderWhiteBody, root_white, root_whiteHeaderNeutralBody, root_whiteHeaderNeutralInactiveBody } from "./accordion.module.js";
const accordionHeaderPadding = [
    "large",
    "medium",
    "small"
];
const accordionHeaderPaddingDict = {
    large: "pl-24 pr-24 pt-20 pb-20",
    medium: "pl-24 pr-24 pt-16 pb-16",
    small: "pl-24 pr-24 pt-12 pb-12"
};
const accordionBgTheme = [
    "white",
    "neutral",
    "neutral-inactive",
    "white-header-neutral-body",
    "white-header-neutral-inactive-body",
    "neutral-header-white-body",
    "neutral-inactive-header-white-body",
    "neutral-header-neutral-inactive-body",
    "neutral-inactive-header-neutral-body"
];
const accordionBgThemeDict = {
    white: root_white,
    neutral: root_neutral,
    "neutral-inactive": root_neutralInactive,
    "white-header-neutral-body": root_whiteHeaderNeutralBody,
    "white-header-neutral-inactive-body": root_whiteHeaderNeutralInactiveBody,
    "neutral-header-white-body": root_neutralHeaderWhiteBody,
    "neutral-inactive-header-white-body": root_neutralInactiveHeaderWhiteBody,
    "neutral-header-neutral-inactive-body": root_neutralHeaderNeutralInactiveBody,
    "neutral-inactive-header-neutral-body": root_neutralInactiveHeaderNeutralBody
};
function Accordion({ header, children, defaultOpen = false, className = "", headerPadding = "medium", onToggle, bgTheme = "white", isCustomHeader = false, sx }) {
    const s = applyStyleProps(sx);
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const handleDetailsToggle = (e)=>{
        const next = e.currentTarget.open;
        setIsOpen(next);
        onToggle?.(next);
    };
    const headerPaddingClass = accordionHeaderPaddingDict[headerPadding];
    const bgThemeClass = accordionBgThemeDict[bgTheme];
    return /*#__PURE__*/ jsxs("details", {
        className: classnames(className, s.className, root, bgThemeClass),
        onToggle: handleDetailsToggle,
        open: defaultOpen,
        style: s.style,
        children: [
            /*#__PURE__*/ jsx("summary", {
                className: classnames(external_accordion_module_js_header, headerPaddingClass),
                children: isCustomHeader ? /*#__PURE__*/ jsx(Fragment, {
                    children: "function" == typeof header ? header(isOpen) : header
                }) : /*#__PURE__*/ jsxs(Box, {
                    sx: {
                        alignItems: "center",
                        display: "flex",
                        gap: 16
                    },
                    children: [
                        /*#__PURE__*/ jsx(IconInternal, {
                            className: headerToggleIcon,
                            name: isOpen ? "arrow-up-2" : "arrow-down-2"
                        }),
                        "function" == typeof header ? header(isOpen) : header
                    ]
                })
            }),
            /*#__PURE__*/ jsx("div", {
                className: body,
                children: children
            })
        ]
    });
}
export { Accordion, accordionBgTheme, accordionBgThemeDict, accordionHeaderPadding, accordionHeaderPaddingDict };

//# sourceMappingURL=accordion.js.map