import type { Shop, ShopTheme } from "./type";

export function ShopSummaryCard({
  shop,
  themes,
  setShop,
}: {
  shop: Shop;
  themes: ShopTheme[];
  setShop: (fn: (s: Shop) => Shop) => void;
}) {
  return (
    <div className="bg-white dark:bg-[#232c3b] rounded-xl shadow border border-gray-100 dark:border-[#232c3b] p-6 flex flex-col items-center gap-4">
      <img
        src={shop.logo}
        alt="logo"
        className="w-16 h-16 rounded-xl border-2 border-gray-200 dark:border-[#232c3b] shadow"
      />
      <div className="text-lg font-bold text-gray-800 dark:text-white">
        {shop.name}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-300 text-center">
        {shop.description}
      </div>
      <div className="flex flex-col gap-1 mt-2 text-xs text-gray-500 dark:text-gray-300">
        <span>
          <b>Adresse :</b> {shop.address}
        </span>
        <span>
          <b>Tél :</b> {shop.phone}
        </span>
        <span>
          <b>Email :</b> {shop.email}
        </span>
        <span>
          <b>Horaires :</b> {shop.hours}
        </span>
      </div>
      <div className="flex gap-2 mt-2">
        <a
          href={shop.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[#f6a623]"
        >
          Facebook
        </a>
        <a
          href={shop.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[#f6a623]"
        >
          Instagram
        </a>
      </div>
      <div className="mt-4 w-full">
        <span className="block text-xs text-gray-400 mb-1">
          Thème boutique
        </span>
        <div className="flex gap-2 flex-wrap">
          {themes.map((t) => (
            <span
              key={t.value}
              className={`inline-block w-6 h-6 rounded-full border-2 cursor-pointer transition
                ${shop.theme === t.value
                  ? "border-[#f6a623] ring-2 ring-[#f6a623]"
                  : "border-gray-200 dark:border-[#232c3b]"}
              `}
              style={{ background: t.color }}
              title={t.name}
              onClick={() => setShop((s) => ({ ...s, theme: t.value }))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}