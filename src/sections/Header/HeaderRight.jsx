import React from 'react'
const navItems = [
    { text: 'About MetaDog', link: '#aboutSection' },
    { text: 'Tokenomics', link: '#tokenomics' },
    { text: 'Roadmap', link: '#roadmap' },
    { text: 'Whitepaper', link: '#' }
];

const buttons = [
    { text: 'Buy Metadog', className: 'buy-btn header-btn btn' },
    { text: 'Play Now', className: 'play-btn header-btn btn' }
];

const HeaderRight = () => {
    return (
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
    )
}

export default HeaderRight