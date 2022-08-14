import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

import shape1 from '../../images/shape/shape-7.png'
import shape2 from '../../images/shape/shape-8.png'
import shape3 from '../../images/shape/shape-3.png'
import shape4 from '../../images/shape/shape-5.png'
import shape5 from '../../images/shape/shape-6.png'
import shape6 from '../../images/shape/shape-4.png'

const Breadcrumbs = (props) => {
    return(
        <section className="page-title bg-animate-shape">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{props.pageTitle}</h2>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>{props.pageSub}</li>
                        </ol>
                    </div>
                </div>
            </div> 
            <div className="shape">
                <img src={shape1} alt=""/>
            </div>
            <div className="shape7">
                <img src={shape2} alt=""/>
            </div>
            <div className="shape8">
                <img src={shape3} alt=""/>
            </div>
            <div className="shape10">
                <img src={shape4} alt=""/>
            </div>
            <div className="shape11">
                 <img src={shape5} alt=""/>
            </div>
            <div className="shape12">
                <img src={shape6} alt=""/>
            </div>
        </section>
    )
}

export default Breadcrumbs;