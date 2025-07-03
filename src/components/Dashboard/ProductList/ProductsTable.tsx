import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import type { Product } from "./types";

// Tabs and fake data
const tabs = [
  { label: "All product", key: "all", count: 240 },
  { label: "stock", key: "stock" },
  { label: "rupture", key: "rupture" },
];

const products: Product[] = Array.from({ length: 24 }, (_, i) => ({
  no: i + 1,
  id: "#ORD" + String(i + 1).padStart(4, "0"),
  nom: "Gestner",
  categorie: "",
  img: "kdj",
  date: "01-01-2025",
  price: 209,
  stock: 23,
}));

export function ProductsTable() {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [, setSelectedProduct] = useState<Product | null>(null);
  const [, setPanelOpen] = useState(false);

  // Filter products by tab and search
  let filtered = products;
  if (tab === "stock") filtered = products.filter((o) => o.stock !== 0);
  if (tab === "rupture") filtered = products.filter((o) => o.stock === 0);
  if (search)
    filtered = filtered.filter(
      (o) =>
        o.nom.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase())
    );

  // Pagination
  const pageSize = 10;
  const pageCount = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {/* Tabs */}
            <div className="flex gap-1 bg-[#f6a623]/10 dark:bg-[#232c3b] rounded-lg p-1">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  className={clsx(
                    "px-4 py-1.5 rounded-lg text-sm font-semibold transition",
                    tab === t.key
                      ? "bg-[#f6a623] text-white shadow"
                      : "bg-transparent text-[#f6a623] dark:text-[#f6a623] hover:bg-[#f6a623]/20"
                  )}
                  onClick={() => {
                    setTab(t.key);
                    setPage(1);
                  }}
                >
                  {t.label}
                  {t.count && (
                    <span className="ml-1 font-bold">({t.count})</span>
                  )}
                </button>
              ))}
            </div>
            {/* Search & actions */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 min-w-[180px] max-w-xs">
                <input
                  type="text"
                  placeholder="Search product report"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="pl-10 pr-4 py-2 rounded-full bg-[#f8f9fa] dark:bg-[#232c3b] bproduct-0 focus:ring-0 text-sm shadow-none w-full text-[#00332e] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
                  size={18}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bproduct-none bg-[#f6a623]/10 text-[#f6a623] hover:bg-[#f6a623]/20 dark:bg-[#232c3b]"
              >
                <Filter size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bproduct-none bg-gray-100 dark:bg-[#232c3b]"
              >
                <MoreVertical size={18} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-2 text-left">No.</th>
                  <th className="py-2 px-2 text-left">Product Id</th>
                  <th className="py-2 px-2 text-left">Produit</th>
                  <th className="py-2 px-2 text-left">Categorie</th>
                  <th className="py-2 px-2 text-left">Nb produits</th>
                  <th className="py-2 px-2 text-left">Prix</th>
                  <th className="py-2 px-2 text-left">Date</th>
                  <th className="py-2 px-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td
                      colSpan={9}
                      className="py-6 text-center text-gray-400 dark:text-gray-500"
                    >
                      Aucune commande trouvée.
                    </td>
                  </tr>
                ) : (
                  paginated.map((product) => {
                    const totalPrice = product.price;
                    return (
                      <tr key={product.no + product.id}>
                        <td className="py-2 px-2">{product.no}</td>
                        <td className="py-2 px-2">{product.id}</td>
                        <td className="py-2 px-2 flex items-center gap-2">
                          <img
                            src={product.img}
                            alt={product.nom}
                            className="w-8 h-8 rounded object-cover bproduct"
                          />
                          <span className="truncate">{product.nom}</span>
                        </td>
                        <td className="py-2 px-2">{product.stock}</td>
                        <td className="py-2 px-2">
                          {totalPrice.toFixed(2)} CFA
                        </td>
                        <td className="py-2 px-2">{product.date}</td>
                        <td className="py-2 px-2">{product.price}</td>

                        <td className="py-2 px-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setSelectedProduct(product);
                              setPanelOpen(true);
                            }}
                          >
                            Voir
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft size={18} className="mr-1" /> Previous
            </Button>
            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: pageCount }, (_, i) => (
                <Button
                  key={i}
                  variant={page === i + 1 ? "default" : "outline"}
                  size="sm"
                  className={clsx(
                    "rounded-lg px-3",
                    page === i + 1 ? "bg-[#f6a623] text-white" : ""
                  )}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </Button>
              )).slice(0, 5)}
              {pageCount > 5 && (
                <>
                  <span className="px-2 text-gray-400 dark:text-gray-500">
                    ....
                  </span>
                  <Button
                    variant={page === pageCount ? "default" : "outline"}
                    size="sm"
                    className={clsx(
                      "rounded-lg px-3",
                      page === pageCount ? "bg-[#f6a623] text-white" : ""
                    )}
                    onClick={() => setPage(pageCount)}
                  >
                    {pageCount}
                  </Button>
                </>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg"
              disabled={page === pageCount || pageCount === 0}
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            >
              Next <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Modal pour tous les écrans */}
      
    </div>
  );
}
