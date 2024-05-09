import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
const SubHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#179818] via-green-400 to-[#FFBA00]">
      <div className="block justify-between px-5 md:px-[10rem] py-3 sm:flex">
        <h1 className="text-white text-base text-center">99 Roving St, Big City PKU 23456</h1>
        <div className="flex gap-5 pt-3 sm:pt-0 justify-center items-center">
          <FaFacebook size={25} className="text-white hover:text-[#179818]"/>
          <AiFillTwitterCircle size={25} className="text-white hover:text-[#179818]"/>
          <SiYoutubemusic size={25} className="text-white hover:text-[#179818]"/>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
