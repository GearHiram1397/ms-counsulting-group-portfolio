import React, {Fragment} from 'react';
import Navbar6 from '../../components/Navbar6'
import Hero8 from '../../components/Hero8'
import ServiceSection3 from '../../components/ServiceSection3'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/Footer'
import TestSlider2 from '../../components/Testimonial2'
import Emergencey from '../../components/Emergencey'
import PartnerSlider from '../../components/partner'
import FtLogo from '../../images/logo2.png'

const HomePage8 =() => {
    return(
        <Fragment>
            <Navbar6/>
            <Hero8 />
            <Emergencey/>
            <ServiceSection3/>
            <TestSlider2 testclass={'wpo-testimonial-area-4'}/>
            <ContactArea contactclass={'wpo-contact-area4'}/>
            <PartnerSlider partnerclass={'wpo-client-area2'}/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default HomePage8;