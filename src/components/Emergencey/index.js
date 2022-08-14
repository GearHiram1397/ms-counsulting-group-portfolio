import React from 'react'
import './style.css'

const Emergencey = () => {
    return(
        <div className="emergencey-area">
            <div className="container">
                <div className="emergencey-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="emergencey-wpo-service">
                                <div className="emergencey-icon">
                                    <i className="fi flaticon-heart"></i>
                                </div>
                                <div className="emergencey-text">
                                    <h2>Emergency Service</h2>
                                    <p>An emergency department (ED), also known as an accident & emergency department (A&E), </p>
                                    <span>Call : +1-2345-6789-99</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="emergencey-hour">
                                <div className="emergencey-icon">
                                    <i className="fi flaticon-time"></i>
                                </div>
                                <div className="emergencey-text">
                                    <h2>Opening Hour</h2>
                                    <ul>
                                        <li>Mon - Fri<span>08:00 - 21:00</span></li>
                                        <li>Sat - Sun<span>08:00 - 19:00</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emergencey;