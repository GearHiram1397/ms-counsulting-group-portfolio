import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogSingleFullwidth from '../../components/BlogSingleFullwidth'
import Footer from '../../components/Footer'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const BlogDetailsFullwidth =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Helpful Tips For Become A Successful Designer'} pageSub={'Blog Details'}/>
            <BlogSingleFullwidth/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default BlogDetailsFullwidth;