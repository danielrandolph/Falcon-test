import { useState } from "react";
import classNames from "classnames";
import { Box } from "./box";
import { IconInternal } from "./icon/internal";
import { applyStyleProps, StyleProps } from "../common/styleProps";
import * as css from "./accordion.module.less";

export const accordionHeaderPadding = ["large", "medium", "small"] as const;
export type AccordionHeaderPadding = (typeof accordionHeaderPadding)[number];
export const accordionHeaderPaddingDict: Record<
  AccordionHeaderPadding,
  string
> = {
  large: "pl-24 pr-24 pt-20 pb-20",
  medium: "pl-24 pr-24 pt-16 pb-16",
  small: "pl-24 pr-24 pt-12 pb-12",
};

export const accordionBgTheme = [
  "white",
  "neutral",
  "neutral-inactive",
  "white-header-neutral-body",
  "white-header-neutral-inactive-body",
  "neutral-header-white-body",
  "neutral-inactive-header-white-body",
  "neutral-header-neutral-inactive-body",
  "neutral-inactive-header-neutral-body",
] as const;
export type AccordionBgTheme = (typeof accordionBgTheme)[number];
export const accordionBgThemeDict: Record<AccordionBgTheme, string> = {
  white: css.root_white,
  neutral: css.root_neutral,
  "neutral-inactive": css.root_neutralInactive,
  "white-header-neutral-body": css.root_whiteHeaderNeutralBody,
  "white-header-neutral-inactive-body": css.root_whiteHeaderNeutralInactiveBody,
  "neutral-header-white-body": css.root_neutralHeaderWhiteBody,
  "neutral-inactive-header-white-body": css.root_neutralInactiveHeaderWhiteBody,
  "neutral-header-neutral-inactive-body":
    css.root_neutralHeaderNeutralInactiveBody,
  "neutral-inactive-header-neutral-body":
    css.root_neutralInactiveHeaderNeutralBody,
};

interface AccordionProps {
  header: React.ReactNode | ((isOpen: boolean) => React.ReactNode);
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  headerPadding?: AccordionHeaderPadding;
  onToggle?: (isOpen: boolean) => void;
  bgTheme?: AccordionBgTheme;
  isCustomHeader?: boolean;
  sx?: StyleProps;
}

export function Accordion({
  header,
  children,
  defaultOpen = false,
  className = "",
  headerPadding = "medium",
  onToggle,
  bgTheme = "white",
  isCustomHeader = false,
  sx,
}: AccordionProps) {
  const s = applyStyleProps(sx);
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const handleDetailsToggle: React.ReactEventHandler<HTMLDetailsElement> = (
    e,
  ) => {
    const next = e.currentTarget.open;
    setIsOpen(next);
    onToggle?.(next);
  };

  const headerPaddingClass = accordionHeaderPaddingDict[headerPadding];
  const bgThemeClass = accordionBgThemeDict[bgTheme];

  return (
    <details
      className={classNames(className, s.className, css.root, bgThemeClass)}
      onToggle={handleDetailsToggle}
      open={defaultOpen}
      style={s.style}
    >
      <summary className={classNames(css.header, headerPaddingClass)}>
        {isCustomHeader ? (
          <>{typeof header === "function" ? header(isOpen) : header}</>
        ) : (
          <Box sx={{ alignItems: "center", display: "flex", gap: 16 }}>
            <IconInternal
              className={css.headerToggleIcon}
              name={isOpen ? "arrow-up-2" : "arrow-down-2"}
            />

            {typeof header === "function" ? header(isOpen) : header}
          </Box>
        )}
      </summary>

      <div className={css.body}>{children}</div>
    </details>
  );
}
