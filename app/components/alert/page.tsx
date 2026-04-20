"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Alert } from "../../../falcon-ui-kit/dist/legacy/index.js";

const alertProps = [
  { name: "variant", type: '"neutral" | "success" | "warning" | "error"', default: '"neutral"', description: "The visual variant of the alert" },
  { name: "title", type: "ReactNode", required: true, description: "The title of the alert" },
  { name: "description", type: "ReactNode", description: "The description/message of the alert" },
  { name: "size", type: '"regular" | "large"', default: '"regular"', description: "The size of the alert" },
  { name: "iconName", type: "string", description: "Custom icon name to display" },
  { name: "buttons", type: "ReactNode", description: "Action buttons to display in the alert" },
];

export default function AlertPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Alert</h1>
        <p className="text-lg text-muted-foreground">
          Alerts display important messages to the user, such as warnings, errors, or success notifications.
        </p>
      </div>

      <ComponentPreview
        title="Variants"
        description="Different alert styles for various contexts"
        code={`<Alert variant="neutral" title="Neutral">
  This is a neutral message.
</Alert>
<Alert variant="success" title="Success">
  Your action was completed successfully.
</Alert>
<Alert variant="warning" title="Warning">
  Please review before proceeding.
</Alert>
<Alert variant="error" title="Error">
  Something went wrong. Please try again.
</Alert>`}
      >
        <div className="flex w-full flex-col gap-4">
          <Alert variant="neutral" title="Neutral" description="This is a neutral message." />
          <Alert variant="success" title="Success" description="Your action was completed successfully." />
          <Alert variant="warning" title="Warning" description="Please review before proceeding." />
          <Alert variant="error" title="Error" description="Something went wrong. Please try again." />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Regular and large alert sizes"
        code={`<Alert size="regular" title="Regular Size" description="This is a regular sized alert." />
<Alert size="large" title="Large Size" description="This is a large sized alert with more prominent styling." />`}
      >
        <div className="flex w-full flex-col gap-4">
          <Alert size="regular" title="Regular Size" description="This is a regular sized alert." />
          <Alert size="large" title="Large Size" description="This is a large sized alert with more prominent styling." />
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={alertProps} />
    </DocsLayout>
  );
}
