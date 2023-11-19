"use client";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { search } from "../../../../functions/frontendFunctions/apiCalls";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Popup from "../../../ui/popup";

export default function Search() {
  const pathname = usePathname();
  const inputRef = useRef();
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    inputRef.current.focus();
  }, [showInput]);

  const handleSearch = async () => {
    if (showInput) {
      const text = inputRef.current.value;
      if (!text.trim()) return;
      setShowAnimation(true);
      // const modelToSearch = pathname === "/profiles"  ? "User" : "Project";
      const modelToSearch = ["/profiles", "/search/users"].includes(pathname)
        ? "User"
        : "Project";
      const results = await search({ modelToSearch, text });
      console.log(results.data);
      if (results.data) {
        router.push(
          `${results.pathname}?data=${btoa(JSON.stringify(results.data))}`
        );
        setShowAnimation(false);
      }
    } else setShowInput(true);
  };

  return (
    <>
      {/* {showPopup && <Popup text={"Sorry, nothing found"} />} */}
      <div className="flex py-auto relative h-9 ml-auto ">
        <input
          className={`rounded-full  outline-none shadow-lg
          ${
            showInput ? "  w-40 sm:w-56 pl-3" : " w-0  "
          } transition-all duration-[2000ms] ease-out`}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          type="text"
          name="text"
          id="search-input"
          placeholder="Search"
        />
        <div
          onClick={handleSearch}
          className={`${showInput ? "text-[#FF4E00]" : "text-black"} ${
            showAnimation ? "animate-spin" : ""
          } absolute pt-[0.15rem] right-1 top-1 transition-colors duration-700 cursor-pointer`}
        >
          <BiSearch size={27} />
        </div>
      </div>
    </>
  );
}
