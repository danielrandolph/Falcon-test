import classNames from "classnames";
import { StyleProps } from "../common/styleProps";
import { Box } from "./box";
import * as css from "./card.module.less";
import { forwardRef } from "react";

function Card(
  {
    children,
    className,
    sx,
  }: {
    children?: React.ReactNode;
    className?: string;
    sx?: StyleProps;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box ref={ref} className={classNames(className, css.root)} sx={sx}>
      {children}
    </Box>
  );
}

const WrappedCard = Object.assign(forwardRef(Card), {
  Header: forwardRef(CardHeader),
  Body: forwardRef(CardBody),
  Footer: forwardRef(CardFooter),
});

export { WrappedCard as Card };

function CardHeader(
  {
    children,
    className,
    sx,
  }: {
    children?: React.ReactNode;
    className?: string;
    sx?: StyleProps;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box ref={ref} className={classNames(className, css.header)} sx={sx}>
      {children}
    </Box>
  );
}

function CardBody(
  {
    children,
    className,
    sx,
  }: {
    children?: React.ReactNode;
    className?: string;
    sx?: StyleProps;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box ref={ref} className={classNames(className, css.body)} sx={sx}>
      {children}
    </Box>
  );
}

function CardFooter(
  {
    children,
    className,
    sx,
  }: {
    children?: React.ReactNode;
    className?: string;
    sx?: StyleProps;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box ref={ref} className={classNames(className, css.footer)} sx={sx}>
      {children}
    </Box>
  );
}
