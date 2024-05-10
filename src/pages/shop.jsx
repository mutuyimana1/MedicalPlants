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
import aboutImage from "../assets/images/product-1-1 (1).png";
import aboutImage1 from "../assets/images/download (2).png";
import aboutImage2 from "../assets/images/download (3).png";
import aboutImage3 from "../assets/images/download (4).png";
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
    <div className='mt-40 md:flex  gap-10 px-20'>
        <div className='w-full md:w-1/2'>
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
    <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
        <ProductCard status={"For Sale"} img1={aboutImage1} img2={aboutImage2} name={"Urtica massaica"}amount={40000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"}/>
        <ProductCard status={"Sold"} img1={aboutImage1} img2={aboutImage} name={"Rubia cordifolia L"}amount={50000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"}/>
        <ProductCard status={"discount"} img1={aboutImage2} img2={aboutImage1} name={"Rubia cordifolia L"}amount={40000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"}/>
        <ProductCard status={"For Sale"} img1={aboutImage1} img2={aboutImage2} name={"Rubia cordifolia L"}amount={3000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={"Clerodendrum myricoides is a tropical flowering shrub known for itsstriking blue-violet flowers and glossy green foliage."}/>
        <ProductCard status={"For Sale"} img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"} btnSecondName={"Add to cart"} description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."}/>
      </div>
        <div className='mt-3'>

        <Footer/>
        </div>
    </div>
    
    </>
  );
};
export default Shop;