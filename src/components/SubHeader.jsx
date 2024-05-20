import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { Avatar, Badge, Space } from "antd";
import { BsCart } from "react-icons/bs";
import  LogoIcons from "../assets/images/Logo_1.png"
import { IoMdNotificationsOutline } from "react-icons/io";
const SubHeader = () => {
  return (
    <div className="bsg-[#025222] bg-white h-full md:h-24 md:pb-5 pb-0">
      <div className="block justify-center gap-20 px-5 md:px-[10rem] sm:flex">
        <h1 className="text-black text-base text-center pt-9">99 Roving St, Big City PKU 23456</h1>
        <div className="logo cursor-pointer" onClick={()=>navigate("/")}>
         <img src={LogoIcons} width={200} />
        </div>
        <div className="flex gap-5 mt-6 sm:pt-0 justify-center items-center">
        <Space size={24} className="mrs-10 mt-1">
            <Badge count={1}>
              <Avatar shape="circle" icon={<BsCart />} />
            </Badge>
            <Badge count={1}>
              <Avatar
                shape="circle"
                icon={<IoMdNotificationsOutline size={22} />}
              />
            </Badge>
          </Space>
          <FaFacebook size={28} className="text-black "/>
          <AiFillTwitterCircle size={30} className="text-black "/>
          <SiYoutubemusic size={30} className="text-black "/>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
