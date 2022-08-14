import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'


const ServiceSection3 = (props) => {
    return(
        <div className="work-area-2 section-padding">
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
                                <i className="fi flaticon-lung"></i>
                            </div>
                            <div className="work-content">
                                <h2>Lung Diseases</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-heart-1"></i>
                            </div>
                            <div className="work-content">
                                <h2>Heart Diseases</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-bone"></i>
                            </div>
                            <div className="work-content">
                                <h2>Orthopaedic</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-scalpel"></i>
                            </div>
                            <div className="work-content">
                                <h2>General Surgery</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-drug"></i>
                            </div>
                            <div className="work-content">
                                <h2>Pharmacy</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-accident"></i>
                            </div>
                            <div className="work-content">
                                <h2>Sports Injury</h2>
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

export default ServiceSection3;