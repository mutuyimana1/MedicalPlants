import React from "react";
import aboutImage from "../assets/images/depositphotos_387030350-stock-photo-medicinal-plants-bowls-dry-medicinal.jpg";
import aboutImage1 from "../assets/images/Urtica dioica L.(igisura).jpg";
import aboutImage2 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
import aboutImage3 from "../assets/images/download (4).png";
import leaveImage from "../assets/images/homeimg.jpg";
import prImg from "../assets/images/banner-v4-2.webp"
import prImg2 from "../assets/images/slideshow-v1-2.webp"
import prImg3 from "../assets/images/slideshow-v1-1.webp"
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import UnControlebleSlideShow from "./UnControllebleSlideShow";
const AboutUs = () => {
  const navigate = useNavigate();
  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-white block md:flex justify-between px-10 pt-10">
      <div className="w-full md:w-1/2 relative">
        <div className="w-[25rem] h-[25rem] m-auto absolute -top-32 right-3 lg:right-32">
        <img src={aboutImage} alt="" className="w-full h-full " />
        </div>
      </div>
      <div className="w-full md:w-2/3 pts-80 mds:pt-10 relative -top-24">
        <h1 className="text-4xl font-medium leading-[4rem] text-[#363636] w-full  ">Plants for healthy.</h1>
       
        

        <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8 w-2/3 ">Explore nature's pharmacy with us, where each leaf, flower, and root holds the secret to holistic well-being and vibrant health. </p>
      </div>
    </div>
      <div className="w-full h-[25vh]">
        <img src={leaveImage} alt="" className="w-full h-full bg-top" />
      </div>
    <div>
      {/* <div className="w-full shadow-md p-2 py-4 bg-[#025222] text-white">

    <h1 className="text-center font-medium  text-2xl ">Get More Information about Side Effects of using medicinal Plants</h1>
      </div> */}
      <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
      <ProductCard  img1={prImg} img2={aboutImage2} name={"Urtica massaica"} btnName={"ReadMore"} description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
      <ProductCard  img1={prImg2} img2={aboutImage2} name={"Urtica massaica"} btnName={"ReadMore"} description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
      <ProductCard  img1={aboutImage1} img2={aboutImage2} name={"Urtica massaica"} btnName={"ReadMore"} description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
      <ProductCard  img1={prImg3} img2={aboutImage2} name={"Urtica massaica"} btnName={"ReadMore"} description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
      <ProductCard  img1={aboutImage1} img2={aboutImage2} name={"Urtica massaica"} btnName={"ReadMore"} description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
      </div>
    </div>
      {/* <div className=" pt-5">
=======
      <div className="bg-white block md:flex justify-between px-10 pt-10">
        <div className="w-full md:w-1/2 relative">
          <div className="w-[25rem] h-[25rem] m-auto absolute -top-20 right-3 lg:right-32">
=======
    
     {/* <Carousel autoplay >
     <div className="bg-white block md:flex justify-between px-s10 pt-10 " style={contentStyle}>
        <div className="w-full md:w-1/2 pb-5">
          <div className="w-[25rem] h-[20rem] m-auto">
>>>>>>> 0f91f6c (revert design)
            <img src={aboutImage} alt="" className="w-full h-full " />
          </div>
        </div>
        <div className="w-full md:w-2/3 pt-80 md:pt-10">
          <h1 className="text-4xl font-medium leading-[4rem] text-[#363636] w-full lg:w-1/2 ">
            Plants for healthy.
          </h1>

          <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8 w-2/3">
            Explore nature's pharmacy with us, where each leaf, flower, and root
            holds the secret to holistic well-being and vibrant health.
          </p>
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel> */}
     
      <div>
        {/* <div className="w-full shadow-md p-2 py-4 bg-[#025222] text-white">
          <h1 className="text-center font-medium  text-2xl ">
            Get More Information about Side Effects of using medicinal Plants
          </h1>
        </div> */}
        <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={
              "Fresh roots are crushed, boiled and strained"
            }
            onClick={() => navigate("/product/view")}
          />
        </div>
      </div>
<<<<<<< HEAD
      <div className=" pt-5">
>>>>>>> 28c20d3 (return back on our design)
=======
      {/* <div className=" pt-5">
>>>>>>> 0f91f6c (revert design)
        <div className="w-full shadow-md p-2 py-4 bg-[#025222] text-white">
          <h1 className="text-center font-bold text-2xl uppercase">
            Available medicinal plant products
          </h1>
        </div>
<<<<<<< HEAD
        <p className="text-center py-3">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
      </div> */}
      <div className="p-10 px-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
        <ProductCard  img1={aboutImage1} img2={aboutImage2} name={"Urtica massaica"}amount={40000} btnName={"ReadMore"}  description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
        <ProductCard  img1={aboutImage1} img2={aboutImage} name={"Rubia cordifolia L"}amount={50000} btnName={"ReadMore"}  description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
        <ProductCard  img1={aboutImage2} img2={aboutImage1} name={"Rubia cordifolia L"}amount={40000} btnName={"ReadMore"}  description={"Fresh roots are crushed, boiled and strained"} onClick={()=>navigate("/product/info")}/>
        <ProductCard  img1={aboutImage1} img2={aboutImage2} name={"Rubia cordifolia L"}amount={3000} btnName={"ReadMore"}  description={"Clerodendrum myricoides is a tropical flowering shrub known for itsstriking blue-violet flowers and glossy green foliage."} onClick={()=>navigate("/product/info")}/>
        <ProductCard  img1={aboutImage} img2={aboutImage1} name={"Rubia cordifolia L"}amount={78000} btnName={"ReadMore"}  description={": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."} onClick={()=>navigate("/product/info")}/>
=======
        <p className="text-center py-3">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
<<<<<<< HEAD
      </div>
      <div className="p-10 px-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
        <ProductCard
          status={"For Sale"}
          img1={aboutImage1}
          img2={aboutImage2}
          name={"Urtica massaica"}
          amount={40000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"
          }
          onClick={() => navigate("/product/details")}
        />
        <ProductCard
          status={"Sold"}
          img1={aboutImage1}
          img2={aboutImage}
          name={"Rubia cordifolia L"}
          amount={50000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"
          }
          onClick={() => navigate("/product/details")}
        />
        <ProductCard
          status={"discount"}
          img1={aboutImage2}
          img2={aboutImage1}
          name={"Rubia cordifolia L"}
          amount={40000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Fresh roots are crushed, boiled and strained, and the liquid is used to treatgonorrhoea and syphilis"
          }
          onClick={() => navigate("/product/details")}
        />
        <ProductCard
          status={"For Sale"}
          img1={aboutImage1}
          img2={aboutImage2}
          name={"Rubia cordifolia L"}
          amount={3000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            "Clerodendrum myricoides is a tropical flowering shrub known for itsstriking blue-violet flowers and glossy green foliage."
          }
          onClick={() => navigate("/product/details")}
        />
        <ProductCard
          status={"For Sale"}
          img1={aboutImage}
          img2={aboutImage1}
          name={"Rubia cordifolia L"}
          amount={78000}
          btnName={"ReadMore"}
          btnSecondName={"Add to cart"}
          description={
            ": Tetradenia riparia, also known as Misty Plume Bush, is an aromatic shrubnative to Africa, characterized by its fragrant foliage and clusters of small, white or palepink flowers."
          }
          onClick={() => navigate("/product/details")}
        />
>>>>>>> 28c20d3 (return back on our design)
      </div>
=======
      </div> */}
     
>>>>>>> 0f91f6c (revert design)
    </>
  );
};

export default AboutUs;
