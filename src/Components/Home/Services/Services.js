import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const serviceData=[
    {
        name: 'Fluoride Treatment',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        image: whitening
    }
]

const Services = () => {
    return (
        <section className="m-5">
            <div className="text-center">
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2 style={{color: '#3a4256'}}>Services We Provide</h2>
            </div>
            <div className="row w-75 m-auto">
            {
                serviceData.map(service=> <ServiceDetail service={service}></ServiceDetail>  )
            }
            </div>
        </section>
    );
};

export default Services;