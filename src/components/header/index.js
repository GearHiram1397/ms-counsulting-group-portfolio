import React from 'react'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = (props) => {
    return(	
	<div className="header-style-1">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link to="/" title=""><img src={props.Logo} style={{height: "80px", marginTop: "-10px"}} alt=""/></Link>
                </div>
                <nav className="d-lg-block d-none header-b">
                    <ul>
                        <li><Link className="active" to="/home" title="">Home</Link>
                        </li>
                        <li><Link to="/about" title="">About</Link></li>
                        <li><Link  to="/portfolio">Portfolio</Link>

                        </li>
                       
                        <li><Link to="/contact" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                    <div className="cart-search-contact">
                        <Link to="/contact" className="theme-btn">Lets Talk</Link>
                    </div>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default Header;