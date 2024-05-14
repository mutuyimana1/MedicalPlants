import React from "react";
import CustomButton from "./CustomButton";
import { MdOutlineReadMore } from "react-icons/md";
import headingImage from "../assets/images/Tetradenia riparia(umuravumba).jpg"
import leaveImage from "../assets/images/homeimg.jpg"
import img2 from "../assets/images/Urtica dioica L.(igisura).jpg"
import img3 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg"
import img4 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg"
import { Carousel } from "antd";
const Heading = () => {
  const contentStyle = {
    margin: 0,
    height: '70vh',
    color: '#fff',
    width:"100%",
    lineHeight: '160px',
    textAlign: 'center',
  };
  return (
    <>
    <div className="block md:flex justify-between pl-3 lg:pl-10 xl:pl-[15rem]">
      <div className="w-full md:w-[40%]  pt-[10rem]">
        <h1 className="text-[2.2rem] 2xl:text-[4.2rem] font-medium leading[1rem] 2xl:leading-[4rem] text-[#003F13]">Discover Premium Health & Beauty Product Brand.</h1>
        <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8">Medicinal plants platform is dedicated to  provide source of accurate, comprehensive, and accessible information on medicinal plants..</p>
        <CustomButton/>
        {/* <div className="flex gap-2 mt-2 cursor-pointer pt-4 text-[#363636] font-bold">View All Products <MdOutlineReadMore size={25}/></div> */}
      </div>
      <div className="  pt-[5rem] w-full md:w-[60%]">
        {/* <img src={headingImage} alt="landing image" className="w-full " /> */}
        {/* <div className='w-1/2'> */}
        <Carousel autoplay>
      <div>
        <img src={headingImage} alt="imag" style={contentStyle}/>
       
      </div>
      <div>
      <img src={img2} alt="imag" style={contentStyle}/>
      </div>
      <div>
      <img src={img3} alt="imag" style={contentStyle}/>
      </div>
      <div>
      <img src={img4} alt="imag" style={contentStyle}/>
      </div>
    </Carousel>
        {/* </div> */}
      </div>
    </div>
    <div className="w-full h-[25vh]">
        <img src={leaveImage} alt="" className="w-full h-full bg-top" />

    </div>
    </>
  );
};

export default Heading;