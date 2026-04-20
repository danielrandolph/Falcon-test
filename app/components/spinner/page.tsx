"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Spinner } from "../../../package/dist/index.js";

const spinnerProps = [
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size of the spinner" },
  { name: "label", type: "string", description: "Accessible label for the spinner" },
];

export default function SpinnerPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Spinner</h1>
        <p className="text-lg text-muted-foreground">
          Spinners indicate loading states while content or actions are being processed.
        </p>
      </div>

      <ComponentPreview
        title="Basic Spinner"
        description="A simple loading indicator"
        code={`<Spinner />`}
      >
        <Spinner />
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Different sizes for various contexts"
        code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}
      >
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </ComponentPreview>

      <ComponentPreview
        title="With Label"
        description="Spinner with accessible text"
        code={`<Spinner label="Loading..." />`}
      >
        <div className="flex items-center gap-2">
          <Spinner />
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={spinnerProps} />
    </DocsLayout>
  );
}
