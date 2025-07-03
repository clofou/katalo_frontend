import { socialIcons } from "../../../../constants";
import AuthSeparator from "../AuthSeparator";
import SocialButton from "../SocialButtons";

const ChangePasswordForm = () => (
  <form className="flex flex-col gap-4">
    <div className="relative">
      <input
        type="password"
        className="input text-black font-medium"
        placeholder="Mot de passe"
        autoComplete="current-password"
      />
      <div className="absolute right-4 top-2">
        <img
          src="/public/assets/acceuil/Icône Password.png"
          className="w-7"
          alt="Afficher le mot de passe"
        />
      </div>
    </div>

    <div className="relative">
      <input
        type="password"
        className="input text-black font-medium"
        placeholder="Confirmer le Mot de passe"
        autoComplete="current-password"
      />
      <div className="absolute right-4 top-2">
        <img
          src="/public/assets/acceuil/Icône Password.png"
          className="w-7"
          alt="Afficher le mot de passe"
        />
      </div>
    </div>

    <button type="submit" className="btn btn-primary">
      Valider
    </button>

    <AuthSeparator />
    <div className="flex gap-4 justify-center">
      {socialIcons.map((props) => (
        <SocialButton key={props.alt} {...props} />
      ))}
    </div>
  </form>
);

export default ChangePasswordForm;
