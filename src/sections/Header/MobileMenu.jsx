import React from 'react';
import logo from '../../assets/images/logo/logo.png'
import closeIcon from '../../assets/images/icons/close.svg'
import menuIcon from '../../assets/images/icons/menu-icon.svg'
import HeaderRight from './HeaderRight';

const MobileMenu = () => {
    return (
        <div className='mobile-menu'>
            <button className="btn btn-primary mobile-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <img src={menuIcon} alt="icon" />
            </button>

            <div className="offcanvas offcanvas-end mobile-menu-content" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <a href='/' id="offcanvasRightLabel"><img src={logo} alt="logo" /></a>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img src={closeIcon} alt="icon" /></button>
                </div>
                <div className="offcanvas-body mobile-menu-body">
                    <HeaderRight/>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
