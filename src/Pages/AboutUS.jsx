import React from 'react'
import Activities from '../Component/Activities/Activities'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'

const AboutUS = () => {
    document.title = 'NCC-IITR | About Us'
    return (
        <>
            <Navbar />
            <Activities/>
            <Footer/>
            
        </>
    )
}

export default AboutUS