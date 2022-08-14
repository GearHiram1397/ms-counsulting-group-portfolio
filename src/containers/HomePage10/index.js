import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero10 from '../../components/Hero10'
import ServiceSection from '../../components/ServiceSection'
import PorfolioSection2 from '../../components/PorfolioSection2'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/Footer'
import TestSlider2 from '../../components/Testimonial2'
import AboutFeatures from '../../components/AboutFeature'
import FtLogo from '../../images/logo2.png'

const HomePage10 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero10 />
            <AboutFeatures/>
            <ServiceSection serviceclass={'wpo-service-area-3 section-padding'}/>
            <PorfolioSection2/>
            <TestSlider2 testclass={'wpo-testimonial-area-3'}/>
            <ContactArea contactclass={'wpo-contact-area3'}/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default HomePage10;