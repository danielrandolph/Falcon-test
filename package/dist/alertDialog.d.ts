import type { ReactNode } from "react";
import type { DialogProps } from "react-aria-components";
interface AlertDialogProps extends Omit<DialogProps, "children"> {
    actionLabel: string;
    cancelLabel?: string;
    children: ReactNode;
    title: string;
    variant?: "info" | "destructive";
    onAction?: () => void;
}
export declare function AlertDialog({ actionLabel, cancelLabel, children, title, variant, onAction, ...props }: AlertDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=alertDialog.d.ts.map