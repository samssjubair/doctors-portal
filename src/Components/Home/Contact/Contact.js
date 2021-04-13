import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="mt-5 contact pt-3 pb-3">
            <div className="text-center mt-5 mb-5">
                <h4 className="text-primary">Contact Us</h4>
                <h1 className="text-light">Always Get Connected to Us</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group mb-3">
                        <input placeholder="Email" type="text" className="form-control"/>
                    </div>
                    <div className="form-group mb-3">
                        <input placeholder="Subject" type="text" className="form-control"/>
                    </div>
                    <div className="form-group mb-5">
                        <textarea cols="30" rows="7" placeholder="message" type="text" className="form-control"/>
                    </div>
                    <div className="form-group text-center ">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Contact;