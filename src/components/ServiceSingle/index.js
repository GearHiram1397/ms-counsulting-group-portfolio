import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

import proj1 from '../../images/project/img-4.jpg'
import proj2 from '../../images/project/img-2.jpg'
import proj3 from '../../images/project/img-3.jpg'

const ServiceSingle = ( props ) => {
    return(
        <div className="wpo-project-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="wpo-service-sidebar">
                            <div className="widget all-wpo-services">
                                <h3>All Services</h3>
                                <ul>
                                    <li className="current"><Link to="/serviceDetails">Product Design</Link></li>
                                    <li><Link to="/serviceDetails">Web Design</Link></li>
                                    <li><Link to="/serviceDetails">Visual Design</Link></li>
                                    <li><Link to="/serviceDetails">Business Statregy</Link></li>
                                    <li><Link to="/serviceDetails">3D Design</Link></li>
                                    <li><Link to="/serviceDetails">Digital Strategy</Link></li>
                                </ul>
                            </div>
                            <div className="widget contact-widget">
                                <div>
                                    <h5>Request a Call Back</h5>
                                    <h4>(512) 804-9875</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="wpo-minimals-wrap">
                            <div className="minimals-img">
                                <img src={proj1} alt=""/>
                            </div>
                        </div>
                        <div className="wpo-p-details-section">
                            <h4>Product Design</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
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
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSingle;