import React from 'react';
import {Link} from 'react-router-dom'
import ins1 from '../../images/recent-posts/img-1.jpg'
import ins2 from '../../images/recent-posts/img-2.jpg'
import ins3 from '../../images/recent-posts/img-3.jpg'


import './style.css'

const BlogSidebar = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to="/blog-details">Branding<span>25</span></Link></li>
                        <li><Link to="/blog-details">Wordpress <span>34</span></Link></li>
                        <li><Link to="/blog-details">Web Design Tricks and Tips <span>50</span></Link></li>
                        <li><Link to="/blog-details">Designer Themes <span>46</span></Link></li>
                        <li><Link to="/blog-details">General Topics <span>15</span></Link></li>
                        <li><Link to="/blog-details">Support Center <span>48</span></Link></li>
                        <li><Link to="/blog-details">Knowledgebase <span>65</span></Link></li>
                        <li><Link to="/blog-details">Inspiration <span>65</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins1} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">6 Ideas for how you can avoid telling lie</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins2} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">The definitive list of digital products you can sell</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins3} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">The definitive list of digital products you can sell</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="/blog-details">Wordpress</Link></li>
                        <li><Link to="/blog-details">HTML</Link></li>
                        <li><Link to="/blog-details">CSS</Link></li>
                        <li><Link to="/blog-details">Graphic Design</Link></li>
                        <li><Link to="/blog-details">Theme Develop</Link></li>
                        <li><Link to="/blog-details">PDS Template</Link></li>
                        <li><Link to="/blog-details">Video</Link></li>
                        <li><Link to="/blog-details">Audio</Link></li>
                        <li><Link to="/blog-details">Plugin</Link></li>
                        <li><Link to="/blog-details">Photography</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
