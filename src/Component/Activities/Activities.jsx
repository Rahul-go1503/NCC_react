import React, { useEffect } from 'react'
import data from './DataActivities'
import './Activities.css'
// console.log(data);

const Activities = () => {
    useEffect(() => {
      
    
      return () => {
        console.log(document.querySelector('.carousel-item'));
      }
    }, [])
    
    return (
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
                            <div className="carousel-item" key={index}>
                                {slides.map((activity, actno) => (
                                    <>
                                        <div key={actno}>
                                            <div className={`activity d-flex ${activity.flexrev ? 'flex-row-reverse' : ' '} justify-content-between align-items-center`} >
                                                <img src={activity.imagePath} style={{ 'borderRadius': '10px' }} />
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
    )
}
console.log(document.querySelector('.carousel-item')); 
export default Activities