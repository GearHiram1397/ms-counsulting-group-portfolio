import React from 'react'
import './style.css'

import proj1 from '../../images/fotosdelportafolio/trasportation.jpg'
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
                                        <span>Job title</span>
                                        <h2>HR Specialist</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Start Date</span>
                                        <h2>March 2020</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>End Date</span>
                                        <h2>Present</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <p>Offer generalized support and consulting in a variety of benefits areas to include, but
                                not confined to only the following duties: Verification of Employment (VOE), Program
                                Administrator for Military Leave Program, Time & Labor- Offer secondary support
                                toward the Time and Labor (T&L) PeopleSoft HCM system. ESL/SLP Administrator
                                Administer the Extended Sick Leave (ESL), Sick Leave Pool (SLP) and Sick Leave Donation
                                requests. Routinely interact with health professionals and utilize evidence-based
                                research toward case analysis and recommendation. Interpret policies and consult with
                                staff regarding program details. Offer ongoing review and revision of all written
                                documents, web content, and electronic policies and procedures. Share up-to-date
                                status of case requests through the weekly delivery of the ADA & ESL/SLP status report
                                to HR Generalists</p>
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