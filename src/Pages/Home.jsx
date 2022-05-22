import React from 'react'
import IndexBody from '../Component/Body/IndexBody'
import Carousel from '../Component/Carousel/Carousel'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <IndexBody/>
    <Footer/>
    </>
  )
}

export default Home