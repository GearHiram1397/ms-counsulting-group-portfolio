import React, { Component } from 'react'
import emailjs from 'emailjs-com';


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        lastname: '',
        message: '',
        error: {},
        success: false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }

    subimtHandler = (e) => {
    
        e.preventDefault();

        const { name,
            email,
            subject,
            lastname,
            message,
            error } = this.state;

        emailjs.send('service_7vts88m', 'template_cijnuxr', this.state, 'dVer2d2aUvpE2NFPt')
          .then(response => {
            console.log('SUCCESS!', response);
          

            this.setState
            ({
                name: '',
                email: '',
                subject: '',
                lastname: '',
                message: '',
                error: {},
                success: true
            })
          }, error => {
            console.log('FAILED...', error);
          });

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (message === '') {
            error.message = "Please enter a message";
        }
       


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.subject === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                lastname: '',
                subject: '',
                message: '',
                error: {}
            })
        }
    }

    

    render(){
        const { name,
            email,
            subject,
            lastname,
            error,
        success } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Lastname"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={subject} type="text" name="subject" placeholder="Subject"/>
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" onChange={this.changeHandler}placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <p>{success ? 'Message was sent sucessfully': ''}</p>
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;