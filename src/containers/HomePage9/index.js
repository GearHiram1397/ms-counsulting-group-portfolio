import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero9 from '../../components/Hero9'
import ServiceSection4 from '../../components/ServiceSection4'
import CaseStudies from '../../components/CaseStudies'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/Footer'
import TestSlider2 from '../../components/Testimonial2'

import AboutArea5 from '../../components/aboutarea5'

const HomePage9 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero9 />
            <AboutArea5 ab3class={'wpo-about-area-6'}/>
            <ServiceSection4/>
            <CaseStudies/>
            <TestSlider2 testclass={'wpo-testimonial-area-7'}/>
            <ContactArea contactclass={'wpo-contact-area6'}/>
            <Footer Ftclass={'wpo-footer-area5'}/>
        </Fragment>
    )
};
export default HomePage9;