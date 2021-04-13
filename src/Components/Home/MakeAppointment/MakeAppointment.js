import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
       <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid" src={doctor} alt=""/>
                    </div>
                    <div style={{color: 'white',zIndex: '2'}} className="col-md-7 text-white py-5">
                        <h4 className="text-primary">APPOINTMENT</h4>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores nostrum eaque sit, iusto aliquid facilis? Autem vel iste aperiam.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default MakeAppointment;