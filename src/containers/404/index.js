import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Footer from '../../components/Footer'
import ErroeSection from '../../components/ErroeSection'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const ErroPage =() => {
    return(
        <Fragment>
            <Navbar5/>
           
            <ErroeSection/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ErroPage;