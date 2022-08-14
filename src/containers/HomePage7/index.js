import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Hero7 from '../../components/Hero7'
import ServiceSection2 from '../../components/ServiceSection2'
import Footer from '../../components/Footer'
import PorfolioSection5 from '../../components/PorfolioSection5'
import AboutArea4 from '../../components/aboutarea4'
import FtLogo from '../../images/logo2.png'

const HomePage7 =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Hero7 />
            <AboutArea4/>
            <ServiceSection2/>
            <PorfolioSection5/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default HomePage7;