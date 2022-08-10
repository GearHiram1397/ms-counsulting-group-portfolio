import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'

import Footer from '../../components/Footer'
import ProjectSingle from '../../components/ProjectSingle/index1'
import FtLogo from '../../images/fotosdelportafolio/fulllogoblue-removebg-preview.png'

const ProjectDetails =() => {
    return(
        <Fragment>
            <Navbar5/>
           
            <ProjectSingle/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ProjectDetails;