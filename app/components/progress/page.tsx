"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { ProgressBar, Meter } from "../../../package/dist/index.js";

const progressProps = [
  { name: "label", type: "ReactNode", description: "The content to display as the label" },
  { name: "value", type: "number", default: "0", description: "The current value (between minValue and maxValue)" },
  { name: "minValue", type: "number", default: "0", description: "The smallest value allowed" },
  { name: "maxValue", type: "number", default: "100", description: "The largest value allowed" },
  { name: "valueLabel", type: "ReactNode", description: "The content to display as the value label" },
  { name: "formatOptions", type: "Intl.NumberFormatOptions", description: "Number format options for the value" },
  { name: "isIndeterminate", type: "boolean", default: "false", description: "Whether the progress bar is indeterminate" },
];

const meterProps = [
  { name: "label", type: "ReactNode", description: "The content to display as the label" },
  { name: "value", type: "number", default: "0", description: "The current value" },
  { name: "minValue", type: "number", default: "0", description: "The smallest value allowed" },
  { name: "maxValue", type: "number", default: "100", description: "The largest value allowed" },
  { name: "valueLabel", type: "ReactNode", description: "The content to display as the value label" },
  { name: "formatOptions", type: "Intl.NumberFormatOptions", description: "Number format options for the value" },
];

export default function ProgressPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Progress bars and meters show the completion status of a task or the 
          value within a known range. Built with React Aria for accessibility.
        </p>
      </div>

      <ComponentPreview
        title="Progress Bar"
        description="Shows the progress of a determinate operation"
        code={`<ProgressBar label="Loading..." value={30} />
<ProgressBar label="Uploading..." value={60} />
<ProgressBar label="Complete" value={100} />`}
      >
        <div className="flex w-full max-w-xs flex-col gap-4">
          <ProgressBar label="Loading..." value={30} />
          <ProgressBar label="Uploading..." value={60} />
          <ProgressBar label="Complete" value={100} />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Indeterminate Progress"
        description="Shows an operation with unknown completion time"
        code={`<ProgressBar label="Processing..." isIndeterminate />`}
      >
        <div className="w-full max-w-xs">
          <ProgressBar label="Processing..." isIndeterminate />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Custom Value Labels"
        description="Display custom value text"
        code={`<ProgressBar 
  label="Download Progress" 
  value={75} 
  valueLabel="75 of 100 MB" 
/>`}
      >
        <div className="w-full max-w-xs">
          <ProgressBar 
            label="Download Progress" 
            value={75} 
            valueLabel="75 of 100 MB" 
          />
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">ProgressBar Props</h2>
      <PropsTable props={progressProps} />

      <div className="mt-16 mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Meter</h1>
        <p className="text-lg text-muted-foreground">
          Meters represent a quantity within a known range, useful for displaying 
          measurements like disk usage or battery level.
        </p>
      </div>

      <ComponentPreview
        title="Basic Meter"
        description="Shows a value within a known range"
        code={`<Meter label="Storage" value={25} />
<Meter label="Memory" value={50} />
<Meter label="CPU" value={80} />`}
      >
        <div className="flex w-full max-w-xs flex-col gap-4">
          <Meter label="Storage" value={25} />
          <Meter label="Memory" value={50} />
          <Meter label="CPU" value={80} />
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Meter Props</h2>
      <PropsTable props={meterProps} />
    </DocsLayout>
  );
}
