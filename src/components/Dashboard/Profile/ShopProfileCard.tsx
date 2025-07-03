import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Save, Edit2, Palette, LayoutTemplate } from "lucide-react";
import type { Shop, ShopTheme } from "./type";

const SHOP_TEMPLATES = [
  {
    name: "Standard",
    value: "standard",
    icon: <LayoutTemplate className="text-[#f6a623]" />,
  },
  {
    name: "Minimal",
    value: "minimal",
    icon: <LayoutTemplate className="text-[#232c3b]" />,
  },
  {
    name: "Vitrine",
    value: "vitrine",
    icon: <LayoutTemplate className="text-[#10b981]" />,
  },
];

export function ShopProfileCard({
  shop,
  setShop,
  themes,
}: {
  shop: Shop;
  setShop: (fn: (s: Shop) => Shop) => void;
  themes: ShopTheme[];
}) {
  const [editShop, setEditShop] = useState(false);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setShop((s) => ({
        ...s,
        logo: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <section className="bg-white dark:bg-[#18181b] rounded-xl shadow border border-gray-100 dark:border-[#232c3b] p-0 overflow-hidden">
      <div className="border-b border-gray-100 dark:border-[#232c3b] px-8 py-5 flex items-center gap-4 bg-gray-50 dark:bg-[#222]">
        <Palette className="text-[#232c3b]" size={22} />
        <h2 className="text-lg font-bold text-gray-800 dark:text-white tracking-wide">
          Ma boutique
        </h2>
      </div>
      <div className="p-8 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="relative">
            <img
              src={shop.logo}
              alt="logo boutique"
              className="w-20 h-20 rounded-xl border-2 border-gray-200 dark:border-[#232c3b] object-cover shadow"
            />
            <label className="absolute bottom-0 right-0 bg-gray-200 dark:bg-[#232c3b] p-2 rounded-full cursor-pointer shadow border border-white">
              <Upload size={16} className="text-[#232c3b]" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoChange}
              />
            </label>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                {shop.name}
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setEditShop((v) => !v)}
                aria-label="Editer boutique"
              >
                <Edit2 size={16} />
              </Button>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {shop.description}
            </div>
          </div>
        </div>
        {/* Choix du thème de la boutique */}
        <div>
          <span className="block text-xs text-gray-500 mb-2 font-semibold">
            Thème de la boutique
          </span>
          <div className="flex gap-3 flex-wrap">
            {themes.map((t) => (
              <button
                key={t.value}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
                  ${shop.theme === t.value
                    ? "border-[#f6a623] bg-[#f6a623]/10 font-bold"
                    : "border-gray-200 dark:border-[#232c3b] bg-gray-50 dark:bg-[#232c3b] hover:border-[#f6a623]"}
                `}
                onClick={() => setShop((s) => ({ ...s, theme: t.value }))}
              >
                <span
                  className="inline-block w-4 h-4 rounded-full border"
                  style={{ background: t.color }}
                />
                {t.name}
              </button>
            ))}
          </div>
        </div>
        {/* Choix du template de la boutique */}
        <div>
          <span className="block text-xs text-gray-500 mb-2 font-semibold">
            Template de la boutique
          </span>
          <div className="flex gap-3 flex-wrap">
            {SHOP_TEMPLATES.map((tpl) => (
              <button
                key={tpl.value}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
                  ${shop.template === tpl.value
                    ? "border-[#f6a623] bg-[#f6a623]/10 font-bold"
                    : "border-gray-200 dark:border-[#232c3b] bg-gray-50 dark:bg-[#232c3b] hover:border-[#f6a623]"}
                `}
                onClick={() => setShop((s) => ({ ...s, template: tpl.value }))}
              >
                {tpl.icon}
                {tpl.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-gray-400">Adresse</span>
            <div className="font-medium">{shop.address}</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Téléphone</span>
            <div className="font-medium">{shop.phone}</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Email</span>
            <div className="font-medium">{shop.email}</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Site web</span>
            <a
              href={shop.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#f6a623] hover:underline"
            >
              {shop.website}
            </a>
          </div>
          <div>
            <span className="text-xs text-gray-400">Facebook</span>
            <a
              href={shop.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#f6a623] hover:underline"
            >
              {shop.facebook}
            </a>
          </div>
          <div>
            <span className="text-xs text-gray-400">Instagram</span>
            <a
              href={shop.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#f6a623] hover:underline"
            >
              {shop.instagram}
            </a>
          </div>
          <div>
            <span className="text-xs text-gray-400">Horaires</span>
            <div className="font-medium">{shop.hours}</div>
          </div>
        </div>
        {editShop && (
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setEditShop(false);
            }}
          >
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Nom de la boutique
              </span>
              <Input
                value={shop.name}
                onChange={(e) =>
                  setShop((s) => ({ ...s, name: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Description
              </span>
              <Input
                value={shop.description}
                onChange={(e) =>
                  setShop((s) => ({ ...s, description: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Adresse
              </span>
              <Input
                value={shop.address}
                onChange={(e) =>
                  setShop((s) => ({ ...s, address: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Téléphone
              </span>
              <Input
                value={shop.phone}
                onChange={(e) =>
                  setShop((s) => ({ ...s, phone: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Email
              </span>
              <Input
                value={shop.email}
                onChange={(e) =>
                  setShop((s) => ({ ...s, email: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Site web
              </span>
              <Input
                value={shop.website}
                onChange={(e) =>
                  setShop((s) => ({ ...s, website: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Facebook
              </span>
              <Input
                value={shop.facebook}
                onChange={(e) =>
                  setShop((s) => ({ ...s, facebook: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Instagram
              </span>
              <Input
                value={shop.instagram}
                onChange={(e) =>
                  setShop((s) => ({ ...s, instagram: e.target.value }))
                }
              />
            </label>
            <label>
              <span className="block text-xs text-gray-500 mb-1">
                Horaires
              </span>
              <Input
                value={shop.hours}
                onChange={(e) =>
                  setShop((s) => ({ ...s, hours: e.target.value }))
                }
              />
            </label>
            <div className="col-span-2 flex justify-end gap-2">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setEditShop(false)}
              >
                Annuler
              </Button>
              <Button type="submit" variant="default">
                <Save size={14} className="mr-2" />
                Sauvegarder
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}