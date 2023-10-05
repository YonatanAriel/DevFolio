import React from "react";

export default function ErrorStyle({ reset }) {
  return (
    <div className="backdrop-blur-md  w-full h-full flex flex-col gap-5 text-2xl font-bold justify-center items-center  z-10 fixed inset-0">
      <h2>Something went wrong!</h2>
      <button onClick={reset} className="text-[#FF4E00]">
        Try again
      </button>
    </div>
  );
}
