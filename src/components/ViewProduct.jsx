import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import aboutImage from "../assets/images/product-1-1 (1).png";
import aboutImage1 from "../assets/images/download (2).png";
import aboutImage2 from "../assets/images/download (3).png";
import aboutImage3 from "../assets/images/download (4).png";
import {
  fetchPlants,
  fetchSinglePlant,
} from "../redux/slices/plant/plantThunks";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
const ViewProducts = () => {
  const { plant, allplants, is_plants_loading } = useSelector(
    (state) => state.plants
  );
  const images = [img, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(
    plant?.images && plant?.images[0]?.url
  );
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { plantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSinglePlant(plantId)(dispatch);
  }, [plantId, dispatch]);
  useEffect(() => {
    if (plant?.images) {
      setCurrentImage(plant?.images[0]?.url);
    }
  }, [plant, plant?.images]);
  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex justify-between w-full px-20 py-10 mt-32">
        <h1 className="text-2xl font-semibold text-center">Plant Details</h1>
        <p className="text-lg font-normal">Home /Plant /Details</p>
      </div>
      <div className="w-[85%] m-auto md:flex gap-5 h-[40rem]">
        <div className=" w-full md:w-2/5 h-full">
          {" "}
          <div className="w-full h-[70%] flex items-center justify-center bg-gray-200">
            <img src={currentImage} alt="" className="w-[50%] h-[50%]" />
          </div>
          <div className="w-full h-[25%] mt-2 bg-gray-200 rounded-sm flex gap-5 justify-center items-center">
            {plant?.images?.map((el) => {
              return (
                <img
                  src={el?.url}
                  onClick={() => {
                    el?.url && setCurrentImage(el?.url);
                  }}
                  alt=""
                  className="w-24 h-24 rounded-md border border-green-300"
                />
              );
            })}
          </div>
        </div>
        <div className="ml-10 w-full md:w-1/2 mt-10">
          <h1 className="text-base font-medium">Details about plant</h1>

          <div className="p-2 md:w-[55%] w-full mt-5">
            <h1 className="text-[#030229] font-medium text-2xl underline">
              {plant?.title}
            </h1>
            {/* <p className="text-[#030229] font-medium text-md pt-3">
              Kinyarwanda Name
              <span className="font-medium text-sm pl-4"> Igisura</span>
            </p> */}
            <p className="text-[#030229] font-medium text-md py-1">
              {" "}
              Scientific name:{" "}
              <span className="font-medium text-sm pl-4">
                {plant?.scientificName}
              </span>
            </p>
            <p className="text-[#030229] font-medium text-md py-[2px]">
              {" "}
              Common name:{" "}
              <span className="font-medium text-sm pl-4">
                {" "}
                {plant?.commonName}
              </span>
            </p>
            <p className="text-[#030229B2] text-sm pt-2">
              Family: <span className="pl-20">{plant?.famillyName} </span>
            </p>
            <p className="text-[#030229B2] text-sm py-1">
              Part to be used: <span className="pl-8">Leaves and stem </span>
            </p>
          </div>
          <div>Categories:{plant?.category}</div>
        </div>
      </div>
      <div className="px-20 mt-[30rem] md:mt-5 lg:mts-[50rem] xls:mt-[30rem] 2xls:mt-80 w-[75%] m-auto">
        <h1 className="text-[#030229] font-medium text-2xl text-center py-1">
          {" "}
          Medicinal use:{" "}
        </h1>
        <ul className="text-[#030229B2] text-sm ">
          {plant?.howToUse?.map((el) => {
            console.log("how", el);
            return <li className="list-disc py-1.5">{el}</li>;
          })}
        </ul>
        <h1 className="text-[#030229] font-medium text-2xl text-center py-3">
          {" "}
          Dosages and preparation:{" "}
        </h1>
        <p className="text-[#030229B2] text-sm pt-1">
          {plant?.dosages?.adults}
        </p>
        <h1 className="text-[#030229] font-medium text-xl pt-4 text-center py-3">
          Side effects
        </h1>
        <p className="text-[#030229B2] text-sm pt-2">
          Fresh roots are crushed, boiled and strained, and the liquid is used
          to treat gonorrhoea and syphilis. Fresh leaf juice, sometimes with
          Erythrina sacleuxii Hua, is used for the treatment of leprosy. Leaf
          and roots are used for pleurisy, inflammatory conditions of chest and
          for oxytocic activity. Is extensively used in many skin disease
          medicine.
        </p>
        <h1 className="text-[#030229] font-medium text-xl pt-4 text-center py-3">
          Description
        </h1>
        <p className="text-[#030229B2] text-sm pt-2">{plant?.description}</p>
      </div>

      <div className="mt-[d60rem] lg:mtddd-[50rem] xl:mdt-[30rem] 2xl:dmt-80">
        <h1 className="text-2xl font-semibold text-center">Related Plants</h1>
      </div>
      {is_plants_loading ? (
        <div className="grid grid-cols-4 gap-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
          {allplants.map((el, i) => {
            console.log("plant data", el);
            return (
              <ProductCard
                key={i}
                img1={el?.images[0]?.url}
                img2={el?.images[1]?.url}
                name={el?.title}
                amount={el?.price}
                btnName={"ReadMore"}
                // btnSecondName={"Add to cart"}
                description={el?.description}
                onClick={() => navigate(`/plant/view/${el?._id}`)}
              />
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ViewProducts;
