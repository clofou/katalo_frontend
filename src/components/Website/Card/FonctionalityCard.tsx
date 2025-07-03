import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef } from "react";

type FonctionalityProps = {
  title: string;
  iconPath: string;
  children: React.ReactNode;
  theme: "white" | "orange" | "black";
};

function splitTextWithRatio(text: string, ratio = 0.5): Array<string> {
  const words = text.trim().split(/\s+/);
  const cutIndex = Math.floor(words.length * ratio);
  const part1 = words.slice(0, cutIndex).join(" ");
  const part2 = words.slice(cutIndex).join(" ");
  return [part1, part2];
}

function FonctionnalityCard({
  title,
  iconPath,
  children,
  theme,
}: FonctionalityProps) {
  const [title1, title2] = splitTextWithRatio(title);
  const [displayContent, setDisplayContent] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const maxTilt = 18;
    const rotateY = ((x - midX) / midX) * maxTilt;
    const rotateX = -((y - midY) / midY) * maxTilt;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={() => {
        setDisplayContent((e) => !e);
      }}
      className={clsx(
        "flex w-full max-w-100 min-h-70 flex-col px-6 py-8 rounded-2xl justify-between cursor-pointer border-1 transition-transform duration-200 will-change-transform",
        theme == "white" && "bg-gray-100 text-black",
        theme == "black" && "bg-black text-white",
        theme == "orange" && "bg-[#f6a623] text-black"
      )}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        boxShadow: "0 4px 0 0 rgba(0,0,0,1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-bold">
        <span
          className={clsx(
            "inline-block highlight",
            theme == "orange" && "bg-black text-white font-normal",
            theme == "black" && "bg-white text-black"
          )}
        >
          {title1}
        </span>
        <br />
        <span
          className={clsx(
            "inline-block highlight",
            theme == "orange" && "bg-black text-white font-normal",
            theme == "black" && "bg-white text-black"
          )}
        >
          {title2}
        </span>
      </h2>
      <div className="flex justify-between items-baseline">
        <div className="flex items-center gap-3">
          <div>
            <motion.img
              animate={{rotate: displayContent ? 120 : 0}}
              src={
                theme == "white"
                  ? "/assets/acceuil/Icône Arrow.png"
                  : theme == "orange"
                  ? "/assets/acceuil/Icône Arrow-1.png"
                  : "/assets/acceuil/Icône Arrow-2.png"
              }
              alt="Icone voir plus"
            />
          </div>
          <div>Voir plus</div>
        </div>
        <div>
          <img src={iconPath} alt="Icone d'illustration" width={80} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {displayContent && (
          <motion.div
            key="content"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
              opacity: { duration: 0.2 },
            }}
            style={{ originY: 0 }}
            className="overflow-hidden"
          >
            <div className="py-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FonctionnalityCard;
