"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Slider, SliderOutput, SliderThumb, SliderTrack } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Label } from "./field.js";
import { composeTailwindRenderProps, focusRing } from "./utils.js";
const trackStyles = tv({
    base: "tw:rounded-full",
    variants: {
        orientation: {
            horizontal: "tw:h-1.5 tw:w-full",
            vertical: "tw:ml-[50%] tw:h-full tw:w-1.5 tw:-translate-x-[50%]"
        },
        isDisabled: {
            false: "tw:bg-neutral-300 tw:forced-colors:bg-[ButtonBorder]",
            true: "tw:bg-neutral-200 tw:forced-colors:bg-[ButtonBorder]"
        }
    }
});
const fillStyles = tv({
    base: "tw:absolute tw:rounded-full",
    variants: {
        orientation: {
            horizontal: "tw:inset-s-(--start,0) tw:h-1.5 tw:w-(--size)",
            vertical: "tw:bottom-(--start,0) tw:ml-[50%] tw:h-(--size) tw:w-1.5 tw:-translate-x-[50%]"
        },
        isDisabled: {
            false: "tw:bg-blue-500 tw:forced-colors:bg-[Highlight]",
            true: "tw:bg-neutral-300 tw:forced-colors:bg-[GrayText]"
        }
    }
});
const thumbStyles = tv({
    extend: focusRing,
    base: "tw:h-4.5 tw:w-4.5 tw:rounded-full tw:border tw:border-neutral-700 tw:bg-neutral-50 tw:group-orientation-horizontal:mt-5 tw:group-orientation-vertical:ml-2.5",
    variants: {
        isDragging: {
            true: "tw:bg-neutral-700 tw:forced-colors:bg-[ButtonBorder]"
        },
        isDisabled: {
            true: "tw:border-neutral-300 tw:forced-colors:border-[GrayText]"
        }
    }
});
function slider_Slider({ label, thumbLabels, ...props }) {
    return /*#__PURE__*/ jsxs(Slider, {
        ...props,
        className: composeTailwindRenderProps(props.className, "tw:grid-cols-[1fr_auto] tw:flex-col tw:items-center tw:gap-2 tw:font-sans tw:orientation-horizontal:grid tw:orientation-horizontal:w-64 tw:orientation-horizontal:max-w-[calc(100%-10px)] tw:orientation-vertical:flex"),
        children: [
            /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsx(SliderOutput, {
                className: "tw:text-sm tw:text-neutral-500 tw:orientation-vertical:hidden",
                children: ({ state })=>state.values.map((_, i)=>state.getThumbValueLabel(i)).join(" – ")
            }),
            /*#__PURE__*/ jsx(SliderTrack, {
                className: "tw:group tw:col-span-2 tw:flex tw:items-center tw:orientation-horizontal:h-5 tw:orientation-vertical:h-38 tw:orientation-vertical:w-5",
                children: ({ state, ...renderProps })=>/*#__PURE__*/ jsxs(Fragment, {
                        children: [
                            /*#__PURE__*/ jsx("div", {
                                className: trackStyles(renderProps)
                            }),
                            1 === state.values.length ? /*#__PURE__*/ jsx("div", {
                                className: fillStyles(renderProps),
                                style: {
                                    ["--size"]: `${100 * state.getThumbPercent(0)}%`
                                }
                            }) : 2 === state.values.length ? /*#__PURE__*/ jsx("div", {
                                className: fillStyles(renderProps),
                                style: {
                                    ["--start"]: `${100 * state.getThumbPercent(0)}%`,
                                    ["--size"]: `${(state.getThumbPercent(1) - state.getThumbPercent(0)) * 100}%`
                                }
                            }) : null,
                            state.values.map((_, i)=>/*#__PURE__*/ jsx(SliderThumb, {
                                    "aria-label": thumbLabels?.[i],
                                    className: thumbStyles,
                                    index: i
                                }, i))
                        ]
                    })
            })
        ]
    });
}
export { slider_Slider as Slider };

//# sourceMappingURL=slider.js.map