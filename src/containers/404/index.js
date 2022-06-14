import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import ErroeSection from '../../components/ErroeSection'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const ErroPage =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'404 Error'} pageSub={'404 Not Found'}/>
            <ErroeSection/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ErroPage;