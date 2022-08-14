import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

import icon1 from '../../images/icon/icon3.png'
import icon2 from '../../images/icon/icon4.png'
import icon3 from '../../images/icon/icon5.png'
import icon4 from '../../images/icon/icon6.png'
import icon5 from '../../images/icon/icon7.png'
import icon6 from '../../images/icon/icon8.png'


const ServiceSection2 = (props) => {
    return(
        <div className="work-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-2 text-center">
                        <h2>This is what I do.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src={icon1} alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Planning</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src={icon2} alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Interior</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src={icon3} alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Exterior</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src={icon4} alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Restoration</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src={icon5} alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Building</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src={icon6} alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Consultation</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection2;