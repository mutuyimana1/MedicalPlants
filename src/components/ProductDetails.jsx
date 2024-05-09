import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import img from "../assets/images/pexels-mattycphoto-1113145.jpg";
import img2 from "../assets/images/product-1-1.png";
import img3 from "../assets/images/download (3).png";
import img4 from "../assets/images/product-8.png";
import { IoMdStar } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import Button from "./Button";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
const ProductDetails = () => {
  const images = [img, img2, img3, img4];
  const [currentImage,setCurrentImage]=useState(img2)
const [count,setCount]=useState(1);
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex justify-between w-full px-20 py-10 mt-28">
        <h1 className="text-2xl font-semibold text-center">Product Details</h1>
        <p className="text-base font-normal">Home /Product /Details</p>
      </div>
      <div className="w-[85%] m-auto flex gap-5 h-[40rem]">
        <div className="w-2/5 h-full">
          {" "}
          <div className="w-full h-[70%] flex items-center justify-center bg-gray-200">
            <img src={currentImage} alt="" className="w-[50%] h-[50%]"/>
          </div>
          <div className="w-full h-[25%] mt-2 bg-gray-200 rounded-sm flex gap-5 justify-center items-center">
            {images?.map((el) => {
              return (
                <img
                  src={el}
                  onClick={()=>setCurrentImage(el)}
                  alt=""
                  className="w-24 h-24 rounded-md border border-green-300"
                />
              );
            })}
          </div>
        </div>
        <div className="ml-10 w-1/2">
          <h1 className="text-base font-medium">Details about product</h1>
          <div className="flex gap-2 pt-3">
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <p>1 Review</p>
          </div>
          <div className="p-2 md:w-[55%] w-full mt-5">
            <h1 className="text-[#030229] font-medium text-2xl underline">
              Banana Juice
            </h1>
            <p className="text-[#030229] font-medium text-md pt-3">
              Sub Price:{" "}
              <span className="font-medium text-sm pl-4"> 65000 RFW</span>
            </p>
            <p className="text-[#030229] font-medium text-md py-1">
              {" "}
              Tax: <span className="font-medium text-sm pl-4"> 500 RFW</span>
            </p>
            <p className="text-[#030229] font-medium text-md py-[2px]">
              {" "}
              Bonus: <span className="font-medium text-sm pl-4"> 200 RFW</span>
            </p>
            <p className="text-[#030229] font-medium text-md py-1">
              {" "}
              Total Price:{" "}
              <span className="font-bold text-xl pl-4"> 65300 RFW</span>
            </p>
            <p className="text-[#030229B2] text-sm pt-2">
              Brand: <span className="pl-20">Sina Gerald </span>
            </p>
            <p className="text-[#030229B2] text-sm py-1">
              Product Code: <span className="pl-8">344eed4 </span>
            </p>
            <p className="text-[#030229B2] text-sm">
              Expired date: <span className="pl-11">Jan.2030 </span>
            </p>
            <p className="text-[#030229B2] text-sm pt-1">
              Availability: <span className="pl-14"> in Stock </span>
            </p>
            <h1 className="text-[#030229] font-medium text-xl pt-4">
              OverView
            </h1>
            <p className="text-[#030229B2] text-sm pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip. Excepteur sint occaecat cupida...
            </p>
          </div>
          <div>Categories:</div>
          <div className="flex gap-3 mt-2">
            <div className="flex items-center justify-center gap-2 border py-2 px-5 rounded-md">
             <button disabled={count <= 1} onClick={()=>setCount(count-1)} ><HiOutlineMinus size={20} className="cursor-pointer"/></button> 
              <p className="px-4">{count}</p>
             <button> <GoPlus size={20} onClick={()=>setCount(count+1)}  className="cursor-pointer"/></button>
            </div>
            <Button
              name={"Add To Cart"}
              color={"black"}
              width={"[50px]"}
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-center">Related Products</h1>
      </div>
      <div className="p-10 flex flex-wrap gap-5 w-[90%] m-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
