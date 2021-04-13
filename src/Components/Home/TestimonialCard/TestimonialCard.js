import React from 'react';

const TestimonialCard = ({pt}) => {
    return (
        <div className="col-md-4  text-center ">
            <div className="m-3 p-4 shadow border border-info rounded">
                <div>
                    <p style={{textAlign: 'justify',marginBottom: '30px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsam, eos ut doloribus error vero corporis illum itaque veniam repellat facere deleniti harum ex, tempora debitis voluptas impedit hic aut nam tenetur excepturi iure aperiam animi! Doloremque omnis vero id.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <img className="h-75 me-2" src={pt.image} alt=""/>
                    </div>
                    <div >
                        <h6 style={{color: '#3A4256'}}>{pt.name}</h6>
                        <small>{pt.location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;