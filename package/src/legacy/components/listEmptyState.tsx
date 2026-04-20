import { forwardRef } from "react";
import { Button } from "./button";
import { EmptyState } from "./emptyState";
import { StyleProps } from "../common/styleProps";

function ListEmptyState(
  {
    border,
    className,
    isFilterApplied,
    itemsName = "items",
    sx,
    onClearFilters,
  }: {
    border?: boolean;
    className?: string;
    isFilterApplied?: boolean;
    itemsName?: string;
    sx?: StyleProps;
    onClearFilters?: () => void;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <EmptyState
      ref={ref}
      border={border}
      buttons={
        isFilterApplied &&
        onClearFilters && (
          <Button
            onClick={() => {
              onClearFilters();
            }}
          >
            Clear filters
          </Button>
        )
      }
      className={className}
      smallTitle
      subtext={
        isFilterApplied &&
        onClearFilters &&
        `Clear filters to see all ${itemsName}.`
      }
      sx={sx}
      title={
        isFilterApplied
          ? `No matching ${itemsName} found.`
          : `No ${itemsName} found.`
      }
    />
  );
}

const WrappedListEmptyState = forwardRef(ListEmptyState);

export { WrappedListEmptyState as ListEmptyState };
