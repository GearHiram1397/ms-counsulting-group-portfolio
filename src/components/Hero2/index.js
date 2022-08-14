import React from 'react'
import {Link}  from 'react-router-dom';
import shape1 from '../../images/shape/shape-1.png'
import shape2 from '../../images/shape/shape-2.png'
import shape3 from '../../images/shape/shape-3.png'
import shape4 from '../../images/shape/shape-4.png'
import shape5 from '../../images/shape/shape-5.png'
import shape6 from '../../images/shape/shape-6.png'

import './style.css'

const Hero2 = ( props ) => {
    return(
        <section className="wpo-hero-style-1 bg-animate-shape">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12 col-md-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">We are Southern-European Digital Agency</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">More than 10 years of creating digital solutions</span>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <Link to="/about" className="theme-btn">More About</Link>
                                <Link to="/contact" className="theme-btn-s2">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape1">
                <img src={shape1} alt=""/>
            </div> 
            <div className="shape2">
                <img src={shape2} alt=""/>
            </div> 
            <div className="shape3">
                <img src={shape3} alt=""/>
            </div>
            <div className="shape4">
                <img src={shape4} alt=""/>
            </div> 
            <div className="shape5">
                <img src={shape5} alt=""/>
            </div> 
            <div className="shape6">
                <img src={shape6} alt=""/>  
            </div> 
        </section>
    )
}
export default Hero2;