import { CheckCircle2, PlusCircle, ShoppingCart, XCircle } from "lucide-react";
import { KpiCard } from "../Common/KpiCard";
import { ProductsTable } from "./ProductsTable";

export function ProductListSection() {
  const kpis = [
    {
      title: "Total Produits",
      value: 240,
      icon: <ShoppingCart className="text-[#f6a623]" />,
      colorClass: "bg-[#f6a623]/10",
    },
    {
      title: "Produits vendus",
      value: 12,
      icon: <PlusCircle className="text-blue-500" />,
      colorClass: "bg-blue-100",
    },
    {
      title: "Produits Disponible",
      value: 180,
      icon: <CheckCircle2 className="text-green-600" />,
      colorClass: "bg-green-100",
    },
    {
      title: "Produits dans Brouillon",
      value: 8,
      icon: <XCircle className="text-red-500" />,
      colorClass: "bg-red-100",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div className={kpi.colorClass + " rounded-xl"}>
            <KpiCard title={kpi.title} value={kpi.value} icon={kpi.icon} />
          </div>
        ))}
      </div>
      <ProductsTable />
    </div>
  );
}
