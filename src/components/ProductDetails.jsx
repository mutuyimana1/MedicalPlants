import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { IoMdStar } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import Button from "./Button";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import aboutImage from "../assets/images/product-1-1 (1).png";
import aboutImage1 from "../assets/images/download (2).png";
import aboutImage2 from "../assets/images/download (3).png";
import { useDispatch, useSelector } from "react-redux";
import { viewplantAction } from "../redux/shop/actions";
const ProductDetails = () => {
  const { shop } = useSelector((state) => state);
  const [currentImage, setCurrentImage] = useState(shop?.singlePlant?.data?.images && shop.singlePlant.data.images[0]?.url);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { plantId } = useParams();
console.log("details",shop?.singlePlant?.data)
  useEffect(() => {
    viewplantAction(plantId)(dispatch);
  }, [plantId, dispatch]);

  useEffect(() => {
    if (shop?.singlePlant?.data?.images) {
      setCurrentImage(shop.singlePlant.data.images[0]?.url);
    }
    // shop?.singlePlant?.data?.images
  }, [shop,shop?.singlePlant?.data?.images]);
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex justify-between w-full px-20 py-10 mt-36">
        <h1 className="text-2xl font-semibold text-center ">Plant Details</h1>
        <p className="text-lg font-normal">Home /Product /Details</p>
      </div>
      <div className="w-[85%] m-auto md:flex gap-5 h-[40rem]">
        <div className=" w-full md:w-2/5 h-full">
          {" "}
          <div className="w-full h-[70%] flex items-center justify-center bg-gray-200">
            <img src={currentImage} alt="" className="w-[50%] h-[50%] rounded-md" />
          </div>
          <div className="w-full h-[25%] mt-2 bg-gray-200 rounded-sm flex gap-5 justify-center items-center">
            {shop?.singlePlant?.data?.images?.map((el) => {
              return (
                <img
                  src={el?.url}
                  onClick={() =>{
                    el?.url && setCurrentImage(el?.url)}}
                  alt=""
                  className="w-24 h-24 rounded-md border border-green-300"
                />
              );
            })}
          </div>
        </div>
        <div className="ml-10 w-full md:w-1/2 mt-10">
          <h1 className="text-base font-medium">Details about Plant</h1>
          <div className="flex gap-2 pt-3">
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <IoMdStar color="#FFBA00" size={20} />
            <p>{shop?.singlePlant?.data?.totalrating} Review</p>
          </div>
          <div className="p-2 md:w-[55%] w-full mt-5">
            <h1 className="text-[#030229] font-medium text-2xl underline">
              {shop?.singlePlant?.data?.title}
            </h1>
            <p className="text-[#030229] font-medium text-md pt-3">
              Kinyarwanda Name
              <span className="font-medium text-sm pl-4"> {shop?.singlePlant?.data?.kinyarwandaName}</span>
            </p>
            <p className="text-[#030229] font-medium text-md py-1">
              {" "}
              Scientific name:{" "}
              <span className="font-medium text-sm pl-4"> {shop?.singlePlant?.data?.scientificName}</span>
            </p>
            <p className="text-[#030229] font-medium text-md py-[2px]">
              {" "}
              Common name:{" "}
              <span className="font-medium text-sm pl-4"> {shop?.singlePlant?.data?.commonName}</span>
            </p>
            <p className="text-[#030229] font-medium text-md py-1">
              {" "}
              Total Price:{" "}
              <span className="font-bold text-xl pl-4"> {shop?.singlePlant?.data?.price} RFW</span>
            </p>
            <p className="text-[#030229B2] text-sm pt-2">
              Family: <span className="pl-20">{shop?.singlePlant?.data?.slug} </span>
            </p>
            <p className="text-[#030229B2] text-sm py-1">
              Part to be used: <span className="pl-8">Leaves and stem </span>
            </p>
            
          </div>
          <div>Categories: {shop?.singlePlant?.data?.category}</div>
          <div className="flex gap-3 mt-2">
            <div className="flex items-center justify-center gap-2 border py-2 px-5 rounded-md">
              <button disabled={count <= 1} onClick={() => setCount(count - 1)}>
                <HiOutlineMinus size={20} className="cursor-pointer" />
              </button>
              <p className="px-4">{count}</p>
              <button>
                {" "}
                <GoPlus
                  size={20}
                  onClick={() => setCount(count + 1)}
                  className="cursor-pointer"
                />
              </button>
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
      <div className="px-20 mt-[30rem] md:mt-5 lg:mts-[50rem] xls:mt-[30rem] 2xls:mt-80 w-[75%] m-auto">
            <h1 className="text-[#030229] font-medium text-2xl text-center py-1"> Medicinal use:{" "}</h1> 
            <ul className="text-[#030229B2] text-sm ">
            {shop?.singlePlant?.data?.howToUse?.map((el)=>{
              console.log("how",el)
              return(

                <li className="list-disc py-1.5">{el}</li>
              )
            })}
            </ul>
      {/* <p className="text-[#030229B2] text-sm">
             
                Fresh roots are ground, cooked in banana beer and drunk to
                treat gonorrhoea. Treatment of Arthritis and Joint Pain, Blood
                Purification and Detoxification; Treatment of Urinary Disorders,
                Bacteria; Biliousness; Bite; Bleeding; Complexion;
                Constipation;Diabetes, Dysentery; Hemoptysis; Hemorrhoid;
                Hepatosis ,Infection; Inflammation, Diarrheal
             
            </p> */}
            <h1 className="text-[#030229] font-medium text-2xl text-center py-3"> Dosages and preparation:{" "}</h1>
            <p className="text-[#030229B2] text-sm pt-1">
            {shop?.singlePlant?.data?.dosages?.adults}
             
            </p>
      <h1 className="text-[#030229] font-medium text-xl pt-4 text-center py-3">
              Side effects
            </h1>
            <p className="text-[#030229B2] text-sm pt-2">
              Fresh roots are crushed, boiled and strained, and the liquid is
              used to treat gonorrhoea and syphilis. Fresh leaf juice, sometimes
              with Erythrina sacleuxii Hua, is used for the treatment of
              leprosy. Leaf and roots are used for pleurisy, inflammatory
              conditions of chest and for oxytocic activity. Is extensively used
              in many skin disease medicine.
            </p>
            <h1 className="text-[#030229] font-medium text-xl pt-4 text-center py-3">
              Description
            </h1>
            <p className="text-[#030229B2] text-sm pt-2">
            {shop?.singlePlant?.data?.description}
            </p>
      </div>
      <div className="mts-[60rem] lg:mts-[50rem] xls:mt-[30rem] 2xls:mt-80 mt-5">
        <h1 className="text-2xl font-semibold text-center">Related Products</h1>
      </div>
      <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
        <ProductCard
          status={"For Sale"}
          img1={aboutImage1}
          img2={aboutImage2}
          onClick={()=>navigate("/product/details")}
          name={"Urtica massaica"}
          amount={40000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"
          }
        />
        <ProductCard
          status={"Sold"}
          img1={aboutImage1}
          img2={aboutImage}
          onClick={()=>navigate("/product/details")}
          name={"Rubia cordifolia L"}
          amount={50000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"
          }
        />
        <ProductCard
          status={"discount"}
          img1={aboutImage2}
          img2={aboutImage1}
          onClick={()=>navigate("/product/details")}
          name={"Rubia cordifolia L"}
          amount={40000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"
          }
        />
        <ProductCard
          status={"For Sale"}
          img1={aboutImage1}
          img2={aboutImage2}
          onClick={()=>navigate("/product/details")}
          name={"Rubia cordifolia L"}
          amount={3000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Clerodendrum myricoides is a tropical flowering shrub known for itsstriking blue-violet flowers and glossy green foliage."
          }
        />
        <ProductCard
          status={"For Sale"}
          img1={aboutImage}
          img2={aboutImage1}
          onClick={()=>navigate("/product/details")}
          name={"Rubia cordifolia L"}
          amount={78000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            ": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."
          }
        />
      </div>
      <Footer />
    </div>
  );
};


export default ProductDetails;
