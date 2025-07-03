import { NavLink } from "react-router-dom";
import { socialIcons } from "../../../../constants";
import AuthSeparator from "../AuthSeparator";
import CustomCheckbox from "../CustomCheckBox";
import SocialButton from "../SocialButtons";

const ConnexionForm = () => (
  <form className="flex flex-col gap-4">
    <input
      type="email"
      className="input text-black font-medium"
      placeholder="Email"
      autoComplete="email"
    />
    <div className="relative">
      <input
        type="password"
        className="input text-black font-medium"
        placeholder="Mot de passe"
        autoComplete="current-password"
      />
      <div className="absolute right-4 top-2">
        <img
          src="/assets/acceuil/IcônePassword.png"
          className="w-7"
          alt="Afficher le mot de passe"
        />
      </div>
    </div>
    <div className="flex justify-between text-sm">
      <CustomCheckbox label="Se souvenir de moi" />
      <NavLink
        to={"/forgot"}
        type="button"
        className="text-[#f6a623] hover:underline bg-transparent"
      >
        Mot de passe oublié ?
      </NavLink>
    </div>
    <button type="submit" className="btn btn-primary">
      Se Connecter
    </button>
    <p className="text-sm text-center">
      Vous n'avez pas de compte ?{" "}
      <NavLink
        to="/inscription"
        className="text-[#f6a623] cursor-pointer hover:underline"
      >
        Créer un compte
      </NavLink>
    </p>
    <AuthSeparator />
    <div className="flex gap-4 justify-center">
      {socialIcons.map((props) => (
        <SocialButton key={props.alt} {...props} />
      ))}
    </div>
  </form>
);

export default ConnexionForm;
