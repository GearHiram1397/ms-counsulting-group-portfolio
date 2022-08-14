import React from 'react'
import {Link}  from 'react-router-dom';
import './style.css'

const Hero4 = ( props ) => {
    return(
        <section className="wpo-hero-style-4">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-md-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay=".5s">I Create Thoughtful Experiences for Brands.</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">More than 10 years of creating digital solutions</span>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <div className="hero-btn">
                                    <Link to="/about" className="theme-btn">More About</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero4;