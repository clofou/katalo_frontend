import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Client } from "./types";
import { AddClientDialog } from "./AddClientDialog";

export function AddClientDialogWrapper({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (client: Client) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full">
        <AddClientDialog onAdd={onAdd} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}