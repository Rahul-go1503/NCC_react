import React from 'react'
import './Blogs.css'
import data from './DataBlogs'

const AllBlogs = () => {
    return (
        <>
            <p className="heading">Blogs</p>
            <div id="list" className="container d-flex flex-wrap p-0 justify-content-evenly blogList">
                {data.map(blog => (
                    <>
                        <div className="p-2 blogBox">
                            <div className="ncc-bg-blue blogBig">
                                <a href="./blog-aj.html">
                                    <div className="blogImg">
                                        <img src={blog.image} className="blogImg-mobile mobileSmall"/>
                                            <div className="ncc-white authorSmall" style={{backgroundImage : `url(${blog.image})`}}>
                                                <span className="details m-2 px-2">
                                                    <p>By: <span>{blog.author}</span></p>
                                                </span>
                                            </div>
                                    </div>
                                    <div className="ncc-bg-blue px-3 pt-3 pb-3 ncc-white blogTitleSmall">
                                        <span>{blog.Title}</span>
                                        <p className="by">By: <span>{blog.author}</span></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default AllBlogs