import React, {Fragment} from 'react';
import Navbar6 from '../../components/Navbar6'
import Hero4 from '../../components/Hero4'
import ServiceSection from '../../components/ServiceSection'
import PorfolioSection2 from '../../components/PorfolioSection2'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/Footer'
import TestSlider2 from '../../components/Testimonial2'
import AboutArea3 from '../../components/aboutarea3'
import MySkill from '../../components/MySkill'
import PartnerSlider from '../../components/partner'
import FtLogo from '../../images/logo2.png'

const HomePage4 =() => {
    return(
        <Fragment>
            <Navbar6/>
            <Hero4 />
            <AboutArea3/>
            <MySkill/>
            <ServiceSection serviceclass={'wpo-service-area-4 section-padding'}/>
            <PorfolioSection2 protfclass={'wpo-protfolio-area-4'}/>
            <TestSlider2 testclass={'wpo-testimonial-area-4'}/>
            <ContactArea contactclass={'wpo-contact-area4'}/>
            <PartnerSlider partnerclass={'wpo-client-area2'}/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default HomePage4;