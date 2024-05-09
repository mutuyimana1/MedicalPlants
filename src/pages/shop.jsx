import React from 'react';
import { Carousel } from 'antd';
import NavBar from '../components/NavBar';
import img1 from "../assets/images/download (1).png"
import img2 from "../assets/images/pexels-photo-4036233.jpeg"
import img3 from "../assets/images/product-1-1 (1).png"
import img4 from "../assets/images/product-8.png"
import DropDownAccordion from '../components/dropdownAccordion';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
const contentStyle = {
  margin: 0,
  height: '70vh',
  color: '#fff',
  width:"100%",
  lineHeight: '160px',
  textAlign: 'center',
};
const Shop = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
    <NavBar/>
    <div className='mt-40 flex gap-10 px-20'>
        <div className='w-1/2'>
        <Carousel autoplay>
      <div>
        <img src={img1} alt="imag" style={contentStyle}/>
       
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
        </div>
        <div className='mt-5 w-full'>
            <h1 className='py-4 text-lg font-medium '>Select your prefered Medical Plants</h1>
            <DropDownAccordion/>
        </div>
    </div>
    <div className='mt-5'>
        <div className='flex m-auto gap-5  w-[90%] flex-wrap'>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
        <div className='mt-3'>

        <Footer/>
        </div>
    </div>
    
    </>
  );
};
export default Shop;