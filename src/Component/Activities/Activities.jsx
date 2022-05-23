import React, { useEffect } from 'react'
import data from './DataActivities'
import './Activities.css'
// console.log(data);

const Activities = () => {
    // document.querySelector('.read-more').addEventListener('click', function () {
    //     if (this.getAttribute('data-more') == 0) {
    //       this.setAttribute('data-more', 1);
    //       this.style.display = 'block';
    //       this.innerHTML = 'Read Less';
  
    //       this.previousElementSibling.style.display = 'none';
    //       this.previousElementSibling.previousElementSibling.style.display = 'inline';
    //     }
    //     else if (this.getAttribute('data-more') == 1) {
    //       this.setAttribute('data-more', 0);
    //       this.style.display = 'inline';
    //       this.innerHTML = 'Read More';
  
    //       this.previousElementSibling.style.display = 'inline';
    //       this.previousElementSibling.previousElementSibling.style.display = 'none';
    //     }})
    useEffect(() => {


        return () => {
            console.log(document.querySelector('.carousel-item'));
        }
    }, [])

    return (
        <>
            <div className="container">
                <h2 className="about-heading">UNITY AND DISCIPLINE | एकता और अनुशासन</h2>
                <h2 className="about-heading aboutheading2">Unity and Discipline</h2>
                {/* <!-- NCC Images --> */}
                <div className="about-images d-flex justify-content-around my-4">
                    <img src="./images/aboutus1.jpg" style={{"width":"30%","borderRadius":"5px"}} alt='about' />
                    <img src="./images/Aim.jpg" style={{"width":"30%","borderRadius":"5px"}}alt='about' />
                    <img src="./images/aboutNCC.jpg" style={{"width":"30%","borderRadius":"5px"}}alt='about' />
                </div>
                <div id="nccImageCarousel" className="carousel slide" data-bs-ride="carousel">

                    {/* <!-- Indicators/dots --> */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#nccImageCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#nccImageCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#nccImageCarousel" data-bs-slide-to="2"></button>
                    </div>

                    {/* <!-- The slideshow/carousel --> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/aboutus1.jpg" style={{borderRadius: '10px'}}alt='about' />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/Aim.jpg" style={{borderRadius: '10px'}} alt='about'/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/aboutNCC.jpg" style={{borderRadius: '10px'}}alt='about'/>
                        </div>
                    </div>

                    {/* <!-- Left and right controls/icons --> */}
                    <button className="carousel-control-prev mobile" type="button" data-bs-target="#nccImageCarousel"
                        data-bs-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <button className="carousel-control-next mobile" type="button" data-bs-target="#nccImageCarousel"
                        data-bs-slide="next">
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
                {/* <!-- About NCC --> */}
                <div className="ncc-about" style={{padding: '20px'}}>
                    The National Cadet Corps (NCC) is a youth development movement. It has enormous potential for
                    nation-building. NCC IIT Roorkee is one of the oldest NCC units in the country, providing opportunities to
                    the youth for their overall development with a sense of Duty, Commitment, Dedication, Discipline so that
                    they become able leaders and useful citizens. The National Cadet Corps, IIT Roorkee under the unit 3 UK<span
                        className="long">Composite Technical Regiment National Cadet Corps is a student unit of the Indian Army which aims
                        to develop
                        a sense of discipline, rigour, and unity in the cadets. It provides a platform for the students to develop
                        their personalities by engaging themselves in various events. The Guard of Honour, Indoor and outdoor sports
                        events, firing practice, and Training camps aim to inculcate the values of teamwork and discipline in the
                        cadets and exposure to life in the Army.At the same time, working for the society, the NCC conducts
                        plantation and cleanliness drives, awareness campaigns, and activities for social causes to instill the
                        spirit of service in the young cadets. Currently, the NCC has 420 active members who are continuously guided
                        by the Unit's Commanding Officer and are working towards self-development and nation-building. 'UNITY AND
                        DISCIPLINE,' the motto of the NCC, precisely highlights the aim and culture of the unit.</span>
                    <span className="dots fw-bold">...</span> <span className="read-more fw-bold" data-more="0">Read More</span>
                </div>
            </div>
            <div className="container">
                <div id="activityCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#activityCarousel" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        {data.map((slides, index) => (
                            <>
                                <div className={`carousel-item ${index === 0 ? 'active' : ' '}`} key={index}>
                                    {slides.map((activity, actno) => (
                                        <>
                                            <div key={actno}>
                                                <div className={`activity d-flex ${activity.flexrev ? 'flex-row-reverse' : ' '} justify-content-between align-items-center`} >
                                                    <img src={activity.imagePath} style={{ 'borderRadius': '10px' }}alt='activityimage' />
                                                    <div className="activity-content">
                                                        <h4 className="activity-heading py-2">{activity.heading} </h4>
                                                        <ul>
                                                            {activity.Desc.map((point, lino) => (
                                                                <li className="activity-description" key={lino}>
                                                                    {point}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="arrow">
                    <button className="carousel-control-prev" type="button" data-bs-target="#activityCarousel" data-bs-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                    </button>
                </div>
                <div className="arrow">
                    <button className="carousel-control-next" type="button" data-bs-target="#activityCarousel" data-bs-slide="next">
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
console.log(document.querySelector('.carousel-item'));
export default Activities