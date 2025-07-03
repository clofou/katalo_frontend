import type { ReactNode } from "react";

type MenuItemProps = {
  label: string;
  icon: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export const MenuItem = ({ label, icon, active, onClick }: MenuItemProps) => (
  <button
    className={`flex items-center gap-4 w-full px-3 py-2 rounded-lg transition 
      ${
        active
          ? "bg-[#f6a623]/10 text-[#f6a623] dark:bg-[#f6a623]/20 dark:text-[#f6a623]"
          : "hover:bg-gray-100 dark:hover:bg-[#232c3b] text-gray-700 dark:text-gray-200"
      }
      focus:outline-none focus:ring-2 focus:ring-[#f6a623]/40`}
    onClick={onClick}
    aria-current={active ? "page" : undefined}
    type="button"
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium text-base">{label}</span>
  </button>
);
