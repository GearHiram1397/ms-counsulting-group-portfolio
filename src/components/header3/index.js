import React from 'react'
import {Link}  from 'react-router-dom'
import MobileMenu from '../MobileMenu'


const Header3 = (props) => {
    return(	
	<div className={`header-style-1 ${props.headerclass}`}>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link to="/" title=""><img src={props.Logo} alt=""/></Link>
                </div>
                <nav className="d-lg-block d-none header-b">
                    <ul>
                        <li><Link className="active" to="/home" title="">Home</Link>
                            <ul>
                                <li><Link className="active" to="/home">Home</Link></li>
                                <li><Link to="/home2">Home-style-2</Link></li>
                                <li><Link to="/home3">Home-style-3</Link></li>
                                <li><Link to="/home4">Home-style-4</Link></li>
                                <li><Link to="/home5">Home-style-5</Link></li>
                                <li><Link to="/home6">Home-style-6</Link></li>
                                <li><Link to="/home7">Home-style-7</Link></li>
                                <li><Link to="/home8">Home-style-8</Link></li>
                                <li><Link to="/home9">Home-style-9</Link></li>
                                <li><Link to="/home10">Home-style-10</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about" title="">About</Link></li>
                        <li><Link  to="/portfolio">Portfolio</Link>
                            <ul>
                                <li><Link to="/protfolioGrid">Portfolio Grid</Link></li>
                                <li><Link to="/protfolioGrid2">Portfolio Grid-2</Link></li>
                                <li><Link to="/protfolioMashonary">Portfolio Mashonary</Link></li>
                                <li><Link to="/protfolioList">Portfolio List</Link></li>
                                <li><Link to="/protfolioCro">Portfolio Cro</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/">Pages</Link>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/serviceDetails/">Service Details</Link></li>
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
                        <Link to="/contact" className="theme-btn-s2">Lets Talk</Link>
                    </div>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default Header3;