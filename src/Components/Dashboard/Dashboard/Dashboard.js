import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';

const Dashboard = () => {
    const [selectedDate,setSelectedDate]= useState(new Date());
    const handleDateChange=(date)=>{
        setSelectedDate(date)
    }
    return (
        <div className="row ">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5">
                <AppointmentsByDate selectedDate={selectedDate}></AppointmentsByDate>
            </div>
        </div>
    );
};

export default Dashboard;