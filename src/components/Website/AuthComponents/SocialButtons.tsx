type SocialButtonProps = {
  icon: string;
  alt: string;
  ariaLabel: string;
};


const SocialButton = ({ icon, alt, ariaLabel }: SocialButtonProps) => (
  <button
    type="button"
    className="w-12 h-12 flex items-center justify-center rounded-lg border-2 border-[#f6a623] bg-white"
    aria-label={ariaLabel}
  >
    <img src={icon} alt={alt} className="w-6 h-6" />
  </button>
);

export default SocialButton;