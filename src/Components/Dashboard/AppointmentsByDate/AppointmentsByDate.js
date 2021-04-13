import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AppointmentTable from '../AppointmentTable/AppointmentTable';

const AppointmentsByDate = ({selectedDate}) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [appointments,setAppointments]=useState([]);
    useEffect(()=>{
        fetch('https://warm-falls-42670.herokuapp.com/appointmentsByDate',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
    })
    .then(res=>res.json())
    .then(data=>{
        setAppointments(data);
    })
    },[selectedDate])
    
    return (
        <div>
            <h1>Appointments </h1>
            <AppointmentTable appointments={appointments}></AppointmentTable>
        </div>
    );
};

export default AppointmentsByDate;