import React from 'react'
import OverviewCard from '../../components/OverViewCard'
import { FaProductHunt } from "react-icons/fa6";
import ProductTable from '../../components/Tables/ProductTable';
import DashboardLayout from '../../components/DashboardLayout';
import { useNavigate } from 'react-router-dom';
const OverView = () => {
  const navigate=useNavigate();
  return (
    <DashboardLayout>
    <div>
     <h1 className='poppins-bold py-3'>Product OverView</h1>
        <div className='flex gap-5 flex-wrap'>
        <OverviewCard text={"Total Product"} total={"120"} icon={<FaProductHunt size={20}/>}/>
        <OverviewCard text={"Sold Product"} total={"160"} icon={<FaProductHunt size={20}/>}/>
        <OverviewCard text={"Orderd Product"} total={"10"} icon={<FaProductHunt size={20}/>}/>
        <OverviewCard text={"Popular Product"} total={"20"} icon={<FaProductHunt size={20}/>}/>
        </div>
        <div className='flex justify-between my-2'>

        <h1 className='poppins-bold py-3'>Products</h1>
        <button className='text-white h-10 px-4 bg-[#003F13] rounded-md text-xl' onClick={()=>navigate("/dashboard/product/add")}>Add Product</button>
        </div>
        <ProductTable/>
        </div>
        </DashboardLayout>
  )
}

export default OverView