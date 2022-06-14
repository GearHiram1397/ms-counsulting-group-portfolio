import React from 'react';
import './style.css'


const MySkill = (props) => {

  return (
    <div className="skill-area section-padding">
        <div className="container">
            <div className="col-12">
                <div className="section-title-2 text-center">
                    <h2>My skills</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="progress yellow">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">100%</div>
                    </div>
                    <div className='container__skill'>
                    <span className="skill-header">TEAMWORK AND COLLABORATION </span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="progress blue">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">100%</div>
                    </div>
                    <div className='container__skill'>
                    <span className="skill-header">CUSTOMER SERVICE</span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="progress pink">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">100%</div>
                    </div>
                    <div className='container__skill'>
                    <span className="skill-header">EMPLOYEE RELATIONS</span>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="progress green">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">100%</div>
                        
                    </div>
                    <div className='container__skill'>
                    <span className="skill-header">BILINGUAL COMMUNICATION</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MySkill;