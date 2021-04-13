import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info,setInfo]=useState({});
    const [file,setFile]=useState('');
    const handleBlur=(e)=>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange=(e)=>{
        const newFile=e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit=()=>{
        
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
      
        fetch('http://localhost:5055/addDoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h2>Add a Doctor</h2>
                <form onSubmit={handleSubmit} className="p-5">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleBlur} name="email" type="email" class="form-control" id="exampleInputEmail1" />
                        
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input onBlur={handleBlur} name="name" type="text" class="form-control" id="name" />
                        
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Upload Doctor Image</label>
                        <input onChange={handleFileChange} name="image" type="file" class="form-control" id="image" />
                        
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </div>
    );
};

export default AddDoctor;