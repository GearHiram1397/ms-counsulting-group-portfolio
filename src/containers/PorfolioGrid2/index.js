import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import Portfolio2 from '../../components/PorfolioSection7'
import FtLogo from '../../images/logo2.png'

const PorfolioGrid2 =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <Portfolio2/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default PorfolioGrid2;