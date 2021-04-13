import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Booking from '../Booking/Booking';

const Appointment = () => {
    const [selectedDate,setSelectedDate]= useState(new Date());
    const handleDateChange=(date)=>{
        setSelectedDate(date)
    }
    return (
        <div className="container-fluid">
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <Booking date={selectedDate}></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;