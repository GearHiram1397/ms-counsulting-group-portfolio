import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogList from '../../components/BlogList'
import Footer from '../../components/Footer'
import FtLogo from '../../images/logo2.png'

const BlogPage =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Latest News'} pageSub={'Blog'}/>
            <BlogList/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default BlogPage;