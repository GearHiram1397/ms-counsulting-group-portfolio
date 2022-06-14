import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import ServiceSection from '../../components/ServiceSection'
import MySkill from '../../components/MySkill'
import Footer from '../../components/Footer'
import AboutArea3 from '../../components/aboutarea3'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'About Us'} pageSub={'About'}/>
            <AboutArea3/>
            <MySkill/>
            <ServiceSection serviceclass={'wpo-service-area-4 section-padding'}/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default AboutPage;