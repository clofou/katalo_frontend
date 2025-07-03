import { MenuItem } from "./MenuItem";
import {
  LayoutDashboard,
  Package,
  Users,
  Tags,
  Repeat,
  Plus,
  List,
  Star,
  User,
  HelpCircle,
  Store,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const menuSections = [
  {
    title: "Menu Principal",
    items: [
      { label: "Tableau de bord", icon: <LayoutDashboard size={20} /> },
      { label: "Commandes", icon: <Package size={20} /> },
      { label: "Clients", icon: <Users size={20} /> },
      { label: "Catégories", icon: <Tags size={20} /> },
      { label: "Transactions", icon: <Repeat size={20} /> },
    ],
  },
  {
    title: "Produits",
    items: [
      { label: "Ajouter un produit", icon: <Plus size={20} /> },
      { label: "Liste des produits", icon: <List size={20} /> },
      { label: "Notes des produits", icon: <Star size={20} /> },
    ],
  },
  {
    title: "Outils",
    items: [
      { label: "Profil", icon: <User size={20} /> },
      { label: "Aide", icon: <HelpCircle size={20} /> },
    ],
  },
];

type MenuProps = {
  active: string;
  onChange: (label: string) => void;
};

export const Menu = ({ active, onChange }: MenuProps) => {
  const compagnyName = "Bagayoko Service";
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-30 lg:hidden bg-white p-2 rounded-full shadow border border-gray-200"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <MenuIcon size={24} />
      </button>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Drawer (mobile) & Sidebar (desktop) */}
      <aside
        className={clsx(
          "flex flex-col gap-4 w-72 overflow-y-auto h-dvh py-6 px-4 bg-white dark:bg-[#181f2a] shadow-xl border-r border-gray-100 dark:border-[#232c3b] z-40 transition-transform duration-300 fixed top-0 left-0",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:block"
        )}
      >
        {/* Close button mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          <X size={24} />
        </button>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          {/* Logo clair */}
          <img
            src="/assets/acceuil/LOGO.png"
            alt="Logo du site"
            className="w-28 h-auto block dark:hidden"
          />
          {/* Logo blanc pour dark mode */}
          <img
            src="/assets/acceuil/LOGO_blanc.png"
            alt="Logo du site (sombre)"
            className="w-28 h-auto hidden dark:block"
          />
          <Store className="text-3xl text-[#f6a623]" />
        </div>
        {/* Company */}
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 dark:bg-[#232c3b] p-3 mb-2 border border-gray-100 dark:border-[#232c3b]">
          <Store className="text-2xl text-[#f6a623]" />
          <div>
            <div className="text-xs text-gray-400 dark:text-gray-300">
              Compagnie
            </div>
            <div className="font-semibold text-gray-700 dark:text-gray-100">
              {compagnyName}
            </div>
          </div>
        </div>
        {/* Menu Sections */}
        <nav className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs text-gray-400 dark:text-gray-300 font-bold uppercase tracking-wider mb-2 pl-1">
                {section.title}
              </h3>
              <div className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <MenuItem
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                    active={active === item.label}
                    onClick={() => {
                      onChange(item.label);
                      setOpen(false); // ferme le menu sur mobile
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
        {/* Footer */}
        <div className="mt-2 text-center text-xs text-gray-300 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Katalo
        </div>
      </aside>
    </>
  );
};
