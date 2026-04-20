import { jsx, jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { IconInternal } from "./icon/internal.js";
import { item as external_pagination_module_js_item, itemIcon, item_active, item_disabled, item_ellipsis, list, root } from "./pagination.module.js";
const SMALL_PARENT_WIDTH_THRESHOLD = 400;
function range(start, end) {
    return Array.from({
        length: end - start + 1
    }, (_, i)=>start + i);
}
function Pagination({ activePage, children, className, pageCount }) {
    activePage = Math.max(1, Math.min(activePage, pageCount));
    const [isSmall, setIsSmall] = useState(false);
    const rootRef = useRef(null);
    useLayoutEffect(()=>{
        const rootEl = rootRef.current;
        if (!rootEl || pageCount < 2) return;
        setIsSmall(rootEl.clientWidth < SMALL_PARENT_WIDTH_THRESHOLD);
        const resizeObserver = new ResizeObserver((entries)=>{
            if (1 !== entries.length) throw new Error("Expected exactly one entry");
            if (1 !== entries[0].contentBoxSize.length) throw new Error("Expected exactly one contentBoxSize");
            setIsSmall(entries[0].contentBoxSize[0].inlineSize < SMALL_PARENT_WIDTH_THRESHOLD);
        });
        resizeObserver.observe(rootEl);
        return ()=>{
            resizeObserver.disconnect();
        };
    }, [
        pageCount
    ]);
    const items = useMemo(()=>{
        if (pageCount < 2) return null;
        const sideItemCount = isSmall ? 0 : 1;
        const totalItemCount = 2 * sideItemCount + 5;
        if (pageCount <= totalItemCount) return range(1, pageCount);
        const leftmostSideIndex = Math.max(activePage - sideItemCount, 1);
        const rightmostSideIndex = Math.min(activePage + sideItemCount, pageCount);
        const shouldEllipsizeLeft = leftmostSideIndex > 3;
        const shouldEllipsizeRight = rightmostSideIndex < pageCount - 2;
        if (shouldEllipsizeRight && !shouldEllipsizeLeft) return [
            ...range(1, 2 * sideItemCount + 3),
            "ellipsis",
            pageCount
        ];
        if (!shouldEllipsizeRight && shouldEllipsizeLeft) return [
            1,
            "ellipsis",
            ...range(pageCount - (2 + 2 * sideItemCount), pageCount)
        ];
        return [
            1,
            "ellipsis",
            ...range(leftmostSideIndex, rightmostSideIndex),
            "ellipsis",
            pageCount
        ];
    }, [
        activePage,
        isSmall,
        pageCount
    ]);
    if (!items) return null;
    return /*#__PURE__*/ jsx("nav", {
        "aria-label": "pagination",
        className: className,
        children: /*#__PURE__*/ jsx("div", {
            ref: rootRef,
            className: root,
            children: /*#__PURE__*/ jsxs("ul", {
                className: list,
                children: [
                    /*#__PURE__*/ jsx("li", {
                        children: children(1 === activePage ? void 0 : activePage - 1, {
                            "aria-label": "previous page",
                            children: /*#__PURE__*/ jsx(IconInternal, {
                                "aria-hidden": true,
                                className: itemIcon,
                                name: "arrow-left-2"
                            }),
                            className: classnames(external_pagination_module_js_item, {
                                [item_disabled]: 1 === activePage
                            })
                        })
                    }),
                    items.map((item, index)=>{
                        if ("ellipsis" === item) return /*#__PURE__*/ jsx("li", {
                            "aria-hidden": true,
                            children: /*#__PURE__*/ jsx("span", {
                                className: classnames(external_pagination_module_js_item, item_ellipsis),
                                children: "..."
                            })
                        }, `ellipsis-${index}`);
                        const isActive = item === activePage;
                        return /*#__PURE__*/ jsx("li", {
                            children: children(isActive ? void 0 : item, {
                                "aria-current": "page",
                                "aria-label": `page ${item}`,
                                children: item,
                                className: classnames(external_pagination_module_js_item, {
                                    [item_active]: isActive
                                })
                            })
                        }, item);
                    }),
                    /*#__PURE__*/ jsx("li", {
                        children: children(activePage === pageCount ? void 0 : activePage + 1, {
                            "aria-label": "next page",
                            children: /*#__PURE__*/ jsx(IconInternal, {
                                "aria-hidden": true,
                                className: itemIcon,
                                name: "arrow-right-2"
                            }),
                            className: classnames(external_pagination_module_js_item, {
                                [item_disabled]: activePage === pageCount
                            })
                        })
                    })
                ]
            })
        })
    });
}
export { Pagination };

//# sourceMappingURL=pagination.js.map