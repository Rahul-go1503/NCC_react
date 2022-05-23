import React from 'react'
import { Link, useParams } from 'react-router-dom';
import './BlogPost.css'
import data from '../Blogs/DataBlogs'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const BlogPost = () => {
    const { id } = useParams();
    console.log(data[id - 1]);
    return (
        <>
            <Navbar/>
            <div className="blog">

                <h2
                    style={{ textAlign: 'center', fontSize: 40 + 'px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginBottom: 15 + 'px' }}>
                    <u style={{ textDecorationThickness: 0 + 'px', textUnderlineOffset: 10 + 'px' }}>{data[id - 1].Title} </u>
                </h2>
                <h4 style={{ textAlign: 'center', fontWeight: 'normal', fontSize: '27px', color: '#212487', marginTop: '0px' }}>
                    By {data[id - 1].author} | {data[id - 1].Date}</h4>
                <img src={data[id - 1].image} alt="NCC-IITR" className="image" />
                <div className="text">
                    {/* {text.split("\n").map((i,key) => {
return <div key={key}>{i}</div>;
})} */}
                    {data[id - 1].desc.split('\n').map((i, key) => (
                        <p key={key}>{i}</p>

                    ))
                    }
                </div>
            </div>
            <h2
                style={{ "fontSize": "40px", "textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "marginTop": "2%", "fontFamily": "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
                Recommended Blogs</h2>
            <div id="list" className="container d-flex flex-wrap p-0 justify-content-evenly blogList">
                {data.filter(data => data._id != id).map(blog => (
                    <div className="p-2 blogBox">
                        <div className="ncc-bg-blue blogBig">
                            <Link to={`/blogs/${blog._id}`}>
                                <div className="blogImg">
                                    <img src={blog.image} className="blogImg-mobile mobileSmall"/>
                                        <div className="ncc-white authorSmall" style={{backgroundImage : `url(${blog.image})`}}>
                                            <span className="details m-2 px-2">
                                                <p>By: <span>{blog.author}</span></p>
                                            </span>
                                        </div>
                                </div>
                                <div className="ncc-bg-blue px-3 pt-3 pb-3 ncc-white blogTitleSmall">
                                    <span style={{marginTop: '50px'}}>{blog.Title}</span>
                                    <p className="by">By: <span>{blog.author}</span></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
            <Footer/>
        </>
    )
}

export default BlogPost