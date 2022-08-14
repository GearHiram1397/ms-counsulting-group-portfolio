import React, {Fragment} from 'react';
import Navbar4 from '../../components/Navbar4'
import Hero6 from '../../components/Hero6'
import PorfolioSection4 from '../../components/PorfolioSection4'
import Footer from '../../components/Footer'
import FtLogo from '../../images/logo2.png'

const HomePage6 =() => {
    return(
        <Fragment>
            <Navbar4/>
            <Hero6 />
            <PorfolioSection4/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default HomePage6;