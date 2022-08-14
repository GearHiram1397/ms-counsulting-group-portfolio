import React from 'react'
import {Link}  from 'react-router-dom';
import slimg from '../../images/slider/hero-shape2.png'
import './style.css'

const Hero8 = ( props ) => {
    return(
        <section className="wpo-hero-style-7">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-7 col-md-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">I Take Care Of Your Healthy Health</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">Many of the normal daily activities we take for granted. Dpend on the health of our Eyes.</span>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <div className="hero-btn">
                                    <Link to="/about" className="theme-btn">More About</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-slide-right-img">
                    <div className="slide-img wow fadeInRightSlow" data-wow-duration="2000ms">
                        <img src={slimg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero8;