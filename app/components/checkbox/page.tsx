"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Checkbox, CheckboxGroup } from "../../../package/dist/index.js";

const checkboxProps = [
  { name: "isSelected", type: "boolean", description: "Whether the checkbox is selected (controlled)" },
  { name: "defaultSelected", type: "boolean", default: "false", description: "Whether the checkbox is selected by default (uncontrolled)" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the checkbox is disabled" },
  { name: "isIndeterminate", type: "boolean", default: "false", description: "Whether the checkbox is in an indeterminate state" },
  { name: "children", type: "ReactNode", description: "The label for the checkbox" },
  { name: "onChange", type: "(isSelected: boolean) => void", description: "Handler called when the checkbox selection changes" },
];

const checkboxGroupProps = [
  { name: "label", type: "string", description: "The label for the checkbox group" },
  { name: "description", type: "string", description: "A description for the checkbox group" },
  { name: "value", type: "string[]", description: "The current value (controlled)" },
  { name: "defaultValue", type: "string[]", description: "The default value (uncontrolled)" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the entire group is disabled" },
  { name: "onChange", type: "(value: string[]) => void", description: "Handler called when the selection changes" },
];

export default function CheckboxPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          Checkboxes allow users to select multiple items from a list of individual items,
          or to mark one individual item as selected.
        </p>
      </div>

      <ComponentPreview
        title="Basic Checkbox"
        description="A simple checkbox with a label"
        code={`<Checkbox>Subscribe to newsletter</Checkbox>`}
      >
        <Checkbox>Subscribe to newsletter</Checkbox>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Different checkbox states"
        code={`<Checkbox defaultSelected>Selected</Checkbox>
<Checkbox isDisabled>Disabled</Checkbox>
<Checkbox isIndeterminate>Indeterminate</Checkbox>`}
      >
        <Checkbox defaultSelected>Selected</Checkbox>
        <Checkbox isDisabled>Disabled</Checkbox>
        <Checkbox isIndeterminate>Indeterminate</Checkbox>
      </ComponentPreview>

      <ComponentPreview
        title="Checkbox Group"
        description="Group multiple checkboxes together"
        code={`<CheckboxGroup label="Favorite sports" defaultValue={["soccer"]}>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>`}
      >
        <CheckboxGroup label="Favorite sports" defaultValue={["soccer"]}>
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroup>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Checkbox Props</h2>
      <PropsTable props={checkboxProps} />

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">CheckboxGroup Props</h2>
      <PropsTable props={checkboxGroupProps} />
    </DocsLayout>
  );
}
