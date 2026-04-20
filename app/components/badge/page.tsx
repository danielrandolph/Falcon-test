"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Badge } from "../../../falcon-ui-kit/dist/legacy/index.js";

const badgeProps = [
  { name: "variant", type: '"default" | "secondary" | "success" | "warning" | "destructive"', default: '"default"', description: "The visual variant" },
  { name: "size", type: '"sm" | "md"', default: '"md"', description: "The size of the badge" },
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
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>`}
      >
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Different badge sizes"
        code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`}
      >
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
      </ComponentPreview>

      <ComponentPreview
        title="Use Cases"
        description="Common badge patterns"
        code={`<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Expired</Badge>
<Badge>12</Badge>`}
      >
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="destructive">Expired</Badge>
        <Badge>12</Badge>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={badgeProps} />
    </DocsLayout>
  );
}
