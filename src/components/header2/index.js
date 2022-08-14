import React from 'react'
import {Link}  from 'react-router-dom'
import MobileMenu from '../MobileMenu'
import { useState } from 'react'


const Header2 = (props) => {

    const [home, setHome] = useState('desactive')
    const [about, setAbout] = useState('desactive')
    const [portfolio, setPortfolio] = useState('desactive')
    const [contact, setContact] = useState('desactive')


    const handleHome = () => {
        setHome('active')
        setAbout('desactive')
        setPortfolio('desactive')
        setContact('desactive')
    }
    const handleAbout = () => {
        setHome('desactive')
        setAbout('active')
        setPortfolio('desactive')
        setContact('desactive')
    }
    const handlePortfolio = () => {
        setHome('desactive')
        setAbout('desactive')
        setPortfolio('active')
        setContact('desactive')
    }

    const handleContact = () => {
        setHome('desactive')
        setAbout('desactive')
        setPortfolio('desactive')
        setContact('active')
    }


    return(	
	<div className={`header-style-1 ${props.headerclass}`}>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link to="/" title=""><img src={props.Logo} style={{height: "70px", marginTop: "-10px"}} alt=""/></Link>
                </div>
                <nav className="d-lg-block d-none header-b">
                    <ul>
                    <li><Link className={home} onClick={handleHome} to="/home" title="">Home</Link>
                        </li>
                        <li><Link  className={about} to="/about" onClick={handleAbout} title="">About</Link></li>
                        <li><Link  className={portfolio} onClick={handlePortfolio} to="/portfolio">Portfolio</Link>

                        </li>
                       
                        <li><Link  className={contact} onClick={handleContact} to="/contact" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                    <div className="cart-search-contact">
                        <div className="get-number">
                            <a href="tel:7878333095" >+(512)804-9875</a>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default Header2;