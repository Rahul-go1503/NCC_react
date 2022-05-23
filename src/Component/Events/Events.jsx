import React from 'react'
import './Events.css'
import data from './DataEvents'

const Events = () => {
    return (
        <>
            <div className="section-heading text-center d-flex align-items-center justify-content-around py-3" style={{ marginTop: '182px' }}>
                <div className="line"></div>
                <p className="heading">Recent Events</p>
                <div className="line"></div>
            </div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
                <div className="carousel-indicators ncc-bg-green-1">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    {data.filter((filterevent) => filterevent._id <= 3 ).map((event, index) => (
                        <div className={`carousel-item ${event._id === 1 ? 'active' : ' '}`} key={index}>
                            <img src={event.image} alt={`event${event._id}`} className="d-block" data-bs-toggle="modal" data-bs-target={`#exampleModal${event._id}`} onClick="changeCarouselInterval()" />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            {data.map((modal, index) => (
                <div className="modal fade" id={`exampleModal${modal._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key={index}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center">
                                            <img src={modal.image} alt={`event${modal._id}`} className="d-block imga" style={{ "width": "100%", "margin": "0px", "padding": "0px", "borderRadius": "0" }} />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name">{modal.name}</p>
                                            <p className="text-center event-des" style={{ padding: '13px' }}>{modal.desc}</p>
                                            <p className="event-details">Date & Time - {modal.Date}, {modal.Time}</p>
                                            <p className="event-details">Venue - {modal.venue}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="section-heading text-center d-flex align-items-center justify-content-around py-3">
                <div className="line"></div>
                <p className="heading">Past Events</p>
                <div className="line"></div>
            </div>
            <div className="recom">
                <div className="carousel-container">
                    <div className="carousel-inner">
                        <div className="track">
                            {data.filter((filterevent) => filterevent._id > 3).map((event, index) => (
                                <div className="card-container" key={index}>
                                    <div className="card">
                                        <div className="img"><img src={event.image} alt={`pastevent${event._id}`} style={{ "width": "100%", "borderRadius": "10px" }} data-bs-toggle="modal"
                                            data-bs-target={`#exampleModalp${event._id}`} /></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="nav">
                        <button className="prev">
                            <i className="fa fa-chevron-left"></i>
                        </button>
                        <button className="next">
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    </div>

                </div>
            </div>
            {data.filter((filterevent) => filterevent._id > 3).map((event, index) => (
                <div className="modal fade" id={`exampleModalp${event._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <div className="container-fluid p-0">
                                    <div className="row d-flex modal-box m-0">
                                        <div className="col-6 px-0 align-self-center">
                                            <img src={event.image} alt={`pastevent${event._id}`} style={{width: '100%'}} />
                                        </div>
                                        <div className="col-6 modal-event">
                                            <p className="text-center event-name" style={{"paddingTop":"10px","fontSize":"30px","lineHeight":"35px"}}>{event.name}</p>
                                            <p className="text-center event-des" style={{"paddingTop":"0px","margin":"0px","fontSize":"15px"}}>{event.desc}
                                            </p>
                                            <p className="event-details" style={{"paddingTop":"20px","fontSize":"15px"}}>Date & Time -{event.Date}</p>
                                            <p className="event-details" style={{"fontSize":"15px"}}>Venue - {event.venue}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Events