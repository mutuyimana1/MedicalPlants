import React from 'react'
import ProductDetails from '../../components/ProductDetails'
import ProductTable from '../../components/Tables/ProductTable'
import DashboardLayout from '../../components/DashboardLayout'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {
  const navigate=useNavigate();
  return (
    <DashboardLayout>
    <div>
<div className='flex justify-between my-5'>

       <h1 className='poppins-bold py-3'>AllProducts</h1><button className='text-white p-s2 px-4 bg-[#003F13] rounded-md text-xl' onClick={()=>navigate("/dashboard/product/add")}>Add product</button>
</div>
        <ProductTable/>
        </div>
        </DashboardLayout>
  )
}

export default AllProducts