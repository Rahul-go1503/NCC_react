import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import Event from '../Component/Events/Events'
const Events = () => {
  document.title = 'NCC-IITR | Events'
  return (
    <>
    <Navbar/>
    <Event/>
    <Footer/>
    </>
  )
}

export default Events