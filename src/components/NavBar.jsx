import React, { useState } from "react";
import { dropdownElement } from "../assets/data/listItem";
import { RiArrowDropDownLine } from "react-icons/ri";
import SubMenu from "./SubMenu";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./header.css";
import  LogoIcons from "../assets/images/Logo_1.png"
import SubHeader from "./SubHeader";
import { Link, useNavigate } from "react-router-dom";
import { Input, Select, Space } from 'antd';
const NavBar = () => {
  const navigate=useNavigate();
  const [openMenu,setOpenMenu]=useState(false)
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <nav className="fixed z-50 w-full top-0 divide-y-2">
    <SubHeader/>
    <header className="header shadow-md">
      <div className="wrapper">
        <div className="logo cursor-pointer" onClick={()=>navigate("/")}>
         <img src={LogoIcons} width={200} />
        </div>
        <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width:"30%"}}/>
        <div className={`shadow ${openMenu && "active"}`}/>
        <ul className={`navigation ${openMenu && "active"}`}>
        <div className="close_menu">
          <IoIosCloseCircleOutline onClick={()=>setOpenMenu(false)}/>
        </div>
          {dropdownElement.map((el, index) => {
            return (
              <>
                <li key={index} className="list_menu text-black">
                  <div key={index} className="nav-menu flex">
                    <Link to={el.path} className="text-lg font-medium text-black">{el.title}</Link>
                    {el?.subMenu && (
                      <span className="menu_icon mt-1">
                        <RiArrowDropDownLine size={25}/>
                      </span>
                    )}
                  </div>
                  {el?.subMenu && (
                    <ul className="menu">
                      {el?.subMenu.map((sub, index) => {
                        return (
                          <li key={index} className="menu_list">
                            <div className="nav_menu">
                              <Link to={sub.path} >{sub?.title}</Link>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              </>
            );
          })}
        </ul>
        <div className="bar_menu">
          <FaBars onClick={()=>setOpenMenu(true)}/>
        </div>
      </div>
    </header>
    </nav>
  );
};

export default NavBar;
