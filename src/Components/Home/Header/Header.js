import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-style container-fluid">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;