import AuthHeader from "../../components/Website/AuthComponents/AuthHeader";
import ForgotForm from "../../components/Website/AuthComponents/Form/ForgotForm";

function ForgotPasswordPage() {
  return (
    <div className="flex justify-center items-center m-auto h-dvh p-10">
      <div className="flex justify-center items-stretch rounded-xl bg-white shadow-sm shadow-gray-300 md:w-250">
        {/** Gauche */}
        <div className="px-12 py-10 md:flex-1/2">
          <AuthHeader href={"/connexion"} />
          <div>
            <h1 className="text-3xl font-semibold mt-7">Mot de passe oublie</h1>
            <p className="mb-6 text-gray-500 text-sm">
              Ne vous inquiétez pas, entrer simplement vôtre mail pour
              réinitialiser vôtre mot de passe
            </p>
            <ForgotForm />
          </div>
        </div>
        {/** Droite */}
        <div className="hidden justify-center md:flex items-center bg-[radial-gradient(circle_at_center,_white_0%,_white_30%,_rgba(253,230,138,0.7)_60%,_rgba(253,230,138,1)_100%)] rounded-tl-3xl rounded-br-xl rounded-tr-xl rounded-bl-3xl shadow-[-4px_0_0_0_rgba(0,0,0,1)] md:flex-1/2">
          <div>
            <img src="/assets/acceuil/ForgotPassword.png" alt="I" width={250} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
