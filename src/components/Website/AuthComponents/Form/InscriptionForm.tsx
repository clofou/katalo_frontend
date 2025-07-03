import { NavLink } from "react-router-dom";
import { socialIcons } from "../../../../constants";
import AuthSeparator from "../AuthSeparator";
import CustomCheckbox from "../CustomCheckBox";
import SocialButton from "../SocialButtons";

const InscriptionForm = () => (
  <form className="flex flex-col gap-4">
    <input
      type="text"
      className="input text-black font-medium"
      placeholder="Nom Complet"
      autoComplete="name"
    />
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
    <div className="flex text-sm">
      <CustomCheckbox label="" />
      <span className="ml-2">
        Accepter{" "}
        <NavLink to="/politique" className="text-[#f6a623]">
          la politique de confidentialite
        </NavLink>
      </span>
    </div>
    <button type="submit" className="btn btn-primary">
      S'inscrire
    </button>
    <p className="text-sm text-center">
      Vous avez deja un compte ?{" "}
      <NavLink
        to={"/connexion"}
        className="text-[#f6a623] cursor-pointer hover:underline"
      >
        Connectez-vous
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

export default InscriptionForm;
