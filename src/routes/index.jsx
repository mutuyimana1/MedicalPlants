import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
import Checkout from '../components/Checkout'
import ViewCart from '../components/ViewCart'
import SignUpForm from '../components/Forms/SignUpForm'
import LoginForm from '../components/Forms/LoginForm'
import Shop from '../pages/shop'
import DashboardLayout from "../components/DashboardLayout"
import CreateProduct from '../pages/Dashboard/CreateProduct'
import Dashboard from '../pages/Dashboard/dashboard'
import OverView from '../pages/Dashboard/OverView'
import Dash from '../pages/Tes'
import AllProducts from "../pages/Dashboard/AllProducts"
import AllUsers from '../pages/Dashboard/Users/allUsers'
import UserOverView from '../pages/Dashboard/Users/UserOverView'
import VegetablePlants from '../pages/VegetablePlants'
import FlowerPlants from '../pages/FlowerPlants'
import EdiblePlants from '../pages/EdiblePlants'
import OthersPlants from '../pages/OthersPlants'
const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product/details' element={<ProductDetails />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/medicinalplants/vegetables' element={<VegetablePlants />} />
        <Route path='/medecinalplants/flowers' element={<FlowerPlants />} />
        <Route path='/medecinalplants/edible' element={<EdiblePlants />} />
        <Route path='/medecinalplants/others' element={<OthersPlants />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<ViewCart />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/dashboard' element={<DashboardLayout />} />
        
        {/* Nested routes under "/dashboard" */}
        <Route path='/dash' element={<Dash/>}/>
            <Route path='/dashboard/product/add' element={<CreateProduct/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/product/overview' element={<OverView/>}/>
            <Route path='/dashboard/products' element={<AllProducts/>}/>
            <Route path='/dashboard/users' element={<AllUsers/>}/>
            <Route path='//dashboard/user/overview' element={<UserOverView/>}/>
      </Routes>
      {/* <DashboardLayout>
          <Routes>
            <Route path='/test' element={<Dash/>}/>
            <Route path='/dashboard/product/add' element={<CreateProduct/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/product/overview' element={<OverView/>}/>
            <Route path='/dashboard/products' element={<AllProducts/>}/>
            <Route path='/dashboard/users' element={<AllUsers/>}/>
            <Route path='//dashboard/user/overview' element={<UserOverView/>}/>
          </Routes>
        </DashboardLayout> */}
    </Router>
  )
}

export default Index
