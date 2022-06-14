import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import ProjectSingle from '../../components/ProjectSingle/index3'
import FtLogo from '../../images/fotosdelportafolio/completelogo-removebg-preview.png'

const ProjectDetails =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Puerto Rico Legal Services'} pageSub={'Project Details'}/>
            <ProjectSingle/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ProjectDetails;