import { KpiCard } from "../Common/KpiCard";
import { BoardGraph } from "./BoardGraph";
import { TransactionsCard } from "./TransactionsCard";
import { TopProductsCard } from "./TopProductsCard";
import {
  FaMoneyBillWave,
  FaShoppingCart,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";
import { RightBoardStats } from "./RightBoardStats";

export default function DashboardBoard({
  goToTransactionsSection,
}: {
  goToTransactionsSection?: () => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Total ventes"
          value="1 200 000 FCFA"
          icon={<FaMoneyBillWave />}
          trend="+12% cette semaine"
          trendColor="text-green-600"
        />
        <KpiCard
          title="Total commandes"
          value="320"
          icon={<FaShoppingCart />}
          trend="+5% cette semaine"
          trendColor="text-green-600"
        />
        <KpiCard
          title="Commandes en attente"
          value="8"
          icon={<FaClock />}
          trend="Stable"
          trendColor="text-muted-foreground"
        />
        <KpiCard
          title="Commandes annulées"
          value="3"
          icon={<FaTimesCircle />}
          trend="-2% cette semaine"
          trendColor="text-red-600"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <BoardGraph />
        </div>
        <div>
          <RightBoardStats />
        </div>
      </div>
      {/* Third row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TransactionsCard goToTransactionsSection={goToTransactionsSection} />
        <TopProductsCard />
      </div>
    </div>
  );
}
