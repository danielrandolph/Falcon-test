"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Slider } from "../../../package/dist/index.js";

const sliderProps = [
  { name: "label", type: "string", description: "The label for the slider" },
  { name: "value", type: "number | number[]", description: "The current value (controlled)" },
  { name: "defaultValue", type: "number | number[]", description: "The default value (uncontrolled)" },
  { name: "minValue", type: "number", default: "0", description: "The minimum value" },
  { name: "maxValue", type: "number", default: "100", description: "The maximum value" },
  { name: "step", type: "number", default: "1", description: "The step between values" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the slider is disabled" },
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "The orientation of the slider" },
  { name: "onChange", type: "(value: number | number[]) => void", description: "Handler called when the value changes" },
];

export default function SliderPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Slider</h1>
        <p className="text-lg text-muted-foreground">
          Sliders allow users to select a value from a range by dragging a thumb.
        </p>
      </div>

      <ComponentPreview
        title="Basic Slider"
        description="A simple range slider"
        code={`<Slider label="Volume" defaultValue={50} />`}
      >
        <div className="w-64">
          <Slider label="Volume" defaultValue={50} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Range Slider"
        description="Slider with min and max values"
        code={`<Slider 
  label="Price Range" 
  defaultValue={[20, 80]} 
  minValue={0} 
  maxValue={100} 
/>`}
      >
        <div className="w-64">
          <Slider 
            label="Price Range" 
            defaultValue={[20, 80]} 
            minValue={0} 
            maxValue={100} 
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Steps"
        description="Slider that snaps to step values"
        code={`<Slider label="Rating" defaultValue={3} minValue={1} maxValue={5} step={1} />`}
      >
        <div className="w-64">
          <Slider label="Rating" defaultValue={3} minValue={1} maxValue={5} step={1} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="Disabled slider"
        code={`<Slider label="Disabled" defaultValue={50} isDisabled />`}
      >
        <div className="w-64">
          <Slider label="Disabled" defaultValue={50} isDisabled />
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={sliderProps} />
    </DocsLayout>
  );
}
