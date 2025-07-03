import { motion } from "framer-motion";
import AuthHeader from "../../components/Website/AuthComponents/AuthHeader";
import InscriptionForm from "../../components/Website/AuthComponents/Form/InscriptionForm";

function InscriptionPage() {
  return (
    <div className="flex justify-center items-center m-auto h-dvh p-10">
      <div className="flex justify-center items-stretch rounded-xl bg-white shadow-sm shadow-gray-300 md:w-250">
        {/** Gauche */}
        <motion.div
          exit={{ opacity: 0, x: 500, rotate: 180 }} // ← animation de disparition
          transition={{ duration: 0.4 }}
          className="relative hidden justify-center md:flex-1/2 gap-20 md:flex md:flex-col md:items-center items-center bg-[radial-gradient(circle_at_center,_white_0%,_white_30%,_rgba(229,231,235,0.7)_60%,_rgba(229,231,235,1)_100%)] rounded-tl-xl rounded-br-3xl rounded-tr-3xl rounded-bl-xl shadow-[4px_0_0_0_rgba(0,0,0,1)]"
        >
          <div className="absolute top-4 self-start ml-10 mt-3">
            <AuthHeader href={"/"} />
          </div>
          <div className="justify-center">
            <img src="/assets/acceuil/LoginImage_noir.png" alt="" width={250} />
          </div>
        </motion.div>

        {/** Droite */}
        <motion.div
          exit={{ opacity: 0, x: -500 }}
          className="md:flex-1/2 px-12 py-10 "
        >
          <div>
            <h1 className="text-3xl font-semibold mt-7">Inscription</h1>
            <p className="mb-6 text-gray-500 text-sm">
              Inscrivez-vous et profitez d'une demo gratuite
            </p>
            <InscriptionForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default InscriptionPage;
