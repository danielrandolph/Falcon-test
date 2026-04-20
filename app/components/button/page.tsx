"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Button } from "../../../falcon-ui-kit/dist/index.js";

const buttonProps = [
  { name: "variant", type: '"primary" | "secondary" | "destructive" | "quiet"', default: '"primary"', description: "The visual style of the button" },
  { name: "isDisabled", type: "boolean", default: "false", description: "Whether the button is disabled" },
  { name: "isPending", type: "boolean", default: "false", description: "Whether the button is in a pending/loading state" },
  { name: "children", type: "ReactNode", description: "The content of the button" },
  { name: "onPress", type: "(e: PressEvent) => void", description: "Handler called when the button is pressed" },
];

export default function ButtonPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Button</h1>
        <p className="text-lg text-muted-foreground">
          Buttons allow users to take actions and make choices with a single tap.
          Built with React Aria Button for full accessibility.
        </p>
      </div>

      <ComponentPreview
        title="Variants"
        description="Different visual styles for various use cases"
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="quiet">Quiet</Button>
<Button variant="destructive">Destructive</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="quiet">Quiet</Button>
        <Button variant="destructive">Destructive</Button>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Disabled and loading states"
        code={`<Button isDisabled>Disabled</Button>
<Button isPending>Loading...</Button>`}
      >
        <Button isDisabled>Disabled</Button>
        <Button isPending>Loading...</Button>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={buttonProps} />
    </DocsLayout>
  );
}
