import React from "react";
import aboutImage from "../assets/images/product-1-1 (1).png";
import aboutImage1 from "../assets/images/download (2).png";
import aboutImage2 from "../assets/images/download (3).png";
import aboutImage3 from "../assets/images/download (4).png";
import ProductCard from "./ProductCard";
const AboutUs = () => {
  return (
    <>
    <div className="bg-white block md:flex justify-between px-10 pt-10">
      <div className="w-full md:w-1/2 relative">
        <div className="w-[25rem] h-[25rem] m-auto absolute -top-20 right-3 lg:right-32">
        <img src={aboutImage} alt="" className="w-full h-full " />
        </div>
      </div>
      <div className="w-full md:w-2/3 pt-80 md:pt-10">
        <h1 className="text-4xl font-medium leading-[4rem] text-[#363636] w-full lg:w-1/2 ">Make Your Skin Shine & Be Good to your Skin.</h1>
        

        <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos velit molestiae assumenda, exercitationem soluta eaque nostrum incidunt nemo, sapiente fuga officiis expedita. Repellendus saepe architecto earum qui optio nobis. Quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel iste necessitatibus dolorum autem. Harum tenetur rerum corrupti, sit facere, facilis repudiandae dolor molestiae sed molestias excepturi porro cum ex? </p>
      </div>
    </div>
      <div className="px-20 pt-5">
        <h1 className="text-center font-medium text-[#363636] text-2xl">Our Medical Plants</h1>
        <p className="text-center py-3">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
      </div>
      <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
        <ProductCard status={"For Sale"} img1={aboutImage1} img2={aboutImage2} name={"Urtica massaica"}amount={40000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"}/>
        <ProductCard status={"Sold"} img1={aboutImage1} img2={aboutImage} name={"Rubia cordifolia L"}amount={50000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"}/>
        <ProductCard status={"discount"} img1={aboutImage2} img2={aboutImage1} name={"Rubia cordifolia L"}amount={40000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"}/>
        <ProductCard status={"For Sale"} img1={aboutImage1} img2={aboutImage2} name={"Rubia cordifolia L"}amount={3000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Clerodendrum myricoides is a tropical flowering shrub known for itsstriking blue-violet flowers and glossy green foliage."}/>
        <ProductCard status={"For Sale"} img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."}/>
      </div>
    </>
  );
};

export default AboutUs;
