import React from 'react';
import kent from '../../../images/kent.png'
import barry from '../../../images/barry.png'
import wayne from '../../../images/wayne.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
const patientDetail=[
    {
        name: 'Barry Allen',
        location: 'Central City',
        image: barry
    },
    {
        name: 'Bruce Wayne',
        location: 'Gotham City',
        image: wayne
    },
    {
        name: 'Kent Clark',
        location: 'Smallvile',
        image: kent
    }
]

const Testimonials = () => {
    return (
        <div className="container mt-5 mb-5">
            <h5 className="text-uppercase">Testimonial</h5>
            <h2>What's our Patient <br/> Says</h2>
            <div className="row ">
                {
                    patientDetail.map(pt=> <TestimonialCard pt={pt}></TestimonialCard> )
                }
            </div>
        </div>
    );
};

export default Testimonials;