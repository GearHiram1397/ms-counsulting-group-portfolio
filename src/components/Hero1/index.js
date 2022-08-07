import React from 'react'
import {Link}  from 'react-router-dom';
import heroimg from '../../images/fotosdelportafolio/mary-removebg.png'

import './style.css'

const Hero1 = () => {
    return(
        <section className="wpo-hero-style-2" >
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="1.0s">I’m <span>Marysabel</span> Sepulveda</h2>
                            <p className="wow fadeInUp" data-wow-delay="1.5s">HR / Business Consultant </p>
                            <div className="bg-social wow fadeInUp" data-wow-delay="2.0s">
                                <ul>
                                    <li><Link to="//www.facebook.com/msmanagementandconsulting"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="//www.linkedin.com/in/mary-sepulveda-23ab6b138/"><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link to="//instagram.com/mary_splvd?igshid=NWRhNmQxMjQ="><i className="fa fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-slide-right-img">
                    <div className="slide-img wow fadeInRightSlow" data-wow-duration="2000ms">
                        <img style={{height: "55rem"}} src={heroimg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero1;