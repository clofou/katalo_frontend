import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

type AuthHeaderProps = {
  href: string;
};

const AuthHeader = ({href} : AuthHeaderProps) => (
  <div className="flex items-center gap-4">
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-white rounded-full p-1 shadow-2xl shadow-amber-400 cursor-pointer"
    >
      <NavLink to={href}>
        <img
        src="/assets/acceuil/ArrowLeft.png"
        alt="Retour"
        width={35}
      />
      </NavLink>
      
      
    </motion.div>
    <img className="w-32" src="/assets/acceuil/LOGO.png" alt="Logo du site" />
  </div>
);

export default AuthHeader;