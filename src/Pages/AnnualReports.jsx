import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import AnnualReport from '../Component/AnnualReport/AnnualReport'
const AnnualReports = () => {
  document.title = 'NCC-IITR | Reports'
  return (
    <>
    <Navbar/>
    <AnnualReport/>
    <Footer/>
    </>
  )
}

export default AnnualReports