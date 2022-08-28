import React from 'react'

import Awimg1 from '../../images/fotosdelportafolio/cert1.jpg'
import Awimg2 from '../../images/fotosdelportafolio/cert2.jpg'
import Awimg3 from '../../images/fotosdelportafolio/cert3.JPG'
import Awimg4 from '../../images/fotosdelportafolio/cert4.jpg'

const Award = () => {
    return(
        <div className="Award-wrap">
            <div className="wpo-award-wrap">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg1} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg2} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg3} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="wpo-award-img">
                            <img src={Awimg4} alt=""/>              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Award;