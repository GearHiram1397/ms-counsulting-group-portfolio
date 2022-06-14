
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tes1 from '../../images/testimonials/img-1.jpg'
import Tes2 from '../../images/testimonials/img-3.jpg'
import Tes3 from '../../images/testimonials/img-4.jpg'

import './style.css'

class TestSlider extends Component {
    render( props ) {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            margin: 10,
            loop: true,
        };
        return (
            <div className={`wpo-testimonial-area section-padding ${this.props.subclass}`}>
                <div className="container">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Testimonial</h2>
                        </div>
                    </div>
                    <div className="wpo-testimonial-main">
                         <Slider {...settings}>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                                        <div className="wpo-testimonial-item">
                                            <div className="wpo-testimonial-img">
                                                 <img src={Tes1} alt=""/>
                                            </div>
                                            <div className="wpo-testimonial-thumb">
                                                <h4>John Harry</h4>
                                                <span>CEO of Moderntern</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                                        <div className="wpo-testimonial-item">
                                            <div className="wpo-testimonial-img">
                                                <img src={Tes2} alt=""/>
                                            </div>
                                            <div className="wpo-testimonial-thumb">
                                                <h4>John Harry</h4>
                                                <span>CEO of Moderntern</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                                        <div className="wpo-testimonial-item">
                                            <div className="wpo-testimonial-img">
                                                <img src={Tes3} alt=""/>
                                            </div>
                                            <div className="wpo-testimonial-thumb">
                                                <h4>John Harry</h4>
                                                <span>CEO of Moderntern</span>
                                            </div>
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
    
    export default TestSlider;
          
          
          
          
