"use client";

import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { isTokenStored } from "../../../../functions/frontendFunctions/token";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSignIn, setIsSignIn] = useState(isTokenStored());
  const userId = 1;
  const handleLogout = () => {
    localStorage.setItem("devFolioToken", null);
    setIsSignIn(false);
  };
  return (
    <>
      <div
        className="text-[#FF4E00] lg:hidden "
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <LuMenu size={29} />
      </div>
      <div
        className={`text-[#FF4E00]  flex-col lg:flex 
      font-semibold text-lg tracking-wide ${
        showMenu
          ? " absolute lg:static top-14  backdrop-blur-lg lg:border-none border-b-2 border-black bg-white text-center flex flex-col gap-8 left-0 right-0 pt-5 lg:pt-0 pb-8 lg:pb-0"
          : ""
      } `}
      >
        <div
          className={`lg:hidden ${
            showMenu ? "flex" : "hidden"
          } flex-none flex-col gap-8  `}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/profiles"}>Profiles</Link>
          <Link href={`/profiles/${userId}`}>Your Profile</Link>
        </div>
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          }  flex-col lg:flex lg:flex-row lg:gap-5 gap-8 `}
        >
          {isSignIn ? (
            <Link href={"/"} onClick={handleLogout}>
              Sign Out
            </Link>
          ) : (
            <>
              <Link href={"/signUp"}>Sign Up</Link>
              <Link href={"/signIn"}>Sign In</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
