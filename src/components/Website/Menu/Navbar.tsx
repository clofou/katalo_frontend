import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavLinkItem } from "./NavLinkItem";
import { OpenContext } from "./OpenContext";
import { motion } from "motion/react";

const navLinks = [
  { to: "#Acceuil", label: "Acceuil" },
  { to: "#Fonctionnality", label: "Fonctionnalites" },
  { to: "#Abonnement", label: "Abonnement" },
  { to: "#FAQ", label: "FAQ" },
];

type UnderlineProps =
  | { left: number; width: number }
  | { top: number; height: number };

function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Acceuil");
  function openMenu() {
    setOpen(!open);
    return open;
  }

  const [underlineProps, setUnderlineProps] = useState<UnderlineProps>({
    left: 0,
    width: 0,
  });

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const idx = navLinks.findIndex((l) => l.label === activeMenu);
    const el = itemRefs.current[idx];
    const ul = ulRef.current;
    if (el && ul) {
      const elRect = el.getBoundingClientRect();
      const ulRect = ul.getBoundingClientRect();
      if (window.innerWidth < 768) {
        // Mobile: vertical
        setUnderlineProps({
          top: elRect.top - ulRect.top,
          height: elRect.height,
        });
      } else {
        // Desktop: horizontal
        setUnderlineProps({
          left: elRect.left - ulRect.left,
          width: elRect.width,
        });
      }
    }
  }, [activeMenu, open]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(({ to }) => {
        const id = to.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: rect.top };
      });

      // Trouve la section la plus proche du haut (mais visible)
      const visible = offsets
        .filter(({ top }) => top <= window.innerHeight / 2)
        .sort((a, b) => b.top - a.top)[0];

      if (visible && visible.id && visible.id !== activeMenu) {
        setActiveMenu(
          navLinks.find((l) => l.to.replace("#", "") === visible.id)?.label ||
            "Acceuil"
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMenu]);

  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      <div className="flex justify-between items-center fixed w-full top-0 z-30 px-6 bg-white">
        <a href="/">
          <img
            src="/assets/acceuil/LOGO.png"
            alt="Logo du site"
            className="w-25 md:w-35"
          />
        </a>

        {/* Hamburger button */}
        <HamburgerMenu click={openMenu} />
        {/* Menu */}
        <nav
          className={`
          flex flex-col md:flex-row md:items-center gap-6
          fixed md:static top-14 left-0 w-full p-4 md:w-auto bg-white
          ${open ? "flex" : "hidden md:flex"}
        `}
        >
          <ul
            ref={ulRef}
            className="flex flex-col md:flex-row gap-6 relative"
            style={{ position: "relative" }}
          >
            {/* Trait vertical mobile */}
            <motion.span
              className="absolute left-0 w-1 rounded-full bg-orange-400 z-20 md:hidden"
              animate={{
                top: "top" in underlineProps ? underlineProps.top : 0,
                height: "height" in underlineProps ? underlineProps.height : 0,
              }}
              // ...
            />
            {/* Trait horizontal desktop */}
            <motion.span
              className="absolute bottom-0 h-1 rounded-full bg-orange-400 z-20 hidden md:block"
              animate={{
                left: "left" in underlineProps ? underlineProps.left : 0,
                width: "width" in underlineProps ? underlineProps.width : 0,
              }}
              // ...
            />
            {navLinks.map(({ to, label }, idx) => (
              <li
                key={to}
                className="relative group"
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
              >
                <NavLinkItem
                  label={label}
                  href={"/"+to}
                  isActive={activeMenu === label}
                  onclickMe={() => setActiveMenu(label)}
                />
              </li>
            ))}
          </ul>
          <NavLink
            to="/inscription"
            className="btn btn-primary mt-4 md:mt-0"
            onClick={() => setOpen(false)}
          >
            S'inscrire
          </NavLink>
        </nav>
      </div>
    </OpenContext.Provider>
  );
}

export default NavBar;
