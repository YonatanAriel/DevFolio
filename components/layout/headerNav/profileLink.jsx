"use client";
import { useContext } from "react";
import { MainContext } from "../../../context/mainContext";
import { useRouter } from "next/navigation";

export default function ProfileLink({ closeMenu }) {
  const router = useRouter();
  const { token } = useContext(MainContext);
  const handleClick = () => {
    if (token) router.push(`/yourProfile`);
    else {
      alert("Please log in to see your profile");
    }
  };
  return (
    <>
      <p
        className="hover:text-[#FF400] hover:cursor-pointer"
        onClick={() => {
          handleClick();
          closeMenu && closeMenu();
        }}
      >
        Your Profile
      </p>
    </>
  );
}
