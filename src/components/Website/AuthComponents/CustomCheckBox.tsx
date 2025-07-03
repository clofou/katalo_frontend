// CustomCheckbox.tsx
import { useState } from "react";

function CustomCheckbox({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center cursor-pointer gap-2 select-none">
      <span className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="peer appearance-none w-4 h-4 border-2 border-orange-400 rounded-sm bg-white checked:bg-[#f6a623] checked:border-[#f6a623] transition-colors"
        />
        {/* SVG check visible seulement si checked */}
        <svg
          className="pointer-events-none absolute left-0 top-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="5 11 9 15 15 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label}
    </label>
  );
}

export default CustomCheckbox;