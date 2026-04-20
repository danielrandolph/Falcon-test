"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Alert } from "../../../package/dist/legacy/index.js";

const alertProps = [
  { name: "variant", type: '"info" | "success" | "warning" | "error"', default: '"info"', description: "The visual variant of the alert" },
  { name: "title", type: "string", description: "The title of the alert" },
  { name: "children", type: "ReactNode", description: "The content/message of the alert" },
  { name: "isDismissable", type: "boolean", default: "false", description: "Whether the alert can be dismissed" },
  { name: "onDismiss", type: "() => void", description: "Handler called when the alert is dismissed" },
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
        code={`<Alert variant="info" title="Information">
  This is an informational message.
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
          <Alert variant="info" title="Information">
            This is an informational message.
          </Alert>
          <Alert variant="success" title="Success">
            Your action was completed successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            Please review before proceeding.
          </Alert>
          <Alert variant="error" title="Error">
            Something went wrong. Please try again.
          </Alert>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Dismissable"
        description="Alerts that can be dismissed"
        code={`<Alert 
  variant="info" 
  title="Dismissable Alert" 
  isDismissable
  onDismiss={() => console.log("Dismissed")}
>
  Click the close button to dismiss this alert.
</Alert>`}
      >
        <div className="w-full">
          <Alert variant="info" title="Dismissable Alert" isDismissable>
            Click the close button to dismiss this alert.
          </Alert>
        </div>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={alertProps} />
    </DocsLayout>
  );
}
