import React from 'react'
import './style.css'

import proj1 from '../../images/project/img-4.jpg'
import proj2 from '../../images/project/img-2.jpg'
import proj3 from '../../images/project/img-3.jpg'

const ProjectSingle = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-minimal-wrap">
                            <div className="wpo-minimal-img">
                                <img src={proj1} alt=""/>
                            </div>
                        </div>
                        <div className="wpo-project-details-list">
                            <div className="row">
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Job Title</span>
                                        <h2>HR Manager</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Start Date</span>
                                        <h2>July 2014</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>End Date</span>
                                        <h2>February 2019</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <p>
                            Manage all aspects of clinic operations including total financial control and 
                            management of up to 18 employees. Actively delivering HR solutions in the areas of 
                            staffing, on-boarding, employee development, payroll and benefits, performance 
                            management and organizational effectiveness in support company goals.  </p>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="wpo-p-details-img">
                                         <img src={proj2} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="wpo-p-details-img">
                                        <img src={proj3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-quote">
                            <p>Sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary net Essential book for you. </p>
                            <span>Robert Luee Happy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle;