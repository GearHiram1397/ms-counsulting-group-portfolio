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
                                            <h2>Austin,Texas</h2>
                                            <div className="info-wrap">
                                                <div className="info-icon">
                                                    <img style={{height: '30px'}} src={contact1} alt=""/>
                                                </div>
                                                <div className="info-text">
                                                    <span>Office Address</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <h2>mary_splvd@yahoo.com </h2>
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
                                            <h2>+512-804-9875</h2>
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