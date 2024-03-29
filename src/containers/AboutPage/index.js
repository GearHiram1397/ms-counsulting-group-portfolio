import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import ServiceSection from '../../components/ServiceSection'
import MySkill from '../../components/MySkill'
import Footer from '../../components/Footer'
import AboutArea3 from '../../components/aboutarea3'
import FtLogo from '../../images/fotosdelportafolio/fulllogoblue-removebg-preview.png'

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar5/>
            <AboutArea3/>
            <MySkill/>
            <ServiceSection serviceclass={'wpo-service-area-4 section-padding'}/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default AboutPage;