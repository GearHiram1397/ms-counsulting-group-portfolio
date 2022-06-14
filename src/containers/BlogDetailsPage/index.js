import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/Footer'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const BlogDetailsPage =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Helpful Tips For Become A Successful Designer'} pageSub={'Blog Details'}/>
            <BlogSingle/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default BlogDetailsPage;