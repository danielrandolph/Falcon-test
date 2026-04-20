"use client";

import { DocsLayout } from "@/components/docs-layout";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { DialogTrigger, Modal, Dialog, Button } from "../../../package/dist/index.js";

const modalProps = [
  { name: "children", type: "ReactNode", description: "The content of the modal" },
  { name: "isDismissable", type: "boolean", default: "true", description: "Whether the modal can be dismissed by clicking outside" },
  { name: "isKeyboardDismissDisabled", type: "boolean", default: "false", description: "Whether keyboard dismissal is disabled" },
];

export default function ModalPage() {
  return (
    <DocsLayout>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Modal</h1>
        <p className="text-lg text-muted-foreground">
          Modals are overlays that focus the user&apos;s attention on a specific task or content.
          They block interaction with the rest of the page.
        </p>
      </div>

      <ComponentPreview
        title="Basic Modal"
        description="A modal overlay with content"
        code={`<DialogTrigger>
  <Button>Open Modal</Button>
  <Modal>
    <Dialog>
      {({ close }) => (
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
          <p className="text-muted-foreground mb-4">
            This modal focuses attention on specific content.
          </p>
          <Button onPress={close}>Close</Button>
        </div>
      )}
    </Dialog>
  </Modal>
</DialogTrigger>`}
      >
        <DialogTrigger>
          <Button>Open Modal</Button>
          <Modal>
            <Dialog>
              {({ close }) => (
                <div className="p-6">
                  <h2 className="mb-4 text-lg font-semibold">Modal Title</h2>
                  <p className="mb-4 text-muted-foreground">
                    This modal focuses attention on specific content.
                  </p>
                  <Button onPress={close}>Close</Button>
                </div>
              )}
            </Dialog>
          </Modal>
        </DialogTrigger>
      </ComponentPreview>

      <ComponentPreview
        title="Non-dismissable Modal"
        description="Modal that cannot be dismissed by clicking outside"
        code={`<DialogTrigger>
  <Button>Open Modal</Button>
  <Modal isDismissable={false}>
    <Dialog>
      {({ close }) => (
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Important Action</h2>
          <p className="text-muted-foreground mb-4">
            You must complete this action or click the button to close.
          </p>
          <Button onPress={close}>I understand</Button>
        </div>
      )}
    </Dialog>
  </Modal>
</DialogTrigger>`}
      >
        <DialogTrigger>
          <Button>Open Non-dismissable</Button>
          <Modal isDismissable={false}>
            <Dialog>
              {({ close }) => (
                <div className="p-6">
                  <h2 className="mb-4 text-lg font-semibold">Important Action</h2>
                  <p className="mb-4 text-muted-foreground">
                    You must complete this action or click the button to close.
                  </p>
                  <Button onPress={close}>I understand</Button>
                </div>
              )}
            </Dialog>
          </Modal>
        </DialogTrigger>
      </ComponentPreview>

      <h2 className="mb-4 mt-12 text-2xl font-semibold text-foreground">Props</h2>
      <PropsTable props={modalProps} />
    </DocsLayout>
  );
}
