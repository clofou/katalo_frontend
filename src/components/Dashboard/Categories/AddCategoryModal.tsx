import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function AddCategoryModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const imgFileRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Ajoute ici la logique d'ajout de catégorie
    setName("");
    setImgPreview(null);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm w-full">
        <DialogHeader>
          <DialogTitle>Ajouter une catégorie</DialogTitle>
          <DialogDescription>
            Remplissez les champs pour ajouter une nouvelle catégorie.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="category-name" className="mb-1">
              Nom de la catégorie
            </Label>
            <Input
              id="category-name"
              placeholder="Nom de la catégorie"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="category-img" className="mb-1">
              Image
            </Label>
            <Input
              ref={imgFileRef}
              id="category-img"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (ev) =>
                    setImgPreview(ev.target?.result as string);
                  reader.readAsDataURL(file);
                } else {
                  setImgPreview(null);
                }
              }}
            />
            {imgPreview && (
              <img
                src={imgPreview}
                alt="Aperçu"
                className="w-16 h-16 rounded object-cover border mt-2"
              />
            )}
          </div>
          <DialogFooter className="flex justify-end gap-2 pt-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Annuler
              </Button>
            </DialogClose>
            <Button type="submit" variant="default">
              Ajouter
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
