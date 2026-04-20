import classNames from "classnames";
import { Box } from "./box";

export function Loading({
  className,
  hideText,
  inline,
  label = "Loading...",
  small,
}: {
  className?: string;
  hideText?: boolean;
  inline?: boolean;
  label?: string;
  small?: boolean;
}) {
  return small ? (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: inline ? "row" : "column",
        gap: 8,
        justifyContent: "center",
      }}
    >
      <div className={classNames("loader loader-extra-small", className)}>
        <svg className="circular" viewBox="12 12 25 25">
          <circle
            className="path"
            cx="25"
            cy="25"
            fill="none"
            r="10"
            strokeWidth="2"
          />
        </svg>
      </div>
      {hideText ? null : <div className="loader-label">{label}</div>}
    </Box>
  ) : (
    <div
      className={classNames("loading-component", className, {
        "loading-inline": inline,
      })}
    >
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            fill="none"
            r="20"
            strokeWidth="2"
          />
        </svg>
      </div>
      {hideText ? null : <div className="loader-label">{label}</div>}
    </div>
  );
}
