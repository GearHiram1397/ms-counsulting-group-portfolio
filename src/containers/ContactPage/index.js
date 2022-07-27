import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import ContactPageSec from '../../components/ContactPageSec'
import Footer from '../../components/Footer'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar5/>
          
            <ContactPageSec/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ContactPage;