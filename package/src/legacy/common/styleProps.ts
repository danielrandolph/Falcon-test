import classNames from "classnames";
import * as css from "./styleProps.module.less";

// Ordering and grouping are the same as in CSS
const styleProps = defineStyleProps({
  alignItems: { cssProperty: "align-items" },

  border: { cssProperty: "border" },
  borderTop: { cssProperty: "border-top" },
  borderRight: { cssProperty: "border-right" },
  borderBottom: { cssProperty: "border-bottom" },
  borderLeft: { cssProperty: "border-left" },

  borderRadius: { cssProperty: "border-radius", format: length },
  display: { cssProperty: "display" },

  flex: { cssProperty: "flex" },
  flexBasis: { cssProperty: "flex-basis" },
  flexGrow: { cssProperty: "flex-grow" },
  flexShrink: { cssProperty: "flex-shrink" },

  flexDirection: { cssProperty: "flex-direction" },
  flexWrap: { cssProperty: "flex-wrap" },
  fontSize: { cssProperty: "font-size", format: length },
  fontWeight: { cssProperty: "font-weight" },

  gap: { cssProperty: "gap", format: length },
  columnGap: { cssProperty: "column-gap", format: length },
  rowGap: { cssProperty: "row-gap", format: length },

  gridTemplateColumns: { cssProperty: "grid-template-columns" },
  justifyContent: { cssProperty: "justify-content" },
  lineHeight: { cssProperty: "line-height" },

  margin: { cssProperty: "margin", format: length },
  marginTop: { cssProperty: "margin-top", format: length },
  marginRight: { cssProperty: "margin-right", format: length },
  marginBottom: { cssProperty: "margin-bottom", format: length },
  marginLeft: { cssProperty: "margin-left", format: length },

  padding: { cssProperty: "padding", format: length },
  paddingTop: { cssProperty: "padding-top", format: length },
  paddingRight: { cssProperty: "padding-right", format: length },
  paddingBottom: { cssProperty: "padding-bottom", format: length },
  paddingLeft: { cssProperty: "padding-left", format: length },
});

/**
 * Mimic React's `style` prop behavior by suffixing certain property
 * values with 'px' when just a bare number is provided
 */
function length(x: number | string) {
  return typeof x === "number" && x !== 0 ? `${x}px` : x;
}

/**
 * This function just lets prop names to be defined in a single place
 * (it's argument) and then derive available prop names in other places as
 * needed from it's return value's type.
 */
function defineStyleProps<K extends keyof React.CSSProperties>(
  x: Record<
    K,
    {
      cssProperty: string;
      format?: (value: number | string) => number | string | undefined;
    }
  >,
) {
  return x;
}

type MediaKey = "default" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs" | "print";
type StyleProp<T> = T | { [K in MediaKey]?: T };

export type StyleProps = {
  [K in keyof typeof styleProps]?: StyleProp<React.CSSProperties[K]>;
};

export function applyStyleProps(props: StyleProps | undefined): {
  className: string;
  style: React.CSSProperties;
} {
  const classes: string[] = [];
  const style: Partial<Record<string, number | string>> = {};

  if (props) {
    for (const prop in styleProps) {
      if (!hasOwnProperty(styleProps, prop) || props[prop] == null) {
        continue;
      }

      const value =
        typeof props[prop] === "object"
          ? props[prop]
          : { default: props[prop] };

      for (const key in value) {
        if (!hasOwnProperty(value, key) || value[key] == null) {
          continue;
        }

        const { cssProperty, format = (x) => x } = styleProps[prop];
        classes.push(css[`${prop}_${key}`]);
        style[`--${cssProperty}-${key}`] = format(value[key]);
      }
    }
  }

  return {
    className: classNames(classes),
    style,
  };
}

function hasOwnProperty<T extends Record<PropertyKey, unknown>>(
  obj: T,
  key: PropertyKey,
): key is keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
