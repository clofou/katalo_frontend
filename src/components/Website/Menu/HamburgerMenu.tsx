import { easeOut, motion } from "motion/react";
import { useContext} from "react";
import { OpenContext } from "./OpenContext";

type menuProps = { click: () => boolean };

export const HamburgerMenu = ({ click }: menuProps) => {
  const { open, setOpen } = useContext(OpenContext);

  const handleClick = () => {
    setOpen(!open);
    click();
  };

  const transition = { duration: 0, ease: easeOut };
  return (
    <button
      onClick={handleClick}
      className="md:hidden p-2 focus:outline-none relative w-8 h-8"
      aria-label="Open menu"
    >
      <span className="sr-only">Ouvrir le menu</span>
      <motion.span
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 8 : 0,
        }}
        transition={transition}
        className="absolute left-1 top-2 w-6 h-0.5 bg-black rounded origin-center transition-all"
      />
      <motion.span
      transition={{duration: 0}}
        animate={{
          opacity: open ? 0 : 1,
        }}
        className="absolute left-1 top-4 w-6 h-0.5 bg-black rounded origin-center transition-all"
      />
      <motion.span
        animate={{
          rotate: open ? -45 : 0,
          y: open ? -8 : 0,
        }}
        transition={transition}
        className="absolute left-1 top-6 w-6 h-0.5 bg-black rounded origin-center transition-all"
      />
    </button>
  );
};
