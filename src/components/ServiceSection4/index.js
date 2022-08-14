import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'


const ServiceSection4 = (props) => {
    return(
        <div className="work-area-3 section-padding">
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
                                <i className="fi flaticon-man"></i>
                            </div>
                            <div className="work-content">
                                <h2>Family Law</h2>
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
                                <h2>Personal Injury</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-man"></i>
                            </div>
                            <div className="work-content">
                                <h2>Business Law</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-thief"></i>
                            </div>
                            <div className="work-content">
                                <h2>Criminal Law</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-school"></i>
                            </div>
                            <div className="work-content">
                                <h2>Education Law</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <i className="fi flaticon-house"></i>
                            </div>
                            <div className="work-content">
                                <h2>Real Estate Law</h2>
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

export default ServiceSection4;