import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return(
        <div className={`wpo-footer-area ${props.Ftclass}`}>
            <div className="container">
                <div className="wpo-footer-top">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                            <div className="footer-logo">
                                 <img style={{height: '200px'}}src={props.ftLogo} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-9 col-12">
                            <div className="wpo-footer-menu">
                                <ul>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/protfolio">Portfolio</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="wpo-footer-social">
                                <ul>
                                    <li><Link to="//www.facebook.com/marysabel.sepulveda"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="//twitter.com/MarySep04052919?s=20&t=6MUsWvrXAfPrlTvQBi_jZA"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                    <li><Link to="//instagram.com/mary_splvd?igshid=NWRhNmQxMjQ="><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`wpo-footer-bottom ${props.Fbclass}`}>
                <span>© 2020 Follio. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;