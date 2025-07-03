type TemoignageBubbleProps = {
  nom: string;
  job: string;
  message: string;
};

export const TemoignageBubble = ({
  nom,
  job,
  message,
}: TemoignageBubbleProps) => {
  return (
    <>
      <div
        key={nom + job}
        className="relative border border-[#f6a623] rounded-2xl px-8 pt-8 pb-16 w-[600px] h-[200px] flex flex-col shadow-lg"
      >
        {/* Triangle bulle */}
        <span className="absolute left-10 -bottom-4 w-8 h-8 rotate-225 overflow-hidden pointer-events-none select-none">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <polygon points="0,32 32,0 0,0" stroke="#f6a623" strokeWidth="2" />
          </svg>
        </span>
        <div className="text-white text-base mb-8 italic leading-relaxed">
          “{message}”
        </div>
        <div className="absolute left-10 top-60">
          <div className="font-bold text-[#f6a623]">{nom}</div>
          <div className="text-white text-sm">{job}</div>
        </div>
      </div>
    </>
  );
};
