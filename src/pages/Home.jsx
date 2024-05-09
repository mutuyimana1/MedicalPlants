import React from 'react'
import NavBar from '../components/NavBar'
import Heading from '../components/Heading'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div className='mt-20'>
        <Heading/>
        <AboutUs/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home