import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

import blog1 from '../../images/fotosdelportafolio/blog1.jpg'
import blog2 from '../../images/fotosdelportafolio/blog2.jpg'
import blog3 from '../../images/fotosdelportafolio/blog3.jpg'

const LatestBlog = () => {
    return(
        <div className="wpo-blog-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2 >Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-blog-wrap">
                            <div className="wpo-blog-img">
                                <img src={blog1} alt="blog"/>
                            </div>
                            <div className="wpo-blog-text">
                                <ul>
                                    <li><span>By HR Leaders</span></li>
                                    <li>. May 31, 2022</li>
                                </ul>
                                <h2><Link to="//www.hrhelpboard.com/human-resource/articles/the-role-of-hr-leaders-in-promoting-employee-wellbeing-in-workplace-666.htm">The Role of HR Leaders in Promoting Employee Wellbeing in the Workplace</Link></h2>
                                <Link to="//www.hrhelpboard.com/hr-articles.htm#google_vignette">Read More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-blog-wrap">
                            <div className="wpo-blog-img">
                                <img src={blog2} alt="blog"/>
                            </div>
                            <div className="wpo-blog-text">
                                <ul>
                                    <li><span>By Caitlin Sinclair</span></li>
                                    <li>. Nov 24, 2021</li>
                                </ul>
                                <h2><Link to="//www.hrhelpboard.com/jobs-recruitment/articles/7-ways-to-design-a-better-hiring-process-251.htm">Seven Ways to Design a Better Hiring Process</Link></h2>
                                <Link to="//www.hrhelpboard.com/hr-articles.htm#google_vignette">Read More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-blog-wrap">
                            <div className="wpo-blog-img">
                                <img src={blog3} alt="blog"/>
                            </div>
                            <div className="wpo-blog-text">
                                <ul>
                                    <li><span>By HR Leaders </span></li>
                                    <li>. Jun 24, 2022</li>
                                </ul>
                                <h2><Link to="//www.hrhelpboard.com/human-resource/articles/the-role-of-hr-in-remote-recruitment-360.htm">The Role of HR in Remote Recruitment</Link></h2>
                                <Link to="//www.hrhelpboard.com/hr-articles.htm#google_vignette">Read More...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog;