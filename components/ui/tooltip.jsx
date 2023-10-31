"use client";
import { useState } from "react";

function Tooltip({ text }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {isTooltipVisible && (
        <div className="sticky -left-52 top-10 text-primary-color p-2 rounded-2xl border-2 border-white text-sm  z-10 backdrop-blur-50 bg-black">
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
