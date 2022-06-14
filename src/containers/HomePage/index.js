import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero1 from '../../components/Hero1'
import Exprience from '../../components/exprience'
import PortfolioSub from '../../components/porfolioSub'
import ContactArea from '../../components/ContactArea'
import LatestBlog from '../../components/LatestNews'
import Footer from '../../components/Footer'
import TestSlider from '../../components/Testimonial'
import Logo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'
import AboutWrap from '../../components/about'

const HomePage =() => {
    return(
        <Fragment>
            <Navbar />
            <Hero1/>
            <Exprience/>
            <AboutWrap/>
            <PortfolioSub/>
            <TestSlider/>
            <ContactArea/>
            <LatestBlog/>
            <Footer ftLogo={Logo}/>
        </Fragment>
    )
};
export default HomePage;