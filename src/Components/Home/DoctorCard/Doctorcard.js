import React from 'react';
import img from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const DoctorCard = ({dr}) => {
    return (
        <div className="col-md-4 text-center">
            {
                dr.image.img? <img style={{height: '200px'}} src={`data:image/jpeg;base64,${dr.image.img}`} /> :
                <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://warm-falls-42670.herokuapp.com/${dr.image}`} alt=""/>
            }
            
            <h4>{dr.name}</h4>
            <h5>{dr.email}</h5>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default DoctorCard;