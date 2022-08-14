import React from 'react';
import './style.css'

import abimg from '../../images/about/about3.jpg'

import {Link} from 'react-router-dom'

import PartnerSlider from '../partner'

const AboutArea5 = (props) => {

  return (
    <div  className={`fg ${props.ab3class}`}>
        <div className="container custom-container">
            <div className="about-s2-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-s2-img">
                                <img src={abimg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="wpo-about-text">
                            <h2>We will help you as like a best friend</h2>
                                <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <Link to="/about" className="theme-btn-s2">More About</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-client-area">
                    <div className="container">
                        <PartnerSlider/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutArea5;