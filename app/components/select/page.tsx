"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Select, SelectItem, SelectSection } from "../../../falcon-ui-kit/dist/index.js";

const selectProps = [
  { name: "label", type: "string", description: "The label for the select" },
  { name: "description", type: "string", description: "A description displayed below the select" },
  { name: "errorMessage", type: "string", description: "An error message to display" },
  { name: "placeholder", type: "string", description: "Placeholder text when no item is selected" },
  { name: "selectedKey", type: "Key", description: "The currently selected key (controlled)" },
  { name: "defaultSelectedKey", type: "Key", description: "The default selected key (uncontrolled)" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the select is disabled" },
  { name: "isRequired", type: "boolean", default: "false", description: "Whether the select is required" },
  { name: "onSelectionChange", type: "(key: Key) => void", description: "Handler called when the selection changes" },
];

export default function SelectPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Select</h1>
        <p className="text-lg text-muted-foreground">
          Select displays a collapsible list of options and allows a user to select one of them.
        </p>
      </div>

      <ComponentPreview
        title="Basic Select"
        description="A simple dropdown selection"
        code={`<Select label="Country" placeholder="Select a country">
  <SelectItem id="us">United States</SelectItem>
  <SelectItem id="uk">United Kingdom</SelectItem>
  <SelectItem id="ca">Canada</SelectItem>
  <SelectItem id="au">Australia</SelectItem>
</Select>`}
      >
        <Select label="Country" placeholder="Select a country">
          <SelectItem id="us">United States</SelectItem>
          <SelectItem id="uk">United Kingdom</SelectItem>
          <SelectItem id="ca">Canada</SelectItem>
          <SelectItem id="au">Australia</SelectItem>
        </Select>
      </ComponentPreview>

      <ComponentPreview
        title="With Sections"
        description="Grouped options with section headers"
        code={`<Select label="Team Member" placeholder="Select a team member">
  <SelectSection title="Engineering">
    <SelectItem id="john">John Doe</SelectItem>
    <SelectItem id="jane">Jane Smith</SelectItem>
  </SelectSection>
  <SelectSection title="Design">
    <SelectItem id="bob">Bob Wilson</SelectItem>
    <SelectItem id="alice">Alice Brown</SelectItem>
  </SelectSection>
</Select>`}
      >
        <Select label="Team Member" placeholder="Select a team member">
          <SelectSection title="Engineering">
            <SelectItem id="john">John Doe</SelectItem>
            <SelectItem id="jane">Jane Smith</SelectItem>
          </SelectSection>
          <SelectSection title="Design">
            <SelectItem id="bob">Bob Wilson</SelectItem>
            <SelectItem id="alice">Alice Brown</SelectItem>
          </SelectSection>
        </Select>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="Disabled select"
        code={`<Select label="Disabled" isDisabled placeholder="Cannot select">
  <SelectItem id="option">Option</SelectItem>
</Select>`}
      >
        <Select label="Disabled" isDisabled placeholder="Cannot select">
          <SelectItem id="option">Option</SelectItem>
        </Select>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={selectProps} />
    </DocsLayout>
  );
}
