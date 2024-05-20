import React from "react";
import CustomButton from "./CustomButton";
import { MdOutlineReadMore } from "react-icons/md";
import headingImage from "../assets/images/depositphotos_210464032-stock-photo-close-green-leaves-water-drops.jpg";
import leaveImage from "../assets/images/homeimg.jpg";
import "./header.css";
import img2 from "../assets/images/HERO-How-To-Use-Up-Extra-Herbs-Before-They-Go-Bad-Saveur-06-scaled.jpg";
import img3 from "../assets/images/istockphoto-618977310-612x612.jpg";
import img4 from "../assets/images/depositphotos_387030350-stock-photo-medicinal-plants-bowls-dry-medicinal.jpg";
import { Carousel } from "antd";
const Heading = () => {
  const contentStyle = {
    margin: 0,
    height: "70vh",
    color: "#fff",
    width: "100%",
    lineHeight: "160px",
    textAlign: "center"
  };
  return (
    <>
      <Carousel autoplay>
        <div className="customImg ">
          {/* <img src={headingImage} alt="imag" style={contentStyle} className="absolute top-0"/> */}
          <div className="w-[40rem] m-auto bg-white mt-52 py-5 px-10">
            <h1 className="text-xl text-center font-medium py-2">
              Are you Felling Stressed?
            </h1>
            <p className="text-lg text-[#363636]">
              Are you feeling stressed? Struggling to manage life's pressures?
              Seeking natural remedies to support your health, including
              fighting cancer? We bring you a comprehensive guide to medicinal
              plants that can transform your well-being. Explore our selection
              of healing plants and embark on a journey to a
              healthier, happier you.
            </p>
            <p className="text-center py-2 text-xl">Good Health from Natural Plants</p>
          </div>
        </div>
        <div className=" customImg1">
        <div className="w-[40rem] m-auto bg-white mt-52 py-5 px-10">
            <h1 className="text-xl text-center font-medium py-2">
              Are you Felling Stressed?
            </h1>
            <p className="text-lg text-[#363636]">
              Are you feeling stressed? Struggling to manage life's pressures?
              Seeking natural remedies to support your health, including
              fighting cancer? We bring you a comprehensive guide to medicinal
              plants that can transform your well-being. Explore our selection
              of healing plants and embark on a journey to a
              healthier, happier you.
            </p>
            <p className="text-center py-2 text-xl">Good Health from Natural Plants</p>
          </div>
        </div>
        <div className=" customImg2">
        <div className="w-[40rem] m-auto bg-white mt-52 py-5 px-10">
            <h1 className="text-xl text-center font-medium py-2">
              Are you Felling Stressed?
            </h1>
            <p className="text-lg text-[#363636]">
              Are you feeling stressed? Struggling to manage life's pressures?
              Seeking natural remedies to support your health, including
              fighting cancer? We bring you a comprehensive guide to medicinal
              plants that can transform your well-being. Explore our selection
              of healing plants and embark on a journey to a
              healthier, happier you.
            </p>
            <p className="text-center py-2 text-xl">Good Health from Natural Plants</p>
          </div>
        </div>
        <div className=" customImg3">
        <div className="w-[40rem] m-auto bg-white mt-52 py-5 px-10">
            <h1 className="text-xl text-center font-medium py-2">
              Are you Felling Stressed?
            </h1>
            <p className="text-lg text-[#363636]">
              Are you feeling stressed? Struggling to manage life's pressures?
              Seeking natural remedies to support your health, including
              fighting cancer? We bring you a comprehensive guide to medicinal
              plants that can transform your well-being. Explore our selection
              of healing plants and embark on a journey to a
              healthier, happier you.
            </p>
            <p className="text-center py-2 text-xl">Good Health from Natural Plants</p>
          </div>
        </div>
      </Carousel>
      <div className="block md:flex justify-between pl-3 lg:pl-10 xl:pl-[15rem]">
        {/* <div className="w-full md:w-[40%]  pt-[10rem]">
        <h1 className="text-[2.2rem] 2xl:text-[4.2rem] font-medium leading[1rem] 2xl:leading-[4rem] text-[#003F13]">Medicinal plants web.</h1>
        <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8">Medicinal plants platform is dedicated to provide source of accurate, comprehensive, and accessible information on medicinal plants. We are dedicated to empowering individuals with knowledge about the health benefits, side effects, uses, and safety of medicinal plants, enabling them to make informed decisions about their health and well-being.</p>
        <CustomButton/>
      </div> */}
        <div className="  pt-[5rem] w-full md:w-[60%]">
          {/* <img src={headingImage} alt="landing image" className="w-full " /> */}
          {/* <div className='w-1/2'> */}

          {/* </div> */}
        </div>
      </div>
    
    </>
  );
};

export default Heading;
