import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
const BookModal = ({modalIsOpen,closeModal,appointmentOn,date}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.subject=appointmentOn;
        data.appointmentDate=date;
        data.bookedDate=new Date();

        fetch('http://localhost:5055/addAppointment',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success=>{
            if(success){
                closeModal(); 
                alert("Appointment booked successfully")
            }
        })
         
    };
    
    return (
        
        <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <h2 className="text-center brand-color">{appointmentOn}</h2>
            <p className="text-center">On {date.toDateString()}</p>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input  {...register("name",{ required: true })} className="form-control" placeholder="Your Name" />
                    <br/>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <input  {...register("phone",{ required: true })} className="form-control" placeholder="Phone No" />
                    <br/>
                    {errors.phone && <span>This field is required</span>}
                </div>
                
                <div className="form-group">
                    <input type="email"  {...register("email",{ required: true })} className="form-control" placeholder="Email" />
                    <br/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="form-group row">
                    <div className="col-md-4">
                    <select className="form-control" name="sex" {...register("sex",{ required: true })} >
                                <option disabled={true} value="Not set">Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            
                    </div>
                    <div className="col-md-4">
                        <input {...register("age",{ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                        {errors.age && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-4">
                        <input {...register("weight",{ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <br/>
                <div className="form-group ">
                    <button type="submit" className="btn btn-primary ms-auto">Send</button>
                </div>
                
                
                
                
            
        </form>
        </Modal>
      </div>

    );
};

export default BookModal;