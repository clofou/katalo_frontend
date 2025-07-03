import { motion } from "framer-motion";
import AuthHeader from "../../components/Website/AuthComponents/AuthHeader";
import ConnexionForm from "../../components/Website/AuthComponents/Form/ConnexionForm";

function ConnexionPage() {
  return (
    <div className="flex justify-center items-center m-auto h-dvh p-10">
      <div className="flex justify-center items-stretch rounded-xl bg-white shadow-sm shadow-gray-300 md:w-250">
        {/** Gauche */}
        <motion.div
          initial={{ opacity: 1, x: 0 }} // ← animation de disparition
          className="md:flex-1/2 px-12 py-10 "
        >
          <AuthHeader href={"/#"} />
          <div>
            <h1 className="text-3xl font-semibold mt-7">Connexion</h1>
            <p className="mb-6 text-gray-500 text-sm">
              Se connecter pour accéder à son tableau de bord
            </p>
            <ConnexionForm />
          </div>
        </motion.div>
        {/** Droite */}
        <motion.div
          initial={{ opacity: 1, x: 0 }} // ← animation de disparition
          className="hidden items-center bg-[radial-gradient(circle_at_center,_white_0%,_white_30%,_rgba(253,230,138,0.7)_60%,_rgba(253,230,138,1)_100%)] rounded-tl-3xl rounded-br-xl rounded-tr-xl rounded-bl-3xl shadow-[-4px_0_0_0_rgba(0,0,0,1)] md:flex md:flex-1/2 md:justify-center"
        >
          <div>
            <img src="/assets/acceuil/LoginImage.png" alt="" width={250} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ConnexionPage;
