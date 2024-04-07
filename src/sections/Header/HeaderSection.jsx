import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import MobileMenu from './MobileMenu';
import HeaderRight from './HeaderRight';

const HeaderSection = () => {
    return (
        <div className='header-section'>
            <div className="container">
                <div className="header-section-inner">
                    <a href="/" className="logo"><img src={logo} alt="logo" /></a>
                    <HeaderRight/>
                    <MobileMenu/>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;
