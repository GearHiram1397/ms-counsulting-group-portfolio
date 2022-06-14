import React from 'react';
import { Link } from 'react-router-dom'
import blog1 from '../../images/blog/img-4.jpg'
import blog2 from '../../images/blog-details/author.jpg'
import blog3 from '../../images/blog-details/comments-author/img-1.jpg'
import blog4 from '../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../images/blog-details/comments-author/img-3.jpg'
import blog6 from '../../images/blog/admin.jpg'


const BlogSingleFullwidth = () => {

    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog6} alt="" />  By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h2>How to estublish a team with a great way?</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </blockquote>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link to="/blog-details">Business</Link></li>
                                        <li><Link to="/blog-details">Marketing</Link></li>
                                        <li><Link to="/blog-details">SEO</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link to="//www.facebook.com/marysabel.sepulveda"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="//twitter.com/MarySep04052919?s=20&t=6MUsWvrXAfPrlTvQBi_jZA"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="//instagram.com/mary_splvd?igshid=NWRhNmQxMjQ="><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/blog-details" target="_blank"><img src={blog2} alt="" />  </Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/blog-details" className="author-name">Henry Joyes</Link>
                                    <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                    <div className="author-btn">
                                        <Link to="/blog-details">All Post From Author</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="more-posts clearfix">
                                <div className="previous-post">
                                    <Link to="/blog-details">
                                        <span className="post-control-link">Previous</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link to="/blog-details">
                                        <span className="post-control-link">Next post</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="comments-area">
                            <div className="comments-section">
                                <h3 className="comments-title">Comments</h3>
                                <ol className="comments">
                                    <li className="comment even thread-even depth-1" id="comment-1">
                                        <div id="div-comment-1">
                                            <div className="comment-theme">
                                                <div className="comment-image"> <img src={blog3} alt="" /> </div>
                                            </div>
                                            <div className="comment-main-area">
                                                <div className="comment-wrapper">
                                                    <div className="comments-meta">
                                                        <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                    </div>
                                                    <div className="comment-area">
                                                        <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                        <div className="comments-reply">
                                                            <Link className="comment-reply-link" to="/blog-details"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="children">
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"> <img src={blog4} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>Lily Watson <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link className="comment-reply-link" to="/blog-details"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><img src={blog5} alt="" /> </div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link className="comment-reply-link" to="/blog-details"><span><i className="fa fa-reply" aria-hidden="true"></i> Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="comment-respond">
                            <h3 className="comment-reply-title">Leave a Comment</h3>
                            <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                <div className="form-inputs">
                                    <input placeholder="Name" type="text" />
                                    <input placeholder="Email" type="email" />
                                    <input placeholder="Website" type="url" />
                                </div>
                                <div className="form-textarea">
                                    <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                </div>
                                <div className="form-submit">
                                    <input id="submit" value="Reply" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingleFullwidth;


