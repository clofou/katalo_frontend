import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const transactions = Array.from({ length: 37 }, (_, i) => ({
  no: i + 1,
  id: `#${Math.floor(5000 + Math.random() * 2000)}`,
  date: "01 Oct | 11:29 am",
  status: ["Paid", "Pending", "Failed"][Math.floor(Math.random() * 3)],
  amount: `$${Math.floor(Math.random() * 1000)}`,
}));

const statusColor = {
  Paid: "bg-green-500",
  Pending: "bg-yellow-400",
  Failed: "bg-red-500",
};

const statusList = ["All", "Paid", "Pending", "Failed"];

type TransactionsCardProps = {
  goToTransactionsSection?: () => void;
};

export function TransactionsCard({
  goToTransactionsSection,
}: TransactionsCardProps) {
  const [filter, setFilter] = useState<string>("All");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.status === filter);

  const pageSize = 5;
  const pageCount = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  // Reset page if filter changes and current page is out of range
  if (page > pageCount && pageCount > 0) setPage(1);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Transaction</CardTitle>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#f6a623]/10 text-[#f6a623] border-none hover:bg-[#f6a623]/20 flex gap-2"
              size="sm"
            >
              Filtrer
              <Filter size={16} />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-36 p-0">
            <ul>
              {statusList.map((s) => (
                <li key={s}>
                  <button
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[#f6a623]/10 transition ${
                      filter === s ? "text-[#f6a623] font-semibold" : ""
                    }`}
                    onClick={() => {
                      setFilter(s);
                      setPopoverOpen(false);
                      setPage(1);
                    }}
                  >
                    {s === "All" ? "Tous" : s}
                  </button>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-400 font-medium border-b">
                <th className="py-2 pr-4 text-left">No.</th>
                <th className="py-2 pr-4 text-left">Id Client</th>
                <th className="py-2 pr-4 text-left">Date commande</th>
                <th className="py-2 pr-4 text-left">Status</th>
                <th className="py-2 pr-4 text-left">Montant</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-400">
                    Aucune transaction
                  </td>
                </tr>
              ) : (
                paginated.map((t) => (
                  <tr key={t.no + t.id} className="border-b last:border-b-0">
                    <td className="py-2 pr-4">{t.no}.</td>
                    <td className="py-2 pr-4">{t.id}</td>
                    <td className="py-2 pr-4">{t.date}</td>
                    <td className="py-2 pr-4">
                      <span className="flex items-center gap-2">
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            statusColor[t.status as keyof typeof statusColor]
                          }`}
                        ></span>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-2 pr-4">{t.amount}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              aria-label="Page précédente"
            >
              <ChevronLeft size={18} />
            </Button>
            <div className="text-xs text-gray-500 self-center">
              Page {page} / {pageCount || 1}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={page === pageCount || pageCount === 0}
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              aria-label="Page suivante"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
          <Button
            variant="outline"
            className="rounded-lg px-6"
            onClick={goToTransactionsSection}
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
