import React from 'react'
import './style.css'
import ContactForm from '../ContactFrom'

import contact1 from '../../images/wpo-service/icon5.png' 
import contact2 from '../../images/wpo-service/icon6.png' 
import contact3 from '../../images/wpo-service/icon7.png' 

const ContactArea = (props) => {
    return(
        <section className={`wpo-contact-area section-padding ${props.contactclass}`}>
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>Let’s Talk</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="co-lg-10 offset-lg-1  col-12">
                            <div className="row">
                                <div className="col col-lg-6 col-md-12 col-12">
                                    <div className="wpo-contact-form">
                                        <h2>Get In Touch</h2>
                                        <ContactForm/>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-12 col-12">
                                    <div className="wpo-contact-info">
                                        <div className="info-item">
                                            <h2>  <a style={ { color: "#f1f1f1", textDecoration: "none" } } 
                                                href="https://www.google.com/maps/place/Austin,+TX,+USA/@30.3074624,-98.0336011,10z/data=!3m1!4b1!4m5!3m4!1s0x8644b599a0cc032f:0x5d9b464bd469d57a!8m2!3d30.267153!4d-97.7430608">
                                            1218 Acanthus ST Pf Tx
                                             </a></h2>
                                            <div className="info-wrap">
                                                <div className="info-icon">
                                                    <img style={{height: '30px'}} src={contact1} alt=""/>
                                                </div>
                                                <div className="info-text">
                                            <span> Office Address</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <h2> <a style={ { color: "#f1f1f1", textDecoration: "none"}} href='mailto:mary_splvd@yahoo.com '>mary_splvd@yahoo.com </a>
                                            </h2>
                                            <div className="info-wrap">
                                                <div className="info-icon">
                                                    <img style={{height: '30px'}}  src={contact2} alt=""/>
                                                </div>
                                                <div className="info-text">
                                                    <span>Official Mail</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <h2><a style={ { color: "#f1f1f1", textDecoration: 'none'}} href='tel:5128049875'>+1 512-804-9875</a></h2>
                                            <div className="info-wrap">
                                                <div className="info-icon">
                                                    <img style={{height: '30px'}}  src={contact3} alt=""/>
                                                </div>
                                                <div className="info-text">
                                                    <span>Official Phone</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default ContactArea;