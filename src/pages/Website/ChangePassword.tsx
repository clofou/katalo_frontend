import AuthHeader from "../../components/Website/AuthComponents/AuthHeader";
import ChangePasswordForm from "../../components/Website/AuthComponents/Form/ChangePasswordForm";

function ChangePasswordPage() {
  return (
    <div className="flex justify-center items-center m-auto h-dvh p-10">
      <div className="flex justify-center items-stretch rounded-xl bg-white shadow-sm shadow-gray-300">
        {/** Gauche */}
        <div className="px-12 py-10 md:flex-1/2">
          <AuthHeader href={"#"} />
          <div>
            <h1 className="text-3xl font-semibold mt-7">
              Changer le mot de passe
            </h1>
            <p className="mb-6 text-gray-500 text-sm">
              Vôtre ancien mot de passe a été réinitialiser. créer un nouveau.
            </p>
            <ChangePasswordForm />
          </div>
        </div>
        {/** Droite */}
        <div className="md:flex-1/2 hidden justify-center md:flex items-center bg- rounded-tl-3xl rounded-br-xl rounded-tr-xl rounded-bl-3xl shadow-[-4px_0_0_0_rgba(0,0,0,1)]">
          <div>
            <img src="/assets/acceuil/changePassword.png" alt="" width={250} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
