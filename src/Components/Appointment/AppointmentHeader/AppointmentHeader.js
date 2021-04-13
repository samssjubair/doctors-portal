import React from 'react';
import headerImage from '../../../images/headerBg.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{height: '500px'}} className="row d-flex align-items-center ">
            
                <div className="col-md-4 offset-md-1">
                    <h1 className="mb-5" style={{color: '#3A4256'}}>Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                    
                </div>
                <div className="col-md-6 ">
                    <img className="img-fluid" src={headerImage} alt=""/>
                </div>
            
        </main>
    );
};

export default AppointmentHeader;