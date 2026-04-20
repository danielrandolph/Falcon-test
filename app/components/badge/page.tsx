"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Badge } from "../../../falcon-ui-kit/dist/legacy/index.js";

const badgeProps = [
  { name: "variant", type: '"info" | "danger"', description: "The visual variant of the badge" },
  { name: "children", type: "ReactNode", description: "The content of the badge" },
];

export default function BadgePage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Badge</h1>
        <p className="text-lg text-muted-foreground">
          Badges are small status indicators used to highlight information or show counts.
        </p>
      </div>

      <ComponentPreview
        title="Variants"
        description="Different badge styles for various contexts"
        code={`<Badge>Default</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="danger">Danger</Badge>`}
      >
        <Badge>Default</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="danger">Danger</Badge>
      </ComponentPreview>

      <ComponentPreview
        title="Use Cases"
        description="Common badge patterns"
        code={`<Badge variant="info">New</Badge>
<Badge variant="danger">3</Badge>
<Badge>Active</Badge>`}
      >
        <Badge variant="info">New</Badge>
        <Badge variant="danger">3</Badge>
        <Badge>Active</Badge>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={badgeProps} />
    </DocsLayout>
  );
}
