import { useState, type JSX } from "react";
import type { PaymentCard, PaymentMethodType } from "./type";

const paymentIcons: Record<PaymentMethodType, JSX.Element> = {
  CC: <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-7" />,
  PayPal: <img src="/assets/paypal.svg" alt="PayPal" className="h-7" />,
  Bank: <span className="font-bold text-lg text-white">🏦</span>,
  "Orange Money": <img src="/assets/orange-money.svg" alt="Orange Money" className="h-7" />,
  Mobicash: <img src="/assets/mobicash.svg" alt="Mobicash" className="h-7" />,
  "Sama Money": <img src="/assets/sama-money.svg" alt="Sama Money" className="h-7" />,
};

function getCardBg(type: PaymentMethodType) {
  switch (type) {
    case "CC":
      return "bg-gradient-to-br from-[#f7971e] via-[#ffd200] to-[#f7971e]";
    case "PayPal":
      return "bg-gradient-to-br from-[#485563] to-[#29323c]";
    case "Orange Money":
      return "bg-gradient-to-br from-[#ff9100] to-[#ffb300]";
    case "Mobicash":
      return "bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#203a43]";
    case "Sama Money":
      return "bg-gradient-to-br from-[#43cea2] to-[#185a9d]";
    case "Bank":
      return "bg-gradient-to-br from-[#232526] to-[#414345]";
    default:
      return "bg-gradient-to-br from-[#e96443] to-[#904e95]";
  }
}

export function PaymentCard3D({ card }: { card: PaymentCard }) {
  const [flipped, setFlipped] = useState(false);

  // Pour la démo, on masque le vrai CVV
  const cvv = card.cvv ? card.cvv.replace(/\d/g, "*") : "***";

  return (
    <div className="flex justify-center items-center w-full py-6">
      <div
        className="relative"
        style={{
          width: 340,
          height: 210,
          perspective: "1200px",
        }}
      >
        <div
          className={`transition-transform duration-700 ease-in-out w-full h-full`}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          tabIndex={0}
          onClick={() => setFlipped((f) => !f)}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") setFlipped(f => !f);
          }}
          aria-label="Retourner la carte"
        >
          {/* Face avant */}
          <div
            className={`absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl flex flex-col justify-between px-8 py-6 cursor-pointer ${getCardBg(card.type)}`}
            style={{
              backfaceVisibility: "hidden",
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.25), 0 1.5px 6px 0 rgba(246,166,35,0.15)",
            }}
          >
            {/* Puce */}
            <div className="absolute left-8 top-7 w-10 h-7 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md shadow-inner border-2 border-yellow-300 flex items-center justify-center z-10">
              <div className="w-6 h-3 bg-yellow-100 rounded-sm" />
            </div>
            {/* Hologramme */}
            <div className="absolute right-8 top-7 w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300 opacity-60 blur-[2px] z-10" />
            {/* Bank & Logo */}
            <div className="flex items-center justify-between z-20">
              <span className="font-semibold text-white text-lg drop-shadow">{card.bank}</span>
              {paymentIcons[card.type]}
            </div>
            {/* Numéro */}
            <div className="flex-1 flex items-center justify-between z-20 mt-2">
              <span className="text-white tracking-widest text-2xl font-mono drop-shadow">{card.number}</span>
              <span className="text-xs text-white/80 font-semibold">3D SECURE</span>
            </div>
            {/* Infos bas */}
            <div className="flex justify-between items-end text-xs text-white/80 mt-4 z-20">
              <div>
                <div className="font-semibold">Card Holder</div>
                <div className="font-medium">{card.holder}</div>
              </div>
              <div>
                <div className="font-semibold">Expiry</div>
                <div className="font-medium">{card.expiry}</div>
              </div>
            </div>
            {/* Reflet */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden z-0">
              <div className="absolute left-0 top-0 w-1/2 h-1/3 bg-white/20 blur-lg rotate-12" />
            </div>
          </div>
          {/* Face arrière */}
          <div
            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl bg-gray-900 flex flex-col justify-between px-8 py-6 cursor-pointer"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.25), 0 1.5px 6px 0 rgba(246,166,35,0.15)",
            }}
          >
            {/* Bande magnétique */}
            <div className="w-full h-8 bg-gray-800 rounded mt-2" />
            {/* Zone signature + CVV */}
            <div className="flex flex-col mt-8">
              <div className="flex items-center gap-2">
                <span className="w-24 h-6 bg-gray-200 rounded-sm" />
                <span className="ml-auto text-xs text-gray-400 font-mono tracking-widest select-none">
                  CVV&nbsp;
                  <span className="bg-gray-300 px-2 py-1 rounded text-gray-700 tracking-widest line-through">
                    {cvv}
                  </span>
                </span>
              </div>
              <div className="text-[10px] text-gray-400 mt-2">
                <span className="font-bold">Signature</span>
              </div>
            </div>
            {/* Logo */}
            <div className="flex justify-end items-end mt-auto">
              {paymentIcons[card.type]}
            </div>
          </div>
        </div>
        {/* Indication flip */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-400 select-none pointer-events-none">
          {flipped ? "Cliquez pour voir le recto" : "Cliquez pour voir le verso"}
        </div>
      </div>
    </div>
  );
}