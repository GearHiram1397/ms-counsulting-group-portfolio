import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import ServiceSingle from '../../components/ServiceSingle'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const ServiceDetails =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Product Design'} pageSub={'Service Details'}/>
            <ServiceSingle/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ServiceDetails;