import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home',
                link: '/home'
            },
            {
                id: 12,
                title: 'HomePage 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'HomePage 3',
                link: '/home3'
            },
            {
                id: 15,
                title: 'HomePage 4',
                link: '/home4'
            },
            {
                id: 16,
                title: 'HomePage 5',
                link: '/home5'
            },
            {
                id: 17,
                title: 'HomePage 6',
                link: '/home6'
            },
            {
                id: 18,
                title: 'HomePage 7',
                link: '/home7'
            },
            {
                id: 19,
                title: 'HomePage 8',
                link: '/home8'
            },
            {
                id: 20,
                title: 'HomePage 9',
                link: '/home9'
            },
            {
                id: 21,
                title: 'HomePage 10',
                link: '/home10'
            },
        ]
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Portfolio',
        link: '/service',
        submenu: [
            {
                id: 31,
                title: 'Portfolio Grid',
                link: '/protfolioGrid'
            },
            {
                id: 32,
                title: 'Portfolio Grid-2',
                link: '/protfolioGrid2'
            },
            {
                id: 33,
                title: 'Portfolio Mashonary',
                link: '/protfolioMashonary'
            },
            {
                id: 34,
                title: 'Portfolio List',
                link: '/protfolioList'
            },
            {
                id: 35,
                title: 'Portfolio Cro',
                link: '/protfolioCro'
            }
    
        ]
    },

    {
        id: 4,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 41,
                title: 'About',
                link: '/about'
            },
            {
                id: 43,
                title: 'Service Details',
                link: '/serviceDetails'
            },
            {
                id: 44,
                title: 'Project Details',
                link: '/projectDetails'
            },
            {
                id: 45,
                title: '404 Page',
                link: '/404'
            },
        ]
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Fullwidth',
                link: '/blogfullwidth'
            },
            {
                id: 53,
                title: 'Blog Details',
                link: '/blog-details'
            },
            {
                id: 54,
                title: 'Blog Details Fullwidth',
                link: '/blog-details-fullwidth'
            }
        ]
    },
    {
        id: 6,
        title: 'Contact',
        link: '/contact',
    },
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link to={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
