"use client";
import { useState } from "react";

function Tooltip({ text, children, className }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {isTooltipVisible && (
        <div className="absolute z-10 p-2 text-sm bg-black text-primary-color -top-11 -left-3 rounded-2xl backdrop-blur-50">
          {text}
        </div>
      )}
      <div className={`${className && className}`}>{children}</div>
    </div>
  );
}

export default Tooltip;
