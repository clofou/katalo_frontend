import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Transaction, PaymentCard } from "./type";
import { Button } from "@/components/ui/button";
import { PaymentCard3D } from "./PaymentCard3D";

function getCardLogo(type: string) {
  switch (type) {
    case "CC":
      return "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg";
    case "PayPal":
      return "/assets/paypal.svg";
    case "Orange Money":
      return "/assets/orange-money.svg";
    case "Mobicash":
      return "/assets/mobicash.svg";
    case "Sama Money":
      return "/assets/sama-money.svg";
    case "Bank":
      return "/assets/bank.svg";
    default:
      return "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";
  }
}

export function TransactionDetailsModal({
  open,
  onClose,
  transaction,
  onDeactivateCard,
  onReactivateCard,
}: {
  open: boolean;
  onClose: () => void;
  transaction?: Transaction;
  onDeactivateCard?: (card: PaymentCard) => void;
  onReactivateCard?: (card: PaymentCard) => void;
}) {
  if (!transaction) return null;

  const card = transaction.card ?? {
    bank: transaction.method,
    number: "**** **** **** 2345",
    holder: transaction.name,
    expiry: "02/30",
    status: "Active",
    transactions: 1,
    revenue: transaction.total,
    type: transaction.method,
    cvv: "***",
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Carte 3D */}
        <div className="px-7 pt-7 pb-2">
          <PaymentCard3D card={card} />
        </div>
        {/* Infos transaction */}
        <div className="bg-white dark:bg-[#18181b] px-7 py-6 rounded-b-2xl flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Transaction ID :</span>
              <div className="text-gray-700 dark:text-gray-200">
                {transaction.id}
              </div>
            </div>
            <div>
              <span className="font-semibold">Commande :</span>
              <div className="text-gray-700 dark:text-gray-200">
                {transaction.orderId}
              </div>
            </div>
            <div>
              <span className="font-semibold">Client :</span>
              <div className="text-gray-700 dark:text-gray-200">
                {transaction.name}
              </div>
            </div>
            <div>
              <span className="font-semibold">Date :</span>
              <div className="text-gray-700 dark:text-gray-200">
                {transaction.date}
              </div>
            </div>
            <div>
              <span className="font-semibold">Montant :</span>
              <div className="text-gray-700 dark:text-gray-200">
                {transaction.total}
              </div>
            </div>
            <div>
              <span className="font-semibold">Méthode :</span>
              <div className="text-gray-700 dark:text-gray-200 flex items-center gap-2">
                <img
                  src={getCardLogo(transaction.method)}
                  alt="logo"
                  className="h-5"
                />
                {transaction.method}
              </div>
            </div>
            <div>
              <span className="font-semibold">Statut :</span>
              <span
                className={transaction.status.color + " font-semibold ml-1"}
              >
                {transaction.status.label}
              </span>
            </div>
          </div>
          {/* Produits */}
          <div>
            <span className="font-semibold">Produits :</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {transaction.products.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 rounded-lg border p-2 bg-gray-50 dark:bg-[#232c3b]"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-12 h-12 rounded object-cover border"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-gray-500">x{p.quantity}</div>
                  </div>
                  <div className="font-semibold">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Bouton désactiver/activer */}
          {card.status === "Active" && onDeactivateCard && (
            <Button
              variant="destructive"
              className="w-full mt-2"
              onClick={() => {
                onDeactivateCard(card);
                onClose();
              }}
            >
              Désactiver
            </Button>
          )}
          {card.status === "Inactive" && onReactivateCard && (
            <Button
              variant="default"
              className="w-full mt-2"
              onClick={() => {
                onReactivateCard(card);
                onClose();
              }}
            >
              Réactiver
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
