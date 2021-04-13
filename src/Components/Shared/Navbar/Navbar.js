import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
           
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="ms-auto navbar-nav  mb-2 mb-lg-0">
                <li class=" nav-item me-5">
                <a class=" nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class=" nav-item me-5">
                <a class="nav-link" href="#">About</a>
                </li>
                <li class=" nav-item me-5">
                <a class="nav-link" href="#">Dental Services</a>
                </li>
                <li class=" nav-item me-5">
                    <Link  className="nav-link text-light" to="/dashboard/appointments">Dashboard</Link>
                </li>
                <li class=" nav-item me-5">
                <a class="nav-link text-light" href="#">Blogs</a>
                </li>
                <li class=" nav-item me-5">
                <a class="nav-link  text-light" href="#">Contact Us</a>
                </li>
                
                
                
            </ul>
            
            </div>
        </div>
        </nav>
    );
};

export default Navbar;