"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { TooltipTrigger, Tooltip, Button } from "../../../package/dist/index.js";

const tooltipProps = [
  { name: "children", type: "ReactNode", description: "The content of the tooltip" },
  { name: "placement", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "The placement of the tooltip" },
  { name: "delay", type: "number", default: "300", description: "Delay before showing the tooltip (ms)" },
  { name: "closeDelay", type: "number", default: "0", description: "Delay before hiding the tooltip (ms)" },
];

export default function TooltipPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Tooltip</h1>
        <p className="text-lg text-muted-foreground">
          Tooltips display additional information when hovering over or focusing on an element.
        </p>
      </div>

      <ComponentPreview
        title="Basic Tooltip"
        description="A simple tooltip on hover"
        code={`<TooltipTrigger>
  <Button>Hover me</Button>
  <Tooltip>This is a tooltip</Tooltip>
</TooltipTrigger>`}
      >
        <TooltipTrigger>
          <Button>Hover me</Button>
          <Tooltip>This is a tooltip</Tooltip>
        </TooltipTrigger>
      </ComponentPreview>

      <ComponentPreview
        title="Placement"
        description="Tooltips can be positioned in different directions"
        code={`<TooltipTrigger>
  <Button>Top</Button>
  <Tooltip placement="top">Top tooltip</Tooltip>
</TooltipTrigger>
<TooltipTrigger>
  <Button>Bottom</Button>
  <Tooltip placement="bottom">Bottom tooltip</Tooltip>
</TooltipTrigger>
<TooltipTrigger>
  <Button>Left</Button>
  <Tooltip placement="left">Left tooltip</Tooltip>
</TooltipTrigger>
<TooltipTrigger>
  <Button>Right</Button>
  <Tooltip placement="right">Right tooltip</Tooltip>
</TooltipTrigger>`}
      >
        <TooltipTrigger>
          <Button variant="secondary">Top</Button>
          <Tooltip placement="top">Top tooltip</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="secondary">Bottom</Button>
          <Tooltip placement="bottom">Bottom tooltip</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="secondary">Left</Button>
          <Tooltip placement="left">Left tooltip</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="secondary">Right</Button>
          <Tooltip placement="right">Right tooltip</Tooltip>
        </TooltipTrigger>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={tooltipProps} />
    </DocsLayout>
  );
}
