import React, { useState } from "react";
import img from "../assets/images/pexels-mattycphoto-1113145.jpg";
import img2 from "../assets/images/product-1-1 (1).png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
    const navigate=useNavigate();
  const [hidden, setHidden] = useState(true);
  return (
    <div className="shadow-md rounded-md w-64 relative pb-3" onClick={()=>navigate("/product/details")}>
        <div className="absolute top-2 bg-green-500 px-1 py-0.5 rounded-md m-1">
            <p> For Sale</p>
        </div>
        {/* <div className="absolute top-12 bg-red-500 px-2 py-0.5 rounded-md m-1">
            <p>-10%</p>
        </div> */}
      <div
        className="w-64 h-52 bg-[#eeeff0] rounded-md flex items-center justify-center"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        {hidden ? (
          <img src={img} alt="" className="w-32 h-32  rounded-sm " />
        ) : (
          <img src={img2} alt="" className="w-32 h-32  rounded-sm " />
        )}
      </div>
      <div className="px-4 ">
        <h1>Product name</h1>
        <p className="py-2">Product Short description</p>
        <p>20,000 Rwf</p>
       <div className="py-1 mt-2" onClick={()=>navigate("/productdetails")}><Button name={"Read More"} color="black" border={"red-500"} /></div> 
        {hidden ? (
          ""
        ) : (
          <div className="absolute top-[10rem] w-full px-6 " onClick={()=>navigate("/productdetails")}>
            <Button name={"Add To Cart"} color="red-500" bgColor={"white"}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
