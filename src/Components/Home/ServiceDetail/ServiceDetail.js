import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col text-center mt-5 p-3">
            
                <img className="mb-5" style={{height: '80px'}} src={service.image} alt=""/>
                <h4 className="mb-4">{service.name}</h4>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa?</p>
            
        </div>
    );
};

export default ServiceDetail;