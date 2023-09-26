"use client";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  const inputRef = useRef();
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    inputRef.current.focus();
  }, [showInput]);
  return (
    <div className="flex py-auto relative h-9 ml-auto ">
      <input
        className={`rounded-full  outline-none shadow-lg
          ${
            showInput ? "  w-40 sm:w-56 pl-3" : " w-0  "
          } transition-all duration-[2000ms] ease-out`}
        ref={inputRef}
        type="text"
        name="text"
        id="search-input"
        placeholder="Search"
      />
      <div
        onClick={() => setShowInput(true)}
        className={`${
          showInput ? "text-[#FF4E00]" : "text-black"
        } absolute pt-[0.15rem] right-1 top-1 transition-colors duration-700 cursor-pointer`}
      >
        <BiSearch size={27} />
      </div>
    </div>
  );
}
