"use client";

import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { MainContext } from "../../../../context/mainContext";
import ProfileLink from "../profileLink";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken } = useContext(MainContext);
  const userId = 1;
  const handleLogout = () => {
    localStorage.removeItem("devFolioToken");
    setToken(null);
  };
  const closeMenu = () => setShowMenu(false);
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
          <Link href={"/"} onClick={closeMenu}>
            Home
          </Link>
          <Link href={"/profiles"} onClick={closeMenu}>
            Profiles
          </Link>
          <ProfileLink closeMenu={closeMenu} />
          {/* <Link href={`/profiles/${userId}`} onClick={closeMenu}>
            Your Profile
          </Link> */}
        </div>
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          }  flex-col lg:flex lg:flex-row lg:gap-5 gap-8 `}
        >
          {token ? (
            <Link
              href={"/"}
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
            >
              Sign Out
            </Link>
          ) : (
            <>
              <Link href={"/signUp"} onClick={closeMenu}>
                Sign Up
              </Link>
              <Link href={"/signIn"} onClick={closeMenu}>
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
