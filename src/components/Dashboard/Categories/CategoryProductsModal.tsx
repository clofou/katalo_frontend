import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Product = {
  name: string;
  img: string;
  price: number;
};

type Props = {
  open: boolean;
  onClose: () => void;
  categoryName: string;
  products: Product[];
};

export function CategoryProductsModal({
  open,
  onClose,
  categoryName,
  products,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <div className="p-6 space-y-4 min-w-[350px]">
        <h3 className="text-lg font-bold mb-2">Produits de {categoryName}</h3>
        {products.length === 0 ? (
          <div className="text-gray-500 text-center">
            Aucun produit dans cette catégorie.
          </div>
        ) : (
          <ul className="space-y-2 max-h-72 overflow-y-auto">
            {products.map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-gray-50 rounded p-2"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-10 h-10 rounded object-cover border"
                />
                <div className="flex-1">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">
                    {p.price.toFixed(2)} €
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
