import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

import profolio1 from '../../images/fotosdelportafolio/trasportation.jpg'
import profolio2 from '../../images/fotosdelportafolio/singlelogo.JPG'
import profolio3 from '../../images/fotosdelportafolio/39fcf9_7ff2fcd89c9f4d35baed1db4db848d89_mv2.png'
import profolio4 from '../../images/fotosdelportafolio/servicios.jpg'

const PortfolioSub = ( props ) => {
    return(
        <div className={`wpo-protfolio-area section-padding ${props.subclass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-protfolio-item">
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="wpo-protfolio-left">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio1} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                
                                                <Link to="/projectDetails">View Work</Link>
                                            </div>
                                        </div>
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio2} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                               
                                                <Link to="/projectDetails/1">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="wpo-protfolio-right">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio3} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                               
                                                <Link to="/projectDetails/2">View Work</Link>
                                            </div>
                                        </div>
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio4} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                
                                                <Link to="/projectDetails/3">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link to="/protfolioMashonary">See More Work...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSub;