import React from 'react'
import OverviewCard from '../../components/OverViewCard'
import { FaProductHunt } from "react-icons/fa6";
import ProductTable from '../../components/Tables/ProductTable';
import DashboardLayout from '../../components/DashboardLayout';
const OverView = () => {
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
        <h1 className='poppins-bold py-3'>requested item</h1>
        <ProductTable/>
        </div>
        </DashboardLayout>
  )
}

export default OverView