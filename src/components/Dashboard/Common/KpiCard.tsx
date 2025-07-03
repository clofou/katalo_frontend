import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

type KpiCardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: string;
  trendColor?: string;
};

export function KpiCard({ title, value, icon, trend, trendColor }: KpiCardProps) {
  return (
    <Card className="flex-1 min-w-[180px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-2xl">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className={`text-xs mt-1 ${trendColor ?? "text-muted-foreground"}`}>
            {trend}
          </div>
        )}
      </CardContent>
    </Card>
  );
}