import React from 'react';
import {Link} from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'

import blog1 from '../../images/blog/img-4.jpg'
import blog2 from '../../images/blog/img-5.jpg'
import blog3 from '../../images/blog/img-6.jpg'
import blog4 from '../../images/blog/admin.jpg'


const BlogFullwidth = () => {

    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                <div className="col col-lg-10 offset-lg-1 col-12">
                        <div className="wpo-wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">Helpful tips for become a successful designer</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link to="/blog-details" className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog2} alt=""/>
                                    <div className="video-btn2">
                                        <VideoModal/>
                                    </div>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">How to estublish a team with a great way?</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link to="/blog-details" className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog3} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">A great way to estublish as 3D designer</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link to="/blog-details" className="read-more">Read More...</Link>
                            </div>

                            <div className="post format-quote">
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog4} alt=""/> By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h3><Link to="/blog-details">How to become a team leader?</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-details" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-details">1</Link></li>
                                    <li><Link to="/blog-details">2</Link></li>
                                    <li><Link to="/blog-details">3</Link></li>
                                    <li><Link to="/blog-details">4</Link></li>
                                    <li>
                                        <Link to="/blog-details" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default BlogFullwidth;
