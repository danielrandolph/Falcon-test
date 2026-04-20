"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Loading } from "../../../falcon-ui-kit/dist/legacy/index.js";

const loadingProps = [
  { name: "small", type: "boolean", default: "false", description: "Whether to show a smaller loading indicator" },
  { name: "inline", type: "boolean", default: "false", description: "Whether to render inline" },
  { name: "label", type: "string", description: "Accessible label for the loading indicator" },
  { name: "hideText", type: "boolean", default: "false", description: "Whether to hide the loading text" },
];

export default function SpinnerPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Loading</h1>
        <p className="text-lg text-muted-foreground">
          Loading indicators show that content or actions are being processed.
        </p>
      </div>

      <ComponentPreview
        title="Basic Loading"
        description="A simple loading indicator"
        code={`<Loading />`}
      >
        <Loading />
      </ComponentPreview>

      <ComponentPreview
        title="Small Loading"
        description="A smaller loading indicator for compact spaces"
        code={`<Loading small />`}
      >
        <Loading small />
      </ComponentPreview>

      <ComponentPreview
        title="Inline Loading"
        description="Loading indicator rendered inline"
        code={`<Loading inline />`}
      >
        <Loading inline />
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        description="Loading with accompanying text"
        code={`<Loading label="Loading content..." />`}
      >
        <Loading label="Loading content..." />
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={loadingProps} />
    </DocsLayout>
  );
}
