import React from 'react'
import {Link}  from 'react-router-dom'
import CustomMenu from '../customMenu'

import './style.css'

const Header4 = (props) => {
    return(	
	<div className="header-style-s3">
        <div className="container-fluid">
            <div className="header-content">
                <div className="logo">
                    <Link to="/" title=""><img src={props.Logo} alt=""/></Link>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <CustomMenu/>
        </div>
    </div>
    )
}

export default Header4;