import React from 'react'
import ContactArea from '../ContactArea'
const ContactPageSec = () => {
    return(
        <section className="wpo-contact-page">
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="row">
                        <ContactArea contactclass={'wpo-contact-area3'}/>
                        <div  className="co-lg-10 offset-lg-1 col-12">
                            <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440899.73499842157!2d-98.03360113834869!3d30.307462400018316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2spr!4v1662516537254!5m2!1sen!2spr" title="map"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPageSec;