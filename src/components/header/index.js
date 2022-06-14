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
                            <ul>
                                <li><Link className="active" to="/home">Home</Link></li>
                
                            </ul>
                        </li>
                        <li><Link to="/about" title="">About</Link></li>
                        <li><Link  to="/portfolio">Portfolio</Link>
                            <ul>
                                <li><Link to="/protfolioGrid">Portfolio Grid</Link></li>
                                <li><Link to="/protfolioGrid2">Portfolio Grid-2</Link></li>
                                <li><Link to="/protfolioMashonary">Portfolio Mashonary</Link></li>
                
                            </ul>
                        </li>
                        <li><Link to="/">Pages</Link>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/serviceDetails">Service Details</Link></li>
                                <li><Link to="/projectDetails">Project Details</Link></li>
                                <li><Link to="/404">404 Page</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/" title="">Blog</Link>
                            <ul>
                                <li><Link to="/blog" title="">Blog</Link></li>
                                <li><Link to="/blogfullwidth" title="">Blog Fullwidth</Link></li>
                                <li><Link to="/" title="">Blog Details</Link>
                                    <ul>
                                        <li><Link to="/blog-details" title="">Blog Details</Link></li>
                                        <li><Link to="/blog-details-fullwidth" title="">Blog Details Fullwidth</Link></li>
                                    </ul>
                                </li>
                            </ul>
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