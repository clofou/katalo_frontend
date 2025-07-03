import { useState, type JSX } from "react";
import { Menu } from "@/components/Dashboard/Layout/Menu/Menu";
import DashboardBoard from "@/components/Dashboard/Board/DashboardBoard";
import { DashboardHeader } from "@/components/Dashboard/Layout/DashboardHeader";
import { ThemeProvider } from "@/context/ThemeContext";
import { OrderSection } from "@/components/Dashboard/Order/OrderSection";
import { ClientsSection } from "@/components/Dashboard/Clients/ClientsSection";
import { CategoriesSection } from "@/components/Dashboard/Categories/CategoriesSection";
import { TransactionSection } from "@/components/Dashboard/Transaction/TransactionSection";
import { ProfileSection } from "@/components/Dashboard/Profile/ProfileSection";
import { ProductSection } from "@/components/Dashboard/AddProduct/ProductSection";
import { ProductListSection } from "@/components/Dashboard/ProductList/ProductListSection";
import ProductReviewSection from "@/components/Dashboard/ProductReview/ProductReviewSection";

const ContentByMenu: Record<string, JSX.Element> = {
  "Tableau de bord": <DashboardBoard />,
  Commandes: <OrderSection />,
  Clients: <ClientsSection />,
  Catégories: <CategoriesSection />,
  Transactions: <TransactionSection />,
  "Ajouter un produit": <ProductSection />,
  "Liste des produits": <ProductListSection />,
  "Notes des produits": <ProductReviewSection />,
  Profil: <ProfileSection />,
  Aide: (
    <>
      <div className="text-2xl font-bold mb-4">Aide</div>
      <div className="text-gray-500">FAQ et support utilisateur.</div>
    </>
  ),
};

export const DashboardPage = () => {
  const [activeMenu, setActiveMenu] = useState("Tableau de bord");

  return (
    <ThemeProvider>
      <div className="w-full h-dvh overflow-y-hidden font-['Lato',sans-serif] text-[#6a717f] dark:text-gray-200 bg-gray-50 dark:bg-[#151a23] flex">
        <Menu active={activeMenu} onChange={setActiveMenu} />
        <main className="flex-1 flex overflow-y-auto flex-col min-h-dvh bg-white dark:bg-[#181f2a]">
          <DashboardHeader title={activeMenu} />
          <section className="flex-1 p-8">
            {activeMenu === "Tableau de bord" ? (
              <DashboardBoard
                goToTransactionsSection={() => setActiveMenu("Transactions")}
              />
            ) : (
              ContentByMenu[activeMenu] || (
                <div className="text-gray-400 dark:text-gray-500">
                  Aucun contenu pour ce menu.
                </div>
              )
            )}
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};
