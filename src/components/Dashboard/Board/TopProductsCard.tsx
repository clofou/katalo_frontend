import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const topProducts = [
  {
    name: "Apple iPhone 13",
    ref: "#FXZ-4567",
    price: "CFA 500k",
    image: "/assets/products/iphone13.png",
  },
  {
    name: "Nike Air Jordan",
    ref: "#FXZ-4567",
    price: "CFA 25k",
    image: "/assets/products/airjordan.png",
  },
  {
    name: "T-shirt",
    ref: "#FXZ-4567",
    price: "CFA 3k",
    image: "/assets/products/tshirt.png",
  },
  {
    name: "Assorted Cross Bag",
    ref: "#FXZ-4567",
    price: "CFA 3k",
    image: "/assets/products/bag.png",
  },
];

export function TopProductsCard() {
  const [search, setSearch] = useState("");

  const filtered = topProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.ref.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Top Produits</CardTitle>
        <button className="text-sm text-muted-foreground hover:text-[#f6a623] font-medium transition">
          Tous les produits
        </button>
      </CardHeader>
      <CardContent>
        <div className="bg-muted rounded-lg flex items-center px-3 py-2 mb-3">
          <Search size={16} className="text-muted-foreground mr-2" />
          <Input
            className="border-none bg-transparent p-0 h-6 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className="divide-y">
          {filtered.map((p) => (
            <li key={p.name} className="flex items-center gap-3 py-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-10 h-10 rounded object-cover border"
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{p.name}</div>
                <div className="text-xs text-muted-foreground truncate">
                  Item: {p.ref}
                </div>
              </div>
              <div className="font-semibold text-[#0e3a2b] text-sm whitespace-nowrap">
                {p.price}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
