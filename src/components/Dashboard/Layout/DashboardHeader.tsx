import { Input } from "@/components/ui/input";
import { useTheme } from "@/context/ThemeContext";
import { Search, Bell, Sun, Moon } from "lucide-react";

type DashboardHeaderProps = {
  title: string;
};

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-[#181f2a] px-4 md:px-12 py-4 flex flex-wrap items-center gap-4 shadow-sm">
      <h1 className="text-lg md:text-xl font-bold text-[#00332e] dark:text-white flex-1 min-w-[150px]">
        {title}
      </h1>
      <div className="flex-1 flex flex-wrap gap-3 items-center justify-end min-w-[220px]">
        <div className="relative w-full max-w-xs min-w-[160px] flex-1 order-2 md:order-none">
          <Input
            type="text"
            placeholder="Rechercher produits, utilisateurs…"
            className="pl-10 pr-4 py-2 rounded-full bg-[#f8f9fa] dark:bg-[#232c3b] border-0 focus:ring-0 text-sm shadow-none text-[#00332e] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
            size={18}
          />
        </div>
        <button className="rounded-full bg-white dark:bg-[#232c3b] hover:bg-gray-100 dark:hover:bg-[#2d3748] p-2 relative order-3">
          <Bell className="text-gray-400 dark:text-gray-300" size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#232c3b]"></span>
        </button>
        <button
          className="rounded-full bg-green-50 dark:bg-[#25313f] hover:bg-green-100 dark:hover:bg-[#2d3748] p-2 order-4"
          onClick={toggleTheme}
          aria-label="Changer le mode"
        >
          {theme === "dark" ? (
            <Moon className="text-green-400" size={20} />
          ) : (
            <Sun className="text-green-700" size={20} />
          )}
        </button>
        <img
          src="/assets/avatar.jpg"
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover border order-5 border-gray-200 dark:border-[#232c3b]"
        />
      </div>
    </header>
  );
}
