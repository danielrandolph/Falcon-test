import classNames, { Argument } from "classnames";
import { forwardRef } from "react";

interface IContentContainerDefaultProps {
  className?: Argument;
  children?: React.ReactNode;
}

type IContentSectionProps = IContentContainerDefaultProps;

export const ContentContainer = forwardRef<
  HTMLDivElement,
  IContentContainerDefaultProps
>((props, ref) => {
  const { children, className } = props;
  return (
    <div className={classNames("base-layout__content", className)} ref={ref}>
      {children}
    </div>
  );
});
ContentContainer.displayName = "ContentContainer";

export const ContentSection = forwardRef<HTMLElement, IContentSectionProps>(
  (props, ref) => {
    const { children, className } = props;
    return (
      <section
        className={classNames("base-layout__content-section", className)}
        ref={ref}
      >
        {children}
      </section>
    );
  },
);
ContentSection.displayName = "ContentSection";

export const Content = Object.assign(ContentContainer, {
  Section: ContentSection,
});

Content.displayName = "Content";
