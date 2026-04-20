"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Loading } from "../../../package/dist/legacy/index.js";

const loadingProps = [
  { name: "size", type: '"small" | "medium" | "large"', default: '"medium"', description: "The size of the loading indicator" },
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
        title="Sizes"
        description="Different sizes for various contexts"
        code={`<Loading size="small" />
<Loading size="medium" />
<Loading size="large" />`}
      >
        <Loading size="small" />
        <Loading size="medium" />
        <Loading size="large" />
      </ComponentPreview>

      <ComponentPreview
        title="With Text"
        description="Loading with accompanying text"
        code={`<div className="flex items-center gap-2">
  <Loading />
  <span>Loading...</span>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Loading />
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={loadingProps} />
    </DocsLayout>
  );
}
