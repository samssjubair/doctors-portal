import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/Doctorcard'
const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div className="mt-5 container">
            <h4 className="text-uppercase text-center text-primary mb-5">Our Doctors</h4>
            <div className="row">
                {
                    doctors.map(dr=> <DoctorCard dr={dr}></DoctorCard> )
                }
            </div>
        </div>
    );
};

export default Doctors;