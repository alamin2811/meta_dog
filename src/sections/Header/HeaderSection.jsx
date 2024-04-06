import React from 'react';
import logo from '../../assets/images/logo/logo.png';

const navItems = [
    { text: 'About MetaDog', link: '#aboutSection' },
    { text: 'Tokenomics', link: '#tokenomics' },
    { text: 'Roadmap', link: '#roadmap' },
    { text: 'Whitepaper', link: '#' }
];

const buttons = [
    { text: 'Buy $xdog', className: 'buy-btn header-btn btn' },
    { text: 'Play Now', className: 'play-btn header-btn btn' }
];

const HeaderSection = () => {
    return (
        <div className='header-section'>
            <div className="container">
                <div className="header-section-inner">
                    <a href="#" className="logo"><img src={logo} alt="logo" /></a>
                    <div className="header-right">
                        <ul className='custom-list'>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="header-btns">
                            {buttons.map((button, index) => (
                                <button key={index} className={button.className}>
                                    <span className='btn-inner'>
                                        <span className='btn-text'>{button.text}</span>
                                        <span className='btn-text'>{button.text}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;
