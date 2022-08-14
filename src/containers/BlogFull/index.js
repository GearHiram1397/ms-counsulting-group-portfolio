import React  from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogFullwidth from '../../components/BlogFullwidth'
import Footer from '../../components/Footer'
import FtLogo from '../../images/logo2.png'

const BlogFull =() => {
    return(
        <div>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Latest News'} pageSub={'Blog'}/>
            <BlogFullwidth/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </div>
    )
};
export default BlogFull;