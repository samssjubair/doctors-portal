import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
const businessInfo=[
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        background: 'primary',
        icon: faClock
    },
    {
        title: 'Visit Our Location',
        description: 'Mirpur 13, Dhaka',
        background: 'secondary',
        icon: faMapMarker
    },
    {
        title: 'Contact Us',
        description: '+01621211212',
        background: 'primary',
        icon: faPhone
    }
    
]
const BusinessInfo = () => {
    return (
        <section className="row w-75 m-auto">
            {
                businessInfo.map(info=> <InfoCard info={info}></InfoCard> )
            }
        </section>
    );
};

export default BusinessInfo;