"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { DialogTrigger, Dialog, AlertDialog, Button } from "../../../package/dist/index.js";

const dialogProps = [
  { name: "children", type: "ReactNode | (opts: DialogRenderProps) => ReactNode", description: "The content of the dialog" },
  { name: "role", type: '"dialog" | "alertdialog"', default: '"dialog"', description: "The ARIA role of the dialog" },
];

const alertDialogProps = [
  { name: "title", type: "string", description: "The title of the alert dialog" },
  { name: "children", type: "ReactNode", description: "The content/message of the alert dialog" },
  { name: "variant", type: '"info" | "warning" | "destructive"', default: '"info"', description: "The visual variant" },
  { name: "actionLabel", type: "string", description: "The label for the action button" },
  { name: "cancelLabel", type: "string", default: '"Cancel"', description: "The label for the cancel button" },
  { name: "onAction", type: "() => void", description: "Handler called when the action button is pressed" },
];

export default function DialogPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Dialog</h1>
        <p className="text-lg text-muted-foreground">
          Dialogs are overlays that require user interaction. They can contain forms,
          confirmations, or other focused content.
        </p>
      </div>

      <ComponentPreview
        title="Basic Dialog"
        description="A simple dialog with content"
        code={`<DialogTrigger>
  <Button>Open Dialog</Button>
  <Dialog>
    {({ close }) => (
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Dialog Title</h2>
        <p className="text-muted-foreground mb-4">
          This is the dialog content. You can put any content here.
        </p>
        <Button onPress={close}>Close</Button>
      </div>
    )}
  </Dialog>
</DialogTrigger>`}
      >
        <DialogTrigger>
          <Button>Open Dialog</Button>
          <Dialog>
            {({ close }) => (
              <div className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Dialog Title</h2>
                <p className="mb-4 text-muted-foreground">
                  This is the dialog content. You can put any content here.
                </p>
                <Button onPress={close}>Close</Button>
              </div>
            )}
          </Dialog>
        </DialogTrigger>
      </ComponentPreview>

      <ComponentPreview
        title="Alert Dialog"
        description="Confirmation dialogs for important actions"
        code={`<DialogTrigger>
  <Button variant="destructive">Delete Item</Button>
  <AlertDialog
    title="Delete Item"
    variant="destructive"
    actionLabel="Delete"
    onAction={() => console.log("Deleted!")}
  >
    Are you sure you want to delete this item? This action cannot be undone.
  </AlertDialog>
</DialogTrigger>`}
      >
        <DialogTrigger>
          <Button variant="destructive">Delete Item</Button>
          <AlertDialog
            title="Delete Item"
            variant="destructive"
            actionLabel="Delete"
          >
            Are you sure you want to delete this item? This action cannot be undone.
          </AlertDialog>
        </DialogTrigger>
      </ComponentPreview>

      <ComponentPreview
        title="Warning Dialog"
        description="Warning variant for cautionary actions"
        code={`<DialogTrigger>
  <Button variant="secondary">Reset Settings</Button>
  <AlertDialog
    title="Reset Settings"
    variant="warning"
    actionLabel="Reset"
  >
    This will reset all your settings to their default values.
  </AlertDialog>
</DialogTrigger>`}
      >
        <DialogTrigger>
          <Button variant="secondary">Reset Settings</Button>
          <AlertDialog
            title="Reset Settings"
            variant="warning"
            actionLabel="Reset"
          >
            This will reset all your settings to their default values.
          </AlertDialog>
        </DialogTrigger>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Dialog Props</h2>
      <PropsTable props={dialogProps} />

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">AlertDialog Props</h2>
      <PropsTable props={alertDialogProps} />
    </DocsLayout>
  );
}
