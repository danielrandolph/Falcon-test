import classNames from "classnames";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { IconInternal } from "./icon/internal";
import * as css from "./pagination.module.less";

const SMALL_PARENT_WIDTH_THRESHOLD = 400;

export interface PaginationItemProps {
  "aria-current"?: "page";
  "aria-label"?: string;
  children: React.ReactNode;
  className: string;
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function Pagination({
  activePage,
  children,
  className,
  pageCount,
}: {
  activePage: number;
  children: (
    page: number | undefined,
    props: PaginationItemProps,
  ) => React.ReactElement;
  className?: string;
  pageCount: number;
}) {
  activePage = Math.max(1, Math.min(activePage, pageCount));

  const [isSmall, setIsSmall] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl || pageCount < 2) return;

    // set the flag synchronously first to avoid flashing between big & small
    // variants when mounted
    setIsSmall(rootEl.clientWidth < SMALL_PARENT_WIDTH_THRESHOLD);

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length !== 1) {
        throw new Error("Expected exactly one entry");
      }

      if (entries[0].contentBoxSize.length !== 1) {
        throw new Error("Expected exactly one contentBoxSize");
      }

      setIsSmall(
        entries[0].contentBoxSize[0].inlineSize < SMALL_PARENT_WIDTH_THRESHOLD,
      );
    });

    resizeObserver.observe(rootEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, [pageCount]);

  const items = useMemo((): Array<number | "ellipsis"> | null => {
    if (pageCount < 2) return null;

    const sideItemCount = isSmall ? 0 : 1;
    const totalItemCount = sideItemCount * 2 + 5;

    if (pageCount <= totalItemCount) {
      return range(1, pageCount);
    }

    const leftmostSideIndex = Math.max(activePage - sideItemCount, 1);
    const rightmostSideIndex = Math.min(activePage + sideItemCount, pageCount);

    const shouldEllipsizeLeft = leftmostSideIndex > 3;
    const shouldEllipsizeRight = rightmostSideIndex < pageCount - 2;

    if (shouldEllipsizeRight && !shouldEllipsizeLeft) {
      return [...range(1, sideItemCount * 2 + 3), "ellipsis", pageCount];
    }

    if (!shouldEllipsizeRight && shouldEllipsizeLeft) {
      return [
        1,
        "ellipsis",
        ...range(pageCount - (2 + 2 * sideItemCount), pageCount),
      ];
    }

    return [
      1,
      "ellipsis",
      ...range(leftmostSideIndex, rightmostSideIndex),
      "ellipsis",
      pageCount,
    ];
  }, [activePage, isSmall, pageCount]);

  if (!items) return null;

  return (
    // extra wrapper is here to prevent styles passed through `className` from
    // changing width calculation results
    <nav aria-label="pagination" className={className}>
      <div ref={rootRef} className={css.root}>
        <ul className={css.list}>
          <li>
            {children(activePage === 1 ? undefined : activePage - 1, {
              "aria-label": "previous page",
              children: (
                <IconInternal
                  aria-hidden
                  className={css.itemIcon}
                  name="arrow-left-2"
                />
              ),
              className: classNames(css.item, {
                [css.item_disabled]: activePage === 1,
              }),
            })}
          </li>

          {items.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <li aria-hidden key={`ellipsis-${index}`}>
                  <span className={classNames(css.item, css.item_ellipsis)}>
                    ...
                  </span>
                </li>
              );
            }

            const isActive = item === activePage;

            return (
              <li key={item}>
                {children(isActive ? undefined : item, {
                  "aria-current": "page",
                  "aria-label": `page ${item}`,
                  children: item,
                  className: classNames(css.item, {
                    [css.item_active]: isActive,
                  }),
                })}
              </li>
            );
          })}

          <li>
            {children(activePage === pageCount ? undefined : activePage + 1, {
              "aria-label": "next page",
              children: (
                <IconInternal
                  aria-hidden
                  className={css.itemIcon}
                  name="arrow-right-2"
                />
              ),
              className: classNames(css.item, {
                [css.item_disabled]: activePage === pageCount,
              }),
            })}
          </li>
        </ul>
      </div>
    </nav>
  );
}
