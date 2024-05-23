import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";
import Checkout from "../components/Checkout";
import ViewCart from "../components/ViewCart";
import SignUpForm from "../components/Forms/SignUpForm";
import LoginForm from "../components/Forms/LoginForm";
import Shop from "../pages/shop";
import DashboardLayout from "../components/DashboardLayout";
import CreateProduct from "../pages/Dashboard/CreateProduct";
import Dashboard from "../pages/Dashboard/dashboard";
import OverView from "../pages/Dashboard/OverView";
// import Dash from '../pages/Tes'
import AllProducts from "../pages/Dashboard/AllProducts";
import AllUsers from "../pages/Dashboard/Users/allUsers";
import UserOverView from "../pages/Dashboard/Users/UserOverView";
import VegetablePlants from "../pages/VegetablePlants";
import FlowerPlants from "../pages/FlowerPlants";
import EdiblePlants from "../pages/EdiblePlants";
import OthersPlants from "../pages/OthersPlants";
import ViewProducts from "../components/ViewProduct";
import Dash from "../pages/Dashboard/dash";
import CreateUser from "../pages/Dashboard/CreateUser";
import ProductInfo from "../pages/ProductInfo";
import MedecinalPlants from "../pages/MedecinalPlants";
const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/details" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/medicinalplants/vegetables"
          element={<VegetablePlants />}
        />
        <Route path="/medicinalplants/flowers" element={<FlowerPlants />} />
        <Route path="/medicinalplants/edible" element={<EdiblePlants />} />
        <Route path="/medicinalplants/others" element={<OthersPlants />} />
        <Route path="/Product/view" element={<ViewProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<ViewCart />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/product/info" element={<ProductInfo />} />
        <Route path="/plants" element={<MedecinalPlants />} />

        {/* Nested routes under "/dashboard" */}
        <Route path="/dash" element={<Dash />} />
        <Route path="/dashboard/plant/add" element={<CreateProduct />} />
        <Route path="/dashboard/user/add" element={<CreateUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/plant/overview" element={<OverView />} />
        <Route path="/dashboard/plants" element={<AllProducts />} />
        <Route path="/dashboard/users" element={<AllUsers />} />
        <Route path="//dashboard/user/overview" element={<UserOverView />} />
      </Routes>
      {/* <DashboardLayout>
          <Routes>
            <Route path='/test' element={<Dash/>}/>
            <Route path='/dashboard/plant/add' element={<CreateProduct/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/plant/overview' element={<OverView/>}/>
            <Route path='/dashboard/products' element={<AllProducts/>}/>
            <Route path='/dashboard/users' element={<AllUsers/>}/>
            <Route path='//dashboard/user/overview' element={<UserOverView/>}/>
          </Routes>
        </DashboardLayout> */}
    </Router>
  );
};

export default Index;
