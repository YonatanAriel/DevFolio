import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function ProjectLike({ projectLikes }) {
  return (
    <div className=" py-4 inline-flex items-center  text-black">
      -
      <div className="mr-2 text-[#FF4E00] cursor-pointer">
        <AiFillHeart size={23} />
      </div>
      <span className="text-lg font-bold">{projectLikes}</span>
    </div>
  );
}
