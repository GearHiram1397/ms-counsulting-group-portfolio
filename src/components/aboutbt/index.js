import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'

import abimg from '../../images/fotosdelportafolio/background.jpg'

const Abmain = () => {
    return(
        <div className="wpo-about-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="wpo-about-img">
                        <img style={{border: "1px grey black"}}src={abimg} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wpo-about-text">
                        <h2>HR Specialist </h2>
                        <p> Hi! my name is Marysabel Sepulveda. I’m a HR specialist with an interest in building the most effective workforce possible. I 
                        am leading initiatives and teams to help companies solve business problems and fuel 
                        greater results. Skilled in Customer Service, Bilingual Communications, Strategic 
                        Planning-and Research. Also, I have strong HR generalist knowledge with practical 
                        understanding business need. Proven ability to successfully multi-task in a dynamic, 
                        fast-paced environment while meeting all deadlines.  </p>
                        <Link to="/about" className="theme-btn">Lets Talk</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abmain;