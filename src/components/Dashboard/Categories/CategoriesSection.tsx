import { useState } from "react";
import { CategoryCard } from "./CategoryCard";
import { CategoriesTable } from "./CategoriesTable";
import { Button } from "@/components/ui/button";
import { AddCategoryModal } from "./AddCategoryModal";

const categories = [
  { name: "Électronique", img: "/assets/categories/electronique.png" },
  { name: "Vêtements", img: "/assets/categories/vetements.png" },
  { name: "Accessoires", img: "/assets/categories/accessoires.png" },
  { name: "Maison", img: "/assets/categories/maison.png" },
  { name: "Beauté", img: "/assets/categories/beaute.png" },
  { name: "Sport", img: "/assets/categories/sport.png" },
  { name: "Livres", img: "/assets/categories/livres.png" },
  { name: "Jouets", img: "/assets/categories/jouets.png" },
];

export function CategoriesSection() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Catégories</h2>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setShowAdd(true)}>
            Ajouter une catégorie
          </Button>
          <Button variant="outline">Voir plus</Button>
        </div>
      </div>
      {/* Grid de catégories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.slice(0, 8).map((cat) => (
          <CategoryCard key={cat.name} name={cat.name} img={cat.img} />
        ))}
      </div>
      {/* Table des catégories */}
      <CategoriesTable />
      <AddCategoryModal open={showAdd} onClose={() => setShowAdd(false)} />
    </div>
  );
}
