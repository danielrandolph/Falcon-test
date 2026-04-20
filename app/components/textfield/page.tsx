"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { TextField, TextArea } from "../../../package/dist/index.js";

const textFieldProps = [
  { name: "label", type: "string", description: "The label for the text field" },
  { name: "description", type: "string", description: "A description displayed below the field" },
  { name: "errorMessage", type: "string", description: "An error message to display" },
  { name: "placeholder", type: "string", description: "Placeholder text" },
  { name: "value", type: "string", description: "The current value (controlled)" },
  { name: "defaultValue", type: "string", description: "The default value (uncontrolled)" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the field is disabled" },
  { name: "isReadOnly", type: "boolean", default: "false", description: "Whether the field is read-only" },
  { name: "isRequired", type: "boolean", default: "false", description: "Whether the field is required" },
  { name: "type", type: '"text" | "email" | "password" | "url" | "tel"', default: '"text"', description: "The type of input" },
  { name: "onChange", type: "(value: string) => void", description: "Handler called when the value changes" },
];

export default function TextFieldPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">TextField</h1>
        <p className="text-lg text-muted-foreground">
          Text fields allow users to enter and edit text. They include labels, 
          descriptions, and validation states.
        </p>
      </div>

      <ComponentPreview
        title="Basic TextField"
        description="A simple text input with a label"
        code={`<TextField label="Email" placeholder="Enter your email" />`}
      >
        <TextField label="Email" placeholder="Enter your email" />
      </ComponentPreview>

      <ComponentPreview
        title="With Description"
        description="TextField with additional context"
        code={`<TextField 
  label="Username" 
  description="Choose a unique username"
  placeholder="Enter username" 
/>`}
      >
        <TextField 
          label="Username" 
          description="Choose a unique username"
          placeholder="Enter username" 
        />
      </ComponentPreview>

      <ComponentPreview
        title="Validation States"
        description="Error and required states"
        code={`<TextField 
  label="Email" 
  isRequired 
  errorMessage="Please enter a valid email" 
/>`}
      >
        <TextField 
          label="Email" 
          isRequired 
          errorMessage="Please enter a valid email" 
        />
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="Disabled text field"
        code={`<TextField label="Disabled" isDisabled defaultValue="Cannot edit" />`}
      >
        <TextField label="Disabled" isDisabled defaultValue="Cannot edit" />
      </ComponentPreview>

      <ComponentPreview
        title="TextArea"
        description="Multi-line text input"
        code={`<TextArea label="Description" placeholder="Enter a description..." />`}
      >
        <TextArea label="Description" placeholder="Enter a description..." />
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={textFieldProps} />
    </DocsLayout>
  );
}
