import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import BookModal from '../BookModal/BookModal';

const BookingCard = ({book,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 ">
            <div className=" p-4 shadow-sm m-4 text-center">
                <h5 className="brand-color">{book.subject}</h5>
                <h6>{book.visitingHour}</h6>
                <p className="text-secondary">{book.totalSpace} spaces available</p>
                <button onClick={openModal} className="btn btn-primary">BOOK APPOINTMENT</button>
                <BookModal modalIsOpen={modalIsOpen} date={date} appointmentOn={book.subject} closeModal={closeModal}></BookModal>
                
            
            </div>
        </div>
    );
};

export default BookingCard;