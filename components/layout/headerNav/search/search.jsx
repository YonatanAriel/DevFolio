"use client";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { search } from "../../../../functions/frontendFunctions/apiCalls";
import { usePathname } from "next/navigation";

export default function Search() {
  const pathname = usePathname();
  const inputRef = useRef();
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    inputRef.current.focus();
  }, [showInput]);

  const handleSearch = async () => {
    if (showInput) {
      const text = inputRef.current.value;
      const modelToSearch = pathname === "/profiles" ? "User" : "Project";
      const searchResult = await search({ modelToSearch, text });
      console.log(searchResult);
    } else setShowInput(true);
  };

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
        onClick={handleSearch}
        className={`${
          showInput ? "text-[#FF4E00]" : "text-black"
        } absolute pt-[0.15rem] right-1 top-1 transition-colors duration-700 cursor-pointer`}
      >
        <BiSearch size={27} />
      </div>
    </div>
  );
}
