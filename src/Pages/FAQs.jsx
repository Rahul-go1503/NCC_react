import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import Faqs from '../Component/Faqs/Faqs'
const FAQs = () => {
  document.title = 'NCC-IITR | FAQs'
  return (
    <>
      <Navbar/>
      <Faqs/>
      <Footer/>
    </>
  )
}

export default FAQs