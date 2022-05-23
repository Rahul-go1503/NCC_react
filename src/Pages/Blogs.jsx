import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import AllBlogs from '../Component/Blogs/Blogs'
import Footer from '../Component/Footer/Footer'
import { useParams } from 'react-router-dom'

const Blogs = () => {
  const {author}= useParams();
  console.log(author);
  return (
    <>
    <Navbar/>
    <AllBlogs/>
    <Footer/>
    </>
  )
}

export default Blogs