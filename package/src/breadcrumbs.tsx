"use client";
import { ChevronRight } from "lucide-react";
import type {
  BreadcrumbProps,
  BreadcrumbsProps,
  LinkProps,
} from "react-aria-components";
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Link } from "./link";
import { composeTailwindRenderProps } from "./utils";

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={twMerge("tw:flex tw:gap-1", props.className)}
    />
  );
}

export function Breadcrumb(
  props: BreadcrumbProps & Omit<LinkProps, "className">,
) {
  return (
    <AriaBreadcrumb
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "tw:flex tw:items-center tw:gap-1",
      )}
    >
      {({ isCurrent }) => (
        <>
          <Link variant="secondary" {...props} />
          {!isCurrent && (
            <ChevronRight className="tw:h-3 tw:w-3 tw:text-neutral-600" />
          )}
        </>
      )}
    </AriaBreadcrumb>
  );
}
