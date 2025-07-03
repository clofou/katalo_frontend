import { useRef, useState } from "react";
import { type Client } from "./types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PRIMARY_COLOR = "bg-[#f6a623]"; // orange principal

export function AddClientDialog({
  onAdd,
  onClose,
}: {
  onAdd: (client: Client) => void;
  onClose: () => void;
}) {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const avatarFileRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement)
          .value;
        const email = (form.elements.namedItem("email") as HTMLInputElement)
          .value;
        const phone = (form.elements.namedItem("phone") as HTMLInputElement)
          .value;
        const address = (form.elements.namedItem("address") as HTMLInputElement)
          .value;
        const facebook = (
          form.elements.namedItem("facebook") as HTMLInputElement
        ).value;
        const whatsapp = (
          form.elements.namedItem("whatsapp") as HTMLInputElement
        ).value;
        const twitter = (form.elements.namedItem("twitter") as HTMLInputElement)
          .value;
        const linkedin = (
          form.elements.namedItem("linkedin") as HTMLInputElement
        ).value;
        const instagram = (
          form.elements.namedItem("instagram") as HTMLInputElement
        ).value;

        let avatarUrl = "";
        const fileInput = avatarFileRef.current;
        if (fileInput && fileInput.files && fileInput.files[0]) {
          // Pour une vraie app, il faudrait uploader sur un serveur ou cloud
          // Ici, on utilise un DataURL pour la preview locale
          avatarUrl = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = (ev) => resolve(ev.target?.result as string);
            if (fileInput.files && fileInput.files[0]) {
              reader.readAsDataURL(fileInput.files[0]);
            }
          });
        }

        onAdd({
          id: Math.random().toString(36).slice(2, 9),
          name,
          email,
          phone,
          address,
          avatarUrl,
          registrationDate: new Date().toLocaleDateString(),
          lastPurchase: "",
          social: { facebook, whatsapp, twitter, linkedin, instagram },
          stats: { total: 0, completed: 0, canceled: 0 },
        });
        onClose();
      }}
    >
      <div className="font-bold text-lg mb-2 text-[#f6a623]">
        Ajouter un client
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="mb-1">
            Nom
          </Label>
          <Input name="name" id="name" placeholder="Nom" required />
        </div>
        <div>
          <Label htmlFor="email" className="mb-1">
            Email
          </Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="mb-1">
            Téléphone
          </Label>
          <Input name="phone" id="phone" placeholder="Téléphone" />
        </div>
        <div>
          <Label htmlFor="address" className="mb-1">
            Adresse
          </Label>
          <Input name="address" id="address" placeholder="Adresse" />
        </div>
        <div className="sm:col-span-2 flex flex-col gap-2">
          <Label htmlFor="avatar" className="mb-1">
            Avatar
          </Label>
          <Input
            ref={avatarFileRef}
            name="avatar"
            id="avatar"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) =>
                  setAvatarPreview(ev.target?.result as string);
                reader.readAsDataURL(file);
              } else {
                setAvatarPreview(null);
              }
            }}
          />
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Aperçu avatar"
              className="w-16 h-16 rounded-full object-cover border mt-2"
              style={{ borderColor: "#f6a623", borderWidth: 2 }}
            />
          )}
        </div>
      </div>
      <div className="font-semibold text-sm mt-2 text-[#f6a623]">
        Réseaux sociaux
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="facebook" className="mb-1">
            Facebook
          </Label>
          <Input name="facebook" id="facebook" placeholder="Lien Facebook" />
        </div>
        <div>
          <Label htmlFor="whatsapp" className="mb-1">
            WhatsApp
          </Label>
          <Input name="whatsapp" id="whatsapp" placeholder="Lien WhatsApp" />
        </div>
        <div>
          <Label htmlFor="twitter" className="mb-1">
            Twitter
          </Label>
          <Input name="twitter" id="twitter" placeholder="Lien Twitter" />
        </div>
        <div>
          <Label htmlFor="linkedin" className="mb-1">
            LinkedIn
          </Label>
          <Input name="linkedin" id="linkedin" placeholder="Lien LinkedIn" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="instagram" className="mb-1">
            Instagram
          </Label>
          <Input name="instagram" id="instagram" placeholder="Lien Instagram" />
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Annuler
        </Button>
        <Button
          type="submit"
          className={`${PRIMARY_COLOR} hover:bg-[#e09c1b] text-white`}
        >
          Ajouter
        </Button>
      </div>
    </form>
  );
}
