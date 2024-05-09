import React from 'react'
import ProductDetails from '../../components/ProductDetails'
import ProductTable from '../../components/Tables/ProductTable'
import DashboardLayout from '../../components/DashboardLayout'

const AllProducts = () => {
  return (
    <DashboardLayout>
    <div>

       <h1 className='poppins-bold py-3'>AllProducts</h1> 
        <ProductTable/>
        </div>
        </DashboardLayout>
  )
}

export default AllProducts