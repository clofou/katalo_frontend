type NavItemProps = {
  label: string;
  href: string;
  isActive: boolean;
  onclickMe: () => void;
};

export const NavLinkItem = ({ label, href, onclickMe }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onclickMe();
    // Récupère l'id de la section (enlève le /#)
    const id = href.replace(/^\/?#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      onClick={handleClick}
      href={href}
      className="block relative px-3 py-1 z-10 transition-colors duration-200 group"
    >
      {/* ... */}
      <span className="relative z-10">{label}</span>
    </a>
  );
};