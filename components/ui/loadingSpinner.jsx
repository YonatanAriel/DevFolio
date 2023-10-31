import React from "react";

export default function LoadingSpinner({ noBlur }) {
  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center ${
        noBlur ? "" : "backdrop-blur-lg"
      }`}
    >
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-[#FF4E00] border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}
