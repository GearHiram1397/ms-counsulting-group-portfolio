import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import PorfolioSection2 from '../../components/PorfolioSection2'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const PorfolioGrid3 =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <PorfolioSection2 protfclass={'wpo-protfolio-area-3'}/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default PorfolioGrid3;