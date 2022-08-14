import React from 'react'
import {Link}  from 'react-router-dom';
import icon1 from '../../images/icon/icon1.png';
import icon2 from '../../images/icon/icon2.png';
import './style.css'

const Hero5 = ( props ) => {
    return(
        <section className="wpo-hero-style-5">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">I’m <span>John</span> Smith</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.8s">Freelance UI/UX Designer</p>
                            <div className="bg-social wow fadeInUp" data-wow-delay="1.0s">
                                <ul>
                                    <li><Link to="/"><img src={icon1} alt=""/></Link></li>
                                    <li><Link to="/"><img src={icon2} alt=""/></Link></li>
                                    <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero5;