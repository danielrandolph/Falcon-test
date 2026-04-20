"use client";
import type {
  TabListProps,
  TabPanelProps,
  TabPanelsProps,
  TabProps,
  TabsProps,
} from "react-aria-components";
import {
  composeRenderProps,
  SelectionIndicator,
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  TabPanels as RACTabPanels,
  Tabs as RACTabs,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { focusRing } from "./utils";

const tabsStyles = tv({
  base: "tw:flex tw:max-w-full tw:gap-4 tw:bg-white tw:font-sans",
  variants: {
    orientation: {
      horizontal: "tw:flex-col",
      vertical: "tw:flex-row",
    },
  },
});

export function Tabs(props: TabsProps) {
  return (
    <RACTabs
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({ ...renderProps, className }),
      )}
    />
  );
}

const tabListStyles = tv({
  base: "tw:-m-1 tw:flex tw:max-w-full tw:overflow-x-auto tw:overflow-y-clip tw:p-1 tw:[scrollbar-width:none]",
  variants: {
    orientation: {
      horizontal: "tw:flex-row",
      vertical: "tw:tw:items-start tw:flex-col",
    },
  },
});

export function TabList<T extends object>(props: TabListProps<T>) {
  return (
    <RACTabList
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabListStyles({ ...renderProps, className }),
      )}
    />
  );
}

const tabProps = tv({
  extend: focusRing,
  base: "tw:group tw:relative tw:flex tw:cursor-default tw:items-center tw:rounded-full tw:px-3 tw:py-1.5 tw:text-sm tw:font-medium tw:transition tw:forced-color-adjust-none tw:[-webkit-tap-highlight-color:transparent]",
  variants: {
    isDisabled: {
      true: "tw:text-neutral-200 tw:forced-colors:text-[GrayText] tw:selected:bg-neutral-200 tw:selected:text-white tw:forced-colors:selected:bg-[GrayText] tw:forced-colors:selected:text-[HighlightText]",
    },
  },
});

export function Tab(props: TabProps) {
  return (
    <RACTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabProps({ ...renderProps, className }),
      )}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}

          <SelectionIndicator className="tw:absolute tw:top-0 tw:left-0 tw:z-10 tw:h-full tw:w-full tw:rounded-full tw:bg-white tw:mix-blend-difference tw:group-disabled:-z-1 tw:group-disabled:bg-neutral-400 tw:group-disabled:mix-blend-normal tw:motion-safe:transition-[translate,width,height]" />
        </>
      ))}
    </RACTab>
  );
}

export function TabPanels<T extends object>(props: TabPanelsProps<T>) {
  return (
    <RACTabPanels
      {...props}
      className={twMerge(
        "tw:relative tw:h-(--tw-tab-panel-height) tw:overflow-clip tw:motion-safe:transition-[height]",
        props.className,
      )}
    />
  );
}

const tabPanelStyles = tv({
  extend: focusRing,
  base: "tw:box-border tw:flex-1 tw:p-4 tw:text-sm tw:text-neutral-900 tw:transition tw:entering:opacity-0 tw:exiting:absolute tw:exiting:top-0 tw:exiting:left-0 tw:exiting:w-full tw:exiting:opacity-0",
});

export function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className }),
      )}
    />
  );
}
