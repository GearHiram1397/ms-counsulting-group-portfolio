import React from 'react'
import {Link}  from 'react-router-dom';
import './style.css'

const Hero10 = ( props ) => {
    return(
        <section className="wpo-hero-style-9">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-7 col-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="1.0s">Welcome to the best 3d World</h2>
                            <p className="wow fadeInUp" data-wow-delay="1.5s">More than 10 years of creating digital solutions</p>
                            <div className="wow fadeInUp" data-wow-delay="2.0s">
                                <Link to="/about" className="theme-btn">More About</Link>
                                <Link to="/contact" className="theme-btn-s2">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero10;