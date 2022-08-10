import React from 'react'
import './style.css'


const ServiceSection = (props) => {
    return(
        <div  className={`wpo-service-area ${props.serviceclass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="wpo-service-item">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="wpo-service-wrap">
                                <div className="wpo-services-icon-wrap">
                                    <div className="wpo-service-icon">
                                        <i className="fi flaticon-idea"></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2>Management Consulting Services</h2>
                                    <p>Strategic Business Planning Operations Advisory, Policy and Regulation Development Asistance</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-service-wrap">
                                <div className="wpo-services-icon-wrap">
                                    <div className="wpo-service-icon-2">
                                        <i className="fi flaticon-files-and-folders"></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2>HR Management</h2>
                                    <p>Pre - Employment Screening, Compensation Analysis, Recruiting and Employee Retention Strategies. Employee Benefits, Employee Separations. Performance Management. Time and Attendance Solutions. HR Polocies and Procedures</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-service-wrap">
                                <div className="wpo-services-icon-wrap">
                                    <div className="wpo-service-icon-3">
                                        <i className="fi flaticon-artist"></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2>Marketing Strategies</h2>
                                    <p>Website Creation, Social Media, Online Paid Aids, Email Marketing, Corporate identity, Public Relations / Reputation Management, Direct Marketing, Outdoor Advertising.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-service-wrap">
                                <div className="wpo-services-icon-wrap">
                                    <div className="wpo-service-icon-4">
                                        <i className="fi flaticon-man"></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2>Training and Development</h2>
                                    <p>Service Standards, Team Building, Conflict Management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection;