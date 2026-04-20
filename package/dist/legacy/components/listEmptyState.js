import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Button } from "./button/index.js";
import { EmptyState } from "./emptyState.js";
function ListEmptyState({ border, className, isFilterApplied, itemsName = "items", sx, onClearFilters }, ref) {
    return /*#__PURE__*/ jsx(EmptyState, {
        ref: ref,
        border: border,
        buttons: isFilterApplied && onClearFilters && /*#__PURE__*/ jsx(Button, {
            onClick: ()=>{
                onClearFilters();
            },
            children: "Clear filters"
        }),
        className: className,
        smallTitle: true,
        subtext: isFilterApplied && onClearFilters && `Clear filters to see all ${itemsName}.`,
        sx: sx,
        title: isFilterApplied ? `No matching ${itemsName} found.` : `No ${itemsName} found.`
    });
}
const WrappedListEmptyState = /*#__PURE__*/ forwardRef(ListEmptyState);
export { WrappedListEmptyState as ListEmptyState };

//# sourceMappingURL=listEmptyState.js.map