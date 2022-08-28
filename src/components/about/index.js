import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';

import Abmain from '../../components/aboutbt'
import Award from '../../components/award'
import Skill from '../../components/Skill'
import SocialBr from '../../components/Social'
import AbService from '../../components/Abservice'

import SectionTitle from '../SectonTitle';
import './style.css'
const AboutWrap = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="about-area section-padding">
        <div className="container">
            <SectionTitle sectitle={'About Me'}/>
            <div className="row">
                <div className="col-lg-12">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { toggle('5'); }}
                            >
                              Skill
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                               Social Media
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4'); }}
                            >
                              Award
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <div className="wpo-about-wrap">
                    <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Abmain/>
                            </TabPane>
                            <TabPane tabId="2">
                                <AbService/>
                            </TabPane>
                            <TabPane tabId="3">
                                <SocialBr/>
                            </TabPane>
                            <TabPane tabId="4">
                                <Award/>
                            </TabPane>
                            <TabPane tabId="5">
                                <Skill/>
                            </TabPane>
                    </TabContent>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutWrap;