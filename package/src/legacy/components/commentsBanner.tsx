import classNames from "classnames";
import { forwardRef } from "react";
import * as css from "./commentsBanner.module.less";
import { Box } from "./box";
import { StyleProps } from "../common/styleProps";
import { IconInternal } from "./icon/internal";

function CommentsBanner(
  {
    className,
    description,
    sx,
    timeStamp,
  }: {
    className?: string;
    description?: React.ReactNode;
    sx?: StyleProps;
    timeStamp?: string;
  },
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box ref={ref} className={classNames(className, css.root)} sx={sx}>
      <IconInternal className={css.icon} name="comment" />

      <div className={css.text}>
        <div className={css.titleAndTimeStamp}>
          <div className={css.title}>Comments</div>

          {timeStamp && <div className={css.timeStamp}>{timeStamp}</div>}
        </div>

        {description && <div className={css.description}>{description}</div>}
      </div>
    </Box>
  );
}

const WrappedCommentsBanner = forwardRef(CommentsBanner);

export { WrappedCommentsBanner as CommentsBanner };
