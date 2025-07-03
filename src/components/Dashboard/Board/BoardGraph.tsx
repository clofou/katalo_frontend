import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import clsx from "clsx";

const kpis = [
  { key: "clients", label: "Clients", value: 52 },
  { key: "produits", label: "Total des produits", value: 350 },
  { key: "stock", label: "Stock Produits", value: "2.5k" },
  { key: "rupture", label: "Rupture de Stock", value: "0.5k" },
  { key: "revenue", label: "Revenue", value: "250k" },
];

const dataByKpi: Record<string, { name: string; value: number }[]> = {
  clients: [
    { name: "Sun", value: 12 },
    { name: "Mon", value: 20 },
    { name: "Tue", value: 18 },
    { name: "Wed", value: 14 },
    { name: "Thu", value: 22 },
    { name: "Fri", value: 19 },
    { name: "Sat", value: 21 },
  ],
  produits: [
    { name: "Sun", value: 300 },
    { name: "Mon", value: 350 },
    { name: "Tue", value: 340 },
    { name: "Wed", value: 320 },
    { name: "Thu", value: 360 },
    { name: "Fri", value: 355 },
    { name: "Sat", value: 350 },
  ],
  stock: [
    { name: "Sun", value: 2.1 },
    { name: "Mon", value: 2.5 },
    { name: "Tue", value: 2.3 },
    { name: "Wed", value: 2.4 },
    { name: "Thu", value: 2.6 },
    { name: "Fri", value: 2.5 },
    { name: "Sat", value: 2.5 },
  ],
  rupture: [
    { name: "Sun", value: 0.3 },
    { name: "Mon", value: 0.5 },
    { name: "Tue", value: 0.4 },
    { name: "Wed", value: 0.5 },
    { name: "Thu", value: 0.6 },
    { name: "Fri", value: 0.5 },
    { name: "Sat", value: 0.5 },
  ],
  revenue: [
    { name: "Sun", value: 200 },
    { name: "Mon", value: 250 },
    { name: "Tue", value: 220 },
    { name: "Wed", value: 140 },
    { name: "Thu", value: 260 },
    { name: "Fri", value: 210 },
    { name: "Sat", value: 250 },
  ],
};


export function BoardGraph() {
  const [period, setPeriod] = useState<"this" | "last">("this");
  const [activeKpi, setActiveKpi] = useState("clients");

  // Simule la différence de période
  const chartData =
    period === "this"
      ? dataByKpi[activeKpi]
      : dataByKpi[activeKpi].map((d) => ({ ...d, value: Math.round(d.value * 0.7) }));

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Rapport de ce mois</CardTitle>
        <div className="flex gap-0.5 items-center bg-[#fff6e8] rounded-full p-1">
  <button
    className={clsx(
      "px-4 py-1.5 rounded-full text-sm font-semibold transition",
      period === "this"
        ? "bg-white text-[#f6a623] shadow"
        : "bg-transparent text-gray-400 hover:text-[#f6a623]"
    )}
    onClick={() => setPeriod("this")}
    type="button"
  >
    This week
  </button>
  <button
    className={clsx(
      "px-4 py-1.5 rounded-full text-sm font-semibold transition",
      period === "last"
        ? "bg-white text-[#f6a623] shadow"
        : "bg-transparent text-gray-400 hover:text-[#f6a623]"
    )}
    onClick={() => setPeriod("last")}
    type="button"
  >
    Last week
  </button>
</div>
      </CardHeader>
      <CardContent>
        {/* KPIs */}
        <div className="flex flex-row pl-10 gap-6 border-b border-muted mb-4 overflow-x-auto">
          {kpis.map((kpi) => (
            <button
              key={kpi.key}
              className={clsx(
                "flex flex-col items-start py-2 px-0 border-b-2 transition-all duration-200",
                activeKpi === kpi.key
                  ? "border-[#f6a623] text-[#f6a623] font-semibold"
                  : "border-transparent text-muted-foreground hover:text-[#f6a623]/80"
              )}
              style={{ minWidth: 90 }}
              onClick={() => setActiveKpi(kpi.key)}
            >
              <span className="text-lg font-bold">{kpi.value}</span>
              <span className="text-xs">{kpi.label}</span>
            </button>
          ))}
        </div>
        {/* Chart */}
        <div className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorKpi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f6a623" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f6a623" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  background: "#fff8ef",
                  border: "1px solid #f6a623",
                  color: "#222",
                  fontWeight: 500,
                  fontSize: 14,
                }}
                labelFormatter={(label) => {
                  // Pour l'exemple, on traduit "Wed" en "Mercredi" etc.
                  const days: Record<string, string> = {
                    Sun: "Dimanche",
                    Mon: "Lundi",
                    Tue: "Mardi",
                    Wed: "Mercredi",
                    Thu: "Jeudi",
                    Fri: "Vendredi",
                    Sat: "Samedi",
                  };
                  return days[label] || label;
                }}
                formatter={(value: number) => [value, kpis.find(k => k.key === activeKpi)?.label]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#f6a623"
                fill="url(#colorKpi)"
                strokeWidth={3}
                dot={{ r: 4, fill: "#f6a623", stroke: "#fff", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: "#fff", stroke: "#f6a623", strokeWidth: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}