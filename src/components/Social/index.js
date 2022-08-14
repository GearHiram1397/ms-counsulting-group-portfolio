import React from 'react'
import { Link } from 'react-router-dom'

const SocialBr = () => {
    return(
        <div className="social-tab">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12d col-12">
                    <div className="wpo-social-wrap">
                        <div className="wpo-social-icon">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <div className="wpo-social-text">
                            <h2><Link to="//www.facebook.com/msmanagementandconsulting">Facebook </Link></h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12  col-12">
                    <div className="wpo-social-wrap">
                        <div className="wpo-social-icon-2">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className="wpo-social-text">
                            <h2><Link to="//instagram.com/mary_splvd?igshid=NWRhNmQxMjQ=">Instagram </Link></h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="wpo-social-wrap">
                        <div className="wpo-social-icon-3">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className="wpo-social-text">
                            <h2><Link to="//twitter.com/MarySep04052919?s=20&t=6MUsWvrXAfPrlTvQBi_jZA">Twitter </Link> </h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="wpo-social-wrap">
                        <div className="wpo-social-icon-5">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                        <div className="wpo-social-text">
                            <h2> <Link to="//www.linkedin.com/in/mary-sepulveda-23ab6b138/">Linkedin</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialBr;