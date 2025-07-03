import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";
import clsx from "clsx";
import type { Order, OrderProduct } from "./types";

type Props = {
  open: boolean;
  onClose: () => void;
  order: Order | null;
  onDeliver: () => void;
};

export function OrderDetailsPanel({ open, onClose, order, onDeliver }: Props) {
  // Empêche le scroll du body quand le panel est ouvert sur mobile
  useEffect(() => {
    if (open && window.innerWidth < 768)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!order) return null;

  const total = order.products.reduce(
    (sum: number, p: OrderProduct) => sum + p.unitPrice * p.quantity,
    0
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full" showCloseButton={false}>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Détails de la commande</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon">
              <X />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            Commande {order.id} du {order.date}
          </div>
          {order.products.length > 1 ? (
            <table className="w-full text-sm mb-2">
              <thead>
                <tr className="text-left text-gray-400">
                  <th>Produit</th>
                  <th>Qté</th>
                  <th>Prix</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((p: OrderProduct, idx: number) => (
                  <tr key={idx}>
                    <td className="flex items-center gap-2 py-1">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-8 h-8 rounded object-cover border"
                      />
                      <span>{p.name}</span>
                    </td>
                    <td>{p.quantity}</td>
                    <td>{p.unitPrice} €</td>
                    <td>{(p.unitPrice * p.quantity).toFixed(2)} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex items-center gap-4">
              <img
                src={order.products[0].img}
                alt={order.products[0].name}
                className="w-12 h-12 rounded object-cover border"
              />
              <div>
                <div className="font-semibold">{order.products[0].name}</div>
                <div className="text-xs text-gray-400">
                  Qté: {order.products[0].quantity} | Prix unitaire:{" "}
                  {order.products[0].unitPrice} €
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              Paiement:{" "}
              <span
                className={
                  order.payment === "Paid" ? "text-green-500" : "text-red-500"
                }
              >
                {order.payment}
              </span>
            </div>
            <div>
              Status:{" "}
              <span
                className={clsx(
                  "font-semibold flex items-center gap-1",
                  order.status.color
                )}
              >
                {order.status.icon}
                {order.status.label}
              </span>
            </div>
          </div>
          {order.status.label !== "Delivered" && (
            <>
              <Button
                className="w-full mt-4 flex items-center gap-2"
                variant="default"
                onClick={onDeliver}
                disabled={order.payment !== "Paid"}
              >
                <CheckCircle2 size={18} />
                Marquer comme livré
              </Button>
              {order.payment !== "Paid" && (
                <div className="text-xs text-red-500 mt-2 text-center">
                  Impossible de livrer une commande non payée.
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
