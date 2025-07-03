import { socialIcons } from "../../../../constants";
import AuthSeparator from "../AuthSeparator";
import SocialButton from "../SocialButtons";

const ForgotForm = () => (
  <form className="flex flex-col gap-4">
    <input
      type="email"
      className="input text-black font-medium"
      placeholder="Email"
      autoComplete="email"
    />

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

export default ForgotForm;
