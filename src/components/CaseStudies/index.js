
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import case1 from '../../images/case/1.jpg'
import case2 from '../../images/case/2.jpg'
import case3 from '../../images/case/3.jpg'
import case4 from '../../images/case/4.jpg'
import case5 from '../../images/case/5.jpg'

import './style.css'

class CaseStudies extends Component {
    render( props ) {
        var settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            margin: 10,
            loop: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="case-area section-padding">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>My Resent Case Studies</h2>
                        </div>
                    </div>
                    <div className="case-active owl-carousel">
                        <Slider {...settings}>
                            <div className="grid-item">
                                <div className="case-item">
                                    <div className="case-single">
                                        <img src={case1} alt=""/>
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-inner">
                                            <p className="sub">Corporate</p>
                                            <h3>General Service</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="case-item">
                                    <div className="case-single">
                                        <img src={case2} alt=""/>
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-inner">
                                            <p className="sub">General</p>
                                            <h3>Personal Issue</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="case-item">
                                    <div className="case-single">
                                         <img src={case3} alt=""/>
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-inner">
                                            <p className="sub">Business</p>
                                            <h3>Business Accounting</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="case-item">
                                    <div className="case-single">
                                        <img src={case4} alt=""/>
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-inner">
                                            <p className="sub">Criminal</p>
                                            <h3>Business Accounting</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="case-item">
                                    <div className="case-single">
                                        <img src={case5} alt=""/>    
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-inner">
                                            <p className="sub">Family Issue</p>
                                            <h3>Business Accounting</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="case-item">
                                    <div className="case-single">
                                        <img src={case4} alt=""/>
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-inner">
                                            <p className="sub">Criminal</p>
                                            <h3>Business Accounting</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                                <div className="case-item">
                                    <div className="case-single">
                                        <img src={case5} alt=""/>    
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-inner">
                                            <p className="sub">Family Issue</p>
                                            <h3>Business Accounting</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default CaseStudies;
          
          
          
          
