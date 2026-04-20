"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Switch } from "../../../package/dist/index.js";

const switchProps = [
  { name: "isSelected", type: "boolean", description: "Whether the switch is on (controlled)" },
  { name: "defaultSelected", type: "boolean", default: "false", description: "Whether the switch is on by default (uncontrolled)" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the switch is disabled" },
  { name: "children", type: "ReactNode", description: "The label for the switch" },
  { name: "onChange", type: "(isSelected: boolean) => void", description: "Handler called when the switch state changes" },
];

export default function SwitchPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Switch</h1>
        <p className="text-lg text-muted-foreground">
          Switches allow users to toggle between two states, typically on and off.
        </p>
      </div>

      <ComponentPreview
        title="Basic Switch"
        description="A simple toggle switch"
        code={`<Switch>Enable notifications</Switch>`}
      >
        <Switch>Enable notifications</Switch>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Different switch states"
        code={`<Switch defaultSelected>Selected</Switch>
<Switch isDisabled>Disabled</Switch>
<Switch defaultSelected isDisabled>Selected & Disabled</Switch>`}
      >
        <Switch defaultSelected>Selected</Switch>
        <Switch isDisabled>Disabled</Switch>
        <Switch defaultSelected isDisabled>Selected and Disabled</Switch>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={switchProps} />
    </DocsLayout>
  );
}
