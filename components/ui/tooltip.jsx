"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Tooltip({ text, children, className, tooltipStyle }) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {isTooltipVisible && (
        <div
          className={twMerge(
            "absolute z-10 p-2 text-sm bg-black text-primary-color -top-11 -left-3 rounded-2xl backdrop-blur-50",
            tooltipStyle
          )}
        >
          {text}
        </div>
      )}
      <div className={`${className && className}`}>{children}</div>
    </div>
  );
}

export default Tooltip;
