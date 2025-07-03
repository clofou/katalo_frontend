import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import HomePage from "./pages/Website/Home";
import PolitiquePage from "./pages/Website/Politique";
import InscriptionPage from "./pages/Website/Inscription";
import ForgotPasswordPage from "./pages/Website/ForgotPassword";
import VerificationPage from "./pages/Website/VerificationPage";
import ChangePasswordPage from "./pages/Website/ChangePassword";
import ConnexionPage from "./pages/Website/Connexion";
import type { JSX } from "react";
import { DashboardPage } from "./pages/Dashboard/DasboardPage";

function AnimatedRoutes() {
  const location = useLocation();

  const routes: Record<string, JSX.Element> = {
    "/": <HomePage />,
    "/connexion": <ConnexionPage />,
    "/inscription": <InscriptionPage />,
    "/forgot": <ForgotPasswordPage />,
    "/verification": <VerificationPage />,
    "/change-password": <ChangePasswordPage />,
    "/politique": <PolitiquePage />,

    /** Dashboard Routes */
    "/dashboard": <DashboardPage />

  };

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        {routes[location.pathname as string] || <HomePage />}
      </div>
    </AnimatePresence>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <AnimatedRoutes />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
