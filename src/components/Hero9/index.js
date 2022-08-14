import React from 'react'
import {Link}  from 'react-router-dom';
import './style.css'

const Hero9 = ( props ) => {
    return(
        <section className="wpo-hero-style-8">
        <div className="wpo-slide-wrap">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-12 slide-caption">
                        <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">Robert William</h2>
                        <span className="wow fadeInUp" data-wow-delay="0.8s">Sinior Lawer Of Callifonia</span>
                        <div className="wow fadeInUp" data-wow-delay="1.0s">
                            <div className="hero-btn">
                                <Link to="/about" className="theme-btn-s2">More About</Link>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Hero9;