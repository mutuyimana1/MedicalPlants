import React from 'react'
import OverViewCard from '../../../components/OverViewCard'
import { FaUsers } from "react-icons/fa";
import DashboardLayout from '../../../components/DashboardLayout';
const UserOverView = () => {
  return (
    <DashboardLayout>
    <div>
       <h1 className='poppins-bold py-3'>UserOverView</h1> 
       <div className='flex gap-5 flex-wrap'>
       <OverViewCard text={"Total Users"} total={"4000"} icon={<FaUsers size={20}/>}/>
       <OverViewCard text={"Active Users"} total={"250"} icon={<FaUsers size={20}/>}/>
       <OverViewCard text={"Top Users"} total={"100"} icon={<FaUsers size={20}/>}/>
       <OverViewCard text={"Inactive Users"} total={"10"} icon={<FaUsers size={20}/>}/>

       </div>
        </div>
        </DashboardLayout>
  )
}

export default UserOverView