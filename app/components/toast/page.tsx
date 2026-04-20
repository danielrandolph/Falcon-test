"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { ToastRegion, ToastQueue, Button } from "../../../falcon-ui-kit/dist/index.js";

const toastQueueProps = [
  { name: "maxVisibleToasts", type: "number", default: "5", description: "Maximum number of visible toasts" },
];

const toastProps = [
  { name: "title", type: "string", description: "The title of the toast" },
  { name: "description", type: "string", description: "Additional description text" },
  { name: "variant", type: '"default" | "success" | "warning" | "error"', default: '"default"', description: "The visual variant" },
  { name: "timeout", type: "number", default: "5000", description: "Auto-dismiss timeout in milliseconds" },
];

export default function ToastPage() {
  const handleShowToast = (variant: "default" | "success" | "warning" | "error") => {
    const titles: Record<string, string> = {
      default: "Notification",
      success: "Success!",
      warning: "Warning",
      error: "Error",
    };
    
    const descriptions: Record<string, string> = {
      default: "This is a default notification.",
      success: "Your action was completed successfully.",
      warning: "Please review before proceeding.",
      error: "Something went wrong. Please try again.",
    };

    ToastQueue.add({
      title: titles[variant],
      description: descriptions[variant],
      variant,
    });
  };

  return (
    <DocsLayout>
      <ToastRegion />
      
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Toast</h1>
        <p className="text-lg text-muted-foreground">
          Toasts display brief, temporary notifications to provide feedback about an action.
        </p>
      </div>

      <ComponentPreview
        title="Toast Variants"
        description="Different toast styles for various contexts"
        code={`// Add ToastRegion to your layout
<ToastRegion />

// Show toasts using the queue
ToastQueue.add({
  title: "Success!",
  description: "Your action was completed.",
  variant: "success",
});`}
      >
        <Button onPress={() => handleShowToast("default")}>Default Toast</Button>
        <Button variant="secondary" onPress={() => handleShowToast("success")}>Success Toast</Button>
        <Button variant="secondary" onPress={() => handleShowToast("warning")}>Warning Toast</Button>
        <Button variant="destructive" onPress={() => handleShowToast("error")}>Error Toast</Button>
      </ComponentPreview>

      <div className="mb-8 rounded-xl border border-border bg-card p-6">
        <h3 className="mb-2 font-medium text-foreground">Usage</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Add the ToastRegion component to your layout to enable toast notifications. 
          Then use ToastQueue.add() to display toasts from anywhere in your application.
        </p>
        <pre className="rounded-lg bg-background p-4 text-sm">
          <code className="text-muted-foreground">{`// In your layout
import { ToastRegion } from "@sinoalice/falcon-ui-kit";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ToastRegion />
    </>
  );
}

// Anywhere in your app
import { ToastQueue } from "@sinoalice/falcon-ui-kit";

ToastQueue.add({
  title: "Saved!",
  description: "Your changes have been saved.",
  variant: "success",
  timeout: 5000,
});`}</code>
        </pre>
      </div>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">ToastQueue Props</h2>
      <PropsTable props={toastQueueProps} />

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Toast Props</h2>
      <PropsTable props={toastProps} />
    </DocsLayout>
  );
}
