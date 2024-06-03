import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import "../components/header.css";
import ProductCard from "../components/ProductCard";
import aboutImage1 from "../assets/images/Urtica dioica L.(igisura).jpg";
import aboutImage2 from "../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg";
import Footer from "../components/Footer";
import { Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlantByCategories } from "../redux/slices/plant/plantThunks";
import { useNavigate } from "react-router-dom";
import LeavesPlants from "./plantCategories/leavesPlants";
import Vegetables from "./plantCategories/Vegetables";
import NotChecken from "./plantCategories/NotChecken";
import Flower from "./plantCategories/Flowers";
import Fruits from "./plantCategories/Fruits";
import Routes from "./plantCategories/Routes";
import Spices from "./plantCategories/Spices";
import Edible from "./plantCategories/Edible";
const MedecinalPlants = () => {
  const { plantCategory } = useSelector((state) => state.plants);

  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: <h1>See more</h1>,
      children: (
        <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full m-auto">
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate(`/plant/view/${el?._id}`)}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
          <ProductCard
            img1={aboutImage1}
            img2={aboutImage2}
            name={"Urtica massaica"}
            btnName={"ReadMore"}
            description={"Fresh roots are crushed, boiled and strained"}
            onClick={() => navigate("/plant/view")}
          />
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPlantByCategories(`?category=leaves`)(dispatch);
  }, [dispatch]);
  console.log("plant categories", plantCategory);
  return (
    <>
      <NavBar />
      <div className="w-full h-screen bg-[url('https://media.istockphoto.com/id/175203893/photo/smiling-woman-with-healthy-skin-holding-cream.jpg?s=2048x2048&w=is&k=20&c=PyB-0SOmKlVtEFsHpuYh-IxJcdfbg-SIoYrWwEuZeBU=')] bg-cover mt-[7rem] bg-fixed">
        {/* <div className="w-full relative top-3 z-50"> */}
        {/* <div className="bg-white px-10 py-4 w-1/3 fixed right-0 flex gap-5"> */}
        {/* <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width:"200px",marginTop:"10px"}}/> */}
        {/* <CategoriesAccordion/> */}
        {/* <Select
    showSearch
    style={{
      width: 200,
      height:50
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    
      
    options={[
      {
        value: '1',
        label: 'Vegetables',
      },
      {
        value: '2',
        label: 'Flowers',
      },
      {
        value: '3',
        label: 'Spices',
      },
      {
        value: '4',
        label: 'Fruit',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6', 
        label: 'Stem',
      },
      {
        value: '7',
        label: 'Roots',
      },
      {
        value: '8',
        label: 'Lesser- known ',
      },
      {
        value: '9',
        label: 'Edible Plants',
      },
      {
        value: '10',
        label: 'Not for kitchen daily activities',
      },
    ]}
  /> */}

        {/* </div> */}
        {/* </div> */}
        <h1 className="pt-20 text-center  text-2xl font-bold">
          Medicinal Plants
        </h1>
        <LeavesPlants />
        <Vegetables />
        <NotChecken />
        <Flower />
        <Fruits />
        <Routes />
        <Spices />
        <Edible />
        <Footer />
      </div>
    </>
  );
};

export default MedecinalPlants;
