import React from 'react';
import './style.css'

import abimg from '../../images/fotosdelportafolio/aboutmary.jpg'

import {Link} from 'react-router-dom'

const AboutArea3 = (props) => {

  return (
    <div className="wpo-about-area-3 section-padding">
        <div className="wpo-about-wrap">
            <div className="container">
            <div className="col-12">
                <div className="section-title-2 text-center">
                    <h2>About Me</h2>
                </div>
            </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-s2-img">
                            <img src={abimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="wpo-about-text">
                            <h2>Human Resources Specialist</h2>
                            <p>I’m a HR specialist with an interest in building the most effective workforce possible. I 
                                am leading initiatives and teams to help companies solve business problems and fuel 
                                greater results. Skilled in Customer Service, Bilingual Communications, Strategic 
                                Planning-and Research. Also, I have strong HR generalist knowledge with practical 
                                understanding business need. Proven ability to successfully multi-task in a dynamic, 
                                fast-paced environment while meeting all deadlines. </p>
                            <ul>
                                <li>High Quality Service</li>
                                <li>Best Customer Experience in Marketplace.</li>
                                <li>Unique Development.</li>
                            </ul>
                            <Link to="//www.dropbox.com/sh/zxtxwiad1j1y8yr/AABcVnUE9NkD-wHxgyN3QqzZa?dl=1" className="theme-btn-s2">Download CV</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutArea3;