import React from "react";
import aboutImage from "../assets/images/depositphotos_387030350-stock-photo-medicinal-plants-bowls-dry-medicinal.jpg";
import aboutImage1 from "../assets/images/banner-v4-2.webp";
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
  return (
    <>
      
      <div>
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
     
    
    </>
  );
};

export default AboutUs;
