import React, { Component } from 'react';
import Gallery_1 from '../../images/protfolio/img-22.jpg';
import Gallery_2 from '../../images/protfolio/img-23.jpg';
import Gallery_3 from '../../images/protfolio/img-24.jpg';
import Gallery_4 from '../../images/protfolio/img-25.jpg';

import {Link} from 'react-router-dom'

class PorfolioSection8 extends Component {

    state = {
        onWebDesign: false,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: true,
                onWebDesign: true,
                onPhotography: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                onWebDesign: true,
                onPrintDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                onPrintDesign: true,
                onWebDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: false,
                onWebDesign: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                onPhotography: true,
                onWebApp: false,
                onPrintDesign: false,
                onWebDesign: false,
                isOpen: true,
            });
        }



        return (
            <section id="protfolio" className="gallery-section wpo-protfolio-area-6 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <ul>
                                    <li><Link data-filter="*" to="/" className="current" onClick={allElement}>All</Link></li>
                                    <li><Link data-filter=".Web-Design" to="/" onClick={webDesign}>Web Design</Link></li>
                                    <li><Link data-filter=".Print-Design" to="/" onClick={printDesign}>Print Design</Link></li>
                                    <li><Link data-filter=".Web-Application" to="/" onClick={webApp}>Web Application</Link></li>               
                                    <li><Link data-filter=".Photography" to="/" onClick={Photography}>Photography</Link></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary ">
                               
                               
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        <div className="protfolio-wrapper">
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <img src={Gallery_1} alt="" className="img img-responsive"/>
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2>Website Development</h2>
                                                    <span>WordPress . Blog</span>
                                                    <Link to="/projectDetails">View Full Work</Link>
                                                </div>
                                                <div className="thumb-text">
                                                    <span>01</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                               
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        <div className="protfolio-wrapper">
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <img src={Gallery_2} alt="" className="img img-responsive"/>
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2>Website Development</h2>
                                                    <span>WordPress . Blog</span>
                                                    <Link to="/projectDetails">View Full Work</Link>
                                                </div>
                                                <div className="thumb-text">
                                                    <span>01</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                     <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={Gallery_3} alt="" className="img img-responsive"/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link to="/projectDetails">View Full Work</Link>
                                            </div>
                                            <div className="thumb-text">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                     <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={Gallery_4} alt="" className="img img-responsive"/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link to="/projectDetails">View Full Work</Link>
                                            </div>
                                            <div className="thumb-text">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link to="/protfolioGrid" className="theme-btn-s2">Load More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PorfolioSection8;