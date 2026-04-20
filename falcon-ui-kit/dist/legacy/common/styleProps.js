import classnames from "classnames";
import * as __WEBPACK_EXTERNAL_MODULE__styleProps_module_js_f80ba934__ from "./styleProps.module.js";
const styleProps = defineStyleProps({
    alignItems: {
        cssProperty: "align-items"
    },
    border: {
        cssProperty: "border"
    },
    borderTop: {
        cssProperty: "border-top"
    },
    borderRight: {
        cssProperty: "border-right"
    },
    borderBottom: {
        cssProperty: "border-bottom"
    },
    borderLeft: {
        cssProperty: "border-left"
    },
    borderRadius: {
        cssProperty: "border-radius",
        format: styleProps_length
    },
    display: {
        cssProperty: "display"
    },
    flex: {
        cssProperty: "flex"
    },
    flexBasis: {
        cssProperty: "flex-basis"
    },
    flexGrow: {
        cssProperty: "flex-grow"
    },
    flexShrink: {
        cssProperty: "flex-shrink"
    },
    flexDirection: {
        cssProperty: "flex-direction"
    },
    flexWrap: {
        cssProperty: "flex-wrap"
    },
    fontSize: {
        cssProperty: "font-size",
        format: styleProps_length
    },
    fontWeight: {
        cssProperty: "font-weight"
    },
    gap: {
        cssProperty: "gap",
        format: styleProps_length
    },
    columnGap: {
        cssProperty: "column-gap",
        format: styleProps_length
    },
    rowGap: {
        cssProperty: "row-gap",
        format: styleProps_length
    },
    gridTemplateColumns: {
        cssProperty: "grid-template-columns"
    },
    justifyContent: {
        cssProperty: "justify-content"
    },
    lineHeight: {
        cssProperty: "line-height"
    },
    margin: {
        cssProperty: "margin",
        format: styleProps_length
    },
    marginTop: {
        cssProperty: "margin-top",
        format: styleProps_length
    },
    marginRight: {
        cssProperty: "margin-right",
        format: styleProps_length
    },
    marginBottom: {
        cssProperty: "margin-bottom",
        format: styleProps_length
    },
    marginLeft: {
        cssProperty: "margin-left",
        format: styleProps_length
    },
    padding: {
        cssProperty: "padding",
        format: styleProps_length
    },
    paddingTop: {
        cssProperty: "padding-top",
        format: styleProps_length
    },
    paddingRight: {
        cssProperty: "padding-right",
        format: styleProps_length
    },
    paddingBottom: {
        cssProperty: "padding-bottom",
        format: styleProps_length
    },
    paddingLeft: {
        cssProperty: "padding-left",
        format: styleProps_length
    }
});
function styleProps_length(x) {
    return "number" == typeof x && 0 !== x ? `${x}px` : x;
}
function defineStyleProps(x) {
    return x;
}
function applyStyleProps(props) {
    const classes = [];
    const style = {};
    if (props) for(const prop in styleProps){
        if (!styleProps_hasOwnProperty(styleProps, prop) || null == props[prop]) continue;
        const value = "object" == typeof props[prop] ? props[prop] : {
            default: props[prop]
        };
        for(const key in value){
            if (!styleProps_hasOwnProperty(value, key) || null == value[key]) continue;
            const { cssProperty, format = (x)=>x } = styleProps[prop];
            classes.push(__WEBPACK_EXTERNAL_MODULE__styleProps_module_js_f80ba934__[`${prop}_${key}`]);
            style[`--${cssProperty}-${key}`] = format(value[key]);
        }
    }
    return {
        className: classnames(classes),
        style
    };
}
function styleProps_hasOwnProperty(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
export { applyStyleProps };

//# sourceMappingURL=styleProps.js.map