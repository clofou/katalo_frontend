import AuthHeader from "../../components/Website/AuthComponents/AuthHeader";
import VerificationForm from "../../components/Website/AuthComponents/Form/VerificationForm";

function VerificationPage() {
  const mail = "fakoro88@gmail.com";

  return (
    <div className="flex justify-center items-center m-auto h-dvh p-10">
      <div className="flex justify-center items-stretch rounded-xl bg-white shadow-sm shadow-gray-300">
        {/** Gauche */}
        <div className="px-12 py-10 md:flex-1/2">
          <AuthHeader href={"#"} />
          <div>
            <h1 className="text-3xl font-semibold mt-7">Verifier le code</h1>
            <p className="mb-6 text-gray-500 text-sm">
              Un code OTP a été envoyé au mail {mail}
            </p>
            <VerificationForm />
          </div>
        </div>
        {/** Droite */}
        <div className="hidden justify-center items-center bg-[radial-gradient(circle_at_center,_white_0%,_white_30%,_rgba(253,230,138,0.7)_60%,_rgba(253,230,138,1)_100%)] rounded-tl-3xl rounded-br-xl rounded-tr-xl rounded-bl-3xl shadow-[-4px_0_0_0_rgba(0,0,0,1)] md:flex-1/2 md:flex">
          <div>
            <img
              src="/public/assets/acceuil/ForgotPassword.png"
              alt="Icone Illustration forgot password"
              width={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationPage;
