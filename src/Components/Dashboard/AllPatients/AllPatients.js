import React, { useEffect, useState } from 'react';
import PatientTable from '../PatientTable/PatientTable';
import Sidebar from '../Sidebar/Sidebar';

const AllPatients = () => {
    const [patients,setPatients]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/appointments')
        .then(res=>res.json())
        .then(data=>setPatients(data))
    },[patients])
    return (
        <div className="row">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h5 className="text-brand">All Patients</h5>
                <PatientTable patients={patients}></PatientTable>
            </div>
        </div>
    );
};

export default AllPatients;