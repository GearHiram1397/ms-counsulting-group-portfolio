import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero2 from '../../components/Hero2'
import ServiceSection from '../../components/ServiceSection'
import PorfolioSection from '../../components/PorfolioSection'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/Footer'
import TestSlider2 from '../../components/Testimonial2'

import FtLogo from '../../images/logo.png'

import AboutArea2 from '../../components/aboutarea2'

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero2 />
            <AboutArea2/>
            <ServiceSection/>
            <PorfolioSection/>
            <TestSlider2/>
            <ContactArea contactclass={'wpo-contact-area2'}/>
            <Footer Ftclass={'wpo-footer-area2'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default HomePage2;