import React from 'react'
import NavBar from '../components/NavBar'
import Heading from '../components/Heading'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import UnControlebleSlideShow from '../components/UnControllebleSlideShow'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div className='mt-20'>
        <Heading/>
        <UnControlebleSlideShow/>
        <AboutUs/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home