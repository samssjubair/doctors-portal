import React from 'react';
import './InfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InfoCard = ({info}) => {
    return (
        <div className={`col d-flex justify-content-center card-container background-${info.background}`}>
            <div>
                <FontAwesomeIcon className="info-icon" icon={info.icon} />
            </div>
            <div>
                <h5>{info.title}</h5>
                <small>{info.description}</small>
            </div>
        </div>
    );
};

export default InfoCard;