import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";

// Données simulées
const activeUsers = 21500;
const userHistogram = Array.from({ length: 30 }, (_, i) => ({
  minute: `${i + 1}`,
  users: Math.floor(Math.random() * 15) + 10,
}));

const countries = [
  {
    flag: "🇲🇱",
    name: "Mali",
    value: 30000,
    trend: 30,
    trendColor: "text-orange-500",
  },
  {
    flag: "🇧🇷",
    name: "Brazil",
    value: 30000,
    trend: -15.8,
    trendColor: "text-red-500",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    value: 25000,
    trend: 35.8,
    trendColor: "text-green-600",
  },
];

export function RightBoardStats() {
  return (
    <Card className="w-full h-full flex flex-col justify-between min-w-0">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-xs sm:text-sm font-semibold mb-1">
              Utilisateurs des 30 dernières minutes
            </CardTitle>
            <div className="text-2xl sm:text-3xl font-bold">
              {(activeUsers / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              utilisateurs par minutes
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 p-1">
            <svg width={20} height={20} fill="none" viewBox="0 0 20 20">
              <circle cx={10} cy={4} r={1.5} fill="currentColor" />
              <circle cx={10} cy={10} r={1.5} fill="currentColor" />
              <circle cx={10} cy={16} r={1.5} fill="currentColor" />
            </svg>
          </button>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {/* Histogramme */}
        <div className="w-full h-16 sm:h-20 md:h-24 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userHistogram}>
              <Bar
                dataKey="users"
                fill="#f6a623"
                radius={[4, 4, 0, 0]}
                barSize={6}
              />
              <Tooltip
                cursor={{ fill: "#f6a62322" }}
                contentStyle={{
                  borderRadius: 8,
                  background: "#fff8ef",
                  border: "1px solid #f6a623",
                  color: "#222",
                  fontWeight: 500,
                  fontSize: 14,
                  boxShadow: "0 2px 8px #f6a62322",
                }}
                labelFormatter={(minute) => `Minute ${minute}`}
                formatter={(value) => [`${value} utilisateurs`, ""]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Ventes par pays */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-xs sm:text-sm">
              Ventes par pays
            </span>
            <span className="font-semibold text-xs sm:text-sm">Ventes</span>
          </div>
          <ul className="space-y-3">
            {countries.map((c) => (
              <li key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xl sm:text-2xl">{c.flag}</span>
                  <div className="min-w-0">
                    <div className="font-medium text-xs sm:text-sm truncate">
                      {c.value / 1000}k
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {c.name}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-14 sm:w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#222]"
                      style={{ width: `${Math.abs(c.trend) + 40}%` }}
                    />
                  </div>
                  <span className={`text-xs font-semibold ${c.trendColor}`}>
                    {c.trend > 0 ? "▲" : "▼"} {Math.abs(c.trend)}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full rounded-full font-semibold text-xs sm:text-sm"
        >
          voir aperçu
        </Button>
      </CardFooter>
    </Card>
  );
}
