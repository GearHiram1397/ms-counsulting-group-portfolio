import React from 'react'
import './style.css'

import proj1 from '../../images/fotosdelportafolio/judge.jpg'
import proj2 from '../../images/fotosdelportafolio/court.jpg'
import proj3 from '../../images/fotosdelportafolio/case.jpg'

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
                                        <h2>Administrative Assistant</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Start Date</span>
                                        <h2>January 2010</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>End Date</span>
                                        <h2>November 2011</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <p>
                                Conduct detailed investigations, searching, interviews, interrogations, evidence 
                                collection and preservation and various methods of investigation. Keep detailed 
                                records and prepare investigative reports.</p>
                            
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
                            <p>Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. </p>
                            <span>Swami Vivekananda</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle;